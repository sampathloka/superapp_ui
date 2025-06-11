import { Search, Filter, Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ShoppingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MainNav />
          <MobileNav />
          <div className="ml-auto flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                3
              </span>
            </Button>
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-muted/30 py-10">
          <div className="container">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Shopping</h1>
                <p className="text-muted-foreground">Browse and purchase from thousands of products.</p>
              </div>
              <div className="flex w-full items-center gap-2 md:w-auto">
                <div className="relative w-full md:w-[300px]">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="w-full bg-background pl-8 md:w-[300px]"
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                  <span className="sr-only">Filter</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-8 md:py-12">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="all">All Products</TabsTrigger>
              <TabsTrigger value="electronics">Electronics</TabsTrigger>
              <TabsTrigger value="clothing">Clothing</TabsTrigger>
              <TabsTrigger value="home">Home & Kitchen</TabsTrigger>
              <TabsTrigger value="beauty">Beauty</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-square relative bg-muted/50">
                      <div className="absolute right-2 top-2">
                        <Button variant="ghost" size="icon" className="rounded-full bg-background">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                      <img
                        src={`/placeholder.svg?height=300&width=300&text=Product+${i + 1}`}
                        alt={`Product ${i + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <div className="flex items-start justify-between">
                        <CardTitle className="line-clamp-1 text-base">Product Name {i + 1}</CardTitle>
                        <div className="text-sm font-bold">$99.99</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="px-1 text-xs">
                          New
                        </Badge>
                        <div className="text-xs text-muted-foreground">Category</div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="line-clamp-2 text-sm text-muted-foreground">
                        This is a description of the product with some details about its features and benefits.
                      </p>
                    </CardContent>
                    <CardFooter className="p-4">
                      <Button className="w-full">Add to Cart</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <Footer />
    </div>
  )
}
