import PostContent from "@/components/feedPage/posts-content"
import FeedPost from "@/components/post"
import { SiteHeader } from "@/components/site-header"

export default function Page({ params }: { params: { slug: string } }) {
  console.log(params.slug)
  return (
    <>
      <SiteHeader />
      <section className="container max-w-5xl grid items-center gap-6 pb-8 pt-6 md:py-10">
        <FeedPost postID={params.slug} />
      </section>
    </>
  )
}
