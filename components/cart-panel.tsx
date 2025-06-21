"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { formatCurrency } from "@/lib/utils"
import Image from "next/image"
import { X, Minus, Plus } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { useState } from "react"

interface CartPanelProps {
  isOpen: boolean
  onClose: () => void
}

export function CartPanel({ isOpen, onClose }: CartPanelProps) {
  const { items: cartItems, updateQuantity, removeItem, totalItems, subtotal } = useCart()
  const [promoCode, setPromoCode] = useState("")

  const handleApplyPromo = () => {
    // TODO: Implement promo code logic
    console.log("Applying promo code:", promoCode)
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="flex flex-col w-full sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pb-6">
          <SheetTitle className="text-xl font-bold text-slate-800">Shopping Cart ({totalItems})</SheetTitle>
          <SheetDescription>
            {cartItems.length === 0 ? "Your cart is empty." : "Review your items and proceed to checkout."}
          </SheetDescription>
        </SheetHeader>

        {cartItems.length > 0 ? (
          <>
            <div className="flex-1 overflow-auto pr-6">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={`${item.id}-${item.color}-${item.size}`}
                    className="flex items-center gap-4 p-4 border rounded-lg"
                  >
                    <div className="relative h-16 w-16 flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover rounded"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-800 truncate">{item.name}</p>
                      <p className="text-sm text-slate-500">
                        {item.color} • {item.size}
                      </p>
                      <p className="text-sm font-medium text-blue-600">{formatCurrency(item.price)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity === 1}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-slate-400 hover:text-red-500"
                      onClick={() => removeItem(item.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t">
              {/* Promo Code */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Promo Code</label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1"
                  />
                  <Button variant="outline" onClick={handleApplyPromo} disabled={!promoCode.trim()}>
                    Apply
                  </Button>
                </div>
              </div>

              {/* Subtotal */}
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Subtotal:</span>
                <span className="text-blue-600">{formatCurrency(subtotal)}</span>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                <X className="h-8 w-8 text-slate-400" />
              </div>
              <p className="text-slate-500">Your cart is empty</p>
            </div>
          </div>
        )}

        <SheetFooter className="pt-6">
          <div className="grid w-full gap-3">
            <Button
              variant="outline"
              className="w-full border-blue-200 text-blue-600 hover:bg-blue-50"
              onClick={onClose}
            >
              Continue Shopping
            </Button>
            {cartItems.length > 0 && (
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Checkout • {formatCurrency(subtotal)}</Button>
            )}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
