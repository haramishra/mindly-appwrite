"use client"

import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

import { account } from "../appwrite/config"

export async function logout() {
  await account.deleteSession("current")

  const res = fetch("/api/logout", { method: "POST" }).then((res) => res)
  return res
}

function LogoutButton() {
  const router = useRouter()
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={async () => {
        const res = await logout()
        res?.ok && router.replace("/")
      }}
    >
      <Icons.logout />
    </Button>
  )
}

export default LogoutButton
