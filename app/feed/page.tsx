"use client"

import { account } from "@/components/appwrite/config"
import { FeedPage } from "@/components/feedPage"
import { SiteHeader } from "@/components/site-header"

const Feed = () => {
  const promise = account.get()

  promise.then(
    function (response) {
      console.log(response) // Success
    },
    function (error) {
      console.log(error) // Failure
    }
  )
  return (
    <>
      <SiteHeader />
      <section className="container max-w-5xl grid items-center gap-6 pb-8 pt-6 md:py-10">
        <FeedPage />
      </section>
    </>
  )
}

export default Feed
