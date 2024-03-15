import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";

let locales = ["en", "it"];

const [AUTH_USER, AUTH_PASS] = (process.env.HTTP_BASIC_AUTH || ':').split(':');

const getLocale = (req: NextRequest) => {
  let headers = { "accept-language": req.headers.get("accept-language") || "" };
  let languages = new Negotiator({ headers }).languages();
  let defaultLocale = "it";

  return match(languages, locales, defaultLocale);
};

export function middleware(request: NextRequest) {
  if (!isAuthenticated(request)) {
		return new NextResponse('Authentication required', {
			status: 401,
			headers: { 'WWW-Authenticate': 'Basic' },
		});
	}

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
    "/((?!api|_next/static|_next/image|images|favicon.ico|studio).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
}

// Step 2. Check HTTP Basic Auth header if present
function isAuthenticated(req: NextRequest) {
	if (!AUTH_PASS && !AUTH_USER) {
		return true;
	}

	const authheader = req.headers.get('authorization') || req.headers.get('Authorization');

	if (!authheader) {
		return false;
	}

	const auth = Buffer.from(authheader.split(' ')[1], 'base64').toString().split(':');
	const user = auth[0];
	const pass = auth[1];

	if (user == AUTH_USER && pass == AUTH_PASS) {
		return true;
	} else {
		return false;
	}
};