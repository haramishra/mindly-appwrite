import { useCallback, useState } from "react"

import { EmailAndPasswordLoginActionHook } from "@/types/login"
import { SessionObject } from "@/types/session"

function useLoginUserWithEmailPassword(
  account: any
): EmailAndPasswordLoginActionHook {
  const [user, setUser] = useState<undefined | SessionObject>(undefined)
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
        function (res: SessionObject | undefined) {
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
