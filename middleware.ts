import { NextRequest, NextResponse } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const session = request.cookies.get("auth-session")
  console.log(!session?.value)
  if (!session?.value && request.url) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

export const config = {
    matcher: ['/feed/:path*', '/profile/:path*']
};