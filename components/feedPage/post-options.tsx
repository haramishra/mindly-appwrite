import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Icons } from "../icons"
import { Button } from "../ui/button"

function PostMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Icons.moreVertical />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* <DropdownMenuLabel>Post</DropdownMenuLabel> */}
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuItem onClick={() => console.log("clicked report")}>
          <div className="px-6 text-red-600 cursor-pointer">Report user</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default PostMenu
