import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sari Dewi",
    role: "Orang tua murid Kelas 3",
    initials: "SD",
    quote: "Anak saya sangat senang bersekolah di sini! Setiap hari selalu ada cerita seru yang dibawa pulang. Guru-gurunya sabar dan kreatif sekali.",
    stars: 5,
    color: "bg-primary/5 border-primary/12",
  },
  {
    name: "Budi Santoso",
    role: "Orang tua murid Kelas 5",
    initials: "BS",
    quote: "Prestasi anak kami meningkat drastis sejak pindah ke SD Bintang Ceria. Program olimpiadanya luar biasa, anak jadi lebih percaya diri.",
    stars: 5,
    color: "bg-accent/5 border-accent/15",
  },
  {
    name: "Rina Melati",
    role: "Orang tua murid Kelas 1",
    initials: "RM",
    quote: "Transisi dari TK ke SD tidak mudah, tapi guru-guru di sini sangat membantu. Anak saya langsung nyaman dan betah di sekolah.",
    stars: 5,
    color: "bg-[oklch(0.45_0.18_260)]/5 border-[oklch(0.65_0.12_260)]/15",
  },
  {
    name: "Ahmad Yusuf",
    role: "Orang tua murid Kelas 6",
    initials: "AY",
    quote: "6 tahun di SD Bintang Ceria adalah pengalaman terbaik. Anak kami lulus dengan nilai tinggi dan diterima di SMP favorit!",
    stars: 5,
    color: "bg-primary/5 border-primary/12",
  },
];

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`${t.color} border rounded-2xl p-6 flex flex-col gap-5 hover:shadow-md transition-all duration-300`}
    >
      <Quote className="w-7 h-7 text-primary/25" />
      <p className="text-foreground/80 text-sm font-light leading-relaxed flex-1">
        {`"${t.quote}"`}
      </p>
      <div className="flex gap-0.5">
        {Array.from({ length: t.stars }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
        ))}
      </div>
      <div className="flex items-center gap-3 border-t border-current/5 pt-4">
        <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
          {t.initials}
        </div>
        <div>
          <p className="font-semibold text-sm text-foreground">{t.name}</p>
          <p className="text-xs text-muted-foreground font-light">{t.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section
      id="testimoni"
      className="py-28 px-6"
      style={{ background: "oklch(0.97 0.01 90)" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent font-semibold text-sm tracking-[0.15em] uppercase">Testimoni</span>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h2 className="font-serif text-[2.8rem] md:text-[3.5rem] font-semibold text-foreground leading-tight">
            Kata Orang Tua Kami
          </h2>
          <p className="mt-4 text-muted-foreground text-lg font-light max-w-lg mx-auto">
            Kepercayaan orang tua adalah kebanggaan terbesar kami.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
