import { Music2, Users, Calendar, Award } from "lucide-react"

const stats = [
  { icon: Music2, value: "150+", label: "Canlı Performans" },
  { icon: Users, value: "50K+", label: "Mutlu Misafir" },
  { icon: Calendar, value: "10+", label: "Yıllık Deneyim" },
  { icon: Award, value: "25+", label: "Yetenekli Sanatçı" },
]

export function AboutSection() {
  return (
    <section id="hakkimizda" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Hakkımızda
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              Müziğe Adanmış Bir
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Istanbul Music House, şehrin kültürel dokusuna yeni bir soluk getirmek amacıyla kuruldu.
              Geleneksel Türk müziğinden modern yorumlara kadar geniş bir yelpazede,
              en yetenekli sanatçılarımızla sizlere unutulmaz anlar yaşatıyoruz.
            </p>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Her performansımız, müziğin evrensel diliyle kalplere dokunmak için tasarlandı.
              Samimi atmosferimiz ve profesyonel sahnemizle,
              her ziyaretinizi özel kılmak için buradayız.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-secondary p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <stat.icon className="h-8 w-8 text-primary mb-4" />
                <p className="font-serif text-3xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
