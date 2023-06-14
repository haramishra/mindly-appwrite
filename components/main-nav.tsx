"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

interface MainNavProps {
  items?: NavItem[]
  loggedIn: boolean
}

export function MainNav({ items, loggedIn }: MainNavProps) {
  const { theme } = useTheme()

  return (
    <div className="flex items-center gap-6 md:gap-10">
      <Link
        href={loggedIn ? "/feed" : "/"}
        className="hidden items-center space-x-2 md:flex"
      >
        <Image
          src={theme === "light" ? "/logo-light.png" : "/logo-dark.png"}
          height={48}
          width={140}
          alt="mindly logo "
        />
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-lg font-semibold text-muted-foreground sm:text-sm",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
