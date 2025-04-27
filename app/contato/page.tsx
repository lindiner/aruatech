import PageHero from "@/components/page-hero"
import ContactForm from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Phone, Linkedin, Instagram, Facebook, Youtube } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contato | AruaTech - Fale com nossos especialistas",
  description: "Entre em contato para parcerias, orçamentos ou dúvidas sobre nossas soluções sustentáveis.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Fale Conosco"
        description="Estamos prontos para transformar resíduos em soluções junto com você"
        backgroundImage="/images/amazonia1.jpg"
      />

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-3xl font-bold text-primary-dark">Nossos Canais</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Endereço</h3>
                    <p className="text-muted-foreground">
                      Av. Darcy Vargas, 1200
                      <br />
                      Parque 10 de Novembro
                      <br />
                      Manaus - AM, 69050-020
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">E-mails</h3>
                    <p className="text-muted-foreground">
                      <strong>Comercial:</strong> comercial@aruatech.com
                      <br />
                      <strong>Parcerias:</strong> parcerias@aruatech.com
                      <br />
                      <strong>Trabalhe conosco:</strong> rh@aruatech.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Telefones</h3>
                    <p className="text-muted-foreground">
                      <strong>Comercial:</strong> +55 (92) 1234-5678
                      <br />
                      <strong>WhatsApp:</strong> +55 (92) 98765-4321
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-3">Redes Sociais</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Linkedin, label: "LinkedIn" },
                    { icon: Instagram, label: "Instagram" },
                    { icon: Facebook, label: "Facebook" },
                    { icon: Youtube, label: "YouTube" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <Card className="lg:col-span-3">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-primary-dark mb-6">Envie sua Mensagem</h2>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary-dark text-center mb-8">Onde Estamos</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0000000000005!2d-60.00000000000001!3d-3.0000000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMTAnMDAuMCJTIDYwwrAwMCcwMC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Localização da AruaTech"
              aria-label="Mapa mostrando a localização da AruaTech em Manaus"
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="container">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Agende uma Visita</h2>
              <p className="text-white/90">Conheça nossa fábrica e processos in loco com nossos especialistas</p>
            </div>
            <Button variant="secondary" size="lg">
              Agendar Visita Técnica
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
