import { Account, Client, Databases } from "appwrite"

const client = new Client()

client
  .setEndpoint(process.env.NEXT_PUBLIC_API_END_POINT)
  .setProject(process.env.NEXT_PUBLIC_API_END_POINT)

export const account = new Account(client)

export const database = new Databases(client)
