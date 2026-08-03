import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

/** Square icon-only action with a required accessible label. */
export function IconButton({
  icon: Icon,
  label,
  onClick,
  variant = "ghost",
  disabled,
  className,
}: {
  icon: LucideIcon;
  label: string;
  onClick?: (() => void) | undefined;
  variant?: "ghost" | "outline" | "secondary" | "default" | undefined;
  disabled?: boolean | undefined;
  className?: string | undefined;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          size="icon"
          variant={variant}
          aria-label={label}
          disabled={disabled}
          onClick={onClick}
          className={cn("size-9 rounded-xl", className)}
        >
          <Icon className="size-4" aria-hidden />
        </Button>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
}
