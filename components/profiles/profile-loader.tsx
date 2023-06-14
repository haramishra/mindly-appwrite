import { Skeleton } from "../ui/skeleton"

function ProfileLoader() {
  return (
    <div className="flex flex-col items-center space-y-8">
      <Skeleton className="h-40 w-40 rounded-full" />
      <div className="space-y-4">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
      </div>
    </div>
  )
}

export default ProfileLoader
