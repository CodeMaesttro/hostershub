"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingCart, Star, Filter } from "lucide-react"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Hostershub Premium Hoodie",
    price: 49.99,
    originalPrice: 59.99,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.8,
    reviews: 124,
    colors: ["Black", "Navy", "Gray", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "Hoodies",
    inStock: true,
  },
  {
    id: 2,
    name: "Developer T-Shirt",
    price: 24.99,
    originalPrice: 29.99,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.6,
    reviews: 89,
    colors: ["Black", "White", "Blue", "Red"],
    sizes: ["S", "M", "L", "XL"],
    category: "T-Shirts",
    inStock: true,
  },
  {
    id: 3,
    name: "Tech Mug - Code & Coffee",
    price: 14.99,
    originalPrice: null,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.9,
    reviews: 67,
    colors: ["White", "Black"],
    sizes: ["11oz", "15oz"],
    category: "Accessories",
    inStock: true,
  },
  {
    id: 4,
    name: "Hostershub Cap",
    price: 19.99,
    originalPrice: null,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.7,
    reviews: 45,
    colors: ["Black", "Navy", "White"],
    sizes: ["One Size"],
    category: "Accessories",
    inStock: true,
  },
  {
    id: 5,
    name: "Coding Sticker Pack",
    price: 9.99,
    originalPrice: null,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.5,
    reviews: 156,
    colors: ["Mixed"],
    sizes: ["Pack of 10"],
    category: "Accessories",
    inStock: false,
  },
  {
    id: 6,
    name: "Premium Zip Hoodie",
    price: 64.99,
    originalPrice: 74.99,
    image: "/placeholder.svg?height=400&width=400",
    rating: 4.9,
    reviews: 78,
    colors: ["Black", "Gray", "Navy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "Hoodies",
    inStock: true,
  },
]

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("featured")

  const categories = ["All", "Hoodies", "T-Shirts", "Accessories"]

  const filteredProducts = products.filter(
    (product) => selectedCategory === "All" || product.category === selectedCategory,
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">Hostershub Store</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium branded merchandise for developers and tech enthusiasts. Show your passion for technology with our
              high-quality products.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.originalPrice && <Badge className="absolute top-4 left-4 bg-red-500">Sale</Badge>}
                  {!product.inStock && <Badge className="absolute top-4 right-4 bg-gray-500">Out of Stock</Badge>}
                </div>

                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  </div>

                  <CardTitle className="text-lg">{product.name}</CardTitle>

                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Colors:</div>
                    <div className="flex gap-2 flex-wrap">
                      {product.colors.map((color) => (
                        <Badge key={color} variant="outline" className="text-xs">
                          {color}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium">Sizes:</div>
                    <div className="flex gap-2 flex-wrap">
                      {product.sizes.map((size) => (
                        <Badge key={size} variant="outline" className="text-xs">
                          {size}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full" disabled={!product.inStock}>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-muted/30">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">Stay Updated</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Be the first to know about new products, exclusive deals, and special offers
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 border rounded-md" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
