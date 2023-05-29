"use client"

import { Button } from "@/components/ui/button"
import { account, functions } from "@/components/appwrite/config"
import { FeedPage } from "@/components/feedPage"
import { SiteHeader } from "@/components/site-header"

const Feed = () => {
  const testFunc = () => {
    const promise = functions.createExecution("createUser", "hello")

    promise.then(
      function (response) {
        console.log(response) // Success
      },
      function (error) {
        console.log(error) // Failure
      }
    )
  }
  return (
    <>
      <SiteHeader />
      <section className="container max-w-5xl grid items-center gap-6 pb-8 pt-6 md:py-10">
        <FeedPage />
        <Button onClick={testFunc}>click</Button>
      </section>
    </>
  )
}

export default Feed
