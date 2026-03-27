import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Menu", href: "#menu" },
    { name: "IPL Nights", href: "#ipl" },
    { name: "Gallery", href: "#gallery" },
    { name: "Our Story", href: "#story" },
    { name: "Reviews", href: "#reviews" },
    { name: "Find Us", href: "#location" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[68px] px-6 md:px-12 flex items-center justify-between transition-all duration-400 border-b",
          scrolled 
            ? "bg-mcubes-black/95 backdrop-blur-xl border-mcubes-bdr" 
            : "bg-mcubes-black/50 backdrop-blur-md border-transparent"
        )}
      >
        <a href="#home" className="flex items-center gap-3 no-underline group">
          <div className="w-[34px] h-[34px] rounded-full border border-mcubes-bdr2 overflow-hidden flex-shrink-0 group-hover:border-mcubes-gold/50 transition-colors bg-gradient-to-br from-mcubes-gold/30 to-mcubes-gold/10 flex items-center justify-center">
            <span className="font-display font-bold text-mcubes-gold text-sm leading-none">M</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-[22px] font-bold tracking-[0.02em] text-mcubes-white">
              M<span className="text-mcubes-gold">C</span>ubes
            </span>
            <span className="font-mono text-[9px] tracking-[0.22em] text-mcubes-txt2 uppercase mt-0.5">
              Nutri Power Plate
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-9 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                className="text-[13px] font-normal tracking-[0.06em] text-mcubes-txt2 hover:text-mcubes-white relative py-2 group transition-colors"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-mcubes-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a 
          href="https://wa.me/917603824812" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-mcubes-gold text-mcubes-black text-xs font-medium tracking-[0.08em] px-5 py-2.5 rounded-sm hover:bg-mcubes-gold/90 hover:-translate-y-px transition-all duration-200"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-mcubes-black" />
          Order on WhatsApp
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-mcubes-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Progress Indicator */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-mcubes-gold origin-left"
          style={{ scaleX }}
        />
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[68px] z-40 bg-mcubes-black/98 backdrop-blur-xl flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-4xl text-mcubes-white hover:text-mcubes-gold tracking-[0.02em] transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
