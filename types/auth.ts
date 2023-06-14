import { SessionObject } from "./session"

interface HashOptions {
  type: string
  memoryCost: number
  timeCost: number
  threads: number
}

interface Prefs {
  avatar: string
}

export interface UserObject {
  $id: string
  $createdAt: string
  $updatedAt: string
  name: string
  password: string
  hash: string
  hashOptions: HashOptions
  registration: string
  status: boolean
  passwordUpdate: string
  email: string
  phone: string
  emailVerification: boolean
  phoneVerification: boolean
  prefs: Prefs
}

// export interface AuthError

export type AuthActionHook<M> = [
  M,
  SessionObject | undefined,
  boolean,
  undefined | any
]

export type EmailAndPasswordActionHook = AuthActionHook<
  (email: string, password: string) => Promise<any>
>
