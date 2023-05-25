import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function AvatarWithUID() {
  return (
    <div>
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src="https://api.dicebear.com/6.x/lorelei/svg?seed=Spooky&backgroundType=gradientLinear&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium leading-none">Sofia Davis</p>
          <p className="text-xs text-muted-foreground">6hrs ago</p>
        </div>
      </div>
    </div>
  )
}

export default AvatarWithUID
