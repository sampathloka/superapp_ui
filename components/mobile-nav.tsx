"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ShoppingBag, Car, GamepadIcon, Home, Menu } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <span className="font-bold">MultiServe</span>
        </Link>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center text-sm font-medium transition-colors",
                pathname === "/" ? "text-foreground" : "text-foreground/60",
              )}
            >
              <Home className="mr-2 h-4 w-4" />
              Home
            </Link>
            <Link
              href="/shopping"
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center text-sm font-medium transition-colors",
                pathname?.startsWith("/shopping") ? "text-foreground" : "text-foreground/60",
              )}
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Shopping
            </Link>
            <Link
              href="/rides"
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center text-sm font-medium transition-colors",
                pathname?.startsWith("/rides") ? "text-foreground" : "text-foreground/60",
              )}
            >
              <Car className="mr-2 h-4 w-4" />
              Rides
            </Link>
            <Link
              href="/games"
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center text-sm font-medium transition-colors",
                pathname?.startsWith("/games") ? "text-foreground" : "text-foreground/60",
              )}
            >
              <GamepadIcon className="mr-2 h-4 w-4" />
              Games
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
