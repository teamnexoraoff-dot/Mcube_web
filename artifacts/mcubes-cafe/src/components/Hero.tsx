import { Reveal } from "./Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 100]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const titleText = "Food that";
  const titleText2 = "nourishes";
  const titleText3 = "you.";

  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const wordVars = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
  };

  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen pt-[68px] overflow-hidden grid lg:grid-cols-2">
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none z-20 mix-blend-overlay"></div>

      {/* Custom Cursor Glow (Desktop Only) */}
      <div 
        className="hidden lg:block fixed w-[400px] h-[400px] rounded-full pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(232,176,0,0.15)_0%,transparent_70%)] blur-2xl transition-opacity duration-300"
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-mcubes-gold rounded-full opacity-30"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-90 z-0">
        <div className="absolute top-[10%] left-[10%] w-[50vw] h-[50vw] bg-mcubes-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] bg-white/5 rounded-full blur-[100px]" />
      </div>

      {/* Left Content */}
      <div className="relative z-10 flex flex-col justify-center px-6 py-16 lg:px-16 xl:px-24">
        <Reveal delay={0.1}>
          <div className="font-mono text-[11px] tracking-[0.22em] text-mcubes-gold uppercase mb-7 flex items-center gap-3">
            <span className="block w-8 h-[1px] bg-mcubes-gold"></span>
            Coimbatore · Est. 2024
          </div>
        </Reveal>

        <motion.h1 
          className="font-display text-5xl sm:text-6xl md:text-[80px] leading-[1.05] tracking-tight text-mcubes-white font-bold"
          variants={containerVars}
          initial="hidden"
          animate="visible"
        >
          <div className="overflow-hidden flex flex-wrap gap-x-4">
            {titleText.split(" ").map((w, i) => <motion.span key={i} variants={wordVars}>{w}</motion.span>)}
          </div>
          <div className="overflow-hidden">
            <motion.em variants={wordVars} className="text-mcubes-gold not-italic italic pr-2 inline-block">
              {titleText2}
            </motion.em>
          </div>
          <div className="overflow-hidden">
            <motion.span variants={wordVars} className="inline-block">{titleText3}</motion.span>
          </div>
        </motion.h1>

        <Reveal delay={0.5}>
          <p className="text-[15px] text-mcubes-txt2 mt-6 max-w-[400px] leading-[1.75]">
            Clean comfort food, made fresh. Choose your combo, add your sabji, salad on us — perfect for students and working pros in Coimbatore.
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="flex flex-wrap gap-3.5 mt-9 relative z-20">
            <a 
              href="#menu" 
              className="inline-flex items-center gap-2.5 bg-mcubes-gold text-mcubes-black text-[13px] font-medium tracking-[0.07em] px-7 py-3.5 rounded-sm hover:bg-mcubes-gold/90 hover:-translate-y-0.5 transition-all duration-200"
            >
              View Full Menu
            </a>
            <a 
              href="#location" 
              className="inline-flex items-center gap-2.5 border border-mcubes-bdr2 text-mcubes-txt text-[13px] font-normal tracking-[0.06em] px-6 py-3.5 rounded-sm hover:border-mcubes-gold hover:text-mcubes-gold transition-colors duration-200"
            >
              Find Us
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.7}>
          <div className="flex flex-wrap gap-2.5 mt-11 relative z-20">
            {['100% Vegetarian', 'Minimal Oil', 'Salad Included'].map((pill) => (
              <span key={pill} className="inline-flex items-center gap-2 border border-mcubes-bdr text-[12px] text-mcubes-txt2 px-3.5 py-1.5 rounded-full tracking-[0.04em]">
                <span className="w-1.5 h-1.5 bg-mcubes-gold rounded-full"></span>
                {pill}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-6 lg:left-16 xl:left-24 flex items-center gap-3 text-mcubes-txt3 font-mono text-[10px] tracking-[0.2em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="w-px h-8 bg-gradient-to-b from-mcubes-gold to-transparent relative overflow-hidden">
            <motion.span 
              className="absolute top-0 left-0 w-full h-[50%] bg-mcubes-gold"
              animate={{ y: [0, 32, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </span>
          Scroll Down
          <ChevronDown className="w-3 h-3 animate-pulse-fast text-mcubes-gold" />
        </motion.div>
      </div>

      {/* Right Images (Desktop Only) */}
      <div className="hidden lg:grid grid-rows-2 bg-mcubes-surface border-l border-mcubes-bdr relative z-10 overflow-hidden">
        <motion.div className="relative overflow-hidden group h-full" style={{ y: y1, scale: 1.05 }}>
          {/* landing page hero paratha meal */}
          <img 
            src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80" 
            alt="Paratha with sabji" 
            className="w-full h-full object-cover filter brightness-[0.75] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          />
          <div className="absolute bottom-4 left-4 bg-mcubes-black/75 backdrop-blur-md border border-mcubes-bdr2 px-3 py-1.5 rounded-sm">
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-mcubes-txt">
              Paratha + Sabji
            </span>
          </div>
        </motion.div>
        <motion.div className="relative overflow-hidden group border-t border-mcubes-bdr h-full" style={{ y: y2, scale: 1.05 }}>
          {/* landing page hero roti combo */}
          <img 
            src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80" 
            alt="Roti combo" 
            className="w-full h-full object-cover filter brightness-[0.75] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          />
          <div className="absolute bottom-4 left-4 bg-mcubes-black/75 backdrop-blur-md border border-mcubes-bdr2 px-3 py-1.5 rounded-sm">
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-mcubes-txt">
              Roti Combo
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
