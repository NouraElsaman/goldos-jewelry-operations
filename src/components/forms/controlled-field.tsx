import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import type { ReactNode } from "react";

import { FieldShell } from "./field-shell";

export type BaseFieldProps<TValues extends FieldValues> = {
  control: Control<TValues>;
  name: FieldPath<TValues>;
  label?: string | undefined;
  description?: string | undefined;
  placeholder?: string | undefined;
  required?: boolean | undefined;
  disabled?: boolean | undefined;
  className?: string | undefined;
};

/**
 * Bridges React Hook Form to any presentational control while keeping the
 * shared label/description/error chrome in one place.
 */
export function ControlledField<TValues extends FieldValues>({
  control,
  name,
  label,
  description,
  required,
  className,
  render,
}: BaseFieldProps<TValues> & {
  render: (field: {
    id: string;
    value: unknown;
    onChange: (value: unknown) => void;
    onBlur: () => void;
    invalid: boolean;
  }) => ReactNode;
}) {
  const id = `field-${String(name)}`;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FieldShell
          id={id}
          label={label}
          description={description}
          required={required}
          className={className}
          error={fieldState.error?.message}
        >
          {render({
            id,
            value: field.value,
            onChange: field.onChange,
            onBlur: field.onBlur,
            invalid: Boolean(fieldState.error),
          })}
        </FieldShell>
      )}
    />
  );
}
