import type { Profile } from "@/lib/content";

export const profile: Profile = {
  // Source: previous portfolio.
  roles: ["Web Developer", "Programmer"],
  headline:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results.",
  photo: "/images/profile.jpg",
  introduction: [
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results.",
    "With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  ],
  // DUMMY: placeholder current focus. Replace with what you are actually focused on now.
  currentFocus: [
    {
      title: "Focus area one",
      description:
        "One sentence describing something you are actively working on right now.",
    },
    {
      title: "Focus area two",
      description: "One sentence describing a second current focus.",
    },
    {
      title: "Focus area three",
      description: "One sentence describing a third current focus.",
    },
  ],
};
