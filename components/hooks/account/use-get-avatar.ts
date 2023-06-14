import { useCallback } from "react"

export function useGetAvatar(avatarSeed: string | undefined): string {
  const getSrc = useCallback(
    (seed: string): string => {
      const src = `https://api.dicebear.com/6.x/lorelei/svg?seed=${seed}&backgroundType=gradientLinear&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`
      return src
    },
    [avatarSeed]
  )

  if (avatarSeed) return getSrc(avatarSeed)

  return ""
}
