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

export function PostsCard() {
  return (
    <Card className="w-5xl">
      <CardHeader>
        <CardTitle>
          <AvatarWithUID />
        </CardTitle>
        {/* <CardDescription>You have 3 unread messages.</CardDescription> */}
      </CardHeader>
      <CardContent>
        <PostContent />
      </CardContent>
      <CardFooter>
        <PostsBUttons />
      </CardFooter>
    </Card>
  )
}
