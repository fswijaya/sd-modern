import { motion } from "motion/react";
import { Button } from "@/components/ui/button.tsx";
import { ArrowRight, Award, Users, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Siswa Aktif", color: "text-primary" },
  { icon: Award, value: "A+", label: "Akreditasi", color: "text-accent" },
  { icon: TrendingUp, value: "98%", label: "Lulus UN", color: "text-primary" },
];

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 60% 40%, oklch(0.88 0.04 168 / 0.25) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 20% 80%, oklch(0.92 0.06 42 / 0.15) 0%, transparent 60%), oklch(0.98 0.008 95)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-[10%] w-px h-full bg-gradient-to-b from-transparent via-border to-transparent opacity-50" />
        <div className="absolute top-0 right-[10%] w-px h-full bg-gradient-to-b from-transparent via-border to-transparent opacity-50" />
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/8" />
        <div className="absolute -right-48 top-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full border border-primary/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent font-semibold text-sm tracking-[0.15em] uppercase">
              Penerimaan Siswa Baru 2025/2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-[3.8rem] md:text-[5rem] lg:text-[5.5rem] leading-[1.0] font-semibold text-foreground mb-6"
          >
            Tempat Anak{" "}
            <em className="text-primary not-italic">Tumbuh</em>{" "}
            &{" "}
            <span className="relative inline-block">
              Bersinar
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M2 6 Q50 2 100 6 Q150 10 198 5" stroke="oklch(0.6 0.15 42)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-muted-foreground text-lg font-light leading-relaxed mb-10 max-w-lg"
          >
            SD Bintang Ceria — sekolah dasar unggulan dengan pendekatan holistik
            yang mendidik anak menjadi cerdas, kreatif, dan berkarakter sejak dini.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <Button asChild size="lg" className="rounded-lg font-semibold text-base px-8 shadow-md group">
              <a href="#kontak" className="flex items-center gap-2">
                Daftar Sekarang
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="rounded-lg font-semibold text-base px-8 border border-border hover:bg-foreground/5">
              <a href="#program">Lihat Program</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex gap-8"
          >
            {stats.map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center">
                  <Icon className={`w-4 h-4 ${color}`} />
                </div>
                <div>
                  <p className={`font-serif text-2xl font-bold leading-none ${color}`}>{value}</p>
                  <p className="text-xs text-muted-foreground font-medium mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-primary/6" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] max-h-[560px]">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=85&crop=entropy&fit=crop&h=700"
              alt="Kegiatan belajar mengajar SD Bintang Ceria"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
          </div>
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-10 top-16 bg-white rounded-2xl shadow-xl p-4 border border-border/50"
          >
            <p className="text-xs text-muted-foreground font-medium mb-1">Akreditasi Nasional</p>
            <p className="font-serif text-3xl font-bold text-primary">A+</p>
            <p className="text-xs text-muted-foreground font-medium">BAN-S/M 2024</p>
          </motion.div>
          <motion.div
            animate={{ y: [6, -6, 6] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-8 bottom-20 bg-primary rounded-2xl shadow-xl p-4 text-white"
          >
            <p className="text-xs font-medium text-white/70 mb-1">Tahun Berdiri</p>
            <p className="font-serif text-3xl font-bold">15+</p>
            <p className="text-xs font-medium text-white/70">Tahun Pengalaman</p>
          </motion.div>
          <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-accent/20 blur-xl" />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
