"use client"

import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { ID, Permission, Role } from "appwrite"
import { Check, ChevronsUpDown } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { UserObject } from "@/types/auth"
import { Post } from "@/types/post"
import { cn } from "@/lib/utils"
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
import { account, database } from "@/components/appwrite/config"

import { useGetAvatar } from "../hooks/account/use-get-avatar"
import useAutosizeTextArea from "../hooks/ui/use-auto-height-textarea"
import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../ui/command"
import { Input } from "../ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { UserAvatar } from "./avatar"

const tags = [
  { label: "Tips", value: "tips" },
  { label: "Vent", value: "vent" },
  { label: "Advice", value: "advice" },
  { label: "Help", value: "help" },
  { label: "Question", value: "question" },
  { label: "SOS", value: "sos" },
  { label: "Other", value: "other" },
  { label: "Happy", value: "happy" },
  { label: "Good-news", value: "good-news" },
] as const

const FormSchema = z.object({
  content: z
    .string()
    .min(10, {
      message: "Post must be at least 10 characters.",
    })
    .max(5000, {
      message: "Post must not be longer than 5000 characters.",
    }),
  title: z
    .string()
    .min(5, {
      message: "Post title must be at least 5 characters.",
    })
    .max(200, {
      message: "title must not be longer than 200 characters",
    }),
  nsfw: z.boolean().default(false).optional(),
  tag: z.string({
    required_error: "Please select a tag.",
  }),
})
function AddPost(props: {
  add: (post: any) => void
  currentUser: UserObject | undefined
}) {
  const [showInputs, setShowInputs] = useState(false)
  const avatar = useGetAvatar(props.currentUser?.$id)

  const router = useRouter()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      content: "",
      title: "",
      nsfw: false,
    },
  })
  const cleanup = () => {
    form.reset()
    setShowInputs(false)
  }

  function onSubmit(values: z.infer<typeof FormSchema>) {
    if (props.currentUser) {
      const body = {
        content: values.content,
        title: values.title,
        userId: props.currentUser.$id,
        userName: props.currentUser.name,
        nsfw: values.nsfw,
        tag: values.tag,
        userAvatar: props.currentUser.$id,
      }
      console.log(body)
      const dbPromise = database.createDocument(
        "6469db4675eba906b2ff",
        "6469db77d5fa468db513",
        ID.unique(),
        body,
        [Permission.delete(Role.user(props.currentUser.$id))]
      )

      dbPromise.then(
        function (response) {
          console.log(response) // Success
          cleanup()
          props.add(response)
        },
        function (error) {
          console.log(error) // Failure
        }
      )
    }
  }

  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useAutosizeTextArea(textAreaRef.current, form.watch("content"))

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-4 flex max-w-2xl gap-3 rounded-lg border p-6 lg:min-w-[550px]">
          <div className={`${!showInputs && "mt-3"}`}>
            <UserAvatar
              src={avatar}
              fallbackText={props.currentUser?.name.slice(0, 2) || ""}
            />
          </div>

          <div className="flex w-full flex-col gap-3 ">
            <div className="space-y-3">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Title of your post"
                        className={`rounded-lg px-3 py-6 ${
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
                      }/5000`}</FormDescription>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className={`${showInputs ? "block" : "hidden"}`}>
              <FormField
                control={form.control}
                name="tag"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    {/* <FormLabel>Tags</FormLabel> */}
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "w-[200px] justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? tags.find((tag) => tag.value === field.value)
                                  ?.label
                              : "Select a tag"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px] p-0">
                        <Command>
                          <CommandInput placeholder="Search framework..." />
                          <CommandEmpty>No tags found.</CommandEmpty>
                          <CommandGroup>
                            {tags.map((tag) => (
                              <CommandItem
                                value={tag.value}
                                key={tag.value}
                                onSelect={(value) => {
                                  form.setValue("tag", value)
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    tag.value === field.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {tag.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    {/* <FormDescription>
                      Select one Tag for your post
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className={`${showInputs ? "block" : "hidden"}`}>
              <FormField
                control={form.control}
                name="nsfw"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0  ">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>This post contains NSFW.</FormLabel>
                      <FormDescription>
                        Please check the box if the post contains explicit or
                        triggering elements
                      </FormDescription>
                    </div>
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
