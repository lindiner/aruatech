import { cn } from "@/lib/utils"

interface PageHeroProps {
  title: string
  description?: string
  backgroundImage: string
  className?: string
}

export default function PageHero({ title, description, backgroundImage, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex items-center justify-center py-32 md:py-40 mt-16 text-white text-center overflow-hidden",
        className
      )}
      aria-labelledby="page-title"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-black/60 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
        aria-hidden="true"
      />
      
      {/* Pattern overlay */}
      <div className="pattern-bg opacity-[0.03]"></div>
      
      {/* Decorative blobs */}
      <div className="blob-primary w-64 h-64 -top-20 -left-20"></div>
      <div className="blob-accent w-64 h-64 bottom-10 right-10"></div>

      <div className="container relative z-10">
        <h1 
          id="page-title" 
          className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-md animate-slideUp"
        >
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-sm animate-slideUp animation-delay-100">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
