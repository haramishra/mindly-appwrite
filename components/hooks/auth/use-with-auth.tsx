import { useRouter } from "next/navigation"

import { account } from "@/components/appwrite/config"
import useGetCurrentUser from "@/components/hooks/account/use-get-current-account-hook"

function withAuth(ChildComponenet: React.FC) {
  return function WithAuth(props: any) {
    const [user, loading, error] = useGetCurrentUser(account)
    const router = useRouter()

    if (loading) {
      return <div>loading</div>
    }

    if (error || !user) {
      router.replace("/login")
    }

    return <ChildComponenet {...props} user={user || undefined} />
  }
  return null
}

export default withAuth
