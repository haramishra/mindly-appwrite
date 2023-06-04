"use client"

import { useRef, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

import useAutosizeTextArea from "../hooks/ui/use-auto-height-textarea"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { UserAvatar } from "./avatar"

const FormSchema = z.object({
  content: z
    .string()
    .min(10, {
      message: "Post must be at least 10 characters.",
    })
    .max(1000, {
      message: "Post must not be longer than 1000 characters.",
    }),
  title: z
    .string()
    .min(5, {
      message: "Post title must be at least 5 characters.",
    })
    .max(200, {
      message: "title must not be longer than 200 characters",
    }),
})
function AddPost() {
  const [showInputs, setShowInputs] = useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      content: "",
      title: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("submit")
  }

  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useAutosizeTextArea(textAreaRef.current, form.watch("content"))

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex rounded-lg border p-6 gap-3 mb-4">
          <div className={`${!showInputs && "mt-3"}`}>
            <UserAvatar
              src="https://api.dicebear.com/6.x/lorelei/svg?seed=Spoohky&backgroundType=gradientLinear&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf"
              fallbackText="pp"
            />
          </div>

          <div className="w-full flex flex-col gap-3 ">
            <div className="space-y-3">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Title of your post"
                        className={`py-6 px-3 rounded-lg ${
                          showInputs ? "block" : "hidden"
                        }`}
                        {...field}
                      />
                    </FormControl>
                    {form.watch("title").length > 0 && (
                      <FormDescription>{`${
                        form.watch("title").length
                      }/200`}</FormDescription>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Write down your thoughts."
                        onFocus={() => setShowInputs(true)}
                        {...field}
                        ref={textAreaRef}
                        className="overflow-hidden"
                      />
                    </FormControl>
                    {form.watch("content").length > 0 && (
                      <FormDescription>{`${
                        form.watch("content").length
                      }/1000`}</FormDescription>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              className={`w-fit self-end px-10 ${
                showInputs ? "block" : "hidden"
              }`}
              type="submit"
            >
              Post
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}

export default AddPost
