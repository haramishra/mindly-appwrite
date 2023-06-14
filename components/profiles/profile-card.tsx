import { UserObject } from "@/types/auth"

import { useGetAvatar } from "../hooks/account/use-get-avatar"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Separator } from "../ui/separator"

function ProfileCard({ user }: { user: UserObject | undefined }) {
  const avatar = useGetAvatar(user?.$id || "")

  return (
    <div className="flex flex-col items-center justify-center">
      <Avatar className="h-40 w-40">
        <AvatarImage src={avatar || ""} />
        <AvatarFallback>{""}</AvatarFallback>
      </Avatar>

      <h1 className="pt-5 text-3xl font-semibold">{user?.name}</h1>

      <div className="mb-8" />
      {/* <Separator className="my-10" /> */}
    </div>
  )
}

export default ProfileCard
