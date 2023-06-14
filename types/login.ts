import { SessionObject } from "./session"

export type AuthActionHook<M> = [
  M,
  SessionObject | undefined,
  boolean,
  undefined | any
]

export type EmailAndPasswordLoginActionHook = AuthActionHook<
  (email: string, password: string) => void
>
