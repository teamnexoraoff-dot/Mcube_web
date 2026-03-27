import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen pt-[68px] overflow-hidden grid lg:grid-cols-2">
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

        <Reveal delay={0.2}>
          <h1 className="font-display text-5xl sm:text-6xl md:text-[80px] leading-[1.05] tracking-tight text-mcubes-white font-bold">
            Food that<br />
            <em className="text-mcubes-gold not-italic italic pr-2">nourishes</em><br />
            you.
          </h1>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="text-[15px] text-mcubes-txt2 mt-6 max-w-[400px] leading-[1.75]">
            Clean comfort food, made fresh. Choose your combo, add your sabji, salad on us — perfect for students and working pros in Coimbatore.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="flex flex-wrap gap-3.5 mt-9">
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

        <Reveal delay={0.5}>
          <div className="flex flex-wrap gap-2.5 mt-11">
            {['100% Vegetarian', 'Minimal Oil', 'Salad Included'].map((pill) => (
              <span key={pill} className="inline-flex items-center gap-2 border border-mcubes-bdr text-[12px] text-mcubes-txt2 px-3.5 py-1.5 rounded-full tracking-[0.04em]">
                <span className="w-1.5 h-1.5 bg-mcubes-gold rounded-full"></span>
                {pill}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Right Images (Desktop Only) */}
      <div className="hidden lg:grid grid-rows-2 bg-mcubes-surface border-l border-mcubes-bdr relative z-10">
        <div className="relative overflow-hidden group">
          {/* landing page hero paratha meal */}
          <img 
            src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80" 
            alt="Paratha with sabji" 
            className="w-full h-full object-cover filter brightness-[0.75] group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute bottom-4 left-4 bg-mcubes-black/75 backdrop-blur-md border border-mcubes-bdr2 px-3 py-1.5 rounded-sm">
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-mcubes-txt">
              Paratha + Sabji
            </span>
          </div>
        </div>
        <div className="relative overflow-hidden group border-t border-mcubes-bdr">
          {/* landing page hero roti combo */}
          <img 
            src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80" 
            alt="Roti combo" 
            className="w-full h-full object-cover filter brightness-[0.75] group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute bottom-4 left-4 bg-mcubes-black/75 backdrop-blur-md border border-mcubes-bdr2 px-3 py-1.5 rounded-sm">
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-mcubes-txt">
              Roti Combo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
