import { Briefcase, GraduationCap, Mail, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getEducation, getExperience, getProfileLinks } from "@/lib/content";
import { cn } from "@/lib/utils";

type Fact = {
  icon: LucideIcon;
  label: string;
  value: string;
  detail?: string;
  href?: string;
};

/** Key facts derived from content (current role, degree, location, email) — nothing is hard-coded here. */
function getFacts(): Fact[] {
  const facts: Fact[] = [];
  const current = getExperience().find((entry) => !entry.end);
  if (current) {
    facts.push({
      icon: Briefcase,
      label: "Currently",
      value: current.role
        ? `${current.role} at ${current.organization}`
        : current.organization,
      detail: `Since ${current.start}`,
    });
  }
  const degree = getEducation()[0];
  if (degree) {
    // Prefer the abbreviation in parentheses, e.g. "… University (BSMRSTU)" → "BSMRSTU".
    const shortName =
      degree.institution.match(/\(([^)]+)\)\s*$/)?.[1] ?? degree.institution;
    facts.push({
      icon: GraduationCap,
      label: "Education",
      value: degree.degree,
      detail: shortName,
    });
  }
  if (current?.location) {
    facts.push({ icon: MapPin, label: "Location", value: current.location });
  }
  const email = getProfileLinks().find((link) =>
    link.href.startsWith("mailto:"),
  );
  if (email) {
    facts.push({
      icon: Mail,
      label: "Email",
      value: email.detail ?? email.label,
      href: email.href,
    });
  }
  return facts;
}

export function ProfileFacts({
  columns = 2,
  className,
}: {
  columns?: 1 | 2;
  className?: string;
}) {
  return (
    <dl
      className={cn("grid gap-4", columns === 2 && "sm:grid-cols-2", className)}
    >
      {getFacts().map(({ icon: Icon, label, value, detail, href }) => (
        <div
          key={label}
          className="flex items-start gap-3 rounded-xl border border-border bg-surface-raised/60 p-4 transition-colors duration-300 hover:border-primary/60"
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-accent">
            <Icon aria-hidden="true" className="size-5" />
          </span>
          <div className="min-w-0">
            <dt className="text-xs font-semibold tracking-wide text-subtle uppercase">
              {label}
            </dt>
            <dd className="mt-1 text-sm/snug font-medium break-words text-white">
              {href ? (
                <a href={href} className="transition-colors hover:text-accent">
                  {value}
                </a>
              ) : (
                value
              )}
              {detail && (
                <span className="mt-0.5 block text-xs text-muted">
                  {detail}
                </span>
              )}
            </dd>
          </div>
        </div>
      ))}
    </dl>
  );
}
