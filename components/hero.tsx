import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Globe } from "lucide-react"
import Link from "next/link"
import { Server } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100/50" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-left animate">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Premium Web Hosting
                <span className="text-blue-600 block">& Branded Merch</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-lg">
                Power your online presence with reliable hosting solutions and represent your brand with our premium
                merchandise collection.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/hosting">
                <Button size="lg" className="w-full sm:w-auto btn-hover bg-blue-600 hover:bg-blue-700">
                  View Hosting Plans
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/store">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto btn-hover border-blue-200 text-blue-600 hover:bg-blue-50"
                >
                  Shop Merchandise
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center animate-scale animate" style={{ animationDelay: "0.2s" }}>
                <Shield className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                <div className="text-sm font-medium">99.9% Uptime</div>
              </div>
              <div className="text-center animate-scale animate" style={{ animationDelay: "0.4s" }}>
                <Zap className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                <div className="text-sm font-medium">Lightning Fast</div>
              </div>
              <div className="text-center animate-scale animate" style={{ animationDelay: "0.6s" }}>
                <Globe className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                <div className="text-sm font-medium">Global CDN</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-right animate" style={{ animationDelay: "0.3s" }}>
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center card-hover">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
                  <Server className="h-16 w-16 text-blue-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-800">Hostershub</h3>
                  <p className="text-slate-600">Powering Your Digital Future</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
