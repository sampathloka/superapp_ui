import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container flex flex-col gap-6 py-8 md:flex-row md:py-12">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium">MultiServe</h3>
          <p className="text-sm text-muted-foreground">Your all-in-one platform for shopping, rides, and games.</p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="flex flex-col gap-2">
            <h4 className="text-base font-medium">Shopping</h4>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/shopping/categories">Categories</Link>
              <Link href="/shopping/deals">Deals</Link>
              <Link href="/shopping/new-arrivals">New Arrivals</Link>
              <Link href="/shopping/trending">Trending</Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-base font-medium">Rides</h4>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/rides/book">Book a Ride</Link>
              <Link href="/rides/rentals">Rentals</Link>
              <Link href="/rides/carpooling">Carpooling</Link>
              <Link href="/rides/drivers">Become a Driver</Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-base font-medium">Games</h4>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/games/casual">Casual Games</Link>
              <Link href="/games/skill-based">Skill-based Games</Link>
              <Link href="/games/tournaments">Tournaments</Link>
              <Link href="/games/rewards">Rewards</Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-base font-medium">Company</h4>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/about">About Us</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="container border-t py-6 text-center text-sm text-muted-foreground">
        <p>© 2025 MultiServe. All rights reserved.</p>
      </div>
    </footer>
  )
}
