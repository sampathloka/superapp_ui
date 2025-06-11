import { Trophy, Zap, Search, Filter, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { Footer } from "@/components/footer"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"

export default function GamesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MainNav />
          <MobileNav />
          <div className="ml-auto flex items-center space-x-4">
            <ThemeToggle />
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 rounded-full bg-green-100 dark:bg-green-900/50 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-300">
                <Zap className="h-3 w-3" />
                <span>2,450 pts</span>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-green-50 dark:bg-green-950/30 py-10">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <h1 className="mb-4 text-3xl font-bold tracking-tight">Play Games, Earn Rewards</h1>
              <p className="mb-8 max-w-2xl text-muted-foreground">
                Discover a variety of casual and skill-based games. Compete with others, climb the leaderboards, and
                earn real rewards.
              </p>

              <div className="relative w-full max-w-md">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search games..." className="w-full bg-background pl-8" />
              </div>
            </div>
          </div>
        </section>

        <section className="container py-8 md:py-12">
          <Tabs defaultValue="featured" className="w-full">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="casual">Casual</TabsTrigger>
                <TabsTrigger value="skill">Skill-based</TabsTrigger>
                <TabsTrigger value="tournaments">Tournaments</TabsTrigger>
              </TabsList>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>

            <TabsContent value="featured" className="mt-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-[4/3] bg-muted/50">
                      <img
                        src={`/placeholder.svg?height=225&width=300&text=Game+${i + 1}`}
                        alt={`Game ${i + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">Game Title {i + 1}</CardTitle>
                          <p className="text-sm text-muted-foreground">Puzzle</p>
                        </div>
                        <Badge
                          variant="secondary"
                          className={
                            i % 2 === 0
                              ? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
                              : "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300"
                          }
                        >
                          {i % 2 === 0 ? "Casual" : "Skill"}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                        A fun and engaging game that tests your skills and rewards you with points.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex -space-x-2">
                            {Array.from({ length: 3 }).map((_, j) => (
                              <Avatar key={j} className="h-6 w-6 border-2 border-background">
                                <AvatarFallback>{`U${j + 1}`}</AvatarFallback>
                              </Avatar>
                            ))}
                          </div>
                          <span className="ml-2 text-xs text-muted-foreground">+{(i + 1) * 124} players</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-sm font-medium">{4 + (i % 10) / 10}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4">
                      <Button className="w-full">Play Now</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="bg-muted/30 py-8 md:py-12">
          <div className="container">
            <h2 className="mb-6 text-2xl font-bold">Top Players</h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback>{`P${i + 1}`}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">Player {i + 1}</CardTitle>
                        <p className="text-sm text-muted-foreground">Level {20 - i}</p>
                      </div>
                      <Trophy
                        className={`ml-auto h-5 w-5 ${i === 0 ? "text-yellow-500" : i === 1 ? "text-slate-400" : i === 2 ? "text-amber-700" : "text-slate-600"}`}
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>XP</span>
                        <span className="font-medium">{10000 - i * 1000}</span>
                      </div>
                      <Progress value={100 - i * 10} className="h-2" />
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm">
                        <span className="font-medium">{50 - i * 5}</span> Games Won
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">{5000 - i * 500}</span> Points
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
