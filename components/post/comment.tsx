import { UserAvatar } from "../feedPage/avatar"
import { Icons } from "../icons"

function Comment({ comment }: { comment: any }) {
  return (
    <>
      <div className="flex  gap-4">
        <UserAvatar src="" fallbackText={comment.avatarFallback} />

        <div className=" gap-4  justify-between items-center rounded-lg p-4 pt-0">
          <div className="flex gap-3  w-4/5 justify-between">
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
