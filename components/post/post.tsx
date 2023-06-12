import { Badge } from "@/components/ui/badge"

import { Skeleton } from "../ui/skeleton"
import { PostLoader } from "./loader"

function PostContent(props: { content: string; title: string }) {
  console.log(props)

  if (!props.content) {
    return <PostLoader />
  }

  return (
    <div>
      <div className="mb-4">
        <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight">
          {props.title}
          <span className="ml-4 space-x-3">
            <Badge
              className="text-sm  font-normal border-red-700 text-red-700"
              variant="outline"
            >
              NSFW
            </Badge>
            <Badge
              className="text-sm font-normal dark:border-slate-400 light:border-slate-600"
              variant="outline"
            >
              Tips
            </Badge>
          </span>
        </h1>
      </div>
      <div className="space-y-3 dark:text-slate-50">
        <p className="leading-6 text-lg whitespace-pre-line [&:not(:first-child)]:mt-3">
          {props.content}
        </p>
      </div>
    </div>
  )
}

export default PostContent
