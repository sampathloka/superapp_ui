import { ChevronRight, ShoppingBag, Car, GamepadIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"
import { HeroSection } from "@/components/hero-section"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MainNav />
          <MobileNav />
          <div className="ml-auto flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm">Sign Up</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />

        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Our Services</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Discover our range of services designed to make your life easier and more enjoyable.
            </p>
          </div>

          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-12">
            <ServiceCard
              title="Shopping"
              description="Browse and purchase from thousands of products with secure checkout and fast delivery."
              icon={<ShoppingBag className="h-10 w-10 text-primary" />}
              href="/shopping"
              color="bg-pink-50 dark:bg-pink-950/30"
            />
            <ServiceCard
              title="Ride Rentals"
              description="Book shared rides or rent vehicles for your journey with real-time tracking and flexible options."
              icon={<Car className="h-10 w-10 text-primary" />}
              href="/rides"
              color="bg-blue-50 dark:bg-blue-950/30"
            />
            <ServiceCard
              title="Games"
              description="Play casual and skill-based games to have fun and earn rewards while competing with others."
              icon={<GamepadIcon className="h-10 w-10 text-primary" />}
              href="/games"
              color="bg-green-50 dark:bg-green-950/30"
            />
          </div>
        </section>

        <section className="container py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Why Choose Us</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Our platform offers a seamless experience across all services with a focus on user satisfaction.
            </p>
          </div>

          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>All-in-One Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Access shopping, rides, and games all in one place with a unified account and experience.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Secure & Reliable</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Your data and transactions are protected with industry-leading security measures.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Rewards Program</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Earn points across all services and redeem them for discounts and special offers.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Get Started Today</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Join thousands of satisfied users who have simplified their lives with our platform.
            </p>
            <Button size="lg" className="mt-4">
              Create Account
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
