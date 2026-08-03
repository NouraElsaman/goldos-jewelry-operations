import { z } from "zod";

import { appConfig } from "@/config/app";

/**
 * Reusable Zod primitives. Business rules live in feature modules; these are
 * only shape/format guards shared by every form.
 */

export const requiredString = (message = "Required") =>
  z.string().trim().min(1, message);

export const emailSchema = z
  .string()
  .trim()
  .email("Enter a valid email address");

export const moneySchema = z
  .number({ invalid_type_error: "Enter a number" })
  .min(0, "Must be zero or more")
  .refine((value) => Number.isFinite(value), "Invalid amount");

export const weightSchema = z
  .number({ invalid_type_error: "Enter a weight" })
  .min(0, "Must be zero or more");

export const karatSchema = z.union([
  z.literal(24),
  z.literal(22),
  z.literal(21),
  z.literal(18),
]);

export const barcodeSchema = z
  .string()
  .trim()
  .min(4, "Scan or type a valid code")
  .max(64, "Code is too long");

export const precision = {
  money: appConfig.moneyPrecision,
  weight: appConfig.weightPrecision,
} as const;
