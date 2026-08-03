import { useEffect, useState } from "react";

/** True only after hydration — use before reading browser-only state. */
export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
}
