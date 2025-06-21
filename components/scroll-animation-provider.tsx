"use client"

import type React from "react"

import { useEffect } from "react"

export function ScrollAnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    // Observe all animated elements
    const animatedElements = document.querySelectorAll(
      ".animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale",
    )

    animatedElements.forEach((el) => {
      observer.observe(el)
    })

    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])

  return <>{children}</>
}
