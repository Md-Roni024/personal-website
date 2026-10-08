import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/site.config";
import { getProfile } from "@/lib/content";

// Default social preview image for every page (LinkedIn, WhatsApp, X…). Colours mirror the tokens in globals.css.
export const alt = `${siteConfig.name} — ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const { photo, roles } = getProfile();
  const photoSrc = photo
    ? `data:image/jpeg;base64,${(await readFile(path.join(process.cwd(), "public", photo))).toString("base64")}`
    : null;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "72px 88px",
        background:
          "radial-gradient(60% 70% at 85% 30%, rgba(204,0,187,0.22), transparent 70%), radial-gradient(50% 60% at 5% 95%, rgba(0,70,209,0.24), transparent 70%), #1c1c27",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
        <div style={{ fontSize: 30, color: "#b1b2b3" }}>Hi, I am</div>
        <div
          style={{
            fontSize: 92,
            fontWeight: 700,
            lineHeight: 1.05,
            marginTop: 8,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 40,
            fontWeight: 600,
            marginTop: 20,
            color: "#a97cf5",
          }}
        >
          {siteConfig.title}
        </div>
        <div style={{ fontSize: 26, color: "#b1b2b3", marginTop: 16 }}>
          {roles.filter((role) => role !== siteConfig.title).join(" · ")}
        </div>
        <div
          style={{
            width: 140,
            height: 8,
            marginTop: 40,
            borderRadius: 999,
            background: "linear-gradient(225deg, #8400ff, #c800e0)",
          }}
        />
      </div>
      {photoSrc && (
        <div
          style={{
            display: "flex",
            width: 380,
            height: 380,
            borderRadius: 999,
            padding: 6,
            background: "linear-gradient(225deg, #8400ff, #c800e0)",
            boxShadow: "0 0 80px rgba(132,0,255,0.55)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> only */}
          <img
            src={photoSrc}
            alt=""
            width={368}
            height={368}
            style={{
              width: 368,
              height: 368,
              borderRadius: 999,
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </div>
      )}
    </div>,
    size,
  );
}
