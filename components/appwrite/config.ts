import { Account, Client, Databases, Functions } from "appwrite"

const client = new Client()

export const APPWRITE_ENDPOINT = process.env.NEXT_PUBLIC_API_END_POINT
export const APPWRITE_PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID

export const MINDLY_DB_DATABASE_ID = "6469db4675eba906b2ff"
export const USER_COLLECTION_ID = "6469db66cffc8f1ac755"
export const POSTS_COLLECTION_ID = "6469db77d5fa468db513"
export const COMMENTS_COLLECTION_ID = "646a2f3439f58b8b62b0"
export const SAVED_POSTS_COLLECTION_ID = "6469db96389d310baaca"

client.setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT_ID)

export const account = new Account(client)
export const database = new Databases(client)
export const functions = new Functions(client)
