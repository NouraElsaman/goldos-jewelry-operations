import { useNavigate } from "@tanstack/react-router";
import { Coins, PackagePlus, Scale, ShoppingCart } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { flatNavigation } from "@/config/navigation";
import { useI18n } from "@/lib/i18n";

/**
 * Command palette placeholder: navigation works today, quick actions are
 * registered but wired to features in later sprints.
 */
export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { t } = useI18n();
  const navigate = useNavigate();

  const quickActions = [
    {
      id: "newSale",
      labelKey: "command.action.newSale",
      icon: ShoppingCart,
      to: "/cashier",
    },
    {
      id: "addItem",
      labelKey: "command.action.addItem",
      icon: PackagePlus,
      to: "/inventory",
    },
    {
      id: "setPrice",
      labelKey: "command.action.setPrice",
      icon: Coins,
      to: "/gold-prices",
    },
    {
      id: "closeDay",
      labelKey: "command.action.closeDay",
      icon: Scale,
      to: "/reconciliation",
    },
  ] as const;

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder={t("command.placeholder")} />
      <CommandList>
        <CommandEmpty>{t("command.empty")}</CommandEmpty>
        <CommandGroup heading={t("command.pages")}>
          {flatNavigation.map((item) => (
            <CommandItem
              key={item.to}
              value={t(item.labelKey)}
              onSelect={() => {
                onOpenChange(false);
                void navigate({ to: item.to });
              }}
            >
              <item.icon className="size-4" aria-hidden />
              {t(item.labelKey)}
              {item.shortcut ? (
                <CommandShortcut>{item.shortcut}</CommandShortcut>
              ) : null}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading={t("command.actions")}>
          {quickActions.map((action) => (
            <CommandItem
              key={action.id}
              value={t(action.labelKey)}
              onSelect={() => {
                onOpenChange(false);
                void navigate({ to: action.to });
              }}
            >
              <action.icon className="size-4" aria-hidden />
              {t(action.labelKey)}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
