import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Coins,
  Cpu,
  FileText,
  Gem,
  Package,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Users,
} from "lucide-react";

import LogoAr from "@/assets/branding/logo-ar.png";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { PageTransition } from "@/lib/motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "جوهرة تك — منصة إدارة محلات الذهب والمجوهرات في مصر" },
      {
        name: "description",
        content:
          "جوهرة تك منصة تشغيل متكاملة لإدارة محلات الذهب والمجوهرات في مصر. إدارة المخزون، الأسعار اليومية، الكاشير، والتقارير.",
      },
      {
        property: "og:title",
        content: "جوهرة تك — منصة إدارة محلات الذهب والمجوهرات",
      },
      {
        property: "og:description",
        content:
          "جوهرة تك منصة تشغيل متكاملة لإدارة محلات الذهب والمجوهرات في مصر.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  const { isRTL, setLocale, locale } = useI18n();
  const navigate = useNavigate();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const features = [
    {
      id: "inventory",
      titleAr: "إدارة المخزون والأدراج",
      titleEn: "Inventory & Tray Management",
      descAr:
        "تتبع دقيق لقطع الذهب والمجوهرات حسب العيار (24K, 22K, 21K, 18K, 14K) والوزن الصافي والمصنعية.",
      descEn:
        "Precise tracking of jewelry pieces by karat, net weight, tray location, and manufacturing cost.",
      icon: Package,
    },
    {
      id: "prices",
      titleAr: "أسعار الذهب اليومية (EGP)",
      titleEn: "Live Gold Prices (EGP)",
      descAr:
        "تحديد وتحديث أسعار الذهب بالجنيه المصري لكل عيار لحظيًا وتطبيقها تلقائيًا على كافة المبيعات.",
      descEn:
        "Set and update live gold rates in Egyptian Pounds per karat, automatically applied to all sales.",
      icon: Coins,
    },
    {
      id: "cashier",
      titleAr: "نقطة البيع الكاشير",
      titleEn: "Smart POS & Cashier",
      descAr:
        "إصدار فواتير البيع للشغلات والسبائك مع حساب تلقائي لضريبة القيمة المضافة وإجمالي الفاتورة.",
      descEn:
        "Issue sales invoices for jewelry and bullion with automatic VAT and total calculation.",
      icon: ShoppingCart,
    },
    {
      id: "reports",
      titleAr: "التقارير المالية والضريبية",
      titleEn: "Financial & Tax Reports",
      descAr:
        "تقارير جاهزة للطباعة والتصدير تشمل إجماليات ضريبة القيمة المضافة، المبيعات اليومية، وقيمة المخزون.",
      descEn:
        "Print and export ready reports including VAT totals, daily sales, and inventory valuation.",
      icon: FileText,
    },
    {
      id: "analytics",
      titleAr: "التحليلات ومراقبة الأداء",
      titleEn: "Analytics & Insights",
      descAr:
        "رسوم بيانية تفاعلية لمراقبة اتجاهات الإيرادات والأصناف الأكثر مبيعًا وحركة الأوزان.",
      descEn:
        "Interactive charts to monitor revenue trends, top-selling items, and weight movements.",
      icon: BarChart3,
    },
    {
      id: "roles",
      titleAr: "إدارة الصلاحيات والأدوار",
      titleEn: "Role & Access Control",
      descAr:
        "فصل كامل للصلاحيات بين مالك المحل، مسؤول الكاشير، ومسؤول المخزون والأدراج.",
      descEn:
        "Complete role separation between Store Owner, Cashier, and Inventory Manager.",
      icon: Users,
    },
    {
      id: "ai",
      titleAr: "الربط بالذكاء الاصطناعي",
      titleEn: "Future AI Monitoring",
      descAr:
        "بنية تمكينية للربط بكاميرات المراقبة وخوارزميات YOLO لتتبع حركة الذهب والتحقق من الأوزان.",
      descEn:
        "Architectural foundation ready for computer vision & YOLO pipelines to track gold movements.",
      icon: Cpu,
    },
  ];

  return (
    <PageTransition className="min-h-screen bg-background text-foreground selection:bg-gold-soft selection:text-gold-foreground">
      {/* ── Navbar ───────────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/60 bg-surface/85 backdrop-blur-md supports-[backdrop-filter]:bg-surface/75">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          <Link to="/" className="flex items-center gap-3 outline-none">
            <img
              src={LogoAr}
              alt="جوهرة تك"
              className="h-14 w-auto object-contain"
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex text-sm font-medium text-muted-foreground">
            <a
              href="#features"
              className="transition-colors hover:text-foreground"
            >
              {locale === "ar" ? "المميزات" : "Features"}
            </a>
            <a href="#why" className="transition-colors hover:text-foreground">
              {locale === "ar" ? "لماذا جوهرة تك" : "Why Jowhara Tech"}
            </a>
            <a href="#kpis" className="transition-colors hover:text-foreground">
              {locale === "ar" ? "الأرقام" : "Impact"}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLocale(locale === "ar" ? "en" : "ar")}
              className="rounded-xl border border-border/80 bg-surface px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-surface-muted transition-all"
            >
              {locale === "ar" ? "English" : "العربية"}
            </button>
            <Button
              variant="gold"
              onClick={() => void navigate({ to: "/login" })}
              className="h-10 rounded-xl px-5 text-xs font-semibold gap-2 shadow-gold"
            >
              <span>{locale === "ar" ? "تسجيل الدخول" : "Sign In"}</span>
              <ArrowIcon className="size-3.5" aria-hidden />
            </Button>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
        {/* Ambient Lighting Grid Background */}
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
          <div className="size-[40rem] rounded-full bg-gold-soft/30 blur-3xl opacity-60" />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Text Column */}
            <div className="space-y-8 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold-soft/60 px-3.5 py-1 text-xs font-semibold text-gold-deep shadow-hairline">
                <Sparkles className="size-3.5" aria-hidden />
                <span>
                  {locale === "ar"
                    ? "المنصة الأولى المخصصة لمحلات الذهب والمجوهرات في مصر"
                    : "Built Exclusively for Egyptian Jewelry Businesses"}
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.12]">
                  {locale === "ar" ? (
                    <>
                      منصة تشغيل متكاملة لإدارة{" "}
                      <span className="text-gradient-gold">محلات الذهب</span>{" "}
                      والمجوهرات
                    </>
                  ) : (
                    <>
                      The Modern Operating System for{" "}
                      <span className="text-gradient-gold">
                        Jewelry Businesses
                      </span>
                    </>
                  )}
                </h1>

                <p className="max-w-2xl text-base text-muted-foreground/90 sm:text-lg leading-relaxed">
                  {locale === "ar"
                    ? "تطبيق جوهرة تك يوحد كافة عمليات محل الذهب: إدارة المخزون بالأدراج، أسعار الذهب اليومية بالجنيه المصري، فواتير الكاشير، التقارير الضريبية، ومطابقة الأوزان."
                    : "Jowhara Tech unifies jewelry store operations into one luxury platform: tray inventory, live EGP gold prices, smart cashier, tax reports, and weight reconciliation."}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  variant="gold"
                  onClick={() => void navigate({ to: "/login" })}
                  className="h-12 rounded-xl px-7 text-sm font-bold gap-2.5 shadow-gold hover:shadow-raised"
                >
                  <span>
                    {locale === "ar" ? "دخول إلى النظام" : "Sign In to System"}
                  </span>
                  <ArrowIcon className="size-4" aria-hidden />
                </Button>

                <a href="#features">
                  <Button
                    variant="outline"
                    className="h-12 rounded-xl px-6 text-sm font-semibold border-border/80 bg-surface hover:bg-surface-muted"
                  >
                    {locale === "ar" ? "استكشف المميزات" : "Explore Features"}
                  </Button>
                </a>
              </div>

              {/* Quick Feature Checklist */}
              <div className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-3 border-t border-border/60">
                {[
                  locale === "ar" ? "تحديث أسعار الذهب EGP" : "Live EGP Rates",
                  locale === "ar"
                    ? "جرد الأوزان بالأدراج"
                    : "Tray Weight Audit",
                  locale === "ar"
                    ? "فواتير ضريبة القيمة المضافة"
                    : "VAT Compliant Invoices",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs font-semibold text-muted-foreground/90"
                  >
                    <CheckCircle2
                      className="size-4 text-gold-deep shrink-0"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Hero Composition Column (Luxury Floating Ring Box & Gold Bars) */}
            <div className="relative flex items-center justify-center lg:col-span-5">
              <div className="relative w-full max-w-md aspect-square rounded-3xl border border-border/80 bg-surface/90 p-8 shadow-floating backdrop-blur-md flex flex-col justify-between overflow-hidden">
                {/* Background Ambient Glow */}
                <div className="absolute -top-16 -end-16 size-48 rounded-full bg-gold-soft/50 blur-2xl pointer-events-none" />

                {/* Card Top Label */}
                <div className="flex items-center justify-between border-b border-border/60 pb-4 z-10">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-success animate-pulse shadow-[0_0_8px_0_oklch(0.55_0.13_148/0.4)]" />
                    <span className="text-xs font-semibold text-foreground">
                      {locale === "ar"
                        ? "سوق الذهب المصري MKT"
                        : "Egyptian Gold Market"}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-gold-deep">
                    21K: 4,635 ج.م
                  </span>
                </div>

                {/* Animated Luxury Jewelry Composition */}
                <div className="my-auto relative flex flex-col items-center justify-center gap-6 py-6">
                  {/* Floating Luxury Ring Box (Vertical slow motion) */}
                  <motion.div
                    animate={{ y: [-7, 7, -7] }}
                    transition={{
                      duration: 5.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative flex items-center justify-center size-24 rounded-3xl border border-gold/40 bg-gradient-to-b from-surface to-gold-soft/40 shadow-raised p-4 z-10"
                  >
                    <Gem className="size-12 text-gold-deep" />
                    <span className="absolute -bottom-2 px-2.5 py-0.5 rounded-full bg-gold-deep text-[10px] font-bold text-primary-foreground shadow-hairline">
                      24K Ring Box
                    </span>
                  </motion.div>

                  {/* Gold Bars (Horizontal slow motion) */}
                  <motion.div
                    animate={{ x: [-8, 8, -8] }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex items-center gap-3 rounded-2xl border border-border/80 bg-surface p-3.5 shadow-soft z-0"
                  >
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-gold/30 bg-gold-soft/80 text-gold-deep font-mono text-xs font-bold">
                      <Coins className="size-4" />
                      <span>999.9 FINE GOLD</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-foreground">
                      100g BAR
                    </span>
                  </motion.div>
                </div>

                {/* Card Bottom Realtime Rate Bar */}
                <div className="rounded-2xl border border-border/70 bg-surface-muted/60 p-3.5 flex items-center justify-between text-xs z-10">
                  <span className="text-muted-foreground font-medium">
                    {locale === "ar" ? "آخر تحديث عيار 24" : "Today 24K Rate"}
                  </span>
                  <span className="font-mono font-bold text-foreground">
                    5,300.00 ج.م/جم
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features Section ─────────────────────────────────────────────────── */}
      <section
        id="features"
        className="py-24 bg-surface-muted/40 border-y border-border/60"
      >
        <div className="mx-auto max-w-7xl px-6 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {locale === "ar"
                ? "منظومة متكاملة مصممة خصيصاً لسوق الذهب"
                : "A Complete Operating Ecosystem for Gold Shops"}
            </h2>
            <p className="text-sm text-muted-foreground/90 leading-relaxed">
              {locale === "ar"
                ? "تم تطوير تطبيق جوهرة تك ليغطي كافة جوانب عمل المحل بدءًا من دخول القطعة إلى الدرج وحتى الفاتورة والتقارير."
                : "Engineered to cover every operational step from tray intake to cashier invoice and VAT reporting."}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="group flex flex-col justify-between rounded-3xl border border-border/80 bg-surface p-7 shadow-soft hover:border-gold/40 hover:shadow-raised transition-all duration-200"
                >
                  <div className="space-y-4">
                    <span className="flex size-12 items-center justify-center rounded-2xl border border-border/80 bg-surface-muted/80 text-gold-deep transition-all group-hover:border-gold/40 group-hover:bg-gold-soft group-hover:scale-105 shadow-hairline">
                      <Icon className="size-6" aria-hidden />
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-gold-deep transition-colors">
                        {locale === "ar" ? item.titleAr : item.titleEn}
                      </h3>
                      <p className="text-xs text-muted-foreground/80 leading-relaxed">
                        {locale === "ar" ? item.descAr : item.descEn}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Jowhara Tech Section ─────────────────────────────────────────── */}
      <section id="why" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-6">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl leading-tight">
                {locale === "ar"
                  ? "لماذا تختار جوهرة تك لإدارة محل الذهب الخاص بك؟"
                  : "Why Top Egyptian Jewelry Stores Trust Jowhara Tech"}
              </h2>

              <p className="text-sm text-muted-foreground/90 leading-relaxed">
                {locale === "ar"
                  ? "بدلًا من استخدام البرامج العامة المشتتة، يقدم جوهرة تك بنية تحتية مخصصة تفهم خصوصية تجارة الذهب والمجوهرات في مصر: حسابات المصنعية، أسعار العيارات بالجنيه المصري، ومطابقة الأوزان اليومية."
                  : "Instead of generic retail software, Jowhara Tech provides a purpose-built architecture tailored for the Egyptian gold trade: manufacturing margins, EGP karat pricing, and daily tray weight reconciliations."}
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    titleAr: "مركزية العمليات اليومية",
                    titleEn: "Centralized Operations",
                    descAr:
                      "ربط الكاشير والمخزون وأسعار الذهب والمطابقة في شاشة واحدة متناسقة.",
                    descEn:
                      "Seamless link between POS, inventory, daily rates, and reconciliation.",
                  },
                  {
                    titleAr: "دقة الأوزان حتى المنزلة الثالثة",
                    titleEn: "3-Decimal Gram Precision",
                    descAr:
                      "حسابات الأوزان حتى 0.001 جم لمنع أي هدر أو فرق في وزن الذهب.",
                    descEn:
                      "Gram precision up to 0.001g to prevent any inventory variance.",
                  },
                  {
                    titleAr: "جاهزية مستقبلية للذكاء الاصطناعي",
                    titleEn: "AI Infrastructure Ready",
                    descAr:
                      "مهيأ تقنيًا للربط بكاميرات الكاشير والأدراج للتفتيش التلقائي.",
                    descEn:
                      "Prepared for computer vision tray audits and POS camera logging.",
                  },
                ].map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 rounded-2xl border border-border/60 bg-surface-muted/30 p-4"
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-gold-deep font-bold text-xs">
                      {idx + 1}
                    </span>
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-bold text-foreground">
                        {locale === "ar" ? point.titleAr : point.titleEn}
                      </h4>
                      <p className="text-xs text-muted-foreground/80">
                        {locale === "ar" ? point.descAr : point.descEn}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Preview Panel */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-border/80 bg-surface p-6 shadow-floating space-y-6">
                <div className="flex items-center justify-between border-b border-border/60 pb-4">
                  <h3 className="text-sm font-bold text-foreground">
                    {locale === "ar"
                      ? "نظرة عامة على المحل — EGP"
                      : "Live Store Snapshot — EGP"}
                  </h3>
                  <span className="text-xs font-semibold text-gold-deep">
                    {locale === "ar" ? "مجوهرات الأصالة" : "Al Asala Jewelry"}
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/70 bg-surface-muted/50 p-4 space-y-1">
                    <span className="text-xs text-muted-foreground font-medium">
                      {locale === "ar" ? "إيرادات اليوم" : "Today Revenue"}
                    </span>
                    <p className="text-xl font-bold font-mono text-foreground">
                      236,400 ج.م
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-surface-muted/50 p-4 space-y-1">
                    <span className="text-xs text-muted-foreground font-medium">
                      {locale === "ar" ? "وزن المخزون" : "Stock Weight"}
                    </span>
                    <p className="text-xl font-bold font-mono text-foreground">
                      2,406.47 جم
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-gold/30 bg-gold-soft/30 p-4 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="size-5 text-gold-deep" />
                    <span className="font-semibold text-foreground">
                      {locale === "ar"
                        ? "حالة مطابقة الأوزان اليومية"
                        : "Daily Weight Audit"}
                    </span>
                  </div>
                  <span className="font-semibold text-success">
                    {locale === "ar" ? "مطابق 100%" : "Reconciled"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KPI Showcase Section ─────────────────────────────────────────────── */}
      <section id="kpis" className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {[
              {
                labelAr: "فواتير يومية",
                labelEn: "Invoices Daily",
                value: "120+",
              },
              {
                labelAr: "أوزان مُدارة",
                labelEn: "Inventory Managed",
                value: "450kg",
              },
              {
                labelAr: "جاهزية النظام",
                labelEn: "System Availability",
                value: "99.9%",
              },
              {
                labelAr: "تقرير مُستخرج",
                labelEn: "Reports Generated",
                value: "150+",
              },
            ].map((kpi, idx) => (
              <div key={idx} className="space-y-1.5 p-4">
                <p className="text-4xl font-extrabold font-mono tracking-tight text-gold sm:text-5xl">
                  {kpi.value}
                </p>
                <p className="text-xs font-semibold text-primary-foreground/80 uppercase tracking-wider">
                  {locale === "ar" ? kpi.labelAr : kpi.labelEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ──────────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-b from-surface to-gold-soft/30 p-10 sm:p-14 text-center shadow-floating space-y-6">
            <div className="inline-flex size-14 items-center justify-center rounded-2xl border border-gold/40 bg-gold-soft text-gold-deep shadow-soft">
              <Sparkles className="size-7" aria-hidden />
            </div>

            <div className="space-y-2 max-w-2xl mx-auto">
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                {locale === "ar"
                  ? "جاهز لتحديث عمليات محل الذهب الخاص بك؟"
                  : "Ready to Modernize Your Jewelry Business?"}
              </h2>
              <p className="text-sm text-muted-foreground/90 leading-relaxed">
                {locale === "ar"
                  ? "سجّل دخولك الآن واستمتع بتجربة إدارة حديثة وفائقة السرعة مصممة خصيصاً لسوق الذهب."
                  : "Sign in now and experience the fastest, most refined jewelry management platform."}
              </p>
            </div>

            <div className="pt-2">
              <Button
                variant="gold"
                onClick={() => void navigate({ to: "/login" })}
                className="h-12 rounded-xl px-8 text-base font-bold gap-2.5 shadow-gold hover:shadow-raised"
              >
                <span>
                  {locale === "ar"
                    ? "تسجيل الدخول إلى النظام"
                    : "Sign In to System"}
                </span>
                <ArrowIcon className="size-4.5" aria-hidden />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="border-t border-border/60 bg-surface py-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-col items-center justify-between gap-6 sm:flex-row text-xs text-muted-foreground/80">
          <div className="flex items-center gap-3">
            <img
              src={LogoAr}
              alt="جوهرة تك"
              className="h-12 w-auto object-contain"
            />
            <span className="text-[11px] font-semibold text-gold-deep border-s border-border/60 ps-3">
              {locale === "ar"
                ? "صُنعت لمحلات الذهب والمجوهرات المصرية"
                : "Made for Egyptian Jewelry Businesses"}
            </span>
          </div>

          <p>© {new Date().getFullYear()} جوهرة تك. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </PageTransition>
  );
}
