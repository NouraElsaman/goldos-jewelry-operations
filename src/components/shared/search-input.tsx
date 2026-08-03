import { Search, X } from "lucide-react";
import type { ChangeEvent } from "react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

/** Search input with leading icon and clear affordance. */
export function SearchInput({
  value,
  onValueChange,
  placeholder,
  autoFocus = false,
  className,
}: {
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string | undefined;
  autoFocus?: boolean | undefined;
  className?: string | undefined;
}) {
  return (
    <div className={cn("relative flex-1", className)}>
      <Search
        className="pointer-events-none absolute top-1/2 size-4 -translate-y-1/2 text-muted-foreground/70 ltr:left-3.5 rtl:right-3.5"
        aria-hidden
      />
      <Input
        type="search"
        value={value}
        autoFocus={autoFocus}
        placeholder={placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onValueChange(e.target.value)
        }
        className="h-10 rounded-xl border-border bg-surface shadow-hairline transition-all duration-150 focus-visible:border-gold-deep/40 focus-visible:ring-3 ltr:pl-9.5 ltr:pr-9.5 rtl:pr-9.5 rtl:pl-9.5"
      />
      {value ? (
        <button
          type="button"
          onClick={() => onValueChange("")}
          aria-label="Clear"
          className="absolute top-1/2 flex size-5.5 -translate-y-1/2 items-center justify-center rounded-full bg-surface-muted text-muted-foreground transition-colors hover:bg-border hover:text-foreground ltr:right-2.5 rtl:left-2.5"
        >
          <X className="size-3" aria-hidden />
        </button>
      ) : null}
    </div>
  );
}
