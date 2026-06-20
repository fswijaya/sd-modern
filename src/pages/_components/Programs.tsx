import { motion, useInView } from "motion/react";
import { useRef } from "react";

const programs = [
  {
    grade: "Kelas 1 & 2",
    title: "Fondasi Ceria",
    desc: "Belajar membaca, menulis, dan berhitung dengan metode bermain yang menyenangkan. Anak-anak membangun kepercayaan diri sejak dini.",
    image: "https://images.unsplash.com/photo-1527822618093-743f3e57977c?w=700&q=85",
    tags: ["Membaca", "Menulis", "Berhitung", "Seni"],
    num: "01",
    numColor: "text-accent",
  },
  {
    grade: "Kelas 3 & 4",
    title: "Petualang Ilmu",
    desc: "Mengeksplorasi sains, sosial, dan bahasa Inggris dengan pendekatan project-based learning yang interaktif dan kolaboratif.",
    image: "https://images.unsplash.com/photo-1758685734153-132c8620c1bd?w=700&q=85",
    tags: ["Sains", "IPS", "B. Inggris", "Komputer"],
    num: "02",
    numColor: "text-primary",
  },
  {
    grade: "Kelas 5 & 6",
    title: "Bintang Prestasi",
    desc: "Persiapan menuju jenjang SMP dengan program pendalaman materi, olimpiade, dan pengembangan karakter kepemimpinan.",
    image: "https://images.unsplash.com/photo-1512253080918-79cf0c2e0650?w=700&q=85",
    tags: ["Olimpiade", "Leadership", "Bahasa", "Teknologi"],
    num: "03",
    numColor: "text-[oklch(0.45_0.18_260)]",
  },
];

function ProgramCard({ program, index }: { program: typeof programs[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="group bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-400 hover:-translate-y-1"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide shadow-sm">
          {program.grade}
        </div>
        <div className="absolute bottom-4 right-4 font-serif text-5xl font-bold text-white/30 leading-none">
          {program.num}
        </div>
      </div>
      <div className="p-6">
        <div className={`font-serif text-sm font-semibold mb-1 ${program.numColor} tracking-wide`}>
          Program {program.num}
        </div>
        <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">{program.title}</h3>
        <p className="text-muted-foreground text-sm font-light leading-relaxed mb-5">{program.desc}</p>
        <div className="flex flex-wrap gap-2">
          {program.tags.map((tag) => (
            <span key={tag} className="bg-muted text-foreground/70 text-xs font-medium px-3 py-1 rounded-full border border-border">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Programs() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section
      id="program"
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
            <span className="text-accent font-semibold text-sm tracking-[0.15em] uppercase">Program Belajar</span>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h2 className="font-serif text-[2.8rem] md:text-[3.5rem] font-semibold text-foreground leading-tight">
            Kurikulum di Setiap Jenjang
          </h2>
          <p className="mt-4 text-muted-foreground text-lg font-light max-w-lg mx-auto leading-relaxed">
            Dirancang khusus untuk setiap tahap perkembangan anak, dari fondasi hingga prestasi.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <ProgramCard key={program.grade} program={program} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
