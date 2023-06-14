"use client"

import { error } from "console"
import { useEffect, useState } from "react"
import { Query, type Models } from "appwrite"

import { Post } from "@/types/post"

import {
  MINDLY_DB_DATABASE_ID,
  POSTS_COLLECTION_ID,
  database,
} from "../appwrite/config"
import RightContainer from "../feedPage/right-container"
import { Separator } from "../ui/separator"
import CommentsContainer from "./comments"
import PostContent from "./post"

function FeedPost({ postID }: { postID: string }) {
  const [post, setPost] = useState<Post>()

  const getPost = () => {
    const getContent = database.listDocuments(
      MINDLY_DB_DATABASE_ID,
      POSTS_COLLECTION_ID,
      [Query.equal("$id", [postID])]
    )

    getContent
      .then((result: Models.DocumentList<Post> | any) => {
        console.log(result.documents[0])
        setPost(result.documents[0])
      })
      .catch((err: any) => {
        console.log(err)
      })
  }

  useEffect(() => {
    if (postID) {
      getPost()
    }
  }, [postID])

  return (
    <div className="gap-8 md:flex ">
      <div className="max-w-2xl lg:min-w-[550px] ">
        {post && <PostContent post={post} />}
        {/* <Separator className="my-8" /> */}
        <CommentsContainer postId="postID" />
      </div>
      <RightContainer />
    </div>
  )
}

export default FeedPost
