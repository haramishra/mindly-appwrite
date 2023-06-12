import { AddCommnet } from "./add-comments"

function CommentsContainer({ postId }: { postId: string }) {
  const getComments = () => {}

  return (
    <div>
      <AddCommnet addComments={() => console.log("add")} postID={postId} />
    </div>
  )
}

export default CommentsContainer
