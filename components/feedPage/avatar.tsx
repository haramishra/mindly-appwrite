import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UserAvatar(props: { src: string; fallbackText: string }) {
  return (
    <Avatar>
      <AvatarImage src={props.src} />
      <AvatarFallback>{props.fallbackText}</AvatarFallback>
    </Avatar>
  )
}

function AvatarWithUID(props: {
  name: string
  subtext: string
  image: string
}) {
  const placeholderImg =
    "https://api.dicebear.com/6.x/lorelei/svg?seed=Spooky&backgroundType=gradientLinear&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf"
  return (
    <div>
      <div className="flex items-center space-x-4">
        <UserAvatar src={props.image ?? placeholderImg} fallbackText="om" />
        <div>
          <p className="text-sm font-medium leading-none">
            {props.name ?? "Sofia Davis"}
          </p>
          <p className="text-xs text-muted-foreground">
            {props.subtext ?? "6hrs ago"}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AvatarWithUID
