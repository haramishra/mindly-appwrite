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
    <div className="border p-6 rounded-lg mb-12">
      <div className="mb-8">
        <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight">
          {title}
          <span className="ml-4 space-x-3">
            {nsfw && (
              <Badge
                className="text-sm  font-normal border-red-700 text-red-700"
                variant="outline"
              >
                NSFW
              </Badge>
            )}
            <Badge
              className="text-sm font-normal dark:border-slate-400 light:border-slate-600"
              variant="outline"
            >
              {tag}
            </Badge>
          </span>
        </h1>
      </div>
      <div className="space-y-3 dark:text-slate-50">
        <p className="leading-5 text-md whitespace-pre-line [&:not(:first-child)]:mt-3 ">
          {content}
        </p>
      </div>
    </div>
  )
}

export default PostContent
