import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Página não encontrada</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        A página que você está procurando pode ter sido removida, renomeada ou está temporariamente indisponível.
      </p>
      <Button asChild size="lg">
        <Link href="/">Voltar para a página inicial</Link>
      </Button>
    </div>
  )
}
