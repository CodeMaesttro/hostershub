import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, Globe, Headphones, Award, Users } from "lucide-react"
import Image from "next/image"

const whyChooseUs = [
  {
    icon: Shield,
    title: "99.9% Uptime Guarantee",
    description: "Reliable hosting with industry-leading uptime backed by our SLA",
  },
  {
    icon: Zap,
    title: "Instant Domain Registration",
    description: "Get your domain registered and active within minutes",
  },
  {
    icon: Globe,
    title: "Secure Data Centers",
    description: "Enterprise-grade security with global data center locations",
  },
  {
    icon: Headphones,
    title: "Dedicated Customer Support",
    description: "24/7 expert support team ready to help you succeed",
  },
  {
    icon: Award,
    title: "Premium Branded Merchandise",
    description: "High-quality tech apparel and accessories for developers",
  },
]

const teamMembers = [
  {
    name: "Abdul-Malik Alhassan",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=300&width=300",
    description: "Malik leads Hostershub’s strategic vision, business growth, and overall operations. With a deep commitment to innovation and impact, he drives the mission to simplify web infrastructure for creators and businesses alike.",
  },
  {
    name: "Alhassan Abdul-Jalil",
    role: "HR",
    image: "/placeholder.svg?height=300&width=300",
    description: "Jalil oversees the recruitment, development, and well-being of the Hostershub team. He ensures that the company attracts top talent and fosters a healthy work environment rooted in respect, growth, and collaboration.",
  },
  {
    name: "Abdul-Razak Mohammed Kamil Nyaba",
    role: "Lead Developer",
    image: "/placeholder.svg?height=300&width=300",
    description: "Kamil leads the technical development of the Hostershub platform. From backend systems to infrastructure design, he ensures everything runs securely, reliably, and at scale — powering seamless hosting and e-commerce experiences..",
  },
]

const stats = [
  { number: "1000+", label: "Happy Customers" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24/7", label: "Support Available" },
  { number: "50+", label: "Countries Served" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <Badge className="px-4 py-2 text-sm">About Hostershub</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Empowering Developers
              <span className="text-primary block">Worldwide</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're more than just a hosting company. We're a community of developers, creators, and innovators building
              the future of the web.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                At Hostershub, we believe every brand deserves reliable hosting and clean code — backed by powerful
                tools and stylish merch. We're committed to providing developers and businesses with the infrastructure
                they need to succeed online, while building a community that celebrates the art of coding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2020 by a team of developers and entrepreneurs, Hostershub began as a small project to make
                  hosting accessible and cool. We noticed that most hosting companies focused solely on the technical
                  aspects, forgetting about the human element and community that makes development truly exciting.
                </p>
                <p>
                  Today, we offer robust cloud solutions paired with tech-inspired apparel to help creators look and
                  build better. Our platform serves thousands of developers, startups, and established businesses who
                  trust us with their most important digital assets.
                </p>
                <p>
                  What started as a passion project has grown into a thriving community where technology meets style,
                  and where every line of code is backed by reliable infrastructure and genuine support.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-16 w-16 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Building Community</h3>
                    <p className="text-muted-foreground">Since 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Why Choose Hostershub?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with exceptional service to deliver an unmatched hosting experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
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

      {/* Meet the Team */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind Hostershub's success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Values</h2>
              <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Innovation First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We constantly push the boundaries of what's possible in web hosting, always staying ahead of the
                    curve with the latest technologies and best practices.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Community Driven</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our decisions are guided by our community's needs. We listen, learn, and build solutions that truly
                    serve our users' goals and aspirations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Reliability Matters</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your success depends on our reliability. We maintain the highest standards of uptime, security, and
                    performance because your trust is everything to us.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Style & Substance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We believe great technology should look as good as it performs. From our platform design to our
                    merchandise, we never compromise on aesthetics or quality.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Join Our Community?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Experience the Hostershub difference and see why thousands of developers choose us for their hosting needs
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started Today
            </button>
            <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
