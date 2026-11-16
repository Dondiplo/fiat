import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old profile URL from before the founder's name was changed.
  redirects: async () => [{ source: "/people/chinonso-sheriff", destination: "/people/adele-sheriff", permanent: true }],
};

export default nextConfig;
