import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Separator } from "../ui/separator"

function ProfileCard(props: any) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Avatar className="h-40 w-40">
        <AvatarImage src={props.src || ""} />
        <AvatarFallback>{props.fallbackText || "hp"}</AvatarFallback>
      </Avatar>

      <h1 className="pt-5 text-3xl font-semibold">pink_pipp</h1>

      <Separator className="my-10" />
    </div>
  )
}

export default ProfileCard
