import Link from "next/link"
import PageHero from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import Carousel from "@/components/solutions-carousel"

export const metadata: Metadata = {
  title: "Nossas Soluções | AruaTech",
  description: "Produtos sustentáveis com desempenho superior e impacto positivo.",
}

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Nossas Soluções"
        description="Produtos sustentáveis com desempenho superior e impacto positivo"
        backgroundImage="/images/products-hero.jpg"
      />

      <section id="solucoes" className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="section-header">
            <h2>Nossas Soluções Sustentáveis</h2>
            <p>Produtos com DNA da floresta e tecnologia circular</p>
          </div>

          <div className="mt-12">
            <Carousel />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Precisa de uma solução personalizada?</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Nossa equipe pode desenvolver materiais específicos para sua necessidade
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contato">Fale com nossos especialistas</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
