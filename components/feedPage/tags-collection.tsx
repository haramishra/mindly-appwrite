import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Badge } from "../ui/badge"

interface TagsCollectionProps {
  badges: string[]
}

function TagsCollection(props: TagsCollectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Search By Tags</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        {props.badges.map((item) => (
          <Link href={`/tag/${item.toLowerCase()}`} key={item}>
            <Badge
              className="light:border-slate-600 m-2 text-sm font-normal dark:border-slate-400"
              variant="outline"
            >
              {item}
            </Badge>
          </Link>
        ))}
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  )
}

export default TagsCollection
