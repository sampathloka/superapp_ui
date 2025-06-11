"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { ShoppingBag, Car, GamepadIcon, Home } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">MultiServe</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/"
          className={cn(
            "flex items-center transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/60",
          )}
        >
          <Home className="mr-2 h-4 w-4" />
          Home
        </Link>
        <Link
          href="/shopping"
          className={cn(
            "flex items-center transition-colors hover:text-foreground/80",
            pathname?.startsWith("/shopping") ? "text-foreground" : "text-foreground/60",
          )}
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          Shopping
        </Link>
        <Link
          href="/rides"
          className={cn(
            "flex items-center transition-colors hover:text-foreground/80",
            pathname?.startsWith("/rides") ? "text-foreground" : "text-foreground/60",
          )}
        >
          <Car className="mr-2 h-4 w-4" />
          Rides
        </Link>
        <Link
          href="/games"
          className={cn(
            "flex items-center transition-colors hover:text-foreground/80",
            pathname?.startsWith("/games") ? "text-foreground" : "text-foreground/60",
          )}
        >
          <GamepadIcon className="mr-2 h-4 w-4" />
          Games
        </Link>
      </nav>
    </div>
  )
}
