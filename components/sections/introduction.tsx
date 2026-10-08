import { getProfile } from "@/lib/content";
import { HomeSection } from "./home-section";

export function Introduction() {
  const { introduction, currentFocus } = getProfile();
  return (
    <HomeSection
      id="about"
      eyebrow="About"
      title="About Me"
      more={{ href: "/about", label: "More about me" }}
    >
      <div className="reveal mx-auto max-w-3xl space-y-5 text-center text-lg/relaxed text-muted">
        {introduction.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <h3 className="reveal mt-16 text-center text-xl font-semibold">
        Current focus
      </h3>
      <ul className="mt-8 grid gap-6 sm:grid-cols-3">
        {currentFocus.map((item, index) => (
          <li key={item.title} className="reveal card-hover card p-6">
            <span className="text-brand text-3xl font-bold">0{index + 1}</span>
            <p className="mt-3 font-semibold text-white">{item.title}</p>
            <p className="mt-2 text-sm/relaxed text-muted">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </HomeSection>
  );
}
