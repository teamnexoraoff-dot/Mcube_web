import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { MapPin, MessageCircle, Instagram } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="py-20 md:py-24 px-6 md:px-16 bg-mcubes-surface">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          tag="Find Us"
          title={<>Near <em className="text-mcubes-gold italic pr-2">Bharathiyar</em><br/>University.</>}
          subtitle="Your campus fuel station — walk in, eat well, carry on."
        />

        <Reveal delay={0.2} className="grid lg:grid-cols-2 gap-8 mt-10 items-start">
          {/* Map */}
          <div className="rounded border border-mcubes-bdr overflow-hidden flex flex-col">
            <iframe
              src="https://www.google.com/maps?q=26%2C%20Jayandar%20Nagar%2C%20Kalveerampalayam%2C%20Coimbatore%20641046&output=embed"
              className="w-full h-[340px] border-none filter grayscale contrast-[1.05] brightness-[0.92]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MCubes Cafe location"
            />
            <div className="p-4 bg-mcubes-surface2 border-t border-mcubes-bdr flex items-center justify-between">
              <span className="text-xs text-mcubes-txt2 tracking-[0.04em] truncate pr-4">
                26, Jayandar Nagar, Kalveerampalayam
              </span>
              <a 
                href="https://maps.app.goo.gl/KWdGFWYtLWzfpa9h8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-mono text-[11px] tracking-[0.12em] text-mcubes-gold uppercase whitespace-nowrap hover:opacity-70 transition-opacity"
              >
                Open Maps ↗
              </a>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4">
            <div className="bg-mcubes-black border border-mcubes-bdr rounded">
              <div className="p-5 border-b border-mcubes-bdr font-mono text-[10px] tracking-[0.2em] uppercase text-mcubes-gold">
                Contact & Location
              </div>
              <div className="p-5 flex flex-col gap-4">
                <div className="flex items-start gap-3 pb-3 border-b border-mcubes-bdr">
                  <MapPin className="w-4 h-4 text-mcubes-gold mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-[11px] text-mcubes-txt3 tracking-[0.08em] mb-1">ADDRESS</div>
                    <div className="text-sm text-mcubes-txt leading-[1.6]">
                      26, Jayandar Nagar, Kalveerampalayam<br/>Near Bharathiyar University<br/>Marudhamalai Rd, Coimbatore – 641046
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 pb-3 border-b border-mcubes-bdr">
                  <MessageCircle className="w-4 h-4 text-mcubes-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[11px] text-mcubes-txt3 tracking-[0.08em] mb-1">WHATSAPP ORDERS</div>
                    <a href="https://wa.me/917603824812" target="_blank" rel="noopener noreferrer" className="text-sm text-mcubes-gold hover:underline">
                      Message us to order →
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Instagram className="w-4 h-4 text-mcubes-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[11px] text-mcubes-txt3 tracking-[0.08em] mb-1">INSTAGRAM</div>
                    <a href="https://www.instagram.com/mcube_cafe" target="_blank" rel="noopener noreferrer" className="text-sm text-mcubes-gold hover:underline">
                      @mcube_cafe
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* IG CTA Card */}
            <div className="bg-mcubes-gold rounded p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="font-display text-2xl font-bold text-mcubes-black tracking-tight">@mcube_cafe</div>
                <div className="text-[13px] text-black/60 tracking-[0.03em] mt-1">Follow for daily specials & updates</div>
              </div>
              <a 
                href="https://www.instagram.com/mcube_cafe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-mcubes-black text-mcubes-white text-xs font-medium tracking-[0.08em] px-5 py-3 rounded-sm hover:opacity-85 transition-opacity whitespace-nowrap"
              >
                <Instagram className="w-3.5 h-3.5" />
                Follow on IG
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
