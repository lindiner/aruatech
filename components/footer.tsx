import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white h-[400px] overflow-auto" aria-labelledby="footer-heading" >

      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container relative z-10 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/images/5.png"
              alt="AruaTech Logo"
              width={150}
              height={40}
              className="h-10 w-auto mb-6"
            />
            <p className="text-gray-300 mb-6 max-w-md">
              Transformamos resíduos e biomassas amazônicas em soluções sustentáveis.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/aruatech/"
                className="text-gray-400 hover:text-white transition-colors hover:translate-y-[-3px] inline-block"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/aruatech.eco/"
                className="text-gray-400 hover:text-white transition-colors hover:translate-y-[-3px] inline-block"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              {/*<Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors hover:translate-y-[-3px] inline-block"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors hover:translate-y-[-3px] inline-block"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link><a href="#" class="text-gray-400 hover:text-white transition-colors hover:translate-y-[-3px] inline-block" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a><a href="#" class="text-gray-400 hover:text-white transition-colors hover:translate-y-[-3px] inline-block" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram h-5 w-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a><a href="#" class="text-gray-400 hover:text-white transition-colors hover:translate-y-[-3px] inline-block" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook h-5 w-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a><a href="#" class="text-gray-400 hover:text-white transition-colors hover:translate-y-[-3px] inline-block" aria-label="YouTube"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube h-5 w-5"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>*/}
            </div>
          </div>

          {/*<div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Soluções
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/solucoes#wpc" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Madeira Plástica
                </Link>
              </li>
              <li>
                <Link href="/solucoes#furniture" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Móveis Ecológicos
                </Link>
              </li>
              <li>
                <Link href="/solucoes#filament" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Filamento 3D
                </Link>
              </li>
              <li>
                <Link href="/solucoes#bricks" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Tijolos Ecológicos
                </Link>
              </li>
            </ul>
          </div> */}

          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Empresa
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Sobre Nós
                </Link>
              </li>
              {/*<li>
                <Link href="/sustentabilidad" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Sustentabilidade
                </Link>
              </li>
              <li>
                <Link href="/blo" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Blog
                </Link>
              </li>*/}
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Contato
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-gray-300">Manaus, AM - Brasil</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-gray-300">io@aruatech.eco.br</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-gray-300">+55 (21) 98297-7376</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} AruaTech. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Termos de Serviço
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
