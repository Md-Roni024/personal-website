import { ImageResponse } from "next/og";
import { siteConfig } from "@/site.config";

// Default social preview image for every page. Colours mirror the tokens in globals.css.
export const alt = `${siteConfig.name} — ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "80px",
        background:
          "radial-gradient(60% 60% at 85% 20%, rgba(204,0,187,0.18), transparent 70%), radial-gradient(50% 60% at 10% 90%, rgba(0,70,209,0.2), transparent 70%), #1c1c27",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 28,
          color: "#a97cf5",
          letterSpacing: 4,
          textTransform: "uppercase",
        }}
      >
        {siteConfig.title}
      </div>
      <div
        style={{
          fontSize: 96,
          marginTop: 24,
          lineHeight: 1.05,
          fontWeight: 700,
        }}
      >
        {siteConfig.name}
      </div>
      <div
        style={{
          width: 120,
          height: 6,
          marginTop: 48,
          background: "linear-gradient(225deg, #8400ff, #c800e0)",
          borderRadius: 999,
        }}
      />
    </div>,
    size,
  );
}
