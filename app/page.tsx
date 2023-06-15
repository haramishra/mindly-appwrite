import Hero from "@/components/landing/hero"
import Why from "@/components/landing/why"
import { SiteHeader } from "@/components/site-header"

export default function IndexPage() {
  return (
    <>
      <SiteHeader />
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-1o">
        <Hero />
        <Why />
      </section>
    </>
  )
}
