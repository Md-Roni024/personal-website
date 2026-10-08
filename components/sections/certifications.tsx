import { getCertifications } from "@/lib/content";
import { CertificationList } from "@/components/content/certification-list";
import { HomeSection } from "./home-section";

export function Certifications() {
  const items = getCertifications();
  if (items.length === 0) return null;
  return (
    <HomeSection
      id="certificates"
      eyebrow="Certificates"
      title="Certificates & Achievements"
      intro="Courses, certifications and competitions."
      more={{ href: "/academic#certificates", label: "All certificates" }}
    >
      <CertificationList items={items.slice(0, 3)} />
    </HomeSection>
  );
}
