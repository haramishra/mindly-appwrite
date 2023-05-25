import { Icons } from "../icons"
import { Button } from "../ui/button"

function PostsBUttons() {
  return (
    <div className="flex justify-between w-full md:px-10 text-slate-400">
      <Button variant="ghost">
        <Icons.bookmark />
      </Button>
      <Button variant="ghost" className="space-x-2">
        <Icons.comments />
        <span>10</span>
      </Button>
      <Button variant="ghost">
        <Icons.moreVertical />
      </Button>
    </div>
  )
}

export default PostsBUttons
