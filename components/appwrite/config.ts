import { Account, Client, Databases, Functions } from "appwrite"

const client = new Client()

export const APPWRITE_ENDPOINT = process.env.NEXT_PUBLIC_API_END_POINT
export const APPWRITE_PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID

client.setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT_ID)

export const account = new Account(client)
export const database = new Databases(client)
export const functions = new Functions(client)
