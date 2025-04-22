"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimateOnScrollProps {
  children: ReactNode
  className?: string
  threshold?: number
  delay?: number
  animation?: "fade-up" | "fade-in" | "slide-in-right" | "slide-in-left" | "scale-up"
}

export default function AnimateOnScroll({
  children,
  className,
  threshold = 0.1,
  delay = 0,
  animation = "fade-up",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay before adding the class to ensure the initial state is rendered
          setTimeout(() => {
            if (ref.current) {
              ref.current.classList.add("animate-in")
            }
          }, delay)

          // Once animated, we can unobserve
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px", // Start animation a bit before the element is fully in view
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, delay])

  const getAnimationClasses = () => {
    switch (animation) {
      case "fade-up":
        return "opacity-0 translate-y-8 transition-all duration-700 ease-out"
      case "fade-in":
        return "opacity-0 transition-opacity duration-700 ease-out"
      case "slide-in-right":
        return "opacity-0 translate-x-8 transition-all duration-700 ease-out"
      case "slide-in-left":
        return "opacity-0 -translate-x-8 transition-all duration-700 ease-out"
      case "scale-up":
        return "opacity-0 scale-95 transition-all duration-700 ease-out"
      default:
        return "opacity-0 translate-y-8 transition-all duration-700 ease-out"
    }
  }

  return (
    <div
      ref={ref}
      className={cn(getAnimationClasses(), className)}
      style={{
        willChange: "opacity, transform",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
