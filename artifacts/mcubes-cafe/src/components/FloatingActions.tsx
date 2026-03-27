import { MessageCircle, MapPin } from "lucide-react";

export function FloatingActions() {
  return (
    <>
      {/* WhatsApp Float (Desktop mostly, but exists on mobile too just pushed up) */}
      <a 
        href="https://wa.me/917603824812" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-7 right-7 z-[800] bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.35)] hover:scale-105 hover:shadow-[0_8px_32px_rgba(37,211,102,0.45)] transition-all duration-200 group lg:bottom-7 md:bottom-24 bottom-24"
        aria-label="Order on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white stroke-white" />
        <span className="absolute right-16 bg-mcubes-surface2 text-mcubes-white text-xs font-medium tracking-[0.04em] px-3.5 py-2 rounded-sm whitespace-nowrap border border-mcubes-bdr2 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
          Order on WhatsApp
        </span>
      </a>

      {/* Mobile Order Bar */}
      <div className="md:hidden fixed left-4 right-4 bottom-4 z-[820] bg-mcubes-surface/80 backdrop-blur-xl border border-mcubes-bdr2 rounded-xl p-2.5 shadow-[0_18px_60px_rgba(0,0,0,0.55)]">
        <div className="flex gap-2.5">
          <a 
            href="https://wa.me/917603824812" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-mcubes-gold text-mcubes-black px-3 py-3 rounded-lg text-xs font-medium tracking-[0.06em] hover:bg-mcubes-gold/90 transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-mcubes-black" />
            WhatsApp Order
          </a>
          <a 
            href="https://maps.app.goo.gl/KWdGFWYtLWzfpa9h8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-mcubes-bdr text-mcubes-white px-3 py-3 rounded-lg text-xs font-medium tracking-[0.06em] hover:border-mcubes-gold transition-colors"
          >
            <MapPin className="w-4 h-4" />
            Open Maps
          </a>
        </div>
      </div>
    </>
  );
}
