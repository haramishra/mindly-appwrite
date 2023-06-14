import Link from "next/link"
import moment from "moment"

import { Post } from "@/types/post"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { useGetAvatar } from "../hooks/account/use-get-avatar"
import AvatarWithUID from "./avatar"
import PostsBUttons from "./posts-card-footer"
import PostCardContent from "./posts-content"

export function PostsCard(props: Post) {
  const avatar = useGetAvatar(props.userId)

  return (
    <Card className="max-w-2xl lg:min-w-[550px] mb-4">
      <Link href={`/feed/${props.$id}`}>
        <CardHeader>
          <CardTitle>
            <AvatarWithUID
              image={avatar}
              name={props.userName}
              subtext={moment(props.$createdAt).fromNow()}
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <PostCardContent nsfw={props.nsfw} tag={props.tag} content={props.content} title={props.title} />
        </CardContent>
      </Link>
      <CardFooter>
        <PostsBUttons />
      </CardFooter>
    </Card>
  )
}
