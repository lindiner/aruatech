import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import AnimateOnScroll from "@/components/animate-on-scroll"

interface ProductCardProps {
  title: string
  description: string
  image: string
  link: string
  delay?: number
}

export default function ProductCard({ title, description, image, link, delay = 0 }: ProductCardProps) {
  return (
    <AnimateOnScroll delay={delay} animation="fade-up">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 rounded-xl">
        <div className="h-48 overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-primary text-xs font-medium px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20">
            Ver detalhes
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-primary-dark">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <Button asChild variant="outline" size="sm" className="rounded-full">
            <Link href={link}>Saiba mais</Link>
          </Button>
        </CardContent>
      </Card>
    </AnimateOnScroll>
  )
}
