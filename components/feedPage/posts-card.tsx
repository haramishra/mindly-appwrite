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

export function PostsCard(props: { post: Post; currentUser: string }) {
  const avatar = useGetAvatar(props.post.userId)

  return (
    <Card className="max-w-2xl lg:min-w-[550px] mb-4">
      <Link href={`/feed/${props.post.$id}`}>
        <CardHeader>
          <CardTitle>
            <AvatarWithUID
              image={avatar}
              name={props.post.userName}
              subtext={moment(props.post.$createdAt).fromNow()}
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <PostCardContent
            nsfw={props.post.nsfw}
            tag={props.post.tag}
            content={props.post.content}
            title={props.post.title}
          />
        </CardContent>
      </Link>
      <CardFooter>
        <PostsBUttons
          userId={props.post.userId}
          title={props.post.title}
          postId={props.post.$id}
          currentUser={props.currentUser}
        />
      </CardFooter>
    </Card>
  )
}
