import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SectionCard } from "@/components/shared";
import { SUPPORTED_KARATS } from "@/features/pricing/pricing-engine";
import type { Karat } from "@/types/domain";
import type { TranslationKey } from "@/lib/i18n";
import { cn } from "@/lib/utils";

// ── Zod schema ──────────────────────────────────────────────────────────────

const rateSchema = z
  .number({ invalid_type_error: "يجب إدخال رقم" })
  .positive("يجب أن يكون السعر أكبر من صفر")
  .max(10_000, "السعر مرتفع جداً")
  .multipleOf(0.01, "يُسمح بمنزلتين عشريتين كحد أقصى");

export const setPricesSchema = z.object({
  rates: z.object({
    24: rateSchema,
    22: rateSchema,
    21: rateSchema,
    18: rateSchema,
    14: rateSchema,
  }),
});

export type SetPricesFormValues = z.infer<typeof setPricesSchema>;

// ── Form component ───────────────────────────────────────────────────────────

/**
 * Set Today's Prices form — all 5 karats in one submit.
 * Validates with Zod; loading/success/error states included.
 * No service calls: `onSubmit` callback owned by the route/feature.
 */
export function SetPricesForm({
  defaultValues,
  onSubmit,
  isSubmitting,
  t,
}: {
  defaultValues?: Partial<SetPricesFormValues>;
  onSubmit: (values: SetPricesFormValues) => Promise<void>;
  isSubmitting: boolean;
  t: (key: TranslationKey) => string;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SetPricesFormValues>({
    resolver: zodResolver(setPricesSchema),
    defaultValues: defaultValues ?? {
      rates: { 24: 0, 22: 0, 21: 0, 18: 0, 14: 0 },
    },
  });

  return (
    <SectionCard title={t("goldPrices.setToday")}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {SUPPORTED_KARATS.map((karat) => {
            const key = karat as Karat;
            const error = errors.rates?.[key];

            return (
              <div key={karat} className="flex flex-col gap-2">
                <Label
                  htmlFor={`rate-${karat}`}
                  className={cn(
                    "flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
                    error && "text-destructive",
                  )}
                >
                  <span className="flex size-6 items-center justify-center rounded-lg border border-gold/30 bg-gold-soft/80 text-xs font-bold text-gold-deep">
                    {karat}
                  </span>
                  عيار {karat}
                </Label>
                <div className="relative">
                  <Input
                    id={`rate-${karat}`}
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="0.00"
                    dir="ltr"
                    className={cn(
                      "pe-12 text-end font-mono font-semibold text-foreground",
                      error &&
                        "border-destructive focus-visible:ring-destructive",
                    )}
                    {...register(`rates.${karat}` as unknown as "rates", {
                      valueAsNumber: true,
                    })}
                  />
                  <span className="pointer-events-none absolute inset-y-0 end-3.5 flex items-center text-xs font-semibold text-muted-foreground/70">
                    ج.م
                  </span>
                </div>
                {error ? (
                  <p className="text-xs font-medium text-destructive">
                    {error.message}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-4.5">
          <p className="text-xs text-muted-foreground/80">
            {t("goldPrices.formNote")}
          </p>
          <Button
            type="submit"
            variant="gold"
            disabled={isSubmitting}
            className="h-10 min-w-36 gap-2 rounded-xl text-sm font-semibold"
          >
            {isSubmitting ? (
              <Loader2 className="size-4 animate-spin" aria-hidden />
            ) : null}
            {t("common.save")}
          </Button>
        </div>
      </form>
    </SectionCard>
  );
}
