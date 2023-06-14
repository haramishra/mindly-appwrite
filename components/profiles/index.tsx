"use client"

import { account } from "../appwrite/config"
import useGetCurrentUser from "../hooks/account/use-get-current-account-hook"
import ContentContainer from "./content-container"
import ProfileCard from "./profile-card"
import ProfileLoader from "./profile-loader"

function UserProfile() {
  const [user, loading, error] = useGetCurrentUser(account)

  if (!user || loading) {
    return <ProfileLoader />
  }

  return (
    <div>
      <ProfileCard user={user} />
      <ContentContainer />
    </div>
  )
}

export default UserProfile
