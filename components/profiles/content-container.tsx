import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import UserPosts from "./posts"

function ContentContainer() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Tabs
        defaultValue="saved"
        className="flex flex-col justify-center items-center gap-4"
      >
        <TabsList>
          <TabsTrigger value="saved">Saved Posts</TabsTrigger>
          <TabsTrigger value="posts">My Posts</TabsTrigger>
        </TabsList>
        <TabsContent value="saved">saved content</TabsContent>
        <TabsContent value="posts">
          <UserPosts />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ContentContainer
