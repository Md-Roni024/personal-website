import { ImageResponse } from "next/og";
import { siteConfig } from "@/site.config";

// Default social preview image for every page. Colours mirror the light-theme tokens in globals.css.
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
        background: "#faf9f7",
        color: "#1c1a17",
        fontFamily: "serif",
      }}
    >
      <div
        style={{
          fontSize: 28,
          color: "#6f6a64",
          letterSpacing: 4,
          textTransform: "uppercase",
        }}
      >
        {siteConfig.title}
      </div>
      <div style={{ fontSize: 96, marginTop: 24, lineHeight: 1.05 }}>
        {siteConfig.name}
      </div>
      <div
        style={{ width: 120, height: 6, marginTop: 48, background: "#2f5d43" }}
      />
    </div>,
    size,
  );
}
