import { motion, useInView } from "motion/react";
import { useRef } from "react";

const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=85",
    caption: "Kegiatan Belajar Mengajar",
    colSpan: "md:col-span-2 md:row-span-2",
  },
  {
    image: "https://images.unsplash.com/photo-1512253080918-79cf0c2e0650?w=500&q=85",
    caption: "Kelas Seni Melukis",
    colSpan: "",
  },
  {
    image: "https://images.unsplash.com/photo-1780751379328-9271686e4e06?w=500&q=85",
    caption: "Workshop Kerajinan",
    colSpan: "",
  },
  {
    image: "https://images.unsplash.com/photo-1758685734153-132c8620c1bd?w=500&q=85",
    caption: "Eksperimen Sains",
    colSpan: "",
  },
  {
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&q=85",
    caption: "Belajar Bersama",
    colSpan: "",
  },
  {
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=500&q=85",
    caption: "Olahraga & Permainan",
    colSpan: "",
  },
];

export default function Gallery() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section id="galeri" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14" ref={titleRef}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-semibold text-sm tracking-[0.15em] uppercase">
                Galeri Sekolah
              </span>
            </div>
            <h2 className="font-serif text-[2.8rem] md:text-[3.5rem] font-semibold text-foreground leading-tight">
              Momen Indah
              <br />
              <em className="text-accent not-italic">di Sekolah Kami</em>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground text-base font-light leading-relaxed max-w-xs md:text-right"
          >
            Setiap hari adalah kenangan berharga yang kami abadikan bersama.
          </motion.p>
        </div>
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-3"
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={gridInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${item.colSpan}`}
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-sm font-semibold tracking-wide">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
