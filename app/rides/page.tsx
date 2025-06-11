"use client"

import { Car, MapPin, Calendar, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { Footer } from "@/components/footer"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"

export default function RidesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MainNav />
          <MobileNav />
          <div className="ml-auto flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-blue-50 dark:bg-blue-950/30 py-10">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <h1 className="mb-4 text-center text-3xl font-bold tracking-tight">Book a Ride or Rent a Vehicle</h1>
              <p className="mb-8 text-center text-muted-foreground">
                Find the perfect transportation option for your journey
              </p>

              <Card>
                <CardContent className="p-6">
                  <Tabs defaultValue="rides" className="w-full">
                    <TabsList className="mb-6 grid w-full grid-cols-2">
                      <TabsTrigger value="rides">
                        <Car className="mr-2 h-4 w-4" />
                        Rides
                      </TabsTrigger>
                      <TabsTrigger value="rentals">
                        <Car className="mr-2 h-4 w-4" />
                        Rentals
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="rides" className="mt-0 space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Pickup Location</label>
                          <div className="relative">
                            <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Enter pickup location" className="pl-8" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Destination</label>
                          <div className="relative">
                            <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Enter destination" className="pl-8" />
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Date</label>
                          <div className="relative">
                            <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input type="date" className="pl-8" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Time</label>
                          <div className="relative">
                            <Clock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input type="time" className="pl-8" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Passengers</label>
                          <Select defaultValue="1">
                            <SelectTrigger>
                              <SelectValue placeholder="Select passengers" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 Passenger</SelectItem>
                              <SelectItem value="2">2 Passengers</SelectItem>
                              <SelectItem value="3">3 Passengers</SelectItem>
                              <SelectItem value="4">4 Passengers</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Button className="w-full">Search Rides</Button>

                      <div className="mt-4 text-center">
                        <p className="mb-3 text-sm text-muted-foreground">Or book directly with:</p>
                        <div className="flex justify-center gap-4">
                          <Button
                            variant="outline"
                            className="flex items-center gap-2 bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                            onClick={() => window.open("https://uber.com", "_blank")}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5"
                            >
                              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                              <path d="M16 12l-4-4-4 4" />
                              <path d="M12 16V8" />
                            </svg>
                            Book with Uber
                          </Button>
                          <Button
                            variant="outline"
                            className="flex items-center gap-2 bg-pink-600 text-white hover:bg-pink-700 dark:bg-pink-700 dark:hover:bg-pink-800"
                            onClick={() => window.open("https://lyft.com", "_blank")}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5"
                            >
                              <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                              <path d="M10 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
                              <rect width="16" height="8" x="4" y="11" rx="1" />
                              <path d="M8 19v2" />
                              <path d="M16 19v2" />
                            </svg>
                            Book with Lyft
                          </Button>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="rentals" className="mt-0 space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Pickup Location</label>
                          <div className="relative">
                            <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Enter pickup location" className="pl-8" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Return Location</label>
                          <div className="relative">
                            <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Same as pickup" className="pl-8" />
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Pickup Date</label>
                          <div className="relative">
                            <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input type="date" className="pl-8" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Pickup Time</label>
                          <div className="relative">
                            <Clock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input type="time" className="pl-8" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Return Date</label>
                          <div className="relative">
                            <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input type="date" className="pl-8" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Return Time</label>
                          <div className="relative">
                            <Clock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input type="time" className="pl-8" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Vehicle Type</label>
                        <Select defaultValue="any">
                          <SelectTrigger>
                            <SelectValue placeholder="Select vehicle type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="any">Any Vehicle</SelectItem>
                            <SelectItem value="economy">Economy</SelectItem>
                            <SelectItem value="compact">Compact</SelectItem>
                            <SelectItem value="suv">SUV</SelectItem>
                            <SelectItem value="luxury">Luxury</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Button className="w-full">Search Rentals</Button>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="container py-8 md:py-12">
          <h2 className="mb-6 text-2xl font-bold">Available Vehicles</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-[16/9] bg-muted/50">
                  <img
                    src={`/placeholder.svg?height=225&width=400&text=Vehicle+${i + 1}`}
                    alt={`Vehicle ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">Vehicle Model {i + 1}</CardTitle>
                      <p className="text-sm text-muted-foreground">Economy</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">$49</div>
                      <p className="text-xs text-muted-foreground">per day</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      4 Seats
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      2 Bags
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Automatic
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      A/C
                    </Badge>
                  </div>
                  <div className="mt-4 flex items-center">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="ml-2 text-xs text-muted-foreground">(48 reviews)</span>
                  </div>
                </CardContent>
                <Separator />
                <CardFooter className="p-4">
                  <Button className="w-full">Book Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
