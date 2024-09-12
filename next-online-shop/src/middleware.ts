import { NextResponse } from "next/server";

let locales = ["en", "ru"];

function getLocale(request) {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return "en";

  const acceptedLocales = acceptLanguage.split(",").map((lang) => {
    const [locale] = lang.split(";");
    return locale.trim();
  });

  for (const locale of acceptedLocales) {
    if (locales.includes(locale)) {
      return locale;
    }
  }

  return "en";
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
