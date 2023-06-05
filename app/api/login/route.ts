import { cookies } from "next/headers"

export async function POST(req: Request) {
  const body = await req.json()

  const cookieStore = cookies()

  cookieStore.set("auth-session", body.sessionID)

  return new Response("OK")
}
