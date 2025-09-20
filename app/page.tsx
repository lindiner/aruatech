import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-white to-gray-50 mt-20">
        {/* Background pattern */}
        <div className="absolute inset-0 z-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%239C92AC" fillOpacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              backgroundSize: "24px 24px",
            }}
          ></div>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
            {/* Content */}
            <div className="max-w-3xl mb-12 lg:mb-0 lg:mr-8">
              <div className="inline-block mb-6 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wide animate-fadeIn">
                Economia Circular & Bioeconomia
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6 animate-slideUp">
                <span className="text-primary">Reduzimos o impacto,</span> valorizamos a floresta e regeneramos o planeta              </h1>
              <p className="text-lg text-gray-600 mb-8 animate-slideUp animation-delay-100">
                  Na Aruatech, transformamos residuos, passivos ambientais e biomassas amazônicas em soluções que regeneram o meio ambiente e impulsionam um futuro de materiais de baixo carbono.
              </p>
              <div className="flex flex-wrap justify-center gap-4 animate-slideUp animation-delay-200">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link href="development.tsx">Nossas Soluções</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 hover:bg-green-100 hover:border-green-300"
                >
                  <Link href="/contato">Fale Conosco</Link>
                </Button>
              </div>
            </div>

            {/* Image - Responsive positioning */}
            <div className="relative w-full max-w-2xl lg:max-w-md animate-fadeIn animation-delay-300">
              <div className="absolute -top-10 left-1/4 w-40 h-40 bg-primary/10 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 right-1/4 w-40 h-40 bg-secondary/10 rounded-full filter blur-3xl"></div>

              <div className="relative z-10 bg-white p-2 rounded-2xl shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500 mx-auto lg:mx-0">
                <Image
                  src="/images/amazonia.jpg" // Correct path without "public/"
                  alt="AruaTech - Soluções Sustentáveis"
                  width={600}
                  height={400}
                  className="rounded-xl"
                  priority
                />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl border border-primary/20 sm:px-8 sm:py-4">
                  <span className="flex items-center gap-2 text-xs font-medium sm:gap-3 sm:text-sm">
                  <span className="relative flex h-3 w-3 sm:h-4 sm:w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 sm:h-4 sm:w-4 bg-green-500"></span>
                  </span>
                  <span className="text-primary-dark font-semibold">Feito com resíduos da Amazônia</span>
                  </span>
                </div>
                </div>
              </div>
              </div>
            </div>
            </section>

      {/* Stats Section */}
      {/*}
      <section className="py-16 mt-25 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "2.1M", label: "Toneladas de lixo eletrônico no Brasil (2022)" },
              { value: "40%", label: "Redução de resíduos em aterros" },
              { value: "18%", label: "Menos emissões que produtos convencionais" },
              { value: "40%+", label: "ROI para nossos parceiros" },
            ].map((stat, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Problem/Solution Section */}
      <section className="py-16 md:py-16 bg-gray-50">
        <div className="container">
          <div className="section-header">
            <h2>Transformando um problema global em oportunidade local</h2>
            <p>O plástico que polui nossos rios pode virar um tijolo</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary-dark">O Problema</h3>
                <ul className="space-y-4">
                  {[
                    "840 mil toneladas de carcaças plásticas descartadas anualmente",
                    "Contaminação de solos e rios",
                    "Perda de materiais valiosos",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <X className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary-dark">Nossa Solução</h3>
                <ul className="space-y-4">
                  {[
                      "Aplicação de economia circular para reaproveitamento de resíduos",
                      "Valorização da bioeconomia amazônica",
                      "Desenvolvimento de produtos com desempenho superior e menor impacto ambiental"
                    ].map(
                    (item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}

      <section className="py-16 md:py-16 bg-white">
        <div className="container">
          <div className="section-header">
            <h2>Nosso Processo Circular</h2>
            <p>Como transformamos resíduos em soluções de alto valor</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: 1,
                title: "Coleta Inteligente",
                description: "Parcerias com cooperativas e empresas para coleta seletiva de e-waste",
              },
              {
                step: 2,
                title: "Processamento",
                description: "Trituração, limpeza e preparação dos materiais",
              },
              {
                step: 3,
                title: "Transformação",
                description: "Criação de materiais ecoeficientes com tecnologia própria",
              },
              {
                step: 4,
                title: "Aplicação",
                description: "Produtos finais para construção, móveis e indústria",
              },
            ].map((process) => (
              <div key={process.step} className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary-dark">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
  

      {/* Products Showcase */}
      {/*
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="section-header">
          <h2>Nossas Soluções Sustentáveis</h2>
          <p>Produtos com DNA da floresta e tecnologia circular</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Madeira Plástica (WPC)",
              description: "Material durável e resistente à umidade, ideal para decks, móveis e estruturas externas.",
              image: "/images/wood-plastic.jpg",
              link: "/solucoes#wpc",
            },
            {
              title: "Móveis Ecológicos",
              description: "Linha de móveis modernos feitos com nossa madeira plástica e design sustentável.",
              image: "/images/eco-furniture.jpg",
              link: "/solucoes#furniture",
            },
            {
              title: "Filamento 3D",
              description: "Matéria-prima sustentável para manufatura aditiva, com qualidade industrial.",
              image: "/images/3d-filament.jpg",
              link: "/solucoes#filament",
            },
          ].map((product, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              width={400}
              height={300}
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
              </div>
              <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-primary-dark">{product.title}</h3>
            <p className="text-muted-foreground mb-4">{product.description}</p>
            <Button asChild variant="outline" size="sm">
              <Link href={product.link}>Saiba mais</Link>
            </Button>
              </CardContent>
            </Card>
          ))}
            </div>
            <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/solucoes">Ver todas as soluções</Link>
          </Button>
            </div>
          </div>
        </section>

        {/* Testimonials 
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="section-header">
          <h2>O que dizem nossos parceiros</h2>
          <p>Empresas que já transformam resíduos em valor com a AruaTech</p>
            </div>
            <div className="max-w-3xl mx-auto">
          <Card className="bg-gray-50">
            <CardContent className="p-8">
              <p className="text-lg italic mb-6">
            "A parceria com a AruaTech nos permitiu reduzir nosso custo com matéria-prima em 15% enquanto
            melhoramos nosso desempenho em ESG."
              </p>
              <div className="flex items-center">
            <Image
              src="/images/client1.jpg"
              alt="Carlos Mendes"
              width={60}
              height={60}
              className="rounded-full mr-4"
            />
            <div>
              <h4 className="font-semibold">Carlos Mendes</h4>
              <p className="text-sm text-muted-foreground">Diretor de Sustentabilidade, Serenergia</p>
            </div>
              </div>
            </CardContent>
          </Card>
            </div>
          </div>
        </section>
*/}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para transformar resíduos em valor?</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Junte-se à revolução da economia circular e descubra como seu negócio pode lucrar enquanto protege a
            Amazônia.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contato">Fale com nossos especialistas</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
