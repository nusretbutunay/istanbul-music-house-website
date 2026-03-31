import Link from "next/link"
import { Music, Instagram, Facebook, Youtube, Twitter } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

const footerLinks = [
  {
    title: "Keşfet",
    links: [
      { label: "Ana Sayfa", href: "#anasayfa" },
      { label: "Sanatçılar", href: "#sanatcilar" },
      { label: "Etkinlikler", href: "#etkinlikler" },
      { label: "Galeri", href: "#" },
    ],
  },
  {
    title: "Bilgi",
    links: [
      { label: "Hakkımızda", href: "#hakkimizda" },
      { label: "SSS", href: "#" },
      { label: "Gizlilik Politikası", href: "#" },
      { label: "Kullanım Şartları", href: "#" },
    ],
  },
  {
    title: "İletişim",
    links: [
      { label: "Rezervasyon", href: "#iletisim" },
      { label: "Kurumsal", href: "#" },
      { label: "Kariyer", href: "#" },
      { label: "Basın", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Music className="h-8 w-8 text-primary" />
              <span className="font-serif text-xl font-semibold">
                Istanbul Music House
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground text-sm max-w-xs">
              İstanbul&apos;un kalbinde, müziğin ruhu. 
              Eşsiz sanatçılarımızla unutulmaz müzik deneyimleri.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Istanbul Music House. Tüm hakları saklıdır.
          </p>
          <p className="text-sm text-muted-foreground">
            İstanbul, Türkiye&apos;de ❤️ ile yapıldı
          </p>
        </div>
      </div>
    </footer>
  )
}
