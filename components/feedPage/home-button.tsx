"use client"

import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

import { account } from "../appwrite/config"

function HomeButton() {
  const router = useRouter()
  return (
    <Button variant="ghost" size="sm" onClick={() => router.push("/feed")}>
      <Icons.home />
    </Button>
  )
}

export default HomeButton
