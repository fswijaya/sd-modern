import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Alamat", value: "Jl. Bintang Ceria No. 12, Kota Bahagia, Jawa Tengah 50000" },
  { icon: Phone, label: "Telepon", value: "(0291) 123-4567" },
  { icon: Mail, label: "Email", value: "info@sdbintangceria.sch.id" },
  { icon: Clock, label: "Jam Sekolah", value: "Senin\u2013Jumat: 07.00 \u2013 14.30 WIB" },
];

export default function ContactSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Pesan berhasil dikirim! Kami akan menghubungi Anda segera.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="kontak" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary font-semibold text-sm tracking-[0.15em] uppercase">Hubungi Kami</span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-serif text-[2.8rem] md:text-[3.5rem] font-semibold text-foreground leading-tight">
            Bergabung Bersama Kami
          </h2>
          <p className="mt-4 text-muted-foreground text-lg font-light max-w-lg mx-auto">
            Daftarkan putra-putri Anda sekarang dan beri mereka pendidikan terbaik.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div
              className="rounded-2xl p-7 text-white"
              style={{ background: "linear-gradient(145deg, oklch(0.34 0.1 168), oklch(0.28 0.09 175))" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center">
                  <span className="font-serif font-bold text-white text-base">S</span>
                </div>
                <div>
                  <p className="font-serif text-lg font-semibold">SD Bintang Ceria</p>
                  <p className="text-white/60 text-xs font-light">Sekolah Unggulan</p>
                </div>
              </div>
              <p className="text-white/70 text-sm font-light leading-relaxed mb-6">
                Tempat anak-anak menemukan potensi terbaik mereka sejak dini.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Siswa Aktif", value: "500+" },
                  { label: "Tenaga Pengajar", value: "40+" },
                  { label: "Ekstrakurikuler", value: "15+" },
                  { label: "Prestasi", value: "200+" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/10 rounded-xl p-3 text-center">
                    <p className="font-serif text-2xl font-bold leading-none">{s.value}</p>
                    <p className="text-[0.65rem] text-white/60 font-medium mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {contactInfo.map((info) => (
                <div key={info.label} className="bg-muted/60 border border-border rounded-xl p-4 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <info.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium mb-0.5">{info.label}</p>
                    <p className="text-sm font-medium text-foreground leading-snug">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-muted/40 border border-border rounded-2xl p-8"
          >
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">Kirim Pesan</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-foreground">Nama Lengkap</label>
                  <Input required placeholder="Budi Santoso" className="rounded-lg bg-white border-border" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-foreground">Nama Anak</label>
                  <Input required placeholder="Budi Jr." className="rounded-lg bg-white border-border" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">Email / Nomor HP</label>
                <Input required placeholder="budi@email.com atau 08xx-xxxx-xxxx" className="rounded-lg bg-white border-border" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">Kelas yang Diminati</label>
                <Input placeholder="Contoh: Kelas 1 (2025/2026)" className="rounded-lg bg-white border-border" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">Pesan</label>
                <Textarea
                  placeholder="Tulis pertanyaan atau informasi tambahan di sini..."
                  className="rounded-lg bg-white border-border min-h-[100px]"
                />
              </div>
              <Button type="submit" size="lg" className="rounded-lg font-semibold text-base mt-1 shadow-sm" disabled={loading}>
                {loading ? "Mengirim..." : "Kirim Pesan"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
