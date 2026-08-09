/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  transpilePackages: ["@repo/ui", "@repo/utils"],
};

export default nextConfig;
