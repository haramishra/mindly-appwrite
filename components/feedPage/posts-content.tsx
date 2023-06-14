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
      <div className="space-y-3 dark:text-slate-50 relative">
        {!props.nsfw && (
          <p className="leading-7 whitespace-pre-line [&:not(:first-child)]:mt-3">
            {props.content.slice(0, 500)}
          </p>
        )}

        {props.nsfw && (
          <div className="relative h-full whitespace-pre-line w-full">
            <p className="blur opacity-80">
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
            <div className="text-center absolute top-[30%] m-auto left-0 right-0 space-y-6">
              <p>This post might contains explicit and triggering content.</p>
              <Button
                className="hover:border-red-900 hover:bg-red-900 px-14"
                variant={"outline"}
              >
                View
              </Button>
            </div>
          </div>
        )}

        {props.content.length > 500 && (
          <div className="absolute bottom-0 bg-gradient-to-t from-background h-28 w-full"></div>
        )}
      </div>
    </div>
  )
}

export default PostCardContent
