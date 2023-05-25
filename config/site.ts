export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "mindly",
  description:
    "mental health and happynes",
  mainNav: [
    {
      title: "Posts",
      href: "/posts",
    },
    {
      title: "Profile",
      href: "/profile",
    },
    {
      title: "Settings",
      href: "/settings",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
