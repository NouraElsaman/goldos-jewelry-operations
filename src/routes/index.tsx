import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Coins,
  Cpu,
  FileText,
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

/** Soft cinematic entrance used across every section block. */
function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string | undefined;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      {...(className ? { className } : {})}
    >
      {children}
    </motion.div>
  );
}

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
      <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/70 backdrop-blur-xl transition-all duration-300">
        <div className="mx-auto flex h-20 max-w-[88rem] items-center justify-between gap-6 px-6 lg:px-10">
          <Link
            to="/"
            className="flex shrink-0 items-center outline-none transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src={LogoAr}
              alt="جوهرة تك"
              className="h-14 w-auto object-contain lg:h-16"
            />
          </Link>

          <div className="hidden items-center gap-10 text-[0.9rem] font-medium text-muted-foreground md:flex">
            {[
              { href: "#features", ar: "المميزات", en: "Features" },
              { href: "#why", ar: "لماذا جوهرة تك", en: "Why Jowhara Tech" },
              { href: "#kpis", ar: "الأرقام", en: "Impact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative py-1 transition-colors duration-300 hover:text-foreground"
              >
                {locale === "ar" ? link.ar : link.en}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLocale(locale === "ar" ? "en" : "ar")}
              className="rounded-full border border-border/70 bg-surface/60 px-4 py-2 text-xs font-semibold text-muted-foreground backdrop-blur transition-all duration-300 hover:border-gold/40 hover:text-foreground"
            >
              {locale === "ar" ? "English" : "العربية"}
            </button>
            <Button
              variant="gold"
              onClick={() => void navigate({ to: "/login" })}
              className="h-11 gap-2 rounded-full px-6 text-xs font-semibold shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-floating"
            >
              <span>{locale === "ar" ? "تسجيل الدخول" : "Sign In"}</span>
              <ArrowIcon className="size-3.5" aria-hidden />
            </Button>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-20 pb-28 lg:pt-28 lg:pb-40">
        {/* Layered luxury lighting */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-[36rem] bg-gradient-to-b from-gold-soft/45 via-background to-background" />
          <div className="absolute start-[-10%] top-[-8rem] size-[34rem] rounded-full bg-gold-soft/50 blur-[140px]" />
          <div className="absolute end-[-6%] top-24 size-[28rem] rounded-full bg-accent/60 blur-[130px]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        </div>

        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
            {/* Text Column */}
            <div className="space-y-10 lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-surface/70 px-4 py-2 text-xs font-semibold text-gold-deep shadow-soft backdrop-blur-md">
                  <Sparkles className="size-3.5" aria-hidden />
                  <span>
                    {locale === "ar"
                      ? "المنصة الأولى المخصصة لمحلات الذهب والمجوهرات في مصر"
                      : "Built Exclusively for Egyptian Jewelry Businesses"}
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="space-y-7">
                  <h1 className="text-[2.6rem] font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-6xl lg:text-[4.15rem]">
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

                  <p className="max-w-2xl text-base leading-[1.95] text-muted-foreground sm:text-[1.075rem]">
                    {locale === "ar"
                      ? "تطبيق جوهرة تك يوحد كافة عمليات محل الذهب: إدارة المخزون بالأدراج، أسعار الذهب اليومية بالجنيه المصري، فواتير الكاشير، التقارير الضريبية، ومطابقة الأوزان."
                      : "Jowhara Tech unifies jewelry store operations into one luxury platform: tray inventory, live EGP gold prices, smart cashier, tax reports, and weight reconciliation."}
                  </p>
                </div>
              </Reveal>

              {/* CTAs */}
              <Reveal delay={0.16}>
                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    variant="gold"
                    onClick={() => void navigate({ to: "/login" })}
                    className="h-14 gap-3 rounded-full px-9 text-sm font-bold shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-floating"
                  >
                    <span>
                      {locale === "ar" ? "دخول إلى النظام" : "Sign In to System"}
                    </span>
                    <ArrowIcon className="size-4" aria-hidden />
                  </Button>

                  <a href="#features">
                    <Button
                      variant="outline"
                      className="h-14 rounded-full border-border/70 bg-surface/60 px-8 text-sm font-semibold backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:bg-surface"
                    >
                      {locale === "ar" ? "استكشف المميزات" : "Explore Features"}
                    </Button>
                  </a>
                </div>
              </Reveal>

              {/* Quick Feature Checklist */}
              <Reveal delay={0.24}>
                <div className="grid grid-cols-1 gap-4 border-t border-border/50 pt-8 sm:grid-cols-3">
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
                      className="flex items-center gap-2.5 text-xs font-semibold text-muted-foreground"
                    >
                      <CheckCircle2
                        className="size-4 shrink-0 text-gold-deep"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Visual Hero Composition Column */}
            <Reveal delay={0.12} className="lg:col-span-5">
              <div className="relative flex items-center justify-center">
                <div className="pointer-events-none absolute inset-0 -z-10 rounded-[3rem] bg-gold-soft/40 blur-[90px]" />

                <div className="relative flex aspect-square w-full max-w-md flex-col justify-between overflow-hidden rounded-[2.25rem] border border-white/50 bg-surface/70 p-8 shadow-floating backdrop-blur-xl">
                  <div className="pointer-events-none absolute -top-20 -end-20 size-56 rounded-full bg-gold-soft/60 blur-3xl" />

                  {/* Card Top Label */}
                  <div className="z-10 flex items-center justify-between border-b border-border/50 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="size-2.5 animate-pulse rounded-full bg-success shadow-[0_0_8px_0_oklch(0.55_0.13_148/0.4)]" />
                      <span className="text-xs font-semibold text-foreground">
                        {locale === "ar"
                          ? "سوق الذهب المصري MKT"
                          : "Egyptian Gold Market"}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold text-gold-deep">
                      21K: 4,635 ج.م
                    </span>
                  </div>

                  {/* Luxury brand composition */}
                  <div className="relative my-auto flex flex-col items-center justify-center gap-9 py-4">
                    <motion.div
                      animate={{ y: [-8, 8, -8] }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative z-10 flex flex-col items-center"
                    >
                      <div className="pointer-events-none absolute inset-0 -z-10 scale-125 rounded-full bg-gold-soft/70 blur-2xl" />
                      <img
                        src={LogoAr}
                        alt="جوهرة تك"
                        className="h-40 w-auto object-contain drop-shadow-[0_18px_40px_oklch(0.62_0.085_72/0.35)] sm:h-48"
                      />
                      <span className="mt-3 rounded-full bg-gold-deep px-3.5 py-1 text-[10px] font-bold tracking-wide text-primary-foreground shadow-soft">
                        24K Ring Box
                      </span>
                    </motion.div>

                    <motion.div
                      animate={{ x: [-8, 8, -8] }}
                      transition={{
                        duration: 7.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="z-0 flex items-center gap-3 rounded-2xl border border-white/60 bg-surface/80 p-3.5 shadow-soft backdrop-blur"
                    >
                      <div className="flex items-center gap-2 rounded-xl border border-gold/25 bg-gold-soft/70 px-3 py-1.5 font-mono text-xs font-bold text-gold-deep">
                        <Coins className="size-4" />
                        <span>999.9 FINE GOLD</span>
                      </div>
                      <span className="font-mono text-xs font-bold text-foreground">
                        100g BAR
                      </span>
                    </motion.div>
                  </div>

                  {/* Card Bottom Realtime Rate Bar */}
                  <div className="z-10 flex items-center justify-between rounded-2xl border border-border/60 bg-surface-muted/60 p-4 text-xs">
                    <span className="font-medium text-muted-foreground">
                      {locale === "ar" ? "آخر تحديث عيار 24" : "Today 24K Rate"}
                    </span>
                    <span className="font-mono font-bold text-foreground">
                      5,300.00 ج.م/جم
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Features Section ─────────────────────────────────────────────────── */}
      <section
        id="features"
        className="relative border-y border-border/50 bg-surface-muted/35 py-28 lg:py-36"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-background to-transparent" />
        <div className="relative mx-auto max-w-[88rem] space-y-20 px-6 lg:px-10">
          <Reveal>
            <div className="mx-auto max-w-3xl space-y-5 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-deep">
                {locale === "ar" ? "المنظومة" : "The Platform"}
              </span>
              <h2 className="text-3xl font-bold leading-[1.3] tracking-tight text-foreground sm:text-[2.6rem]">
                {locale === "ar"
                  ? "منظومة متكاملة مصممة خصيصاً لسوق الذهب"
                  : "A Complete Operating Ecosystem for Gold Shops"}
              </h2>
              <p className="text-[0.95rem] leading-[1.9] text-muted-foreground">
                {locale === "ar"
                  ? "تم تطوير تطبيق جوهرة تك ليغطي كافة جوانب عمل المحل بدءًا من دخول القطعة إلى الدرج وحتى الفاتورة والتقارير."
                  : "Engineered to cover every operational step from tray intake to cashier invoice and VAT reporting."}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.id} delay={(idx % 3) * 0.07}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative h-full overflow-hidden rounded-[1.75rem] border border-white/60 bg-surface/80 p-8 shadow-soft backdrop-blur-md transition-all duration-300 hover:border-gold/35 hover:shadow-floating"
                  >
                    <div className="pointer-events-none absolute -top-24 -end-24 size-48 rounded-full bg-gold-soft/0 blur-3xl transition-all duration-500 group-hover:bg-gold-soft/70" />
                    <div className="relative space-y-5">
                      <span className="flex size-14 items-center justify-center rounded-2xl border border-border/70 bg-surface-muted/70 text-gold-deep shadow-hairline transition-all duration-300 group-hover:border-gold/40 group-hover:bg-gold-soft group-hover:shadow-gold">
                        <Icon className="size-6" aria-hidden />
                      </span>
                      <div className="space-y-2.5">
                        <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-gold-deep">
                          {locale === "ar" ? item.titleAr : item.titleEn}
                        </h3>
                        <p className="text-[0.8rem] leading-[1.95] text-muted-foreground">
                          {locale === "ar" ? item.descAr : item.descEn}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Jowhara Tech Section ─────────────────────────────────────────── */}
      <section id="why" className="relative overflow-hidden py-28 lg:py-36">
        <div className="pointer-events-none absolute end-[-10%] top-1/3 -z-10 size-[30rem] rounded-full bg-gold-soft/35 blur-[140px]" />
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <div className="grid items-center gap-16 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-6">
              <Reveal>
                <div className="space-y-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-deep">
                    {locale === "ar" ? "التميّز" : "The Difference"}
                  </span>
                  <h2 className="text-3xl font-bold leading-[1.32] tracking-tight text-foreground sm:text-[2.5rem]">
                    {locale === "ar"
                      ? "لماذا تختار جوهرة تك لإدارة محل الذهب الخاص بك؟"
                      : "Why Top Egyptian Jewelry Stores Trust Jowhara Tech"}
                  </h2>
                  <p className="text-[0.95rem] leading-[1.95] text-muted-foreground">
                    {locale === "ar"
                      ? "بدلًا من استخدام البرامج العامة المشتتة، يقدم جوهرة تك بنية تحتية مخصصة تفهم خصوصية تجارة الذهب والمجوهرات في مصر: حسابات المصنعية، أسعار العيارات بالجنيه المصري، ومطابقة الأوزان اليومية."
                      : "Instead of generic retail software, Jowhara Tech provides a purpose-built architecture tailored for the Egyptian gold trade: manufacturing margins, EGP karat pricing, and daily tray weight reconciliations."}
                  </p>
                </div>
              </Reveal>

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
                  <Reveal key={idx} delay={idx * 0.08}>
                    <div className="group flex items-start gap-4 rounded-2xl border border-border/50 bg-surface/70 p-5 shadow-hairline backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/30 hover:shadow-soft">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-xs font-bold text-gold-deep transition-all duration-300 group-hover:shadow-gold">
                        {idx + 1}
                      </span>
                      <div className="space-y-1">
                        <h3 className="text-sm font-bold text-foreground">
                          {locale === "ar" ? point.titleAr : point.titleEn}
                        </h3>
                        <p className="text-xs leading-[1.9] text-muted-foreground">
                          {locale === "ar" ? point.descAr : point.descEn}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Interactive Preview Panel */}
            <Reveal delay={0.12} className="lg:col-span-6">
              <div className="space-y-7 rounded-[2.25rem] border border-white/60 bg-surface/80 p-8 shadow-floating backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-border/50 pb-5">
                  <h3 className="text-sm font-bold text-foreground">
                    {locale === "ar"
                      ? "نظرة عامة على المحل — EGP"
                      : "Live Store Snapshot — EGP"}
                  </h3>
                  <span className="text-xs font-semibold text-gold-deep">
                    {locale === "ar" ? "مجوهرات الأصالة" : "Al Asala Jewelry"}
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5 rounded-2xl border border-border/60 bg-surface-muted/50 p-5 transition-all duration-300 hover:border-gold/30 hover:shadow-soft">
                    <span className="text-xs font-medium text-muted-foreground">
                      {locale === "ar" ? "إيرادات اليوم" : "Today Revenue"}
                    </span>
                    <p className="font-mono text-2xl font-bold text-foreground">
                      236,400 ج.م
                    </p>
                  </div>
                  <div className="space-y-1.5 rounded-2xl border border-border/60 bg-surface-muted/50 p-5 transition-all duration-300 hover:border-gold/30 hover:shadow-soft">
                    <span className="text-xs font-medium text-muted-foreground">
                      {locale === "ar" ? "وزن المخزون" : "Stock Weight"}
                    </span>
                    <p className="font-mono text-2xl font-bold text-foreground">
                      2,406.47 جم
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-gold/25 bg-gradient-to-r from-gold-soft/50 to-transparent p-5 text-xs">
                  <div className="flex items-center gap-2.5">
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
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── KPI Showcase Section ─────────────────────────────────────────────── */}
      <section
        id="kpis"
        className="relative overflow-hidden bg-primary py-24 text-primary-foreground lg:py-28"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <div className="absolute start-1/4 top-[-8rem] size-[26rem] rounded-full bg-gold/10 blur-[130px]" />
          <div className="absolute end-1/4 bottom-[-10rem] size-[26rem] rounded-full bg-gold/10 blur-[130px]" />
        </div>
        <div className="relative mx-auto max-w-[88rem] px-6 lg:px-10">
          <div className="grid gap-y-12 text-center sm:grid-cols-2 lg:grid-cols-4">
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
              <Reveal key={idx} delay={idx * 0.08}>
                <div className="space-y-3 px-4 lg:border-e lg:border-primary-foreground/10 lg:last:border-e-0">
                  <p className="text-gradient-gold font-mono text-5xl font-extrabold tracking-tight sm:text-[3.5rem]">
                    {kpi.value}
                  </p>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-primary-foreground/70">
                    {locale === "ar" ? kpi.labelAr : kpi.labelEn}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28 lg:py-36">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-1/2 mx-auto size-[36rem] -translate-y-1/2 rounded-full bg-gold-soft/40 blur-[150px]" />
        </div>
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="relative space-y-8 overflow-hidden rounded-[2.5rem] border border-gold/30 bg-gradient-to-b from-surface/90 via-surface/80 to-gold-soft/40 p-12 text-center shadow-floating backdrop-blur-xl sm:p-16">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

              <img
                src={LogoAr}
                alt="جوهرة تك"
                className="mx-auto h-20 w-auto object-contain drop-shadow-[0_12px_30px_oklch(0.62_0.085_72/0.28)]"
              />

              <div className="mx-auto max-w-2xl space-y-4">
                <h2 className="text-3xl font-extrabold leading-[1.3] tracking-tight text-foreground sm:text-[2.6rem]">
                  {locale === "ar"
                    ? "جاهز لتحديث عمليات محل الذهب الخاص بك؟"
                    : "Ready to Modernize Your Jewelry Business?"}
                </h2>
                <p className="text-[0.95rem] leading-[1.95] text-muted-foreground">
                  {locale === "ar"
                    ? "سجّل دخولك الآن واستمتع بتجربة إدارة حديثة وفائقة السرعة مصممة خصيصاً لسوق الذهب."
                    : "Sign in now and experience the fastest, most refined jewelry management platform."}
                </p>
              </div>

              <div className="pt-2">
                <Button
                  variant="gold"
                  onClick={() => void navigate({ to: "/login" })}
                  className="h-14 gap-3 rounded-full px-10 text-base font-bold shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-floating"
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
          </Reveal>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="border-t border-border/50 bg-surface/70 py-14 backdrop-blur">
        <div className="mx-auto flex max-w-[88rem] flex-col items-center justify-between gap-8 px-6 text-xs text-muted-foreground sm:flex-row lg:px-10">
          <div className="flex items-center gap-4">
            <img
              src={LogoAr}
              alt="جوهرة تك"
              className="h-14 w-auto object-contain"
            />
            <span className="border-s border-border/60 ps-4 text-[11px] font-semibold text-gold-deep">
              {locale === "ar"
                ? "صُنعت لمحلات الذهب والمجوهرات المصرية"
                : "Made for Egyptian Jewelry Businesses"}
            </span>
          </div>

          <p className="text-[11px]">
            © {new Date().getFullYear()} جوهرة تك. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </PageTransition>
  );
}
