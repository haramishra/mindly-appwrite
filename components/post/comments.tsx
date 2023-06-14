import { useEffect, useState } from "react"
import { Query } from "appwrite"

import {
  COMMENTS_COLLECTION_ID,
  MINDLY_DB_DATABASE_ID,
  account,
  database,
} from "../appwrite/config"
import { AddCommnet } from "./add-comments"
import Comment from "./comment"
import { CommentsLoader } from "./loader"

function CommentsContainer({ postId }: { postId: string }) {
  const Democomments: any = [
    {
      $id: "dslfj",
      userID: "sldfj",
      userName: "pipy_pily",
      avatarFallback: "pp",
      content: "this is a demo comment for ui usages",
      time: "4min ago",
    },
    {
      $id: "dsledfj",
      userID: "sldfjsdf",
      userName: "pihey_sdfily",
      avatarFallback: "ps",
      content:
        " this is a demo comment for ui usages this is a demo comment for ui usages this is a demo comment for ui usages this is a demo comment for ui usages this is a demo comment for ui usages",
      time: "4min ago",
    },
    {
      $id: "dsfeslfj",
      userID: "sldecfj",
      userName: "pshw_slien",
      avatarFallback: "ps",
      content:
        "this is a demo comment for ui usages this is a demo comment for ui usages",
      time: "4min ago",
    },
  ]

  const [comments, setComments] = useState<any>([])
  const [loading, setLoading] = useState(false)

  const getComments = (postId: string) => {
    setLoading(true)
    const getCommentsPromise = database.listDocuments(
      MINDLY_DB_DATABASE_ID,
      COMMENTS_COLLECTION_ID,
      [Query.equal("postId", postId), Query.orderDesc("$updatedAt")]
    )

    getCommentsPromise.then(
      function (response) {
        setLoading(false)
        setComments(response.documents)
        // console.log(response) // Success
      },
      function (error) {
        setLoading(false)
        console.log(error) // Failure
      }
    )
  }

  useEffect(() => {
    getComments(postId)
  }, [postId])

  const addComment = (res: any) => {
    console.log(res)
  }

  if (loading) {
    return <CommentsLoader />
  }

  return (
    <div>
      <AddCommnet addComments={(res: any) => addComment(res)} postId={postId} />

      {comments.length ? (
        <div className="mt-10">
          {comments.map((item: any) => (
            <div className="mb-6" key={item.$id}>
              <Comment comment={item} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center mt-12 font-bold text-2xl text-muted-foreground">
          No comments
        </div>
      )}
    </div>
  )
}

export default CommentsContainer
