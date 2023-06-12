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
      .catch((err: Post) => {
        console.log(err)
      })
  }

  useEffect(() => {
    if (postID) {
      getPost()
    }
  }, [postID])

  return (
    <>
      <PostContent content={post?.content || ""} title={post?.title || ""} />
      <Separator />
      <CommentsContainer postId="postID" />
    </>
  )
}

export default FeedPost
