import { cookies } from "next/headers"

export async function POST(req: Request) {
  const cookieStore = cookies()
  cookieStore.set("auth-session", "")

  return new Response("OK")
}
