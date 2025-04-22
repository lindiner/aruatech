"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const solutions = [
  {
    id: "wpc",
    title: "Madeira Plástica (WPC)",
    subtitle: "A sustentabilidade que resiste ao tempo e às intempéries",
    description:
      "Nossa madeira plástica é produzida a partir da combinação de plásticos reciclados de eletrônicos e fibras naturais amazônicas, resultando em um material durável, versátil e ecologicamente correto.",
    image: "/images/wpc-detail.jpg",
    specs: [
      { label: "100% reciclável", icon: "recycle" },
      { label: "Resistente a cupins", icon: "bug" },
      { label: "Impermeável", icon: "tint" },
      { label: "Autoextinguível", icon: "fire" },
    ],
    applications: [
      "Decks e áreas externas",
      "Móveis para ambientes úmidos",
      "Estruturas de jardim",
      "Revestimentos",
      "Fachadas arquitetônicas",
    ],
  },
  {
    id: "furniture",
    title: "Móveis Ecológicos",
    subtitle: "Design sustentável com conforto e durabilidade",
    description:
      "Linha completa de móveis para interior e exterior feitos com nossa madeira plástica e outros materiais reciclados, combinando estética, funcionalidade e compromisso ambiental.",
    image: "/images/eco-furniture.jpg",
    specs: [
      { label: "Design exclusivo", icon: "paint-brush" },
      { label: "Resistente a intempéries", icon: "cloud-sun" },
      { label: "Baixa manutenção", icon: "tools" },
      { label: "Personalização", icon: "sliders-h" },
    ],
    applications: [
      "Mobiliário residencial",
      "Espaços corporativos",
      "Áreas externas",
      "Hotelaria",
      "Projetos arquitetônicos",
    ],
  },
  {
    id: "bricks",
    title: "Tijolos Ecológicos",
    subtitle: "Construção sustentável com melhor isolamento térmico e acústico",
    description:
      "Nossos tijolos ecológicos são produzidos a partir de resíduos eletrônicos e biomassas, oferecendo excelente desempenho térmico e acústico, além de reduzir significativamente a pegada de carbono da construção.",
    image: "/images/eco-bricks.jpg",
    specs: [
      { label: "Isolamento térmico", icon: "temperature-high" },
      { label: "Isolamento acústico", icon: "volume-mute" },
      { label: "Resistente ao fogo", icon: "fire-alt" },
      { label: "Encaixe modular", icon: "puzzle-piece" },
    ],
    applications: [
      "Construção residencial",
      "Edifícios comerciais",
      "Divisórias internas",
      "Muros e cercas",
      "Projetos de baixo impacto ambiental",
    ],
  },
  {
    id: "filament",
    title: "Filamento para 3D",
    subtitle: "Matéria-prima sustentável para manufatura aditiva",
    description:
      "Desenvolvemos filamentos para impressão 3D a partir de plásticos reciclados de eletrônicos, oferecendo qualidade industrial com menor impacto ambiental para prototipagem e produção.",
    image: "/images/3d-filament.jpg",
    specs: [
      { label: "Alta precisão", icon: "ruler" },
      { label: "Múltiplas cores", icon: "palette" },
      { label: "Resistente", icon: "shield-alt" },
      { label: "Biodegradável", icon: "leaf" },
    ],
    applications: [
      "Prototipagem rápida",
      "Produção de peças finais",
      "Projetos educacionais",
      "Modelagem arquitetônica",
      "Arte e design",
    ],
  },
]

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const goToSlide = (index: number) => {
    if (isAnimating) return

    setIsAnimating(true)
    setSlideDirection(index > activeIndex ? "right" : "left")
    setActiveIndex(index)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500) // Match this with the CSS transition duration
  }

  const nextSlide = () => {
    if (isAnimating) return
    const newIndex = (activeIndex + 1) % solutions.length
    goToSlide(newIndex)
  }

  const prevSlide = () => {
    if (isAnimating) return
    const newIndex = (activeIndex - 1 + solutions.length) % solutions.length
    goToSlide(newIndex)
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide()
      } else if (e.key === "ArrowRight") {
        nextSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeIndex, isAnimating])

  const solution = solutions[activeIndex]

  return (
    <div className="relative" ref={carouselRef}>
      {/* Carousel navigation */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-2 bg-white rounded-full p-1 shadow-md">
          {solutions.map((item, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeIndex === index ? "bg-primary text-white" : "hover:bg-gray-100",
              )}
              aria-label={`Ver ${item.title}`}
              aria-current={activeIndex === index ? "true" : "false"}
            >
              {item.title.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel content */}
      <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
        <div
          className={cn(
            "grid md:grid-cols-2 gap-8 p-6 md:p-8 transition-transform duration-500 ease-in-out",
            slideDirection === "right" ? "translate-x-[-100%]" : slideDirection === "left" ? "translate-x-[100%]" : "",
          )}
          style={{ transform: "translate(0)" }} // This is overridden by the classes above during animation
        >
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">{solution.title}</h2>
                <p className="text-xl text-muted-foreground mt-2">{solution.subtitle}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                {solution.specs.map((spec, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    <span className={`fas fa-${spec.icon} text-primary`} aria-hidden="true"></span>
                    {spec.label}
                  </span>
                ))}
              </div>

              <p>{solution.description}</p>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-dark">Aplicações</h3>
                <ul className="space-y-2">
                  {solution.applications.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button asChild size="lg">
                <Link href={`/contato?produto=${solution.id}`}>Solicitar Orçamento</Link>
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="rounded-lg overflow-hidden shadow-xl h-full">
              <Image
                src={solution.image || "/placeholder.svg"}
                alt={solution.title}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-md z-10 transition-all"
          aria-label="Solução anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 rounded-full shadow-md z-10 transition-all"
          aria-label="Próxima solução"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {solutions.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              activeIndex === index ? "bg-primary w-6" : "bg-gray-300 hover:bg-gray-400",
            )}
            aria-label={`Ir para slide ${index + 1}`}
            aria-current={activeIndex === index ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  )
}
