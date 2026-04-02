import Image from "next/image"
import { Instagram, Music } from "lucide-react"
import { Button } from "@/components/ui/button"

const artists = [
  {
    name: "Mebrure",
    role: "Vokal & Şarkı Yazarı",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mebrure-zokWhZVo2ixM0ZTlM0AttnIXhQ6pVe.jpg",
    description: "Duygusal yorumları ve etkileyici sahne performansıyla tanınan Mebrure, geleneksel melodilere modern bir dokunuş katıyor.",
  },
]

export function ArtistsSection() {
  return (
    <section id="sanatcilar" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Sanatçılar
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Yetenekli Sanatçılarımız
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Müziğin farklı renklerini sahnemize taşıyan benzersiz yeteneklerimizle tanışın.
          </p>
        </div>

        {/* Artists Grid */}
        <div className="flex justify-center">
          {artists.map((artist, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 w-full max-w-sm"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  {artist.name}
                </h3>
                <p className="text-primary text-sm font-medium mt-1">
                  {artist.role}
                </p>
                <p className="text-muted-foreground text-sm mt-3 line-clamp-2 group-hover:line-clamp-none transition-all">
                  {artist.description}
                </p>
                
                {/* Social Links */}
                <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="icon" variant="outline" className="h-8 w-8">
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline" className="h-8 w-8">
                    <Music className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
