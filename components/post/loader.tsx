import { Skeleton } from "@/components/ui/skeleton"

export function PostLoader() {
  return (
    <div className="flex max-w-2xl items-center space-x-4 rounded-lg border p-8 lg:min-w-[550px]">
      <div className="space-y-2">
        <Skeleton className="h-6 w-[250px] md:w-[550px]" />
        <div className="h-4 "></div>
        <Skeleton className="h-4 w-[250px] md:w-[450px]" />
        <Skeleton className="h-4 w-[250px] md:w-[450px]" />
        <Skeleton className="h-4 w-[250px] md:w-[450px]" />
        {/* <Skeleton className="h-4 md:w-[450px] w-[250px]" /> */}
        {/* <Skeleton className="h-4 md:w-[450px] w-[250px]" /> */}
        {/* <Skeleton className="h-4 md:w-[450px] w-[250px]" />  */}
      </div>
    </div>
  )
}

export function CommentsLoader() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
