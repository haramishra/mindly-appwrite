import { Badge } from "@/components/ui/badge"

function PostCardContent(props: {
  content: string
  title: string
  nsfw: boolean
  tag: string
}) {
  return (
    <div>
      <div className="mb-4">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {props.title}
          <span className="ml-4 space-x-3">
            {props.nsfw && (
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
              {props.tag}
            </Badge>
          </span>
        </h3>
      </div>
      <div className="space-y-3 dark:text-slate-50">
        <p className="leading-7 whitespace-pre-line [&:not(:first-child)]:mt-3">
          {props.content}
        </p>
      </div>
    </div>
  )
}

export default PostCardContent
