import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Story() {
  const founders = [
    { id: "F1", name: "Founder 1", role: "Operations", desc: "Keeps everything running smooth — from quick service to consistent taste.", tag: "Daily prep" },
    { id: "F2", name: "Founder 2", role: "Kitchen", desc: "Focuses on minimal oil cooking and balanced plates that you can eat every day.", tag: "Minimal oil" },
    { id: "F3", name: "Founder 3", role: "Community", desc: "Builds the cafe vibe — IPL nights, updates on Instagram, and a friendly place to hang out.", tag: "IPL nights" }
  ];

  return (
    <section id="story" className="py-20 md:py-24 px-6 md:px-16 bg-mcubes-surface">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          tag="Our Story"
          title={<>3 friends.<br/><em className="text-mcubes-gold italic pr-2">1 cafe.</em></>}
          subtitle="Built by three friends with one goal: everyday food that's clean, light, and ridiculously consistent."
        />

        <Reveal delay={0.2}>
          <div className="grid md:grid-cols-3 gap-3 bg-mcubes-bdr border border-mcubes-bdr p-[1px] rounded mt-10 overflow-hidden">
            {founders.map((f, i) => (
              <div key={i} className="bg-mcubes-surface2 p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(232,176,0,0.12),transparent_52%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="relative flex items-center gap-3 z-10">
                  <div className="w-[46px] h-[46px] rounded-xl border border-mcubes-bdr2 flex items-center justify-center bg-gradient-to-br from-mcubes-gold/20 to-white/5 text-mcubes-white font-mono tracking-[0.14em] text-sm">
                    {f.id}
                  </div>
                  <div>
                    <div className="font-display text-xl font-bold text-mcubes-white tracking-tight">{f.name}</div>
                    <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-mcubes-txt3 mt-0.5">{f.role}</div>
                  </div>
                </div>

                <div className="relative text-[13.5px] text-mcubes-txt2 leading-[1.75] mt-4.5 z-10">
                  {f.desc}
                </div>

                <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-mcubes-bdr text-mcubes-txt3 text-[11px] tracking-[0.06em] mt-4.5 z-10">
                  {f.tag}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
