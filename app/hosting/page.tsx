import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Server, Zap, Shield, Globe, Headphones, Database } from "lucide-react"

const hostingPlans = [
  {
    name: "Starter",
    price: "$9.99",
    period: "/month",
    description: "Perfect for personal websites and blogs",
    features: [
      "10GB SSD Storage",
      "100GB Bandwidth",
      "1 Website",
      "Free SSL Certificate",
      "24/7 Support",
      "99.9% Uptime Guarantee",
      "Daily Backups",
    ],
    popular: false,
    color: "border-gray-200",
  },
  {
    name: "Professional",
    price: "$19.99",
    period: "/month",
    description: "Ideal for growing businesses",
    features: [
      "50GB SSD Storage",
      "500GB Bandwidth",
      "5 Websites",
      "Free SSL Certificate",
      "Daily Backups",
      "24/7 Priority Support",
      "Free Domain (1 year)",
      "Advanced Security",
    ],
    popular: true,
    color: "border-primary",
  },
  {
    name: "Enterprise",
    price: "$39.99",
    period: "/month",
    description: "For high-traffic websites",
    features: [
      "200GB SSD Storage",
      "Unlimited Bandwidth",
      "Unlimited Websites",
      "Free SSL Certificate",
      "Daily Backups",
      "Dedicated Support",
      "Advanced Security",
      "Free Domain (1 year)",
      "CDN Integration",
      "Performance Monitoring",
    ],
    popular: false,
    color: "border-gray-200",
  },
]

const features = [
  {
    icon: Server,
    title: "High Performance",
    description: "SSD storage and optimized servers for lightning-fast loading times",
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "SSL certificates, DDoS protection, and regular security updates",
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Content delivery network for faster global access",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Expert support team available around the clock",
  },
  {
    icon: Database,
    title: "Daily Backups",
    description: "Automatic daily backups to keep your data safe",
  },
  {
    icon: Zap,
    title: "99.9% Uptime",
    description: "Reliable hosting with guaranteed uptime",
  },
]

export default function HostingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">Premium Web Hosting</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fast, secure, and reliable hosting solutions for websites of all sizes. Get started with our feature-rich
              hosting plans today.
            </p>
          </div>
        </div>
      </section>

      {/* Hosting Plans */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Choose Your Perfect Plan</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              All plans include our core features with 99.9% uptime guarantee
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {hostingPlans.map((plan) => (
              <Card key={plan.name} className={`relative ${plan.color} ${plan.popular ? "shadow-lg scale-105" : ""}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">Most Popular</Badge>
                )}

                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Why Choose Hostershub?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide everything you need for a successful online presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
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
      <section className="py-20">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Hostershub for their hosting needs
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Start Your Free Trial</Button>
            <Button variant="outline" size="lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
