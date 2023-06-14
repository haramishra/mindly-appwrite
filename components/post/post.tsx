import { Post } from "@/types/post"
import { Badge } from "@/components/ui/badge"

import { Skeleton } from "../ui/skeleton"
import { PostLoader } from "./loader"

function PostContent(props: { post: Post }) {
  const { content, title, nsfw, tag } = props.post

  if (!content) {
    return <PostLoader />
  }

  return (
    <div className="mb-12 rounded-lg border p-6">
      <div className="mb-8">
        <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight">
          {title}
          <span className="ml-4 space-x-3">
            {nsfw && (
              <Badge
                className="border-red-700  text-sm font-normal text-red-700"
                variant="outline"
              >
                NSFW
              </Badge>
            )}
            <Badge
              className="light:border-slate-600 text-sm font-normal dark:border-slate-400"
              variant="outline"
            >
              {tag}
            </Badge>
          </span>
        </h1>
      </div>
      <div className="space-y-3 dark:text-slate-50">
        <p className="text-md whitespace-pre-line leading-5 [&:not(:first-child)]:mt-3 ">
          {content}
        </p>
      </div>
    </div>
  )
}

export default PostContent
