import type { Metadata } from "next";
import DesignPreview from "@/content/_design-preview.mdx";
import { Button, ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eyebrow, Section, SectionHeading } from "@/components/ui/section";
import { TagList } from "@/components/ui/tag";
import { TextLink } from "@/components/ui/text-link";

// Internal design-system preview for visual review. All text here is DUMMY. Remove before launch if not needed.
export const metadata: Metadata = {
  title: "Design system",
  robots: { index: false, follow: false },
};

const colors = [
  "background",
  "surface",
  "foreground",
  "muted",
  "subtle",
  "border",
  "border-strong",
  "accent",
] as const;

const swatchClass: Record<(typeof colors)[number], string> = {
  background: "bg-background",
  surface: "bg-surface",
  foreground: "bg-foreground",
  muted: "bg-muted",
  subtle: "bg-subtle",
  border: "bg-border",
  "border-strong": "bg-border-strong",
  accent: "bg-accent",
};

export default function DesignPage() {
  return (
    <main className="flex-1">
      <Section>
        <Eyebrow className="mb-6">Design system preview</Eyebrow>
        <h1 className="max-w-4xl font-serif text-display">
          Sample display heading for the hero
        </h1>
        <p className="mt-6 max-w-reading text-lg/relaxed text-muted sm:text-xl/relaxed">
          Placeholder introduction text. This paragraph shows the lead size and
          muted colour used beneath large headings.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/design">Primary action</ButtonLink>
          <ButtonLink href="/design" variant="secondary">
            Secondary action
          </ButtonLink>
          <Button variant="ghost">Ghost action</Button>
        </div>
      </Section>

      <Section divided>
        <SectionHeading
          eyebrow="Tokens"
          title="Colour"
          intro="Restrained neutrals with one accent. Switch your system theme to preview dark mode."
        />
        <ul className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {colors.map((name) => (
            <li key={name}>
              <div
                className={`h-16 rounded-sm border border-border ${swatchClass[name]}`}
              />
              <p className="mt-2 font-mono text-xs text-muted">{name}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section divided>
        <SectionHeading eyebrow="Tokens" title="Typography" />
        <div className="mt-12 space-y-8">
          <p className="font-serif text-title">Title — page headings</p>
          <p className="font-serif text-3xl/tight tracking-tight sm:text-4xl/tight">
            Section heading — h2
          </p>
          <p className="text-lg font-semibold">Item heading — h3</p>
          <p className="max-w-reading">
            Body text in the sans family at reading width. Placeholder sentence
            to show the line length and leading, with an{" "}
            <TextLink href="/design">inline text link</TextLink> for comparison.
          </p>
          <p className="text-muted">Muted secondary text.</p>
          <p className="text-sm text-subtle">Subtle metadata text.</p>
          <Eyebrow>Eyebrow label</Eyebrow>
        </div>
      </Section>

      <Section divided>
        <SectionHeading
          eyebrow="Components"
          title="Listing patterns"
          intro="An open, rule-separated list (preferred) next to a card (used sparingly)."
        />
        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <ul className="divide-y divide-border border-y border-border">
            {["Sample item one", "Sample item two", "Sample item three"].map(
              (item, i) => (
                <li
                  key={item}
                  className="grid gap-1 py-5 sm:grid-cols-[6rem_1fr]"
                >
                  <span className="font-mono text-sm text-subtle">20XX</span>
                  <div>
                    <h3 className="font-semibold">{item}</h3>
                    <p className="mt-1 text-muted">
                      Placeholder one-line description #{i + 1}.
                    </p>
                  </div>
                </li>
              ),
            )}
          </ul>
          <Card>
            <Eyebrow>Sample category</Eyebrow>
            <h3 className="mt-3 font-serif text-2xl">Sample project title</h3>
            <p className="mt-2 text-muted">
              Placeholder summary describing a project in one or two sentences.
            </p>
            <TagList
              className="mt-6"
              tags={["Tag one", "Tag two", "Tag three"]}
            />
          </Card>
        </div>
      </Section>

      <Section divided>
        <SectionHeading eyebrow="Content" title="Long-form (MDX)" />
        <div className="mt-8 max-w-reading">
          <DesignPreview />
        </div>
      </Section>
    </main>
  );
}
