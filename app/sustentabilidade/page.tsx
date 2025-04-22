import Image from "next/image"
import Link from "next/link"
import PageHero from "@/components/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Microscope, Factory, Heart, FileText, FileCode, Footprints } from "lucide-react"
import type { Metadata } from "next"
import AnimateOnScroll from "@/components/animate-on-scroll"

export const metadata: Metadata = {
  title: "Sustentabilidade | AruaTech - Economia Circular na Prática",
  description: "Como transformamos resíduos eletrônicos em soluções sustentáveis com impacto mensurável na Amazônia.",
}

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        title="ESG na Prática"
        description="Métricas reais de impacto socioambiental e economia regenerativa"
        backgroundImage="/images/sustainability-hero.jpg"
      />

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="section-header">
            <h2>Nosso Impacto em Números</h2>
            <p>Dados transparentes que comprovam nossa contribuição para os ODS da ONU</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "recycle",
                value: "840+ ton",
                description: "Plástico de e-waste transformado anualmente",
              },
              {
                icon: "cloud",
                value: "18%",
                description: "Redução de emissões de GEE nos nossos produtos",
              },
              {
                icon: "tree",
                value: "30%",
                description: "Menos uso de madeira nativa com nossa WPC",
              },
              {
                icon: "users",
                value: "120+",
                description: "Empregos verdes gerados em cooperativas parceiras",
              },
            ].map((metric, index) => (
              <div
                key={index}
                className="transform transition-all duration-700 hover:scale-105"
                style={{
                  opacity: 0,
                  transform: "translateY(20px)",
                  animation: `fadeInUp 0.7s ease-out forwards ${index * 0.15}s`,
                }}
              >
                <div className="bg-white rounded-lg p-6 h-full shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className={`fas fa-${metric.icon} text-2xl`} aria-hidden="true"></span>
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-2 text-center">{metric.value}</h3>
                  <p className="text-muted-foreground text-center">{metric.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="slide-in-left">
              <div>
                <h2 className="text-3xl font-bold text-primary-dark mb-6">Economia Circular com DNA Amazônico</h2>
                <p className="mb-6">Nossa metodologia integra:</p>

                <div className="space-y-6">
                  {[
                    {
                      icon: Microscope,
                      title: "Biotecnologia Aplicada",
                      description: "Uso de biomassas regionais (açaí, cupuaçu) como reforço estrutural",
                    },
                    {
                      icon: Factory,
                      title: "Manufatura Regenerativa",
                      description: "Processos industriais com eficiência energética e zero desperdício",
                    },
                    {
                      icon: Heart,
                      title: "Inclusão Socioambiental",
                      description: "Parcerias com cooperativas de catadores e comunidades ribeirinhas",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="bg-primary/10 text-primary p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1 text-primary-dark">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-in-right" delay={200}>
              <div className="relative">
                <Image
                  src="/images/circular-process.png"
                  alt="Diagrama de Economia Circular AruaTech"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground p-4 rounded-lg shadow-lg text-center w-40">
                  <p className="text-sm">Certificado</p>
                  <h4 className="text-xl font-bold">Empresa B</h4>
                  <p className="text-xs">Em processo de certificação</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="section-header">
            <h2>Alinhados com os Objetivos de Desenvolvimento Sustentável</h2>
            <p>Como contribuímos para a Agenda 2030 da ONU</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: 9, name: "Inovação Industrial Sustentável" },
              { number: 12, name: "Consumo e Produção Responsáveis" },
              { number: 13, name: "Ação Contra Mudança Climática" },
              { number: 17, name: "Parcerias para os Objetivos" },
            ].map((ods, index) => (
              <AnimateOnScroll key={index} delay={index * 100}>
                <div className="text-center">
                  <Image
                    src={`/images/ods-${ods.number}.png`}
                    alt={`ODS ${ods.number}`}
                    width={150}
                    height={150}
                    className="mx-auto mb-4"
                  />
                  <p className="text-sm">{ods.name}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="section-header">
            <h2>Transparência e Governança</h2>
            <p>Acesse nossos relatórios de impacto e políticas ESG</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: FileText,
                title: "Relatório de Impacto 2023",
                fileSize: "PDF - 2.4MB",
                link: "/docs/relatorio-impacto-2023.pdf",
              },
              {
                icon: FileCode,
                title: "Política ESG",
                fileSize: "PDF - 1.8MB",
                link: "/docs/politica-esg.pdf",
              },
              {
                icon: Footprints,
                title: "Pegada de Carbono",
                fileSize: "PDF - 3.1MB",
                link: "/docs/carbon-footprint.pdf",
              },
            ].map((report, index) => (
              <AnimateOnScroll key={index} delay={index * 100}>
                <Card className="text-center hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <report.icon className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-primary-dark">{report.title}</h3>
                    <p className="text-muted-foreground mb-4">{report.fileSize}</p>
                    <Button asChild variant="outline">
                      <Link href={report.link} target="_blank">
                        Download
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
