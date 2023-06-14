import { cookies } from "next/headers"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import LoginButton from "./auth/login-button"
import LogoutButton from "./auth/logout-button"
import AvatarWithUID, { UserAvatar } from "./feedPage/avatar"
import HomeButton from "./feedPage/home-button"

export function SiteHeader() {
  const authCookies = cookies().get("auth-session")?.value

  const avatar = `https://api.dicebear.com/6.x/lorelei/svg?seed=${authCookies}&backgroundType=gradientLinear&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-20 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-8">
            {authCookies && (
              <Link href={"/profile"}>
                <UserAvatar src={avatar} fallbackText="" />
              </Link>
            )}
            <div className="flex gap-6">
              <ThemeToggle />
              {authCookies ? <HomeButton /> : <></>}
              {authCookies ? <LogoutButton /> : <LoginButton />}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
