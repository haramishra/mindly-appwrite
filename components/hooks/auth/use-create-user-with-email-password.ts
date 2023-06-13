import { useCallback, useEffect, useState } from "react"
import { ID } from "appwrite"
import { promise } from "zod"

import { EmailAndPasswordActionHook, UserObject } from "@/types/auth"
import { FunctionObject } from "@/types/function"
import { functions } from "@/components/appwrite/config"

import useLoginUserWithEmailPassword from "./use-login-user-with-email-password"

function UseCreateUserWithEmailPassword(
  account: any
): EmailAndPasswordActionHook {
  const [user, setUser] = useState<undefined | UserObject>(undefined)
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
