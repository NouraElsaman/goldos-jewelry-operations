/**
 * Public layout route.
 *
 * Pages that do NOT require authentication (login, forgot password, invite
 * accept, etc.) are nested under this route. It intentionally renders
 * without AppShell so the sidebar and topbar are absent.
 *
 * Usage: add child route files to routes/_public/
 *   e.g. routes/_public/login/index.tsx  →  path /login
 *        routes/_public/reset/index.tsx  →  path /reset
 *
 * The corresponding layout component can be built out when the first public
 * route is implemented in Sprint 3.
 */
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_public" as never)({
  component: PublicLayout,
});

function PublicLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Outlet />
    </div>
  );
}
