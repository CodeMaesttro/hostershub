import Link from "next/link"
import { Server, Mail, Phone, MapPin, Facebook, X, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Server className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-xl text-slate-800">Hostershub</span>
            </div>
            <p className="text-slate-600">
              Premium web hosting services and branded merchandise for the modern digital world.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://x.com/hostershub" className="text-slate-500 hover:text-blue-600 transition-colors">
                <X className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/hostershub/"
                className="text-slate-500 hover:text-blue-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-800">Services</h3>
            <ul className="space-y-2 text-slate-600">
              <li>
                <Link href="/hosting" className="hover:text-blue-600 transition-colors">
                  Web Hosting
                </Link>
              </li>
              <li>
                <Link href="/domain-checker" className="hover:text-blue-600 transition-colors">
                  Domain Registration
                </Link>
              </li>
              <li>
                <Link href="/store" className="hover:text-blue-600 transition-colors">
                  Merchandise
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600 transition-colors">
                  SSL Certificates
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-800">Support</h3>
            <ul className="space-y-2 text-slate-600">
              <li>
                <Link href="/contact" className="hover:text-blue-600 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600 transition-colors">
                  Status Page
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-800">Contact Info</h3>
            <div className="space-y-3 text-slate-600">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-600" />
                <span>hostershub@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-600" />
                <span>+233 24 990 8111</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span>Tamale, Zogbeli</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-12 pt-8 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Hostershub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
