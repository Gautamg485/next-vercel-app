import { NextResponse } from "next/server";
import { middlewares } from "./middlewares";

export async function middleware(request) {
  console.log("middleware:called " + request.nextUrl.pathname);
  if (request.nextUrl.pathname.startsWith("/about/")) {
    console.log("pathnamepathname " + request.nextUrl.pathname);
    console.log("about us " + request.nextUrl.pathname.startsWith("/about/"));
    return middlewares.aboutus(request);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|favicon.ico|vercel.svg).*)",
  ],
};
