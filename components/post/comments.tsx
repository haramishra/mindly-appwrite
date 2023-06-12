import {
  COMMENTS_COLLECTION_ID,
  MINDLY_DB_DATABASE_ID,
  database,
} from "../appwrite/config"
import { AddCommnet } from "./add-comments"
import Comment from "./comment"

function CommentsContainer({ postId }: { postId: string }) {
  const comments: any = [
    // {
    //   $id: "dslfj",
    //   userID: "sldfj",
    //   userName: "pipy_pily",
    //   avatarFallback: "pp",
    //   content: "this is a demo comment for ui usages",
    //   time: "4min ago",
    // },
    // {
    //   $id: "dsledfj",
    //   userID: "sldfjsdf",
    //   userName: "pihey_sdfily",
    //   avatarFallback: "ps",
    //   content:
    //     " this is a demo comment for ui usages this is a demo comment for ui usages this is a demo comment for ui usages this is a demo comment for ui usages this is a demo comment for ui usages",
    //   time: "4min ago",
    // },
    // {
    //   $id: "dsfeslfj",
    //   userID: "sldecfj",
    //   userName: "pshw_slien",
    //   avatarFallback: "ps",
    //   content:
    //     "this is a demo comment for ui usages this is a demo comment for ui usages",
    //   time: "4min ago",
    // },
  ]

  const getComments = () => {
    const getCommentsPromise = database.listDocuments(
      MINDLY_DB_DATABASE_ID,
      COMMENTS_COLLECTION_ID
    )

    getCommentsPromise.then(
      function (response) {
        console.log(response) // Success
      },
      function (error) {
        console.log(error) // Failure
      }
    )
  }

  return (
    <div>
      <AddCommnet
        addComments={(res: any) => console.log(res, "add")}
        postID={postId}
      />

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
