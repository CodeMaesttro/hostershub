import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Hostershub Premium Hoodie",
    price: "$49.99",
    originalPrice: "$59.99",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 124,
    colors: ["Black", "Navy", "Gray"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 2,
    name: "Developer T-Shirt",
    price: "$24.99",
    originalPrice: "$29.99",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 89,
    colors: ["Black", "White", "Blue"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Tech Mug",
    price: "$14.99",
    originalPrice: null,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 67,
    colors: ["White", "Black"],
    sizes: ["11oz", "15oz"],
  },
]

export function Products() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-16 animate-on-scroll animate">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">Premium Branded Merchandise</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Show your tech pride with our high-quality branded merchandise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group card-hover bg-white border-slate-200 animate-on-scroll animate"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.originalPrice && <Badge className="absolute top-4 left-4 bg-red-500">Sale</Badge>}
              </div>

              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-slate-700">{product.rating}</span>
                  </div>
                  <span className="text-sm text-slate-500">({product.reviews} reviews)</span>
                </div>

                <CardTitle className="text-lg text-slate-800">{product.name}</CardTitle>

                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-slate-800">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-slate-400 line-through">{product.originalPrice}</span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium text-slate-700">Colors:</div>
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <Badge key={color} variant="outline" className="text-xs border-slate-200 text-slate-600">
                        {color}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium text-slate-700">Sizes:</div>
                  <div className="flex gap-2">
                    {product.sizes.map((size) => (
                      <Badge key={size} variant="outline" className="text-xs border-slate-200 text-slate-600">
                        {size}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full btn-hover bg-blue-600 hover:bg-blue-700">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll animate" style={{ animationDelay: "0.6s" }}>
          <Link href="/store">
            <Button variant="outline" size="lg" className="btn-hover border-blue-200 text-blue-600 hover:bg-blue-50">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
