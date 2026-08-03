import type { UserRole } from "@/types/domain";

/**
 * Reads the current authentication token.
 * This is a placeholder for a future real JWT validation utility.
 */
export function isAuthenticated(): boolean {
  return (
    typeof window !== "undefined" &&
    Boolean(localStorage.getItem("goldos_auth_token"))
  );
}

export { getCurrentRole } from "./rbac";
