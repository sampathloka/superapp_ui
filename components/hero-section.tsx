import { Button } from "@/components/ui/button"
import { ShoppingBag, Car, GamepadIcon } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                One Platform, <br />
                <span className="text-primary">Multiple Services</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Shop, travel, and play games all in one place. Experience the convenience of our multi-service platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
              <div className="grid gap-4">
                <div className="flex h-[180px] flex-col items-center justify-center rounded-lg bg-pink-100 dark:bg-pink-900/30 p-4 shadow-sm transition-all hover:shadow-md">
                  <ShoppingBag className="h-12 w-12 text-pink-500 dark:text-pink-400 mb-2" />
                  <div className="text-center">
                    <h3 className="font-bold text-foreground">Shopping</h3>
                    <p className="text-sm text-muted-foreground">Browse & Buy</p>
                  </div>
                </div>
                <div className="flex h-[180px] flex-col items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30 p-4 shadow-sm transition-all hover:shadow-md">
                  <GamepadIcon className="h-12 w-12 text-green-500 dark:text-green-400 mb-2" />
                  <div className="text-center">
                    <h3 className="font-bold text-foreground">Games</h3>
                    <p className="text-sm text-muted-foreground">Play & Earn</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex h-[180px] flex-col items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30 p-4 shadow-sm transition-all hover:shadow-md">
                  <Car className="h-12 w-12 text-blue-500 dark:text-blue-400 mb-2" />
                  <div className="text-center">
                    <h3 className="font-bold text-foreground">Rides</h3>
                    <p className="text-sm text-muted-foreground">Book & Go</p>
                  </div>
                </div>
                <div className="flex h-[180px] flex-col items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30 p-4 shadow-sm transition-all hover:shadow-md">
                  <div className="text-center">
                    <h3 className="font-bold text-foreground">All Services</h3>
                    <p className="text-sm text-muted-foreground">One Account</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
