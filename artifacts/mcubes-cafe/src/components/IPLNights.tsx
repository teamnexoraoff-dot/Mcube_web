import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { motion } from "framer-motion";

export function IPLNights() {
  return (
    <section id="ipl" className="py-20 md:py-24 px-6 md:px-16 bg-mcubes-black relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-mcubes-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
          <SectionHeader 
            tag="Match Nights"
            title={<>Free IPL screening,<br/><em className="text-mcubes-gold italic pr-2">with your combo.</em></>}
            subtitle="Bring your gang. Grab a plate. Catch every over — no ticket, just good vibes."
            className="mb-0"
          />
          
          <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="font-mono text-xs font-bold text-red-500 tracking-[0.1em]">LIVE TONIGHT</span>
          </div>
        </div>

        <Reveal delay={0.2} variant="fade-up">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 mt-10 items-stretch">
            
            {/* Left Card - Enhanced */}
            <div className="relative rounded bg-mcubes-surface/80 backdrop-blur-xl border border-mcubes-bdr overflow-hidden p-8 md:p-12 group">
              <div className="absolute -inset-1 bg-[radial-gradient(circle_at_22%_22%,rgba(232,176,0,0.2),transparent_50%)] opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>
              <motion.div 
                className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-mcubes-gold to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-4xl md:text-[44px] font-bold text-mcubes-white tracking-tight leading-[1.1] mt-2">
                    Big screen energy.<br/>Eat clean. Cheer louder.
                  </h3>
                  
                  <p className="text-mcubes-txt2 text-[15px] leading-[1.75] mt-5 max-w-[560px]">
                    We screen IPL matches in the cafe so you can enjoy the atmosphere with light, filling food. Ideal for students and working professionals nearby.
                  </p>

                  <div className="flex flex-wrap gap-2.5 mt-8">
                    {['Free match viewing', 'Group friendly seating', 'Quick combos + add-ons', 'Updates on Instagram'].map((pill, i) => (
                      <span key={i} className="inline-flex items-center gap-2 border border-mcubes-bdr bg-mcubes-black/50 px-4 py-2 rounded-full text-[13px] text-mcubes-txt2 tracking-[0.02em]">
                        {i === 0 ? <b className="text-mcubes-gold font-medium">Free</b> : null}
                        {i === 0 ? pill.replace('Free ', '') : pill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-10 pt-8 border-t border-mcubes-bdr/50">
                  <a 
                    href="https://wa.me/917603824812?text=Hi%20MCubes!%20We%20are%203%20friends%20-%20please%20reserve%20a%20table%20for%20the%20IPL%20match." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded border border-mcubes-gold bg-mcubes-gold/10 text-mcubes-gold text-[13px] font-medium tracking-[0.06em] hover:bg-mcubes-gold hover:text-mcubes-black transition-all"
                  >
                    Reserve for Match
                  </a>
                  <a 
                    href="https://www.instagram.com/mcube_cafe" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded border border-mcubes-bdr2 bg-white/5 text-mcubes-white text-[13px] font-medium tracking-[0.06em] hover:border-mcubes-bdr hover:bg-white/10 transition-all"
                  >
                    Match Updates
                  </a>
                </div>
              </div>
            </div>

            {/* Right Stack */}
            <div className="flex flex-col gap-6">
              {/* Scoreboard Widget */}
              <div className="bg-mcubes-surface border border-mcubes-bdr rounded p-6 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-mcubes-gold/10 rounded-full blur-[40px]" />
                <div className="font-mono text-[10px] tracking-[0.2em] text-mcubes-txt3 mb-4">MATCH CENTER</div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-mcubes-white font-medium mb-1">MCubes XI</div>
                    <div className="text-mcubes-txt3 text-sm">Opponents</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-3xl font-bold text-mcubes-gold">
                      <motion.span>14</motion.span>
                      <motion.span
                        animate={{ opacity: [1, 0.5, 1], y: [0, -2, 0] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                      >3</motion.span>
                      <span className="text-xl text-mcubes-txt">/4</span>
                    </div>
                    <div className="font-mono text-xs text-mcubes-txt2 mt-1">18.2 OVERS</div>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-mcubes-bdr flex items-center justify-between">
                  <span className="text-[11px] font-medium text-mcubes-white bg-white/10 px-2 py-1 rounded">TONIGHT</span>
                  <span className="font-mono text-[10px] tracking-[0.1em] text-mcubes-gold">FREE SCREENING</span>
                </div>
              </div>

              {/* Image Card */}
              <div className="relative overflow-hidden flex-1 min-h-[220px] rounded border border-mcubes-bdr group">
                <img 
                  src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=1200&q=80" 
                  alt="Friends watching match" 
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[0.7] group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mcubes-black/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 z-10 overflow-hidden rounded bg-black/40 backdrop-blur-sm border border-white/10 p-2">
                  <div className="flex w-max animate-marquee space-x-4">
                    {Array(4).fill("🏏 🙌 🎉 🔥 👏 🏆 🍕 🥤").map((text, i) => (
                      <span key={i} className="text-sm whitespace-nowrap">{text}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
