const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "yangwang.dev20.intersmarthosting.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.yangwang.dev20.intersmarthosting.in",
        pathname: "/**",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)", // Apply to all routes
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline';
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: *.dev20.intersmarthosting.in;
              connect-src 'self';
              frame-ancestors 'none';
            `.replace(/\s{2,}/g, " ").trim(),
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);



// const createNextIntlPlugin = require("next-intl/plugin");

// const withNextIntl = createNextIntlPlugin();

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "yangwang.dev20.intersmarthosting.in",
//         pathname: "/**", // Allow all image paths
//       },
//       {
//         protocol: "https",
//         hostname: "www.yangwang.dev20.intersmarthosting.in",
//         pathname: "/**", // Allow all image paths
//       },
//     ],
//   },
// };

// module.exports = withNextIntl(nextConfig);
