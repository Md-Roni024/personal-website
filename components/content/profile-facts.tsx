import { Briefcase, GraduationCap, Mail, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getEducation, getExperience, getProfileLinks } from "@/lib/content";
import { cn } from "@/lib/utils";

type Fact = { icon: LucideIcon; label: string; value: string; href?: string };

/** Key facts derived from content (current role, degree, location, optionally email) — nothing is hard-coded. */
function getFacts(withEmail: boolean): Fact[] {
  const facts: Fact[] = [];
  const current = getExperience().find((entry) => !entry.end);
  if (current) {
    facts.push({
      icon: Briefcase,
      label: "Current role",
      value: current.role
        ? `${current.role} at ${current.organization}`
        : current.organization,
    });
  }
  const degree = getEducation()[0];
  if (degree) {
    // Prefer the abbreviation in parentheses, e.g. "… University (GSTU)" → "GSTU".
    const shortName =
      degree.institution.match(/\(([^)]+)\)\s*$/)?.[1] ?? degree.institution;
    facts.push({
      icon: GraduationCap,
      label: "Education",
      value: `${degree.degree}, ${shortName}`,
    });
  }
  if (current?.location) {
    facts.push({ icon: MapPin, label: "Location", value: current.location });
  }
  const email =
    withEmail &&
    getProfileLinks().find((link) => link.href.startsWith("mailto:"));
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

/** A quiet icon list of key facts. */
export function ProfileFacts({
  withEmail = false,
  className,
}: {
  withEmail?: boolean;
  className?: string;
}) {
  return (
    <dl className={cn("space-y-3", className)}>
      {getFacts(withEmail).map(({ icon: Icon, label, value, href }) => (
        <div key={label} className="flex items-center gap-3">
          <dt className="flex shrink-0 items-center">
            <Icon aria-hidden="true" className="size-5 text-accent" />
            <span className="sr-only">{label}</span>
          </dt>
          <dd className="min-w-0 text-sm break-words text-foreground sm:text-base">
            {href ? (
              <a href={href} className="transition-colors hover:text-accent">
                {value}
              </a>
            ) : (
              value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
