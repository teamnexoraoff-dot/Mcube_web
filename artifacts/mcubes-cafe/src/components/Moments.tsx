import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export function Moments() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const moments = [
    { title: "Fresh Salad", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=85" },
    { title: "Balanced Plate", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1200&q=85" },
    { title: "Roti Combo", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1200&q=85" },
    { title: "Paratha", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1200&q=85" },
    { title: "Veggies", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1200&q=85" },
    { title: "Dal", img: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=1200&q=85" },
    { title: "Ingredients", img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&q=85" },
    { title: "Cafe Vibe", img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1200&q=85" },
  ];

  // Auto-advance logic
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % moments.length;
        if (containerRef.current) {
          const itemWidth = containerRef.current.children[0]?.clientWidth || 300;
          const gap = 14; // 3.5rem equivalent roughly
          containerRef.current.scrollTo({
            left: next * (itemWidth + gap),
            behavior: "smooth"
          });
        }
        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, moments.length]);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollLeft = containerRef.current.scrollLeft;
    const itemWidth = containerRef.current.children[0]?.clientWidth || 300;
    const gap = 14;
    const newIndex = Math.round(scrollLeft / (itemWidth + gap));
    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < moments.length) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <section id="moments" className="py-20 md:py-24 bg-mcubes-surface overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-16 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-10">
          <SectionHeader 
            tag="More Moments"
            title={<>Swipe through<br/><em className="text-mcubes-gold italic pr-2">today's vibe.</em></>}
            subtitle="Quick peeks of plates, prep, and the cafe feel. Slide to explore."
            className="mb-0 md:mb-0"
          />
          <div className="font-mono text-sm tracking-[0.2em] text-mcubes-gold mb-4 md:mb-8 hidden md:block">
            {String(currentIndex + 1).padStart(2, '0')} / {String(moments.length).padStart(2, '0')}
          </div>
        </div>
      </div>

      <Reveal delay={0.2} direction="left">
        <motion.div 
          ref={containerRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory hide-scrollbar py-4 border-y border-mcubes-bdr mt-10 px-6 md:px-16 scroll-smooth cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          dragElastic={0.1}
          whileTap={{ cursor: "grabbing" }}
        >
          {moments.map((m, i) => (
            <motion.div 
              key={i} 
              className="flex-none w-[80vw] md:w-[420px] snap-center relative rounded border border-mcubes-bdr overflow-hidden bg-mcubes-black group"
            >
              <img 
                src={m.img} 
                alt={m.title}
                loading="lazy"
                draggable={false}
                className="w-full h-[260px] md:h-[300px] object-cover filter brightness-[0.78] group-hover:scale-105 group-hover:brightness-[0.9] group-hover:saturate-105 transition-all duration-500 ease-out pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mcubes-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute left-4 right-4 bottom-4 z-10 flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-mcubes-white">{m.title}</span>
                <span className="font-mono text-[10px] tracking-[0.16em] text-mcubes-gold/80">0{i+1}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Progress Bar */}
        <div className="h-0.5 bg-mcubes-bdr w-full max-w-7xl mx-auto mt-6 px-6 md:px-16 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-mcubes-gold"
            initial={{ width: "0%" }}
            animate={{ width: isHovered ? "100%" : "100%" }}
            transition={{
              duration: isHovered ? 0 : 4,
              ease: "linear",
              repeat: isHovered ? 0 : Infinity,
            }}
            key={currentIndex + (isHovered ? "-hover" : "")}
          />
        </div>
      </Reveal>
    </section>
  );
}
