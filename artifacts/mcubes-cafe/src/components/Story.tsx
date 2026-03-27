import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { motion } from "framer-motion";

export function Story() {
  const founders = [
    { id: "F1", name: "Founder 1", role: "Operations", desc: "Keeps everything running smooth — from quick service to consistent taste.", tag: "Daily prep", badge: "500+ days of fresh prep" },
    { id: "F2", name: "Founder 2", role: "Kitchen", desc: "Focuses on minimal oil cooking and balanced plates that you can eat every day.", tag: "Minimal oil", badge: "Zero compromise on quality" },
    { id: "F3", name: "Founder 3", role: "Community", desc: "Builds the cafe vibe — IPL nights, updates on Instagram, and a friendly place to hang out.", tag: "IPL nights", badge: "Built the community" }
  ];

  return (
    <section id="story" className="py-20 md:py-24 px-6 md:px-16 bg-mcubes-surface relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute left-0 bottom-0 w-[40vw] h-[40vw] bg-mcubes-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader 
          tag="Our Story"
          title={<>3 friends.<br/><em className="text-mcubes-gold italic pr-2">1 cafe.</em></>}
          subtitle="Built by three friends with one goal: everyday food that's clean, light, and ridiculously consistent."
        />

        <Reveal delay={0.2} variant="fade-up">
          <div className="max-w-3xl mb-12 relative">
            <p className="text-[16px] md:text-lg text-mcubes-txt leading-[1.8] font-light">
              MCubes started in 2024 as a simple idea: what if you could eat clean, balanced food every single day near your campus or workspace — without spending too much or compromising on taste? Three friends made it happen.
            </p>
            <div className="mt-8 flex items-center gap-4 font-mono text-sm tracking-[0.2em] text-mcubes-white uppercase relative inline-block">
              Est. 2024
              <motion.div 
                className="absolute -bottom-2 left-0 h-0.5 bg-mcubes-gold"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3} variant="fade-up">
          <div className="grid md:grid-cols-3 gap-4 bg-transparent mt-10">
            {founders.map((f, i) => (
              <div key={i} className="bg-mcubes-surface2 p-8 relative overflow-hidden group border border-mcubes-bdr hover:border-mcubes-gold/30 rounded-md transition-all duration-500 hover:shadow-[0_8px_30px_rgba(232,176,0,0.08)]">
                
                {/* Thin gold top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-mcubes-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(232,176,0,0.12),transparent_52%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="relative flex items-center gap-4 z-10">
                  <div className="w-[52px] h-[52px] rounded-xl border border-mcubes-bdr2 flex items-center justify-center bg-gradient-to-br from-mcubes-gold/20 to-white/5 text-mcubes-white font-mono tracking-[0.14em] text-sm group-hover:border-mcubes-gold/50 transition-colors">
                    {f.id}
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-mcubes-white tracking-tight">{f.name}</div>
                    <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-mcubes-txt3 mt-1">{f.role}</div>
                  </div>
                </div>

                <div className="relative text-[14px] text-mcubes-txt2 leading-[1.75] mt-6 z-10">
                  {f.desc}
                </div>

                <div className="relative mt-8 pt-5 border-t border-mcubes-bdr/50 z-10 flex flex-col gap-3">
                  <div className="inline-flex items-center w-max gap-2 px-3 py-1.5 rounded-full border border-mcubes-bdr text-mcubes-txt3 text-[11px] tracking-[0.06em] group-hover:border-mcubes-gold/30 group-hover:text-mcubes-txt transition-colors">
                    {f.tag}
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.1em] text-mcubes-gold mt-1">
                    ✦ {f.badge}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
