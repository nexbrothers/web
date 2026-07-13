/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  transpilePackages: ["@repo/ui", "@repo/utils"],
};

export default nextConfig;
