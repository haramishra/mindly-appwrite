import AddPost from "./addPost"
import { PostsCard } from "./posts-card"
import RightContainer from "./right-container"

export function FeedPage() {
  return (
    <div>
      <div className="md:flex gap-12">
        <div>
          <AddPost />
          <PostsCard />
        </div>
        <RightContainer />
      </div>
    </div>
  )
}
