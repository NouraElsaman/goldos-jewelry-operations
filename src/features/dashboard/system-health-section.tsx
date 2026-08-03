import { SectionCard, SystemHealthChip } from "@/components/shared";
import type { HealthStatus } from "@/components/shared";
import type { TranslationKey } from "@/lib/i18n";

type HealthService = {
  id: string;
  label: string;
  status: HealthStatus;
  statusLabelKey: TranslationKey;
};

/**
 * System health section.
 * All services are currently placeholders wired to mock statuses.
 * Future: receive statuses from a health-check query.
 * No fetching — receives data or uses built-in defaults.
 */
export function SystemHealthSection({
  t,
  title,
  services,
}: {
  t: (key: TranslationKey) => string;
  title: string;
  services?: HealthService[] | undefined;
}) {
  const defaultServices: HealthService[] = [
    {
      id: "api",
      label: "API Server",
      status: "online",
      statusLabelKey: "health.online",
    },
    {
      id: "db",
      label: "Database",
      status: "online",
      statusLabelKey: "health.online",
    },
    {
      id: "env",
      label: "Environment",
      status: "online",
      statusLabelKey: "health.online",
    },
    {
      id: "ai",
      label: "AI Service",
      status: "unknown",
      statusLabelKey: "health.unknown",
    },
    {
      id: "camera",
      label: "Camera System",
      status: "unknown",
      statusLabelKey: "health.unknown",
    },
    {
      id: "yolo",
      label: "YOLO Pipeline",
      status: "unknown",
      statusLabelKey: "health.unknown",
    },
  ];

  const list = services ?? defaultServices;

  return (
    <SectionCard title={title}>
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
        {list.map((svc) => (
          <SystemHealthChip
            key={svc.id}
            label={svc.label}
            status={svc.status}
            statusLabel={t(svc.statusLabelKey)}
          />
        ))}
      </div>
    </SectionCard>
  );
}
