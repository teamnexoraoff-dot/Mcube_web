import { Instagram, MessageCircle, MapPin, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    { name: "Menu", href: "#menu" },
    { name: "IPL Nights", href: "#ipl" },
    { name: "Gallery", href: "#gallery" },
    { name: "Our Story", href: "#story" },
    { name: "Reviews", href: "#reviews" },
    { name: "Find Us", href: "#location" },
  ];

  return (
    <footer className="bg-mcubes-black relative pt-16 pb-8 px-6 md:px-16 overflow-hidden">
      {/* Top Golden Separator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-mcubes-gold to-transparent opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-20 bg-mcubes-gold/20 blur-[50px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-12 border-b border-mcubes-bdr mb-8">
          
          {/* Brand */}
          <div className="flex flex-col items-start">
            <a href="#home" className="flex items-center gap-3 no-underline group mb-4">
              <div className="w-[40px] h-[40px] rounded-full border border-mcubes-bdr2 overflow-hidden flex-shrink-0 group-hover:border-mcubes-gold/50 transition-colors bg-gradient-to-br from-mcubes-gold/30 to-mcubes-gold/10 flex items-center justify-center">
                <span className="font-display font-bold text-mcubes-gold text-lg leading-none">M</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-[26px] font-bold tracking-[0.02em] text-mcubes-white">
                  M<span className="text-mcubes-gold">C</span>ubes
                </span>
                <span className="font-mono text-[9px] tracking-[0.22em] text-mcubes-txt2 uppercase mt-1">
                  Nutri Power Plate
                </span>
              </div>
            </a>
            <p className="text-sm text-mcubes-txt2 leading-[1.6] max-w-[280px]">
              Clean comfort food, made fresh. Perfect for students and working pros in Coimbatore.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a 
                href="https://www.instagram.com/mcube_cafe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-mcubes-bdr flex items-center justify-center text-mcubes-txt hover:text-mcubes-black hover:bg-mcubes-gold hover:border-mcubes-gold transition-all group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://wa.me/917603824812" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-mcubes-bdr flex items-center justify-center text-mcubes-txt hover:text-mcubes-black hover:bg-mcubes-gold hover:border-mcubes-gold transition-all group"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="font-mono text-[11px] tracking-[0.2em] text-mcubes-white uppercase mb-6">Navigation</h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-[14px] text-mcubes-txt2 hover:text-mcubes-gold transition-colors inline-block w-fit"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <h4 className="font-mono text-[11px] tracking-[0.2em] text-mcubes-white uppercase mb-6">Contact Info</h4>
            <ul className="space-y-4 text-[14px] text-mcubes-txt2">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-mcubes-gold mt-0.5 flex-shrink-0" />
                <span>26, Jayandar Nagar, Kalveerampalayam, Coimbatore - 641046</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-mcubes-gold flex-shrink-0" />
                <span>+91 76038 24812</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-mcubes-gold"></div>
                </div>
                <span>Daily: 8:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-[11px] tracking-[0.1em] text-mcubes-txt3 text-center sm:text-left">
            © {new Date().getFullYear()} MCubes Cafe. All rights reserved.
          </div>
          
          <button 
            onClick={scrollToTop}
            className={`font-mono text-[10px] tracking-[0.15em] text-mcubes-txt2 uppercase flex items-center gap-2 hover:text-mcubes-gold transition-colors ${showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            Back to top
            <div className="w-6 h-6 rounded-full border border-mcubes-bdr2 flex items-center justify-center bg-mcubes-surface">
              <ArrowUp className="w-3 h-3" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
