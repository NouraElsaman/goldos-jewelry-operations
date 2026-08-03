import type { ReactNode } from "react";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

/**
 * Field chrome shared by every input: label, description, error, a11y wiring.
 * Inputs stay dumb; validation comes from React Hook Form + Zod.
 */
export function FieldShell({
  id,
  label,
  description,
  error,
  required,
  className,
  children,
}: {
  id: string;
  label?: string | undefined;
  description?: string | undefined;
  error?: string | undefined;
  required?: boolean | undefined;
  className?: string | undefined;
  children: ReactNode;
}) {
  const describedBy = [
    description ? `${id}-description` : null,
    error ? `${id}-error` : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={cn("space-y-2", className)}
      data-invalid={error ? "" : undefined}
    >
      {label ? (
        <Label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
          {required ? <span className="text-destructive"> *</span> : null}
        </Label>
      ) : null}
      <div aria-describedby={describedBy || undefined}>{children}</div>
      {description && !error ? (
        <p id={`${id}-description`} className="text-xs text-muted-foreground">
          {description}
        </p>
      ) : null}
      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-xs font-medium text-destructive"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
