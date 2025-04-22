import Image from "next/image"
import PageHero from "@/components/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { TargetIcon as Bullseye, Eye, Linkedin } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre Nós | AruaTech",
  description: "Conheça a história da AruaTech e nossa missão de transformar resíduos em soluções sustentáveis.",
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Sobre a AruaTech"
        description="Conectando tecnologia, sustentabilidade e inclusão para um amanhã regenerativo"
        backgroundImage="/images/about-hero.jpg"
      />

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
                Do Tupi, "dia" ou "amanhecer", simbolizando recomeço
              </h2>
              <div className="space-y-4">
                <p>
                  A AruaTech nasceu em 2022 da visão de transformar um dos maiores problemas ambientais da atualidade -
                  o lixo eletrônico - em soluções sustentáveis para a indústria e construção civil.
                </p>
                <p>
                  Com base em Manaus, no coração da Amazônia, desenvolvemos tecnologias que integram economia circular e
                  bioeconomia, transformando resíduos em materiais de alto valor agregado.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Bullseye className="h-5 w-5 text-primary mr-2" aria-hidden="true" />
                      <h3 className="text-xl font-semibold">Missão</h3>
                    </div>
                    <p>
                      Ser referência global em inovação circular, conectando tecnologia, sustentabilidade e inclusão
                      socioambiental.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Eye className="h-5 w-5 text-primary mr-2" aria-hidden="true" />
                      <h3 className="text-xl font-semibold">Visão</h3>
                    </div>
                    <p>
                      Um futuro onde resíduos viram recursos e a bioeconomia impulsiona desenvolvimento local
                      sustentável.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/team-photo.jpg"
                alt="Equipe AruaTech"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="section-header">
            <h2>Nosso Time</h2>
            <p>Especialistas em economia circular, biotecnologia e desenvolvimento sustentável</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Adley Piovesan",
                position: "Economista | Executivo",
                bio: "Especialista em finanças sustentáveis e modelos de negócios circulares com 15 anos de experiência.",
                image: "/images/adley.jpg",
              },
              {
                name: "Gabriel Lysias",
                position: "Engenheiro Ambiental | CTO",
                bio: "Especialista em tecnologias de reciclagem e desenvolvimento de materiais sustentáveis com foco em biomassas amazônicas.",
                image: "/placeholder.svg?height=500&width=400",
              },
              {
                name: "Ana Lindiner",
                position: "Bióloga | Diretora de P&D",
                bio: "Pesquisadora com foco em biotecnologia aplicada e desenvolvimento de soluções baseadas na biodiversidade amazônica.",
                image: "/placeholder.svg?height=500&width=400",
              },
              // Add more team members here
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary-dark">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  <a
                    href="#"
                    className="text-primary hover:text-primary-dark transition-colors"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
