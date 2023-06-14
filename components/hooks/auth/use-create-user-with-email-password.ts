import { useCallback, useState } from "react"
import { ID } from "appwrite"

import { EmailAndPasswordActionHook } from "@/types/auth"
import { SessionObject } from "@/types/session"
import { functions } from "@/components/appwrite/config"

function UseCreateUserWithEmailPassword(
  account: any
): EmailAndPasswordActionHook {
  const [user, setUser] = useState<undefined | SessionObject>(undefined)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<undefined | string>(undefined)

  const createUserWithEmailPassword = useCallback<
    (email: string, password: string) => Promise<any>
  >(
    async (email: string, password: string) => {
      setLoading(true)

      try {
        const createAccount = await account.create(ID.unique(), email, password)
        const loginAcocunt = await account.createEmailSession(email, password)
        const createCollection = await functions
          .createExecution("createUser")
          .then((res) => setUser(loginAcocunt))
      } catch (error: any) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    },
    [account]
  )

  return [createUserWithEmailPassword, user, loading, error]
}

export default UseCreateUserWithEmailPassword
