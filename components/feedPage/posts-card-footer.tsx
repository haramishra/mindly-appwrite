import { ID, Permission, Query, Role } from "appwrite"

import {
  MINDLY_DB_DATABASE_ID,
  SAVED_POSTS_COLLECTION_ID,
  database,
} from "../appwrite/config"
import { Icons } from "../icons"
import { Button } from "../ui/button"
import { toast, useToast } from "../ui/use-toast"
import PostMenu from "./post-options"

function PostsBUttons({
  userId,
  title,
  postId,
  currentUser,
}: {
  userId: string
  title: string
  postId: string
  currentUser: string
}) {
  const { toast } = useToast()

  // userId = user which the saved post list belonges
  // postedBy = user which the post belongs

  const checkForDublicate = async (userId: string, postId: string) => {
    const promise = await database.listDocuments(
      MINDLY_DB_DATABASE_ID,
      SAVED_POSTS_COLLECTION_ID,
      [Query.equal("userId", userId), Query.equal("postId", postId)]
    )

    console.log(promise)

    if (promise.total === 0) return false

    return true
  }

  const savePost = async (
    userId: string,
    title: string,
    postId: string,
    postBy: string
  ) => {
    const body = {
      userId,
      title,
      postId,
      postBy,
    }

    const isDublicate = await checkForDublicate(userId, postId)

    if (isDublicate) {
      toast({
        title: "This post already saved ",
        description: "You have alreasy saved this post, check your profile.",
      })
    }

    if (!isDublicate) {
      const promise = database.createDocument(
        MINDLY_DB_DATABASE_ID,
        SAVED_POSTS_COLLECTION_ID,
        ID.unique(),
        body,
        [Permission.delete(Role.user(userId))]
      )

      promise.then(
        function (response) {
          toast({
            title: "Post saved.",
          })
        },
        function (error) {
          console.log(error) // Failure
        }
      )
    }
  }

  return (
    <div className="flex justify-between w-full md:px-10 text-slate-400">
      <Button
        variant="ghost"
        onClick={() => savePost(currentUser, title, postId, userId)}
      >
        <Icons.bookmark />
      </Button>

      <Button variant="ghost" className="space-x-2">
        <Icons.comments />
      </Button>

      <PostMenu />
    </div>
  )
}

export default PostsBUttons
