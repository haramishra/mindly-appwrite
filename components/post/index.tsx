"use client"

import CommentsContainer from "./comments"
import PostContent from "./post"

function FeedPost({ postID }: { postID: string }) {
  return (
    <>
      <PostContent postID={postID} />
      <CommentsContainer postId="postID" />
    </>
  )
}

export default FeedPost
