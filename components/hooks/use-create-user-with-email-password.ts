import { useCallback, useState } from "react"
import { ID } from "appwrite"

import { EmailAndPasswordActionHook, UserObject } from "../types/auth"

function UseCreateUserWithEmailPassword(
  account: any
): EmailAndPasswordActionHook {
  const [user, setUser] = useState<undefined | UserObject>(undefined)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<undefined | string>(undefined)

  const createUserWithEmailPassword = useCallback<
    (email: string, password: string) => void
  >(
    (email: string, password: string) => {
      setLoading(true)
      const promise = account.create(ID.unique(), email, password)
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
    },
    [account]
  )

  return [createUserWithEmailPassword, user, loading, error]
}

export default UseCreateUserWithEmailPassword
