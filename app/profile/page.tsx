import { FeedPage } from "@/components/feedPage"
import UserProfile from "@/components/profiles"
import { SiteHeader } from "@/components/site-header"

const Profile = () => {
  return (
    <>
      <SiteHeader />
      <section className="container grid max-w-5xl items-center gap-6 pb-8 pt-6 md:py-10">
        <UserProfile />
      </section>
    </>
  )
}

export default Profile
