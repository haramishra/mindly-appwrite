import moment from "moment"

import AvatarWithUID, { UserAvatar } from "../feedPage/avatar"
import { useGetAvatar } from "../hooks/account/use-get-avatar"
import { Icons } from "../icons"

function Comment({ comment }: { comment: any }) {
  const avatar = useGetAvatar(comment.userId)
  return (
    <>
      <div className="flex  gap-4">
        {/* <AvatarWithUID
          image={avatar}
          name={comment.userName}
          // subtext={moment(comment.updatedAt).fromNow()}
        /> */}

        <UserAvatar src={avatar} fallbackText="" />

        <div className=" items-center w-full justify-between gap-4 rounded-lg p-4 pt-0">
          <div className="flex w-full  justify-between gap-3">
            <div className=" gap-2">
              <span>
                <h3 className=" font-semibold ">{comment.userName}</h3>
              </span>
              <span>
                <p>{comment.content}</p>
              </span>
            </div>

            <div>
              <Icons.moreVertical />
            </div>
          </div>
          <p className="text-muted-foreground text-xs">
            {moment(comment.$createdAt).fromNow()}
          </p>
        </div>
      </div>
    </>
  )
}

export default Comment
