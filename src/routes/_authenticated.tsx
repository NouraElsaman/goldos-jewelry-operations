import { AnimatePresence } from "motion/react";
import {
  createFileRoute,
  Outlet,
  redirect,
  useRouterState,
} from "@tanstack/react-router";

import { AppShell } from "@/layouts/app-shell";

/**
 * Authenticated layout route.
 *
 * Checks mock auth status in localStorage. If unauthenticated, redirects to /login.
 */
export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async () => {
    if (typeof window !== "undefined") {
      const isAuth = localStorage.getItem("goldos_auth_token");
      if (!isAuth) {
        throw redirect({ to: "/login" });
      }
    }
  },
  component: AuthenticatedLayout,
});

function AuthenticatedLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <AppShell>
      <AnimatePresence mode="wait">
        <Outlet key={pathname} />
      </AnimatePresence>
    </AppShell>
  );
}
