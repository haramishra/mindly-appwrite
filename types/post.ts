export interface Post {
  $collectionId: string
  $createdAt: string
  $databaseId: string
  $id: string
  $permissions: string[]
  $updatedAt: string
  commentsCount: number
  content: string
  name: string
  nsfw: boolean
  title: string
  userId: string
}
