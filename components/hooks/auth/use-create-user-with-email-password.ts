import { useCallback, useEffect, useState } from "react"
import { ID } from "appwrite"

import { EmailAndPasswordActionHook, UserObject } from "@/types/auth"
import { FunctionObject } from "@/types/function"
import { functions } from "@/components/appwrite/config"

function UseCreateUserWithEmailPassword(
  account: any
): EmailAndPasswordActionHook {
  const [user, setUser] = useState<undefined | UserObject>(undefined)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<undefined | string>(undefined)

  useEffect(() => {
    if (user) {
      const promise = functions.createExecution("createUser")

      promise.then(
        function (response) {
          console.log(response)
          return response // Success
        },
        function (error) {
          return error // Failure
        }
      )
    }
  }, [user])

  const createUserWithEmailPassword = useCallback<
    (email: string, password: string) => void
  >(
    (email: string, password: string) => {
      setLoading(true)
      const promise = account.create(ID.unique(), email, password)
      promise.then(
        function (res: UserObject | undefined) {
          const promise = functions.createExecution("createUser")

          promise.then(
            function (response) {
              console.log(response)
              setUser(res) // Success
              setLoading(false)
            },
            function (error) {
              setError(error.message)
            }
          )
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
