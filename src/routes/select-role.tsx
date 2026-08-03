import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Crown,
  Package,
  ShoppingCart,
} from "lucide-react";

import LogoAr from "@/assets/branding/logo-ar.png";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { PageTransition } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { UserRole } from "@/types/domain";

export const Route = createFileRoute("/select-role")({
  head: () => ({
    meta: [
      { title: "اختيار الدور — جوهرة تك" },
      {
        name: "description",
        content: "حدد دورك الوظيفي للبدء في استخدام منصة جوهرة تك.",
      },
    ],
  }),
  component: SelectRolePage,
});

type RoleCardOption = {
  id: UserRole;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  icon: typeof Crown;
};

const ROLES: RoleCardOption[] = [
  {
    id: "owner",
    titleAr: "مالك المحل",
    titleEn: "Store Owner",
    descAr: "صلاحية كاملة لإدارة التقارير، المستخدمين، والميزانية والمخزون.",
    descEn: "Full system access to analytics, reports, inventory, and users.",
    icon: Crown,
  },
  {
    id: "cashier",
    titleAr: "الكاشير",
    titleEn: "Cashier",
    descAr: "مخصص لإجراء عمليات البيع، الفواتير، وحسابات النقدية والبطاقة.",
    descEn: "Dedicated to point of sale, invoices, cash and card transactions.",
    icon: ShoppingCart,
  },
  {
    id: "inventory_manager",
    titleAr: "مسؤول المخزون",
    titleEn: "Inventory Manager",
    descAr: "مخصص لتسجيل الأصناف، جرد الأدراج، وتحديث أسعار الذهب اليومية.",
    descEn:
      "Dedicated to item registration, tray reconciliation, and daily gold rates.",
    icon: Package,
  },
];

function SelectRolePage() {
  const { isRTL, locale } = useI18n();
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<UserRole>("owner");

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const handleContinue = () => {
    localStorage.setItem("goldos_user_role", selectedRole);
    void navigate({ to: "/dashboard" });
  };

  return (
    <PageTransition className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-2xl space-y-8">
        {/* Header with Centered Brand Logo */}
        <div className="text-center space-y-3">
          <img
            src={LogoAr}
            alt="جوهرة تك"
            className="h-[56px] w-auto object-contain mx-auto mb-2"
          />
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {locale === "ar"
              ? "اختر الدور الوظيفي"
              : "Select Your Operating Role"}
          </h1>
          <p className="text-xs text-muted-foreground/80 max-w-md mx-auto leading-relaxed">
            {locale === "ar"
              ? "اختر مساحة العمل المخصصة لدورك اليومي داخل محل الذهب"
              : "Choose the workspace tailored for your daily responsibilities"}
          </p>
        </div>

        {/* Role Options Grid */}
        <div className="grid gap-4 sm:grid-cols-3">
          {ROLES.map((role) => {
            const Icon = role.icon;
            const isSelected = selectedRole === role.id;

            return (
              <motion.button
                key={role.id}
                type="button"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedRole(role.id)}
                className={cn(
                  "group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-surface p-6 text-start shadow-soft transition-all duration-200 cursor-pointer",
                  isSelected &&
                    "border-gold-deep/80 ring-2 ring-gold/40 bg-gold-soft/25 shadow-raised",
                )}
              >
                {/* Selected Check Indicator */}
                {isSelected ? (
                  <span className="absolute top-4 end-4 text-gold-deep">
                    <CheckCircle2 className="size-5" aria-hidden />
                  </span>
                ) : null}

                <div className="space-y-4">
                  <span
                    className={cn(
                      "flex size-11 items-center justify-center rounded-2xl border border-border/80 bg-surface-muted/80 text-foreground/80 transition-colors group-hover:border-gold/40 group-hover:bg-gold-soft/80 group-hover:text-gold-deep",
                      isSelected &&
                        "border-gold/40 bg-gold-soft text-gold-deep shadow-hairline",
                    )}
                  >
                    <Icon className="size-5.5" aria-hidden />
                  </span>

                  <div className="space-y-1">
                    <h2 className="text-base font-bold tracking-tight text-foreground">
                      {locale === "ar" ? role.titleAr : role.titleEn}
                    </h2>
                    <p className="text-xs text-muted-foreground/80 leading-relaxed">
                      {locale === "ar" ? role.descAr : role.descEn}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Action button */}
        <div className="flex flex-col items-center gap-3 pt-2">
          <Button
            variant="gold"
            onClick={handleContinue}
            className="h-12 w-full max-w-sm rounded-xl text-base font-semibold gap-2 shadow-gold"
          >
            <span>
              {locale === "ar"
                ? "المتابعة إلى لوحة التحكم"
                : "Continue to Dashboard"}
            </span>
            <ArrowIcon className="size-4.5" aria-hidden />
          </Button>

          <p className="text-[11px] text-muted-foreground/70">
            {locale === "ar"
              ? "يمكنك تغيير الدور أو الصلاحيات لاحقًا من الإعدادات"
              : "Role and permissions can be adjusted later in Settings"}
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
