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
import useGetCurrentUser from "../hooks/account/use-get-current-account-hook"
import { Button } from "../ui/button"
import AddPost from "./addPost"
import { PostsCard } from "./posts-card"
import RightContainer from "./right-container"

export function FeedPage() {
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
      [Query.limit(limit), Query.offset(offset), Query.orderDesc("$updatedAt")]
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
      [Query.limit(limit), Query.offset(offset)]
    )

    setPosts([...posts, ...morePosts.documents])
  }

  useEffect(() => {
    if (user) {
      getPosts()
      // console.log(posts)
    }
  }, [user])

  return (
    <div>
      <div className="md:flex gap-12">
        <div>
          <AddPost
            add={(newPost: Post) => setPosts([newPost, ...posts])}
            currentUser={user}
          />
          {posts.map((post: any, i: number) => (
            <div key={i}>
              <PostsCard {...post} />
            </div>
          ))}
          <Button onClick={loadMorePosts}>Load more</Button>
        </div>
        <RightContainer />
      </div>
    </div>
  )
}
