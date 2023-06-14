"use client"

import { useEffect, useState } from "react"
import { Query } from "appwrite"

import { Post } from "@/types/post"

import {
  MINDLY_DB_DATABASE_ID,
  POSTS_COLLECTION_ID,
  account,
  database,
} from "../appwrite/config"
import AddPost from "../feedPage/add-post"
import { PostsCard } from "../feedPage/posts-card"
import RightContainer from "../feedPage/right-container"
import useGetCurrentUser from "../hooks/account/use-get-current-account-hook"
import { PostLoader } from "../post/loader"
import { Button } from "../ui/button"

function TagPage(props: any) {
  const limit = 10
  const [posts, setPosts] = useState<any>([])
  const [offset, setOffset] = useState(0)
  const [user, loading, error] = useGetCurrentUser(account)
  const [totalPosts, setTotalPosts] = useState(0)

  // Page 1
  const getPosts = async () => {
    const postData = await database.listDocuments(
      MINDLY_DB_DATABASE_ID,
      POSTS_COLLECTION_ID,
      [
        Query.limit(limit),
        Query.offset(offset),
        Query.orderDesc("$updatedAt"),
        Query.equal("tag", props.param),
      ]
    )
    // console.log(postData)
    setPosts([...posts, ...postData.documents])
    setTotalPosts(postData.total)
  }

  const loadMorePosts = async () => {
    setOffset(offset + limit)
    const morePosts = await database.listDocuments(
      MINDLY_DB_DATABASE_ID,
      POSTS_COLLECTION_ID,
      [
        Query.limit(limit),
        Query.offset(offset),
        Query.orderDesc("$updatedAt"),
        Query.equal("tag", props.param),
      ]
    )

    setPosts([...posts, ...morePosts.documents])
  }

  useEffect(() => {
    if (user) {
      getPosts()
      // console.log(posts)
    }
  }, [user])

  if (posts.length === 0 || totalPosts === 0) {
    return (
      <div className="flex">
        <h2 className="text-muted-foreground w-4/5 text-center text-2xl font-bold">
          Oops! No posts found.
        </h2>
        <RightContainer />
      </div>
    )
  }
  return (
    <div className="flex gap-8">
      <div>
        <h1 className="text-xl my-6 font-bold">Tag: {props.param}</h1>
        {posts.length > 0 ? (
          <div>
            {posts.map((post: any, i: number) => (
              <div key={i}>
                <PostsCard post={post} currentUser={user?.$id || ""} />
              </div>
            ))}
          </div>
        ) : (
          <PostLoader />
        )}
        {posts.length === totalPosts ? (
          <Button
            onClick={loadMorePosts}
            variant={"outline"}
            className="w-full"
            disabled
          >
            You have reached the end.
          </Button>
        ) : (
          <Button
            onClick={loadMorePosts}
            variant={"outline"}
            className="w-full"
          >
            Load more
          </Button>
        )}
      </div>
      <RightContainer />
    </div>
  )
}

export default TagPage
