import { useState, useEffect, useCallback } from "react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      title: "Paneer Paratha Combo",
      img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1200&q=85",
      className: "md:col-span-2 md:row-span-2"
    },
    {
      title: "Fresh Salad",
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
      className: ""
    },
    {
      title: "Dal Fry",
      img: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=800&q=80",
      className: ""
    },
    {
      title: "Roti Combo",
      img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
      className: ""
    },
    {
      title: "Gobi Paratha",
      img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
      className: ""
    }
  ];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, nextImage, prevImage]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxOpen]);

  return (
    <section id="gallery" className="py-20 md:py-24 px-6 md:px-16 bg-mcubes-black">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          tag="Gallery"
          title={<>Food that looks<br/><em className="text-mcubes-gold italic pr-2">as good as it feels.</em></>}
          subtitle="Freshly made plates, clean ingredients, and simple combos you can eat daily."
        />

        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] md:auto-rows-[260px] gap-3">
            {items.map((item, i) => (
              <div 
                key={i} 
                onClick={() => openLightbox(i)}
                className={`relative overflow-hidden rounded-[3px] bg-mcubes-surface group cursor-pointer h-[260px] md:h-auto ${item.className}`}
              >
                <img 
                  src={item.img} 
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700 ease-out filter brightness-[0.7] saturate-[0.9] group-hover:scale-105 group-hover:brightness-[0.9] group-hover:saturate-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mcubes-black/80 via-mcubes-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 border-b-[3px] border-transparent group-hover:border-mcubes-gold">
                  <div className="self-end text-mcubes-gold font-mono text-xl leading-none opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                    +
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-mcubes-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-xl flex items-center justify-center"
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-mcubes-white hover:text-mcubes-gold transition-colors z-[1010] p-2"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="absolute top-8 left-1/2 -translate-x-1/2 font-mono text-[11px] tracking-[0.2em] text-mcubes-gold z-[1010]">
              {currentIndex + 1} / {items.length}
            </div>

            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-12 text-mcubes-white hover:text-mcubes-gold transition-colors z-[1010] p-4 hidden md:block"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <div className="w-full max-w-5xl h-full max-h-[80vh] px-4 md:px-24 flex flex-col items-center justify-center relative" onClick={closeLightbox}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="w-full h-full flex flex-col items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img 
                    src={items[currentIndex].img} 
                    alt={items[currentIndex].title}
                    className="max-w-full max-h-full object-contain rounded shadow-2xl"
                  />
                  <div className="mt-6 font-mono text-xs tracking-[0.15em] uppercase text-mcubes-white">
                    {items[currentIndex].title}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-12 text-mcubes-white hover:text-mcubes-gold transition-colors z-[1010] p-4 hidden md:block"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Mobile navigation areas */}
            <div className="md:hidden absolute inset-y-0 left-0 w-1/3 z-[1005]" onClick={(e) => { e.stopPropagation(); prevImage(); }} />
            <div className="md:hidden absolute inset-y-0 right-0 w-1/3 z-[1005]" onClick={(e) => { e.stopPropagation(); nextImage(); }} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
