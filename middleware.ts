import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";

let locales = ["en", "it"];

const getLocale = (req: NextRequest) => {
  let headers = { "accept-language": req.headers.get("accept-language") || "" };
  let languages = new Negotiator({ headers }).languages();
  let defaultLocale = "it";

  return match(languages, locales, defaultLocale);
};

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname.slice(3));

  if (pathnameHasLocale)
    return NextResponse.next({ request: { headers: requestHeaders } });

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    // '/((?!_next).*)',
    "/((?!api|_next/static|_next/image|images|favicon.ico).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
