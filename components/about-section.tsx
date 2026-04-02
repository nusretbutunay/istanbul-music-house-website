export function AboutSection() {
  return (
    <section id="hakkimizda" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Hakkımızda
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              Müziğe Davetlisiniz!
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Istanbul Music House, müziğin dokusuna yeni bir soluk getirmek amacıyla kuruldu.
              Geleneksel Türk müziğinden modern yorumlara kadar geniş bir yelpazede,
              en yetenekli sanatçılarımızla sizlere unutulmaz anlar yaşatıyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
