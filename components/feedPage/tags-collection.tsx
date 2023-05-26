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
          <Link href={`/feed/${item}`} key={item}>
            <Badge
              className="text-sm font-normal m-2 dark:border-slate-400 light:border-slate-600"
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
