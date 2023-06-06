import { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  const cookieStore = req.cookies

  try {
    const authCookie = cookieStore.get("auth-session")
    console.log(authCookie)

    if (authCookie?.value) {
      return new Response(JSON.stringify({ auth: "authCookie" }))
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: "auth cookie not found" }))
  }
}
