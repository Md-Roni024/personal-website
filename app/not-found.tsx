import { ButtonLink } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";

export default function NotFound() {
  return (
    <Section>
      <SectionHeading
        level={1}
        eyebrow="404"
        title="Page not found"
        intro="The page you were looking for doesn't exist or has moved."
      />
      <ButtonLink href="/" variant="secondary" className="mt-10">
        Back to home
      </ButtonLink>
    </Section>
  );
}
