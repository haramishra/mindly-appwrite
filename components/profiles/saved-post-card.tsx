import { Ghost } from "lucide-react"

import { UserAvatar } from "../feedPage/avatar"
import { useGetAvatar } from "../hooks/account/use-get-avatar"
import { Icons } from "../icons"
import { Avatar } from "../ui/avatar"
import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"

function SavedPostCard({
  title,
  userId,
  postId,
  postedBy
}: {
  title: string
  userId: string
  postId: string
  postedBy: string
}) {
  const avatar = useGetAvatar(postedBy)

  return (
    <Card className="max-w-2xl lg:min-w-[550px] mb-4 flex items-center justify-between">
      <CardHeader>
        <CardTitle className="flex w-full justify-center items-center gap-4">
          <UserAvatar src={avatar} fallbackText="" />

          {title}
        </CardTitle>
      </CardHeader>

      <CardFooter className="flex items-center justify-center  p-0 px-6">
        <Button variant="ghost" className="">
          <Icons.delete className="text-red-700" />
        </Button>
      </CardFooter>
    </Card>
  )
}

export default SavedPostCard
