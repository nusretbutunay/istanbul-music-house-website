import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const events = [
  {
    title: "Mebrure - Akustik Gece",
    date: "15 Nisan 2026",
    time: "21:00",
    location: "Ana Salon",
    description: "Mebrure'nin en sevilen şarkılarını akustik düzenlemelerle dinleyeceğiniz samimi bir gece.",
  },
  {
    title: "Mutebessim - Enstrümantal Yolculuk",
    date: "22 Nisan 2026",
    time: "20:30",
    location: "Galeri Sahne",
    description: "Doğu ve Batı müziğinin buluştuğu muhteşem bir enstrümantal performans.",
  },
  {
    title: "Maşuk - Ruh Konseri",
    date: "29 Nisan 2026",
    time: "21:30",
    location: "Ana Salon",
    description: "Maşuk'un derin yorumlarıyla ruhunuza dokunacak özel bir konser deneyimi.",
  },
]

export function EventsSection() {
  return (
    <section id="etkinlikler" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Etkinlikler
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Yaklaşan Konserler
            </h2>
          </div>
          <Button variant="outline" className="group w-fit">
            Tüm Etkinlikler
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="group flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-6 bg-secondary rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex-1">
                <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-2">
                  {event.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{event.location}</span>
                </div>
                <Button size="sm">
                  Bilet Al
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
