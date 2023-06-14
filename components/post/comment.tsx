import { UserAvatar } from "../feedPage/avatar"
import { useGetAvatar } from "../hooks/account/use-get-avatar"
import { Icons } from "../icons"

function Comment({ comment }: { comment: any }) {
  const avatar = useGetAvatar(comment.userId)
  return (
    <>
      <div className="flex  gap-4">
        <UserAvatar src={avatar} fallbackText={""} />

        <div className=" items-center  justify-between gap-4 rounded-lg p-4 pt-0">
          <div className="flex w-4/5  justify-between gap-3">
            {/* <h3 className=" font-semibold ">{comment.userName}</h3> */}
            <p>{comment.content}</p>

            {/* <div>
              <Icons.moreVertical />
            </div> */}
          </div>
          <p className="text-xs text-muted-foreground">{comment.time}</p>
        </div>
      </div>
    </>
  )
}

export default Comment
