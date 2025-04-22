import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { formatDate } from "@/lib/utils"

interface BlogCardProps {
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  slug: string
}

export default function BlogCard({ title, excerpt, image, category, date, slug }: BlogCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 rounded-xl h-full">
      <Link href={`/blog/${slug}`} className="block h-48 overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full z-20">
          {category}
        </div>
      </Link>
      <CardContent className="p-6">
        <div className="text-sm text-muted-foreground mb-3">{formatDate(date)}</div>
        <Link href={`/blog/${slug}`} className="block group">
          <h3 className="text-xl font-semibold mb-2 text-primary-dark group-hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-muted-foreground mb-4">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="text-primary font-medium hover:text-primary-dark transition-colors inline-flex items-center"
        >
          Ler Mais
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </CardContent>
    </Card>
  )
}
