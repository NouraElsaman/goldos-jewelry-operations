import { Link, useRouterState } from "@tanstack/react-router";
import { getCurrentRole, canAccessRoute, type RouteAccess } from "@/lib/rbac";
import LogoAr from "@/assets/branding/logo-ar.png";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { navigation } from "@/config/navigation";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/** Primary navigation. Collapses to an icon rail, never disappears on desktop. */
export function AppSidebar() {
  const { t, isRTL } = useI18n();
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <Sidebar
      collapsible="icon"
      side={isRTL ? "right" : "left"}
      className="border-border"
    >
      <SidebarHeader className="border-b border-sidebar-border px-3 py-4">
        <Link
          to="/dashboard"
          className="flex items-center justify-center outline-none"
        >
          <img
            src={LogoAr}
            alt="جوهرة تك"
            className={cn(
              "w-auto object-contain transition-all duration-200",
              collapsed ? "h-10" : "h-14",
            )}
          />
        </Link>
      </SidebarHeader>

      <SidebarContent className="scrollbar-slim px-1 py-2">
        {navigation.map((group) => {
          const role = getCurrentRole();
          // Filter items based on RBAC matrix
          const accessibleItems = group.items.filter((item) =>
            canAccessRoute(role, item.to as RouteAccess),
          );

          if (accessibleItems.length === 0) return null;

          return (
            <SidebarGroup key={group.id}>
              {!collapsed ? (
                <SidebarGroupLabel className="px-3 text-[0.7rem] font-medium tracking-wide text-muted-foreground uppercase">
                  {t(group.labelKey)}
                </SidebarGroupLabel>
              ) : null}
              <SidebarGroupContent>
                <SidebarMenu>
                  {accessibleItems.map((item) => {
                    const active = isActive(item.to);
                    return (
                      <SidebarMenuItem key={item.to}>
                        <SidebarMenuButton
                          asChild
                          isActive={active}
                          tooltip={t(item.labelKey)}
                          className={cn(
                            "h-10 gap-3 rounded-xl px-3 text-sm transition-colors",
                            active &&
                              "bg-sidebar-accent font-medium text-sidebar-accent-foreground shadow-hairline",
                          )}
                        >
                          <Link to={item.to}>
                            <item.icon
                              className={cn(
                                "size-4 shrink-0",
                                active && "text-gold-deep",
                              )}
                              aria-hidden
                            />
                            <span className="truncate">{t(item.labelKey)}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}
      </SidebarContent>

      {!collapsed ? (
        <SidebarFooter className="border-t border-sidebar-border px-4 py-3 text-center">
          <p className="text-xs text-muted-foreground">{t("app.tagline")}</p>
        </SidebarFooter>
      ) : null}
    </Sidebar>
  );
}
