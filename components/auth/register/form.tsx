"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeOff } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { account, functions } from "@/components/appwrite/config"
import { ErrorAlert } from "@/components/error-alert"
import UseCreateUserWithEmailPassword from "@/components/hooks/auth/use-create-user-with-email-password"

const formSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password must be atleast 8 characters long" }),

    confirmPassword: z.string(),
  })
  .refine((val) => val.password === val.confirmPassword, {
    message: "Confirm password must be same as password",
    path: ["confirmPassword"],
  })

//TODO: create a error handler for confirm password

export function RegisterForm() {
  const [createUserWithEmailPassword, user, loading, error] =
    UseCreateUserWithEmailPassword(account)

  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const [showPassword, setShowPassword] = useState(false)

  console.log(error)

  // console.log(form.watch("password"))
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await createUserWithEmailPassword(values.email, values.password)
    // loginUserWithEmailPassword(values.email, values.password)
  }

  // useEffect(() => {
  //   if (user) {
  //     loginUserWithEmailPassword(
  //       form.getValues("email"),
  //       form.getValues("password")
  //     )
  //   }
  // }, [user])

  useEffect(() => {
    if (user) {
      fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ sessionID: user?.userId }),
      }).then((res) => router.push("/feed"))
    }
  }, [user])

  return (
    <div>
      <h1 className="mb-14 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Create Account
      </h1>
      <div className="mb-5">{!!error && <ErrorAlert>{error}</ErrorAlert>}</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* <div className="grid grid-cols-2 gap-6">
              <Button variant="outline">
                <Icons.gitHub className="mr-2 h-4 w-4" />
                Github
              </Button>
              <Button variant="outline">
                <Icons.google className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div> */}

          {/* email input */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="me@example.com"
                    {...field}
                    type="email"
                    className={form.formState.errors.email && "border-red-800"}
                  />
                </FormControl>
                {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Password"
                    {...field}
                    type={showPassword ? "text" : "password"}
                    className={
                      form.formState.errors.password && "border-red-800"
                    }
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* confirm password field */}

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm password</FormLabel>
                <FormControl>
                  <div className="flex items-end justify-end">
                    <Input
                      placeholder="re-enter password"
                      {...field}
                      type={showPassword ? "text" : "password"}
                      className={
                        form.formState.errors.confirmPassword &&
                        "border-red-800"
                      }
                    />
                    <Button
                      variant="link"
                      className=""
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </Button>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={loading}>
            Create account
          </Button>
          <p className="text-md text-center text-muted-foreground">
            Already have an account?{" "}
            <span className="text-foreground">
              <Link href="/login">Login here</Link>.
            </span>
          </p>
        </form>
      </Form>
    </div>
  )
}
