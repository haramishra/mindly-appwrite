import { useCallback, useEffect, useState } from "react"

import { UserObject } from "@/types/auth"
import { GetUserHook } from "@/types/get-user"

function useGetCurrentUser(account: any): GetUserHook {
  const [user, setUser] = useState<undefined | UserObject>(undefined)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<undefined | string>(undefined)

  const getUser = useCallback(() => {
    console.log("fireing")
    setLoading(true)
    const promise = account.get()
    promise.then(
      function (res: UserObject | undefined) {
        setUser(res) // Success
        setLoading(false)
      },
      function (error: any) {
        setError(error.message) // Failure
        setLoading(false)
      }
    )
  }, [account])

  useEffect(() => {
    getUser()
  }, [account])

  return [user, loading, error]
}

export default useGetCurrentUser
