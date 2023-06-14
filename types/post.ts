export interface Post {
  $collectionId: string
  $createdAt: string
  $databaseId: string
  $id: string
  $permissions: string[]
  $updatedAt: string
  commentsCount: number
  content: string
  userName: string
  nsfw: boolean
  title: string
  userId: string
  tag: string
  userAvatar: string
}
