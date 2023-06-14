import { useEffect, useState } from "react"
import { Query } from "appwrite"

import {
  MINDLY_DB_DATABASE_ID,
  POSTS_COLLECTION_ID,
  SAVED_POSTS_COLLECTION_ID,
  account,
  database,
} from "../appwrite/config"
import { PostsCard } from "../feedPage/posts-card"
import useGetCurrentUser from "../hooks/account/use-get-current-account-hook"
import { PostLoader } from "../post/loader"
import { Button } from "../ui/button"
import SavedPostCard from "./saved-post-card"

function SavedPosts() {
  const limit = 10
  const [posts, setPosts] = useState<any>([])
  const [offset, setOffset] = useState(0)
  const [user, loading, error] = useGetCurrentUser(account)
  const [totalPosts, setTotalPosts] = useState(0)

  // Page 1
  const getPosts = async () => {
    const postData = await database.listDocuments(
      MINDLY_DB_DATABASE_ID,
      SAVED_POSTS_COLLECTION_ID,
      [
        Query.limit(limit),
        Query.offset(offset),
        Query.orderDesc("$updatedAt"),
        Query.equal("userId", [user?.$id || ""]),
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

  if (!posts || loading) {
    return <PostLoader />
  }

  return (
    <div>
      {posts.map((post: any, i: number) => (
        <div key={i}>
          <SavedPostCard
            postId={post.postId}
            userId={post.userId}
            title={post.title}
            postBy={post.postBy}
          />
        </div>
      ))}
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
        <Button onClick={loadMorePosts} variant={"outline"} className="w-full">
          Load more
        </Button>
      )}
    </div>
  )
}

export default SavedPosts
