import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import Link from "next/link"

const hostingPlans = [
  {
    name: "Starter",
    price: "$9.99",
    period: "/month",
    description: "Perfect for personal websites and blogs",
    features: ["10GB SSD Storage", "100GB Bandwidth", "1 Website", "Free SSL Certificate", "24/7 Support"],
    popular: false,
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
    ],
    popular: true,
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
    ],
    popular: false,
  },
]

export function Services() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <div className="text-center space-y-4 mb-16 animate-on-scroll animate">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">Choose Your Hosting Plan</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Reliable, fast, and secure hosting solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hostingPlans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative card-hover animate-on-scroll animate ${
                plan.popular ? "border-blue-300 shadow-lg scale-105 bg-white" : "bg-white border-slate-200"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">Most Popular</Badge>
              )}

              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-slate-800">{plan.name}</CardTitle>
                <CardDescription className="text-slate-600">{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-slate-800">{plan.price}</span>
                  <span className="text-slate-500">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full btn-hover ${
                    plan.popular ? "bg-blue-600 hover:bg-blue-700" : "border-blue-200 text-blue-600 hover:bg-blue-50"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll animate" style={{ animationDelay: "0.6s" }}>
          <Link href="/hosting">
            <Button variant="outline" size="lg" className="btn-hover border-blue-200 text-blue-600 hover:bg-blue-50">
              View All Plans & Features
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
