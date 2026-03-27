import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function IPLNights() {
  return (
    <section id="ipl" className="py-20 md:py-24 px-6 md:px-16 bg-mcubes-black">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          tag="Match Nights"
          title={<>Free IPL screening,<br/><em className="text-mcubes-gold italic pr-2">with your combo.</em></>}
          subtitle="Bring your gang. Grab a plate. Catch every over — no ticket, just good vibes."
        />

        <Reveal delay={0.2}>
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-4.5 mt-10 items-stretch">
            {/* Left Card */}
            <div className="relative rounded bg-mcubes-surface/60 backdrop-blur-md border border-mcubes-bdr overflow-hidden p-8 md:p-11">
              <div className="absolute -inset-1 bg-[radial-gradient(circle_at_22%_22%,rgba(232,176,0,0.15),transparent_44%),radial-gradient(circle_at_74%_72%,rgba(255,255,255,0.05),transparent_52%)] pointer-events-none opacity-90 z-0"></div>
              
              <div className="relative z-10">
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-mcubes-gold flex items-center gap-2.5">
                  <span className="w-5 h-[1px] bg-mcubes-gold block"></span>
                  Live screening
                </div>
                
                <h3 className="font-display text-3xl md:text-[40px] font-bold text-mcubes-white tracking-tight leading-[1.12] mt-4.5">
                  Big screen energy.<br/>Eat clean. Cheer louder.
                </h3>
                
                <p className="text-mcubes-txt2 text-[14.5px] leading-[1.75] mt-3.5 max-w-[560px]">
                  We screen IPL matches in the cafe so you can enjoy the atmosphere with light, filling food. Ideal for students and working professionals nearby.
                </p>

                <div className="flex flex-wrap gap-2.5 mt-5">
                  {['Free match viewing', 'Group friendly seating', 'Quick combos + add-ons', 'Updates on Instagram'].map((pill, i) => (
                    <span key={i} className="inline-flex items-center gap-2 border border-mcubes-bdr bg-white/5 px-3.5 py-2 rounded-full text-xs text-mcubes-txt2 tracking-[0.04em]">
                      {i === 0 ? <b className="text-mcubes-white font-medium">Free</b> : null}
                      {i === 0 ? pill.replace('Free ', '') : pill}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2.5 mt-6.5">
                  <a 
                    href="https://wa.me/917603824812?text=Hi%20MCubes!%20We%20are%203%20friends%20-%20please%20reserve%20a%20table%20for%20the%20IPL%20match." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-mcubes-bdr2 bg-white/5 text-mcubes-white text-xs font-medium tracking-[0.06em] hover:border-mcubes-gold hover:text-mcubes-gold hover:-translate-y-px transition-all"
                  >
                    Reserve for Match
                  </a>
                  <a 
                    href="https://www.instagram.com/mcube_cafe" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-mcubes-bdr2 bg-white/5 text-mcubes-white text-xs font-medium tracking-[0.06em] hover:border-mcubes-gold hover:text-mcubes-gold hover:-translate-y-px transition-all"
                  >
                    Match Updates
                  </a>
                </div>

                <p className="text-mcubes-txt3 text-xs tracking-[0.03em] mt-4">
                  Note: Screening depends on match schedule and broadcast availability.
                </p>
              </div>
            </div>

            {/* Right Card */}
            <div className="flex flex-col rounded bg-mcubes-surface/60 backdrop-blur-md border border-mcubes-bdr overflow-hidden">
              <div className="relative overflow-hidden flex-1 min-h-[240px]">
                {/* ipl nights match screening */}
                <img 
                  src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=1200&q=80" 
                  alt="Friends watching a cricket match on big screen" 
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[0.78] saturate-[1.02] scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mcubes-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3.5 right-3.5 flex justify-between items-center z-10">
                  <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-mcubes-white">Match Vibes</span>
                  <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-mcubes-white">IPL</span>
                </div>
              </div>
              <div className="p-4 px-4.5 border-t border-mcubes-bdr flex items-center justify-between flex-wrap gap-3.5 bg-mcubes-surface">
                <div className="flex flex-col gap-1">
                  <b className="text-mcubes-white font-semibold text-sm">Come as a trio</b>
                  <span className="text-mcubes-txt3 text-xs tracking-[0.03em]">We're friend-owned — warm service, chill vibe</span>
                </div>
                <a 
                  href="#menu" 
                  className="inline-flex items-center justify-center px-3 py-2 rounded-lg border border-mcubes-bdr2 bg-white/5 text-mcubes-white text-xs font-medium tracking-[0.06em] hover:border-mcubes-gold hover:text-mcubes-gold transition-all"
                >
                  See Combos
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
