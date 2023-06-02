import { useCallback, useState } from "react"

import { EmailAndPasswordActionHook, UserObject } from "@/types/auth"

function useLoginUserWithEmailPassword(
  account: any
): EmailAndPasswordActionHook {
  const [user, setUser] = useState<undefined | UserObject>(undefined)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<undefined | string>(undefined)

  const loginUserWithEmailPassword = useCallback<
    (email: string, password: string) => void
  >(
    (email: string, password: string) => {
        console.log("fireing")
      setLoading(true)
      const promise = account.createEmailSession(email, password)
      promise.then(
        function (res: UserObject | undefined) {
          setUser(res)
           // Success
          setLoading(false)
        },
        function (error: any) {
          setError(error.message) // Failure
          setLoading(false)
        }
      )
    },
    [account]
  )

  return [loginUserWithEmailPassword, user, loading, error]
}

export default useLoginUserWithEmailPassword
