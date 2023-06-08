import { ReactNode } from "react"
import { AlertCircle } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type AlertProps = {
  children: string | null | ReactNode
}

export function ErrorAlert(props: AlertProps) {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{props.children}</AlertDescription>
    </Alert>
  )
}
