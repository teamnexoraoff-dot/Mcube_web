export function Footer() {
  const links = [
    { name: "Menu", href: "#menu" },
    { name: "IPL Nights", href: "#ipl" },
    { name: "Gallery", href: "#gallery" },
    { name: "Our Story", href: "#story" },
    { name: "Reviews", href: "#reviews" },
    { name: "Find Us", href: "#location" },
    { name: "Instagram", href: "https://www.instagram.com/mcube_cafe", external: true },
  ];

  return (
    <footer className="bg-mcubes-black border-t border-mcubes-bdr py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 pb-10 border-b border-mcubes-bdr mb-8">
          <div>
            <div className="font-display text-[26px] font-bold text-mcubes-white tracking-tight">
              M<span className="text-mcubes-gold">C</span>ubes Cafe
            </div>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-mcubes-txt3 mt-2">
              Meet Your Cafe · Nutri Power Plate
            </div>
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-3 md:max-w-[50%]">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-[13px] text-mcubes-txt2 tracking-[0.04em] hover:text-mcubes-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-[11px] tracking-[0.1em] text-mcubes-txt3 text-center sm:text-left">
            © {new Date().getFullYear()} MCubes Cafe · All rights reserved
          </div>
          <div className="text-xs text-mcubes-txt3 tracking-[0.04em] text-center sm:text-right">
            26, Jayandar Nagar, Kalveerampalayam, Coimbatore
          </div>
        </div>
      </div>
    </footer>
  );
}
