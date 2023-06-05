import { NextRequest, NextResponse } from "next/server"

//check for login and signup route
const isAuthRoute = (pathname: string) => {
  return pathname.startsWith("/login") || pathname.startsWith("/signup")
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const session = request.cookies.get("auth-session")
  const { pathname } = request.nextUrl

  if (!session?.value && request.url) {
    if (isAuthRoute(pathname)) {
      return NextResponse.next()
    }
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/feed/:path*",
    "/profile/:path*",
    "/login/:path*",
    "/signup/:path*",
  ],
}
