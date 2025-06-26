import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

// 1. Define your valid route patterns (adjust as needed)
const validRoutes = [
  /^\/$/, // Allow root "/" as valid
  /^\/(en|ar)$/, // Home pages for each locale
  /^\/(en|ar)\/about$/, // About page
  /^\/(en|ar)\/contact$/, // Contact page
  /^\/(en|ar)\/legal-statement$/, // statement page
  /^\/(en|ar)\/models\/(u8|u9)(\/.*)?$/, // models page
  /^\/(en|ar)\/news$/, // News page
  /^\/(en|ar)\/offers$/, // Offers page
  /^\/(en|ar)\/ownership$/, // Ownership page
  /^\/(en|ar)\/privacy-policy$/, // Privacy page
  /^\/(en|ar)\/service$/, // service page
  /^\/(en|ar)\/not-found$/, // error
  // Add more patterns as needed
];

function isValidRoute(pathname) {
  console.log(`[${new Date().toISOString()}] Checking if route is valid: ${pathname}`);

  return validRoutes.some((pattern) => pattern.test(pathname));
}

export default async function middleware(request) {
  const { pathname, search } = request.nextUrl;
  console.log(`[${new Date().toISOString()}] Middleware triggered for: ${pathname}${search}`);

  // Redirect / to /en or user's locale
  if (pathname === "/" || pathname === "") {
    const locale = request.cookies.get("NEXT_LOCALE")?.value || "en";
    console.log(`[${new Date().toISOString()}] Redirecting ${pathname} to /${locale}`);
    const url = new URL(`/${locale}${search}`, request.url);
    return NextResponse.redirect(url, { status: 308 });
  }

  // Remove trailing slash
  if (pathname !== "/" && pathname.endsWith("/")) {
    console.log(`[${new Date().toISOString()}] Removing trailing slash: ${pathname}`);
    const url = new URL(pathname.slice(0, -1) + search, request.url);
    return NextResponse.redirect(url, { status: 308 });
  }

  // 2. Check if the route is valid
  if (!isValidRoute(pathname)) {
    // Try to extract locale from pathname, default to "en"
    const match = pathname.match(/^\/(en|ar)(\/|$)/);
    const locale = match ? match[1] : "en";
    console.log(`[${new Date().toISOString()}] Invalid route: ${pathname}, redirecting to /${locale}/not-found`);
    const url = new URL(`/${locale}/not-found`, request.url);
    return NextResponse.redirect(url, { status: 307 });
  }

  // 3. Apply next-intl middleware for localization
  try {
    const intlMiddleware = createMiddleware({
      locales: ["en", "ar"],
      defaultLocale: "en",
      localePrefix: "always",
    });
    const response = await intlMiddleware(request);
    console.log(`[${new Date().toISOString()}] next-intl response for ${pathname}: ${response.status}`);
    return response;
  } catch (error) {
    console.error(`[${new Date().toISOString()}] next-intl error:`, error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/", "/((?!api|_next|.*\\..*).*)"],
};

// import { NextResponse } from "next/server";
// import createMiddleware from "next-intl/middleware";

// export default async function middleware(request) {
//   const { pathname, search } = request.nextUrl;
//   console.log(`[${new Date().toISOString()}] Middleware triggered for: ${pathname}${search}`);

//   // Redirect / to /en
//   if (pathname === "/" || pathname === "") {
//     const locale = request.cookies.get("NEXT_LOCALE")?.value || "en";
//     console.log(`[${new Date().toISOString()}] Redirecting ${pathname} to /${locale}`);
//     const url = new URL(`/${locale}${search}`, request.url);
//     return NextResponse.redirect(url, { status: 308 });
//   }

//   // Remove trailing slash
//   if (pathname !== "/" && pathname.endsWith("/")) {
//     console.log(`[${new Date().toISOString()}] Removing trailing slash: ${pathname}`);
//     const url = new URL(pathname.slice(0, -1) + search, request.url);
//     return NextResponse.redirect(url, { status: 308 });
//   }

//   // Apply next-intl middleware
//   try {
//     const intlMiddleware = createMiddleware({
//       locales: ["en", "ar"],
//       defaultLocale: "en",
//       localePrefix: "always",
//     });
//     const response = await intlMiddleware(request);
//     console.log(`[${new Date().toISOString()}] next-intl response for ${pathname}: ${response.status}`);
//     return response;
//   } catch (error) {
//     console.error(`[${new Date().toISOString()}] next-intl error:`, error);
//     return NextResponse.next();
//   }
// }

// export const config = {
//   matcher: ["/", "/((?!api|_next|.*\\..*).*)"],
// };
