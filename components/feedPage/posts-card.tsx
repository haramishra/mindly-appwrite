import Link from "next/link"

import { Post } from "@/types/post"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import AvatarWithUID from "./avatar"
import PostsBUttons from "./posts-card-footer"
import PostCardContent from "./posts-content"

export function PostsCard(props: Post) {
  return (
    <Link href={`/feed/${props.$id}`}>
      <Card className="max-w-2xl hover:border-muted-foreground mb-4">
        <CardHeader>
          <CardTitle>
            <AvatarWithUID />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <PostCardContent content={props.content} title={props.title} />
        </CardContent>
        <CardFooter>
          <PostsBUttons />
        </CardFooter>
      </Card>
    </Link>
  )
}
