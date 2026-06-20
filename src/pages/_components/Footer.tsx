const footerLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Program", href: "#program" },
  { label: "Galeri", href: "#galeri" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Kontak", href: "#kontak" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="text-white py-16 px-6"
      style={{ background: "linear-gradient(145deg, oklch(0.22 0.07 168), oklch(0.16 0.05 175))" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center">
                <span className="font-serif font-bold text-white text-base">S</span>
              </div>
              <span className="font-serif text-xl font-semibold">SD Bintang Ceria</span>
            </div>
            <p className="text-white/55 text-sm font-light leading-relaxed max-w-xs mb-6">
              Mendidik generasi penerus bangsa dengan penuh cinta, kreativitas, dan semangat belajar yang tinggi sejak 2009.
            </p>
            <div className="flex items-center gap-2">
              <div className="h-px w-6 bg-accent/60" />
              <p className="font-serif italic text-lg text-accent/80 font-medium">
                {'"Cerdas, Kreatif, Berkarakter"'}
              </p>
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="text-xs font-semibold text-white/40 uppercase tracking-[0.18em] mb-5">Navigasi</p>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/55 hover:text-white text-sm font-light transition-colors cursor-pointer inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="text-xs font-semibold text-white/40 uppercase tracking-[0.18em] mb-5">Informasi</p>
            <div className="flex flex-col gap-3 text-sm font-light text-white/55">
              <p>Jl. Bintang Ceria No. 12</p>
              <p>Kota Bahagia, Jawa Tengah</p>
              <p>(0291) 123-4567</p>
              <p>info@sdbintangceria.sch.id</p>
              <p>Senin\u2013Jumat: 07.00\u201314.30 WIB</p>
            </div>
          </div>
        </div>
        <div className="h-px bg-white/10 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs font-light tracking-wide">
            \u00a9 {year} SD Bintang Ceria. Semua hak dilindungi.
          </p>
          <p className="text-white/35 text-xs font-light">
            Dengan cinta untuk generasi masa depan Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
