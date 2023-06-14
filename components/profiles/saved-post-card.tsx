import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Ghost } from "lucide-react"
import moment from "moment"

import {
  MINDLY_DB_DATABASE_ID,
  SAVED_POSTS_COLLECTION_ID,
  database,
} from "../appwrite/config"
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
  postBy,
  createdAt,
  id,
  deletePost,
}: {
  title: string
  id: string
  userId: string
  postId: string
  postBy: string
  createdAt: string
  deletePost: Function
}) {
  const avatar = useGetAvatar(postBy)

  return (
    <Card className="max-w-2xl lg:min-w-[550px] mb-4 flex items-center justify-between">
      <CardHeader>
        <CardTitle className="flex w-full justify-center items-center gap-4">
          <UserAvatar src={avatar} fallbackText="" />
          <div className="flex flex-col gap-u">
            {title}
            <CardDescription>{moment(createdAt).fromNow()}</CardDescription>
          </div>
        </CardTitle>
      </CardHeader>

      <CardFooter className="flex items-center justify-center  p-0 px-6">
        <Button variant="ghost" className="" onClick={() => deletePost(id)}>
          <Icons.delete className="text-red-700" />
        </Button>
      </CardFooter>
    </Card>
  )
}

export default SavedPostCard
