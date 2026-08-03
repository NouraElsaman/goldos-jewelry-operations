# GoldOS — Revised PRD (Post Design Review, v1.0 MVP)

## 1. Product Summary

GoldOS is the daily operations platform for a single jewelry shop: today's gold prices, selling at the counter, knowing what is in stock and where it physically sits, and proving at day-end that no gold is missing. Arabic-first, RTL by default, instant English switch, desktop-first, responsive. Premium, calm, minimal — Apple/Linear/Stripe, not ERP.

MVP thesis: **price → sell → track → reconcile.** Anything outside that loop is deferred.

## 2. Final MVP Scope

Nine modules, deliberately shallow:

1. **Dashboard** — gold prices first, then today's business.
2. **Cashier (POS)** — search/scan, cart, price via Pricing Engine, pay, invoice, return.
3. **Inventory** — Table View + Tray View, add/receive items, item detail with movement history.
4. **Gold Prices** — set today's rate per karat, history.
5. **Weight Reconciliation** — auto-computed expected weight; user enters only the measured weight.
6. **Reports** — 4 reports, filter + export.
7. **Analytics** — one page of trends and breakdowns.
8. **User Management** — 3 roles, invite/enable/disable.
9. **Settings** — shop profile, tax, default manufacturing cost, karats, invoice numbering, language.

## 3. Deferred Features (moved, not deleted)

**Version 2:** AI camera monitoring, theft detection, multi-branch, supplier management, purchase orders, scrap/melt operations, trade-in / old-gold purchase, shift closing & cash drawer.
**Version 3:** Customer CRM & loyalty, accounting/GL export, advanced security (2FA, IP rules, deep audit console), mobile companion app, layaway/installments, repairs & custom orders, live market rate feed, WhatsApp receipts.

Rationale for the biggest cuts: trade-in and scrap/melt each introduce a second, inverse valuation path and pollute the reconciliation ledger; shift/cash-drawer adds a whole state machine that a single-shop owner already handles informally; supplier and CRM are records nobody reads in v1.

## 4. Business Goals

- One trustworthy record of sales and stock, replacing paper and Excel.
- Zero pricing mistakes at the counter.
- A day-end close that takes under two minutes and proves the gold balances.
- Owner sees the shop's state in one glance.

## 5. Personas & Simplified Permissions

|                               | Owner                     | Cashier                               | Inventory Manager  |
| ----------------------------- | ------------------------- | ------------------------------------- | ------------------ |
| Dashboard                     | full (incl. value/margin) | today's sales only                    | stock cards only   |
| POS: sell / return            | yes                       | sell yes, return needs owner approval | no                 |
| Inventory: view               | yes                       | read-only lookup                      | yes                |
| Inventory: add/edit/move      | yes                       | no                                    | yes                |
| Gold Prices: set              | yes                       | view                                  | view               |
| Reconciliation: enter counted | yes                       | no                                    | yes                |
| Reconciliation: approve/close | yes                       | no                                    | no                 |
| Reports / Analytics           | yes                       | own sales only                        | stock reports only |
| Users / Settings              | yes                       | no                                    | no                 |

Rules: one role per user, no custom permissions, no permission editor. Enforced server-side; UI hiding is cosmetic only.

## 6. Central Pricing Engine

A single pure module, `src/lib/pricing/`, is the only place a price is ever produced.

```text
priceLine(input) ->
  goldValue        = netWeight × rate(karat, date)
  manufacturing    = manufacturingCost (per gram or flat, per item)
  subtotal         = goldValue + manufacturing
  discount         = flat or % (optional, capped by settings)
  taxable          = subtotal − discount
  tax              = taxable × taxRate
  total            = taxable + tax
returns every intermediate value, not just the total
```

**Where it sits:** pure TypeScript with no I/O, imported by (a) the POS cart, (b) inventory valuation, (c) reports/analytics, (d) the server function that writes an invoice. The server re-runs the engine on submit and ignores client-sent totals — the client calculation is only a preview. Rate, tax rate, manufacturing cost and discount are **snapshotted onto every invoice line**, so historical invoices never move when today's rate changes. The engine is unit-tested against a fixture table before POS is built.

## 7. Dashboard (revised hierarchy)

```text
1  GOLD PRICE BAR      large cards per karat (24/22/21/18), today's rate,
                       delta vs yesterday, "updated 09:12" + Update button (owner)
2  KPI ROW             Today's Revenue · Today's Transactions ·
                       Inventory Value · Inventory Weight
3  ALERTS + QUICK      Alerts: price not set today, reconciliation open,
   ACTIONS             low stock, unapproved return
                       Quick Actions: New Sale · Add Item · Set Price · Close Day
4  SALES TIMELINE      today's hourly bars + 30-day trend toggle
5  RECENT ACTIVITY     last invoices, stock movements, price changes
```

**Why this order:** the gold rate is the number that gates every other decision in the shop and changes daily — putting it at the top removes the first question of every morning and makes a missing rate impossible to overlook. Revenue/transactions answer "how is today going", inventory value/weight answer "what do we hold" — those are outcomes, so they read second. Alerts and quick actions sit at the fold where the eye already is, converting the dashboard from a report into a launcher. Timeline and activity are diagnostic detail and belong last.

## 8. Inventory: two views

- **Table View** — dense, sortable, filterable (category, karat, weight range, tray, status, age), bulk select, export. For auditing and search.
- **Tray View** — the physical showroom mirrored on screen: a card per tray/showcase, each showing tray name/location, item count, total weight, total value, and a compact grid of item chips. Click a tray to expand; drag or "Move to tray" to relocate items.

**Why it matters:** staff think in trays, not in rows. Tray View turns "find the 22k bangle" into a spatial lookup, makes counting during reconciliation a per-tray task instead of one 400-row list, and makes an empty slot or an over-loaded tray visible instantly. It also gives the premium, tactile feel a data grid can never deliver. Both views read the same query and share filters; the toggle is persisted per user.

Item model addition: every item carries a `location` (tray/showcase/safe).

## 9. Reconciliation (no manual math)

Expected weight is **derived, never typed.** Every inventory event writes a `stock_movement` row (received, sold, returned, adjusted) with signed weight and karat. At any moment:

```text
expected(karat) = previous day's closing counted weight
                + Σ received today
                − Σ sold today
                + Σ returned today
                ± Σ adjustments today
```

Workflow: open Reconciliation → per-karat rows show opening, movements (each expandable to the source invoice/item), and expected weight already filled → **the only input is Actual Measured Weight** → variance and tolerance status compute live → note required if outside tolerance → owner approves → day locked, counted weight becomes tomorrow's opening. Tray View can drive the physical count tray by tray.

## 10. Updated Workflows

**Cashier:** POS opens with search focused → scan/type/tap item → line priced by the engine, all components visible → adjust discount if permitted → payment method → confirm → invoice + print. Target: **under 4 interactions for a single-item sale.** Return: find invoice → select lines → reason → items return to stock and to the movement ledger.
**Inventory:** Add item (single form: category, karat, weights, manufacturing cost, tray, cost) → item live in stock and in the ledger. Move item between trays from either view. Item detail shows current valuation from the engine plus full movement history.
**Gold Prices:** one screen, one row per karat, save all at once; a banner nags until today's price exists because POS depends on it.
**Reports:** four only — Daily Sales, Sales by Category/Karat, Inventory Valuation, Reconciliation History. Range picker → table with totals → CSV / print.
**Analytics:** period selector → revenue trend, weight sold trend, top categories, top items, slow-moving stock, average ticket. Drill-through to items/invoices.

## 11. Updated Navigation (daily-workflow order)

```text
Dashboard          start of day
Cashier (POS)      the all-day screen
Inventory          lookup and stock work
Gold Prices        set/verify the rate
Reconciliation     end of day
──────────────
Reports
Analytics
──────────────
Users
Settings
```

Sidebar on the right in RTL, collapsible to icons. Top bar: shop name, live gold-rate chip, global search (⌘K over items and invoices), language toggle, user menu. Global shortcuts: N = new sale, I = item lookup. Divider groups separate daily work from analysis from admin, so a cashier's usable surface is the top block only.

## 12. UX Improvements Adopted

- POS search autofocus, barcode input always live, Enter adds the item.
- Price breakdown shown inline on each cart line — no modal to see how a number was reached.
- Tabular numerals everywhere; weights always 3 decimals, money always 2.
- Sticky totals bar in POS; sticky table headers and filter bars elsewhere.
- Filters live in the URL, so a view is shareable and survives refresh.
- Optimistic UI on add-to-cart and tray moves; toast + undo instead of confirm dialogs for reversible actions.
- Skeletons, not spinners; every list has a designed empty state with the primary action inside it.
- Destructive/irreversible actions (close day, void) are the only ones that get a confirm.
- Arabic-Indic vs Latin digit preference in settings.

## 13. Updated Architecture & Data Model

Layers: routes (pages) → feature hooks (TanStack Query) → server functions (authz + validation + writes) → Postgres with RLS. `src/lib/pricing` and `src/lib/weight` are pure and shared by client and server.

```text
profiles(user_id, name, active)
user_roles(user_id, role)                     -- separate table, always
gold_prices(date, karat, rate, set_by)
settings(shop, currency, tax_rate, default_manufacturing_cost,
         karats_enabled, invoice_prefix, locale, digit_style)
trays(id, name, location)
inventory_items(sku, barcode, category, karat, gross_weight, stone_weight,
                net_weight, manufacturing_cost, cost, tray_id, status)
stock_movements(item_id, type, karat, weight_delta, ref_type, ref_id, at, by)
invoices(number, cashier_id, subtotal, discount, tax, total,
         payment_method, status, created_at)
invoice_lines(invoice_id, item_id, karat, net_weight,
              rate_snapshot, manufacturing_snapshot, discount,
              tax_snapshot, line_total)
reconciliations(date, karat, opening, received, sold, returned, adjusted,
                expected, counted, variance, status, approved_by)
audit_log(actor, action, entity, before, after, at)
```

Removed vs the previous draft: suppliers, trade_ins, shifts, customers. Added: trays, item location, snapshot columns on invoice lines.

## 14. Tech Stack

TanStack Start (React 19), TanStack Router + Query, TypeScript, Tailwind v4 + shadcn/ui, Recharts, Motion for React, Zod, server functions, Lovable Cloud (Postgres, auth, storage, RLS).

## 15. Design System

Warm white surfaces, deep charcoal text, champagne gold reserved for primary actions, the gold-price bar, and value highlights — never as a background wash. Muted success/warning/danger. Arabic UI face (IBM Plex Sans Arabic / Almarai) paired with a clean Latin face; tabular numerals throughout. 8pt spacing, generous whitespace, 12-16px radii, layered soft shadows, hairline borders. Motion 150-250ms ease-out. All values as semantic tokens; RTL-first with logical properties; dark mode deferred.

## 16. State Management

Server state in TanStack Query with route-loader prefetch. POS cart in a scoped context persisted to storage. UI prefs (language, sidebar, inventory view) in a tiny context + storage. Forms via react-hook-form + Zod. No global store.

## 17. Updated Development Roadmap

1. **Foundation** — Cloud backend, auth, roles, RLS, app shell, RTL/i18n, design tokens.
2. **Settings + Gold Prices** — the data everything else depends on.
3. **Pricing Engine** — pure module + tests, before any consumer.
4. **Inventory** — items, trays, Table + Tray views, movement ledger.
5. **Cashier POS** — cart, invoice, print, returns.
6. **Reconciliation** — derived expected weight, close & lock.
7. **Dashboard** — gold bar, KPIs, alerts, timeline, activity.
8. **Reports + Analytics.**
9. **Hardening** — permissions audit, audit log, print layouts, empty/error states, performance pass.

## 18. Risks & Considerations

- **Pricing drift** — mitigated by one engine, server-side recomputation, and per-line snapshots.
- **Missing daily rate blocks POS** — hard block on selling with a one-click path to set it; alert on the dashboard from first login.
- **Movement ledger integrity** — every stock change must go through one server function; no direct table writes, or reconciliation silently lies.
- **Tray View at scale** — virtualize item chips and cap the expanded grid; Table View remains the fallback for large counts.
- **RTL retrofits are expensive** — logical properties from day one, and mirrored charts/icons checked per component.
- **Role over-simplification** — cashier returns needing owner approval is the one deliberate friction point; revisit if it slows the counter.
- **Hardware** — validate barcode scanner and receipt printer early; design an explicit thermal/A5 print layout.
