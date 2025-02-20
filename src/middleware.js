import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

// define languages
let locales = ["bn", "en"];
let defaultLocale = "en"; // fallback language

function getLocale(request) {
    // get the accepted languages from the request
    const acceptedLanguages = request.headers.get("Accept-Language") ?? undefined;
    
    // create a Negotiator object with the accepted languages
    const headers = {"accept-language": acceptedLanguages};
    const languages = new Negotiator({headers}).languages();
    
    // return the matched language
    return match(languages, locales, defaultLocale);
}

export function middleware(request) {
    const pathname = request.nextUrl.pathname;
    
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}`) && 
                    pathname !== `/${locale}`);
                    
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);
        return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
    }

    
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/data|favicon.ico).*)"],
};