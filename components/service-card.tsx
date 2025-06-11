import type React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  color?: string
}

export function ServiceCard({ title, description, icon, href, color }: ServiceCardProps) {
  return (
    <Card className="flex flex-col justify-between overflow-hidden transition-all hover:shadow-lg">
      <CardHeader
        className={cn(
          "flex flex-row items-center gap-4",
          color,
          color ? `dark:bg-opacity-10 dark:text-white` : `dark:bg-muted dark:text-muted-foreground`,
        )}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">{icon}</div>
        <div>
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link href={href} className="inline-flex items-center text-sm font-medium text-primary">
          Explore {title}
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}
