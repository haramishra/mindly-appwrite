"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Register } from "@/components/auth/register"
import { SiteHeader } from "@/components/site-header"

export default function IndexPage() {
  return (
    <>
      <SiteHeader />
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <Register />
      </section>
    </>
  )
}
