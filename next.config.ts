import type { NextConfig } from "next";

// Where web-api runs. Set in .env.local. The rewrite can't read an IPv6 host
// such as http://[::1]:3999 (it treats ":1" as a parameter), so use localhost.
const API_URL = (
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3999"
).replace("[::1]", "localhost");

const nextConfig: NextConfig = {
  // Forwards /api/auth/login to web-api's /auth/login, so the browser only
  // talks to this app and web-api needs no CORS setup.
  async rewrites() {
    return [{ source: "/api/:path*", destination: `${API_URL}/:path*` }];
  },
};

export default nextConfig;
