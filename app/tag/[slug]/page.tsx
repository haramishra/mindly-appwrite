import { SiteHeader } from "@/components/site-header"
import TagPage from "@/components/tag"

export default function Tag({ params }: { params: { slug: string } }) {
  return (
    <>
      <SiteHeader />
      <section className="container grid max-w-5xl items-center gap-6 pb-8 pt-6 md:py-10">
        <TagPage param={params.slug} />
      </section>
    </>
  )
}
