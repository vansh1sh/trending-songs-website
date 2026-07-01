import type { NextConfig } from "next";

// For a GitHub Pages project site the app is served from
// https://<user>.github.io/<repo>/, so a basePath is required.
// The workflow sets NEXT_PUBLIC_BASE_PATH to the repo name at build time.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
