import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import UserPosts from "./posts"
import SavedPosts from "./saved-posts"

function ContentContainer() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Tabs
        defaultValue="saved"
        className="flex flex-col items-center justify-center gap-4"
      >
        <TabsList>
          <TabsTrigger value="saved">Saved Posts</TabsTrigger>
          <TabsTrigger value="posts">My Posts</TabsTrigger>
        </TabsList>
        <TabsContent value="saved">
          <SavedPosts />
        </TabsContent>
        <TabsContent value="posts">
          <UserPosts />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ContentContainer
