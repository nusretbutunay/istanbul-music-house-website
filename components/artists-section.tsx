import Image from "next/image"
import { Instagram, Youtube, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )
}

const artists = [
  {
    name: "Mebrure",
    role: "Vokal & Şarkı Yazarı",
    image: "/images/mebrure.png",
    description: "Duygusal yorumları ve kendine has tarzıyla Mebrure, geleneksel melodilere modern bir dokunuş katıyor.",
    instagram: "https://www.instagram.com/official_mebrure/",
    youtube: "https://www.youtube.com/channel/UCCd359ltUJINbVy8gpBcO8Q",
    facebook: "https://www.facebook.com/share/1DWtjfVv3T/",
    tiktok: "https://www.tiktok.com/@mebrureniz?_r=1&_t=ZS-95bjdHSbb3C",
    spotify: "https://open.spotify.com/artist/4jCnnQ6alF5PKST5XwSOz7?si=VS7zaoRYS0KaF-duOWgT2Q"
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
            Müziğin farklı renklerini müzikseverlerle buluşturan benzersiz yeteneklerimizle tanışın.
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
                  <a href={artist.instagram} target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="outline" className="h-8 w-8">
                      <Instagram className="h-4 w-4" />
                    </Button>
                  </a>
                  <a href={artist.youtube} target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="outline" className="h-8 w-8">
                      <Youtube className="h-4 w-4" />
                    </Button>
                  </a>
                  <a href={artist.facebook} target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="outline" className="h-8 w-8">
                      <Facebook className="h-4 w-4" />
                    </Button>
                  </a>
                  <a href={artist.tiktok} target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="outline" className="h-8 w-8">
                      <TikTokIcon className="h-4 w-4" />
                    </Button>
                  </a>
                  <a href={artist.spotify} target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="outline" className="h-8 w-8">
                      <SpotifyIcon className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
