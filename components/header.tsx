"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Menu, ShoppingCart, User } from "lucide-react"
import { CartPanel } from "@/components/cart-panel"
import { useCart } from "@/contexts/cart-context"

export function Header() {
  const { totalItems } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 transition-all duration-300">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2 transition-smooth hover:opacity-80">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="font-bold text-xl text-slate-800">Hostershub</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/hosting" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Hosting Plans
          </Link>
          <Link href="/store" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Store
          </Link>
          <Link
            href="/domain-checker"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Domain Checker
          </Link>
          <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-blue-50 transition-colors"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5 text-slate-600" />
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-blue-600">
                  {totalItems}
                </Badge>
              )}
            </Button>
          </div>

          <Link href="/login">
            <Button variant="ghost" size="icon" className="hover:bg-blue-50 transition-colors">
              <User className="h-5 w-5 text-slate-600" />
            </Button>
          </Link>

          <Link href="/dashboard">
            <Button size="sm" className="btn-hover bg-blue-600 hover:bg-blue-700">
              Dashboard
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-blue-50 transition-colors">
                <Menu className="h-5 w-5 text-slate-600" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/hosting"
                  className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Hosting Plans
                </Link>
                <Link
                  href="/store"
                  className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Store
                </Link>
                <Link
                  href="/domain-checker"
                  className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Domain Checker
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <CartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  )
}
