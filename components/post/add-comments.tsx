"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { ID, Permission, Role } from "appwrite"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { account, database } from "../appwrite/config"
import { UserAvatar } from "../feedPage/avatar"
import { useGetAvatar } from "../hooks/account/use-get-avatar"
import useGetCurrentUser from "../hooks/account/use-get-current-account-hook"
import { Textarea } from "../ui/textarea"
import { CommentsLoader } from "./loader"

const FormSchema = z.object({
  comment: z
    .string()
    .max(100, {
      message: "Comments must be less than 100 characters.",
    })
    .min(2, { message: "Comments must be at least 2 characters long." }),
})

export function AddCommnet({
  addComments,
  postId,
}: {
  addComments: Function
  postId: string
}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      comment: "",
    },
  })

  const [user, loading, error] = useGetCurrentUser(account)
  const avatar = useGetAvatar(user?.$id || "")

  if (loading) {
    return <CommentsLoader />
  }

  const cleanup = () => {
    form.reset()
  }

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const { comment } = data
    console.log(user)
    const body = {
      userId: user?.$id,
      userName: user?.name,
      content: comment,
      postId: postId,
    }
    if (user) {
      const dbPromise = database.createDocument(
        "6469db4675eba906b2ff",
        "646a2f3439f58b8b62b0",
        ID.unique(),
        body,
        [Permission.delete(Role.user(user.$id))]
      )

      dbPromise.then(
        function (response) {
          console.log(response) // Success
          cleanup()
          addComments(response)
          console.log(response)
        },
        function (error) {
          console.log(error) // Failure
        }
      )
    }
    // console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex w-full max-w-full items-start space-x-3">
          <div className="mr-4">
            <UserAvatar src={avatar} fallbackText="" />
          </div>
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem className="w-3/4">
                {/* <FormLabel>Username</FormLabel> */}
                <FormControl>
                  <Input
                    placeholder="Post Your comment"
                    {...field}
                    className="self-stretch"
                  />
                </FormControl>
                {/* <FormDescription>{`${
                  form.watch("comment").length
                }/100`}</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className=" px-12" variant={"secondary"}>
            Comment
          </Button>
        </div>
      </form>
    </Form>
  )
}
