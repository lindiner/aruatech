import Link from "next/link"
import Image from "next/image"
import PageHero from "@/components/page-hero"
import BlogCard from "@/components/blog-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"
import AnimateOnScroll from "@/components/animate-on-scroll"

export const metadata: Metadata = {
  title: "Blog AruaTech | Inovação Circular e Bioeconomia",
  description: "Artigos, cases e novidades sobre economia circular, gestão de resíduos e desenvolvimento sustentável.",
}

// Mock blog data
const blogPosts = [
  {
    title: "Biomassas amazônicas como reforço estrutural em compósitos",
    excerpt: "Resultados de nossa pesquisa com caroço de açaí e fibras vegetais...",
    image: "/images/post1.jpg",
    category: "Bioeconomia",
    date: "2023-10-05",
    slug: "biomassas-amazonicas-compositos",
  },
  {
    title: "Novo marco legal do lixo eletrônico: oportunidades para empresas",
    excerpt: "Como a nova legislação brasileira cria incentivos para modelos circulares...",
    image: "/images/post2.jpg",
    category: "Legislação",
    date: "2023-09-28",
    slug: "marco-legal-lixo-eletronico",
  },
  {
    title: "Como o Hotel Verde Amazônia reduziu custos com nossos tijolos ecológicos",
    excerpt: "Case completo da implementação em 2000m² de área construída...",
    image: "/images/post3.jpg",
    category: "Case",
    date: "2023-09-14",
    slug: "case-hotel-verde-amazonia",
  },
  {
    title: "Filamento 3D sustentável: revolucionando a manufatura aditiva",
    excerpt: "Nossa tecnologia que reduz em 25% a pegada de carbono na impressão 3D...",
    image: "/images/post4.jpg",
    category: "Inovação",
    date: "2023-09-01",
    slug: "filamento-3d-sustentavel",
  },
]

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Conhecimento que Transforma"
        description="Insights sobre economia circular, bioeconomia e inovação sustentável"
        backgroundImage="/images/blog-hero.jpg"
      />

      <section className="py-8 bg-white border-b">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Todos", active: true },
              { name: "Economia Circular", active: false },
              { name: "Bioeconomia", active: false },
              { name: "Cases", active: false },
              { name: "Inovação", active: false },
              { name: "Legislação", active: false },
            ].map((category, index) => (
              <Button key={index} variant={category.active ? "default" : "outline"} className="rounded-full">
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <AnimateOnScroll animation="fade-up">
            <Card className="overflow-hidden mb-16">
              <div className="grid md:grid-cols-2">
                <div className="relative">
                  <Image
                    src="/images/featured-post.jpg"
                    alt="Post Destacado"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-4 py-1 rounded-full font-medium text-sm">
                    Destaque
                  </div>
                </div>
                <CardContent className="p-6 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-3 text-sm">
                    <span className="text-primary font-medium">Economia Circular</span>
                    <span className="text-muted-foreground">15 Out 2023</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">
                    Como Manaus está se tornando um hub de inovação circular
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Análise do ecossistema de startups sustentáveis na região norte e o papel da AruaTech na valorização
                    de resíduos eletrônicos...
                  </p>
                  <Link
                    href="/blog/manaus-hub-inovacao-circular"
                    className="text-primary font-medium hover:text-primary-dark transition-colors inline-flex items-center"
                  >
                    Ler Artigo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in" className="overflow-hidden">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {blogPosts.map((post, index) => (
                <AnimateOnScroll key={index} animation="fade-up" delay={index * 150} threshold={0.2} className="h-full">
                  <BlogCard
                    title={post.title}
                    excerpt={post.excerpt}
                    image={post.image}
                    category={post.category}
                    date={post.date}
                    slug={post.slug}
                  />
                </AnimateOnScroll>
              ))}
            </div>
          </AnimateOnScroll>

          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <Button variant="outline" className="w-10 h-10 p-0 rounded-full bg-primary text-white">
                1
              </Button>
              <Button variant="outline" className="w-10 h-10 p-0 rounded-full">
                2
              </Button>
              <Button variant="outline" className="w-10 h-10 p-0 rounded-full">
                3
              </Button>
              <Button variant="outline" className="rounded-full flex items-center gap-1">
                Próximo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">Assine nossa newsletter</h2>
              <p>Receba mensalmente artigos exclusivos, cases e novidades sobre economia circular</p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="px-4 py-3 rounded-md border-0 text-foreground w-full md:w-auto"
                aria-label="Seu email para newsletter"
              />
              <Button variant="secondary" size="lg">
                Assinar
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
