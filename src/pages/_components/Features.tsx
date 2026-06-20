import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Palette, Laptop, ShieldCheck, Leaf, BookOpen } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Guru Berpengalaman",
    desc: "Tim pengajar bersertifikat dengan pengalaman lebih dari 10 tahun dalam pendidikan dasar.",
    accent: "bg-primary/8 text-primary",
    border: "border-primary/15",
  },
  {
    icon: BookOpen,
    title: "Kurikulum Merdeka",
    desc: "Menggunakan Kurikulum Merdeka yang inovatif dan berpusat pada perkembangan anak.",
    accent: "bg-accent/10 text-accent",
    border: "border-accent/20",
  },
  {
    icon: Palette,
    title: "Ekstrakurikuler Lengkap",
    desc: "Lebih dari 15 pilihan ekskul: seni, olahraga, robotik, bahasa, musik, dan masih banyak lagi.",
    accent: "bg-[oklch(0.55_0.15_260)]/10 text-[oklch(0.45_0.18_260)]",
    border: "border-[oklch(0.7_0.1_260)]/20",
  },
  {
    icon: Leaf,
    title: "Kantin Sehat",
    desc: "Makanan bergizi, bebas MSG, dan ramah anak untuk menunjang tumbuh kembang optimal.",
    accent: "bg-[oklch(0.5_0.15_145)]/10 text-[oklch(0.4_0.15_145)]",
    border: "border-[oklch(0.65_0.1_145)]/20",
  },
  {
    icon: Laptop,
    title: "Kelas Digital",
    desc: "Laboratorium komputer modern dengan akses internet yang aman dan terpantau.",
    accent: "bg-primary/8 text-primary",
    border: "border-primary/15",
  },
  {
    icon: ShieldCheck,
    title: "Lingkungan Aman",
    desc: "Fasilitas lengkap dengan sistem keamanan CCTV dan penjagaan 24 jam untuk ketenangan orang tua.",
    accent: "bg-accent/10 text-accent",
    border: "border-accent/20",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      className={`bg-white border ${feature.border} rounded-2xl p-6 hover:shadow-md transition-all duration-300 group cursor-default`}
    >
      <div className={`w-11 h-11 rounded-xl ${feature.accent} flex items-center justify-center mb-5`}>
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="font-serif text-xl font-semibold text-foreground mb-2.5 group-hover:text-primary transition-colors">
        {feature.title}
      </h3>
      <p className="text-sm text-muted-foreground font-light leading-relaxed">{feature.desc}</p>
    </motion.div>
  );
}

export default function Features() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="keunggulan" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16" ref={titleRef}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-semibold text-sm tracking-[0.15em] uppercase">
                Keunggulan Kami
              </span>
            </div>
            <h2 className="font-serif text-[2.8rem] md:text-[3.5rem] leading-tight font-semibold text-foreground">
              Kenapa Pilih
              <br />
              <em className="text-primary not-italic">SD Bintang Ceria?</em>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-end"
          >
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Kami percaya setiap anak adalah bintang yang siap bersinar dengan
              dukungan lingkungan, kurikulum, dan guru yang tepat.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
