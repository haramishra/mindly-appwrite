import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET() {
  const cookieStore = cookies()

  const authCookie = cookieStore.get("auth-session")

  if (authCookie?.value) {
    return NextResponse.json({ session: authCookie }, { status: 200 })
  }
  return NextResponse.json({ error: "token not tound" }, { status: 400 })
}
