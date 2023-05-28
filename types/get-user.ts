// export interface AuthError

import { UserObject } from "./auth"

export type GetUserHook = [UserObject | undefined, boolean, undefined | any]
