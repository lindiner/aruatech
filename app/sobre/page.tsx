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
        backgroundImage="/images/amazonia2.jpg"
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
                  A Aruatech nasceu da necessidade urgente de repensar nosso modelo de produção e consumo. Em um mundo onde os recursos naturais são finitos e os problemas ambientais se agravam a cada dia, a empresa se posiciona como agente de transformação, oferecendo soluções inovadoras que combinam tecnologia, design e sustentabilidade.
                </p>
                <p>
                  Na intersecção entre tecnologia de ponta e a riqueza da Amazônia, a AruaTech redefine o potencial dos recursos subutilizados. Somos uma empresa amazonense que transforma resíduos industriais, materiais pós-consumo e subprodutos da agroindústria em soluções ecológicas de alto desempenho, impulsionando a economia circular e a reindustrialização verde.
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
                src="/images/amazonia2.jpg"
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
                name: "Gabriel Lysias",
                position: "CEO - Biotecnologo | ESG | Bioeconomia | Industria ",
                bio: " ",
                image: "/images/time/gabriel.png"
              },
              {
                name: "Adley Piovesan",
                position: "CFO - Economista | Executivo | Auditor | Consultor Financeiro",
                bio: " ",
                image: "/images/time/ADLEY.jpeg",
              },
              {
                name: "Ana Lindiner",
                position: "CTO -  Dados | Carbono | Sustentabilidade | Inovação",
                bio: " ",
                image: "/images/time/analindiner.png",
              },
              {
                name: "Alessandro Menzani",
                position: "CPO – Engenheiro Químico | Sustentabilidade | Indústria | Produto",
                bio: " ",
                image: "/images/time/Menzani.jpeg",
              },
              {
                name: "Marcelo Englander",
                position: "Industria | Sustentebilidade | Inovação",
                bio: " ",
                image: "/images/time/marcelo.jpeg",
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
