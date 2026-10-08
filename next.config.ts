import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Lets a production build (e.g. for audits) use a separate folder while `next dev` is running.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

// MDX files live in content/ and are imported by routes; they are not routes themselves.
const withMDX = createMDX({});

export default withMDX(nextConfig);
