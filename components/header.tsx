"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Sobre Nós", href: "/sobre" },
  // { name: "Soluções", href: "/solucoes" },
  // { name: "Sustentabilidade", href: "/sustentabilidade" },
  // { name: "Blog", href: "/blog" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5",
      )}
      aria-label="Main navigation"
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center relative z-10" aria-label="AruaTech - Página inicial">
          <Image
            src="images/6.png"
            alt="AruaTech Logo"
            width={50}
            height={20}
            className="h-8 w-auto leading-7"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1" aria-label="Main">
          <ul className="flex items-center space-x-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-full font-medium transition-colors hover:bg-primary/10",
                    pathname === item.href ? "text-primary bg-primary/10" : "text-foreground",
                  )}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="ml-2">
              <Button asChild variant="default" className="rounded-full px-6">
                <Link href="/contato">Contato</Link>
              </Button>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            className="rounded-full"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed top-0 bottom-0 right-0 z-50 w-full bg-white px-6 py-6 lg:hidden transform transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
        style={{ backgroundColor: "white" }} // Ensure background is white
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
            <Image src="images/logo.png" alt="AruaTech Logo" width={150} height={40} className="h-10 w-auto" />
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Fechar menu"
            className="rounded-full"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        <div className="mt-10 flow-root">
          <div className="space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block rounded-lg py-3 px-4 text-base font-medium",
                  pathname === item.href
                    ? "text-primary bg-primary/10 rounded-full"
                    : "text-foreground hover:bg-gray-50 rounded-full",
                )}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full mt-6 rounded-full">
              <Link href="/contato">Contato</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
