import Hero from "@/components/landing/hero"
import { SiteHeader } from "@/components/site-header"

export default function IndexPage() {
  return (
    <>
      <SiteHeader />
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <section id="hero" className="">
          <Hero />
        </section>
      </section>
    </>
  )
}
