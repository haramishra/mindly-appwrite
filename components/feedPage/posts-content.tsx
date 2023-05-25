import { Badge } from "@/components/ui/badge"

function PostContent() {
  return (
    <div>
      <div className="mb-4">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Your company need a website.
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
        </h3>
      </div>
      <div className="space-y-3 dark:text-slate-50">
        <p className="leading-7 [&:not(:first-child)]:mt-3">
          The king, seeing how much happier his subjects were, realized the
          error of his ways and repealed the joke tax. The king, seeing how much
          happier
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-3">
          his subjects were, realized the error of his ways and repealed the
          joke tax.The king,
        </p>
      </div>
    </div>
  )
}

export default PostContent
