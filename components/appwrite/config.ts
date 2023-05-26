import { Account, Client, Databases } from "appwrite"

const client = new Client()

console.log()

client
  .setEndpoint(process.env.NEXT_PUBLIC_API_END_POINT)
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID)

export const account = new Account(client)

export const database = new Databases(client)
