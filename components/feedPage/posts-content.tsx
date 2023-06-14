import { Badge } from "@/components/ui/badge"

import { Button } from "../ui/button"

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
              {props.tag}
            </Badge>
          </span>
        </h3>
      </div>
      <div className="relative space-y-3 dark:text-slate-50">
        {!props.nsfw && (
          <p className="whitespace-pre-line leading-7 [&:not(:first-child)]:mt-3">
            {props.content.slice(0, 500)}
          </p>
        )}

        {props.nsfw && (
          <div className="relative h-full w-full whitespace-pre-line">
            <p className="opacity-80 blur">
              Donec a commodo mauris. Donec sollicitudin mollis commodo. Nullam
              at nibh ac nisl pretium semper. Praesent nunc dolor, viverra at
              tristique vitae, ullamcorper eget elit. Etiam eleifend ut nibh
              feugiat tincidunt. Duis tempor eget tellus non porttitor. <br />{" "}
              <br />
              Sed volutpat lorem massa, eu posuere ligula ullamcorper eget. In
              sodales erat non massa malesuada. <br /> <br /> et faucibus neque
              finibus. Etiam ante sem, varius a accumsan sed, imperdiet nec
              elit. Sed id vulputate odio.
            </p>
            <div className="absolute inset-x-0 top-[30%] m-auto space-y-6 text-center">
              <p>This post might contains explicit and triggering content.</p>
              <Button
                className="px-14 hover:border-red-900 hover:bg-transparent"
                variant={"outline"}
              >
                View
              </Button>
            </div>
          </div>
        )}

        {props.content.length > 500 && (
          <div className="absolute bottom-0 h-28 w-full bg-gradient-to-t from-background"></div>
        )}
      </div>
    </div>
  )
}

export default PostCardContent
