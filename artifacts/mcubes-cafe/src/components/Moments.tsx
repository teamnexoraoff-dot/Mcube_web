import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Moments() {
  const moments = [
    { title: "Fresh Salad", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=85" },
    { title: "Balanced Plate", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1200&q=85" },
    { title: "Roti Combo", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1200&q=85" },
    { title: "Paratha", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1200&q=85" },
    { title: "Veggies", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1200&q=85" },
    { title: "Dal", img: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=1200&q=85" },
    { title: "Ingredients", img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&q=85" },
    { title: "Cafe Vibe", img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1200&q=85" },
  ];

  return (
    <section id="moments" className="py-20 md:py-24 bg-mcubes-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <SectionHeader 
          tag="More Moments"
          title={<>Swipe through<br/><em className="text-mcubes-gold italic pr-2">today's vibe.</em></>}
          subtitle="Quick peeks of plates, prep, and the cafe feel. Slide to explore."
        />
      </div>

      <Reveal delay={0.2} direction="left">
        <div className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory hide-scrollbar py-1 border-y border-mcubes-bdr mt-10 px-6 md:px-16 scroll-smooth">
          {moments.map((m, i) => (
            <div 
              key={i} 
              className="flex-none w-[clamp(220px,48vw,420px)] snap-center relative rounded border border-mcubes-bdr overflow-hidden bg-mcubes-black group"
            >
              {/* moments gallery item */}
              <img 
                src={m.img} 
                alt={m.title}
                loading="lazy"
                className="w-full h-[220px] md:h-[260px] object-cover filter brightness-[0.78] group-hover:scale-105 group-hover:brightness-[0.9] group-hover:saturate-105 transition-all duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mcubes-black/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute left-3.5 right-3.5 bottom-3 z-10 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-mcubes-white">{m.title}</span>
                <span className="font-mono text-[10px] tracking-[0.16em] text-mcubes-white/60">0{i+1}</span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
