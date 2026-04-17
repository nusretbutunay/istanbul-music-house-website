import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="anasayfa" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-music.jpg"
          alt="Istanbul Music House sahne"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
          <span className="text-foreground">Müzik Yeniden</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          Tertemiz sesler, naif şairler, ruha şifa bestelerle yola çıktık. Gelenekten, geleceğe selam ile.
        </p>
      </div>
    </section>
  )
}
