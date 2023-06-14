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
  name?: string
  subtext?: string
  image: string
}) {
  const getInnitials = (name: string | undefined, fallback: string): string => {
    if (name && name.length > 0) {
      const nameArray = name.split("_")
      const firstLetter = nameArray[0][0]
      const secondLetter = nameArray[1][0]
      return firstLetter + secondLetter
    }

    return fallback
  }

  // const image = `https://api.dicebear.com/6.x/${props.imageSeed}/svg?seed=Spooky&backgroundType=gradientLinear&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`
  return (
    <div>
      <div className="flex items-center space-x-4">
        <UserAvatar
          src={props.image ?? ""}
          fallbackText={getInnitials(props.name, "hp")}
        />
        <div>
          <p className="text-sm font-medium leading-none">
            {props.name ?? "Sofia Davis"}
          </p>
          <p className="text-xs text-muted-foreground">{props.subtext ?? ""}</p>
        </div>
      </div>
    </div>
  )
}

export default AvatarWithUID
