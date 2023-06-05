import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function POST(req: Request) {
  const cookieStore = cookies()
  cookieStore.set("auth-session", "")

  return new Response("OK")
}
