import { JetBrains_Mono, Poppins } from "next/font/google";

// Poppins is the typeface of the owner's existing portfolio. Not a variable font, so weights are listed.
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Code blocks only.
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});
