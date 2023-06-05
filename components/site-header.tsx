import { cookies } from "next/headers"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import LoginButton from "./auth/login-button"
import LogoutButton from "./auth/logout-button"
import AvatarWithUID from "./feedPage/avatar"

export function SiteHeader() {
  const authCookies = cookies().get("auth-session")?.value

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-20 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-16">
            {authCookies && (
              <Link href={"/profile"}>
                <AvatarWithUID />
              </Link>
            )}
            <div className="flex gap-6">
              <ThemeToggle />
              {authCookies ? <LogoutButton /> : <LoginButton />}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
