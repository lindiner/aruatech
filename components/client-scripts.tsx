"use client"

import { useEffect } from "react"

export default function ClientScripts() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')

      if (anchor) {
        e.preventDefault()
        const targetId = anchor.getAttribute("href")

        if (targetId && targetId !== "#") {
          const targetElement = document.querySelector(targetId)

          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
              behavior: "smooth",
            })
          }
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)

    // Tab functionality for product tabs
    const initTabs = () => {
      const tabButtons = document.querySelectorAll("[data-tab-button]")
      const tabContents = document.querySelectorAll("[data-tab-content]")

      tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const tabId = button.getAttribute("data-tab-button")

          // Remove active class from all buttons and contents
          tabButtons.forEach((btn) => btn.classList.remove("active"))
          tabContents.forEach((content) => content.classList.remove("active"))

          // Add active class to clicked button and corresponding content
          button.classList.add("active")
          document.querySelector(`[data-tab-content="${tabId}"]`)?.classList.add("active")
        })
      })
    }

    if (document.querySelector("[data-tab-button]")) {
      initTabs()
    }

    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return null
}
