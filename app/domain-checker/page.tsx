"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Check, X, Shield, Settings, RefreshCw, Globe, ShoppingCart } from "lucide-react"

const topExtensions = [
  { ext: ".com", price: "$12.99", popular: true },
  { ext: ".net", price: "$14.99", popular: false },
  { ext: ".org", price: "$13.99", popular: false },
  { ext: ".tech", price: "$19.99", popular: true },
  { ext: ".dev", price: "$15.99", popular: true },
  { ext: ".io", price: "$39.99", popular: false },
  { ext: ".co", price: "$24.99", popular: false },
  { ext: ".app", price: "$18.99", popular: false },
]

const domainFeatures = [
  {
    icon: Shield,
    title: "Free WHOIS Protection",
    description: "Keep your personal information private and secure",
  },
  {
    icon: Settings,
    title: "Easy DNS Management",
    description: "Simple control panel for all your DNS settings",
  },
  {
    icon: RefreshCw,
    title: "Auto-Renewal Option",
    description: "Never lose your domain with automatic renewals",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Fast domain resolution worldwide",
  },
]

export default function DomainCheckerPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = async () => {
    if (!searchTerm.trim()) return

    setIsSearching(true)
    setHasSearched(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Mock results - in real app, this would be an API call
    const baseDomain = searchTerm.replace(/\.(com|net|org|tech|dev|io|co|app)$/i, "")
    const mockResults = [
      { domain: `${baseDomain}.com`, available: Math.random() > 0.3, price: "$12.99" },
      { domain: `${baseDomain}.net`, available: Math.random() > 0.5, price: "$14.99" },
      { domain: `${baseDomain}.org`, available: Math.random() > 0.6, price: "$13.99" },
      { domain: `${baseDomain}.tech`, available: Math.random() > 0.4, price: "$19.99" },
      { domain: `${baseDomain}.dev`, available: Math.random() > 0.5, price: "$15.99" },
      { domain: `${baseDomain}.io`, available: Math.random() > 0.7, price: "$39.99" },
    ]

    // Add some alternative suggestions if main domain is taken
    if (!mockResults[0].available) {
      mockResults.push(
        { domain: `${baseDomain}-app.com`, available: true, price: "$12.99" },
        { domain: `get${baseDomain}.com`, available: true, price: "$12.99" },
        { domain: `${baseDomain}hq.com`, available: true, price: "$12.99" },
      )
    }

    setSearchResults(mockResults)
    setIsSearching(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">Find Your Perfect Domain</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Search for available domain names and secure your online presence today
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <Card className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Input
                    type="text"
                    placeholder="yourbrandname.com"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="text-lg h-12 pr-12"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                </div>
                <Button size="lg" onClick={handleSearch} disabled={isSearching || !searchTerm.trim()}>
                  {isSearching ? "Checking..." : "Check Availability"}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {hasSearched && (
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Search Results</h2>

              {isSearching ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-muted-foreground">Checking domain availability...</p>
                </div>
              ) : (
                <div className="grid gap-4">
                  {searchResults.map((result, index) => (
                    <Card key={index} className={`${result.available ? "border-green-200" : "border-red-200"}`}>
                      <CardContent className="flex items-center justify-between p-6">
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              result.available ? "bg-green-100" : "bg-red-100"
                            }`}
                          >
                            {result.available ? (
                              <Check className="h-4 w-4 text-green-600" />
                            ) : (
                              <X className="h-4 w-4 text-red-600" />
                            )}
                          </div>
                          <div>
                            <div className="font-semibold text-lg">{result.domain}</div>
                            <div className="text-sm text-muted-foreground">
                              {result.available ? "Available" : "Not Available"}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          {result.available ? (
                            <>
                              <div className="text-right">
                                <div className="font-bold text-lg">{result.price}</div>
                                <div className="text-sm text-muted-foreground">/year</div>
                              </div>
                              <Button>
                                <ShoppingCart className="mr-2 h-4 w-4" />
                                Add to Cart
                              </Button>
                            </>
                          ) : (
                            <Badge variant="destructive">Taken</Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Top Extensions */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Popular Domain Extensions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our most popular domain extensions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {topExtensions.map((extension) => (
              <Card key={extension.ext} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-center gap-2">
                    <CardTitle className="text-2xl">{extension.ext}</CardTitle>
                    {extension.popular && <Badge className="text-xs">Popular</Badge>}
                  </div>
                  <CardDescription className="text-lg font-semibold">{extension.price}/year</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Register Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Features */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Domain Features Included</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every domain registration comes with these premium features at no extra cost
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {domainFeatures.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Claim Your Domain?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of customers who trust Hostershub for their domain registration needs
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Start Your Search
            </Button>
            <Button variant="outline" size="lg" className="text-primary-foreground border-primary-foreground">
              View All Extensions
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
