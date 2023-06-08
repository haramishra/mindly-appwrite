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
import PostContent from "./posts-content"

export function PostsCard(props: Post) {
  return (
    <Card className="max-w-2xl">
      <CardHeader>
        <CardTitle>
          <AvatarWithUID />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <PostContent content={props.content} title={props.title} />
      </CardContent>
      <CardFooter>
        <PostsBUttons />
      </CardFooter>
    </Card>
  )
}
