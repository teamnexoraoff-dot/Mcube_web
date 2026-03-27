import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { Star } from "lucide-react";

export function Reviews() {
  const reviews = [
    {
      quote: "Finally a place near campus where you can eat daily without feeling heavy. The salad + sabji combo is a game-changer.",
      name: "Student",
      note: "Near Bharathiyar University"
    },
    {
      quote: "Minimal oil, good portions, and the menu is super clear. Love the paneer combos — perfect post-workout meal.",
      name: "Regular",
      note: "Quick pickup"
    },
    {
      quote: "Fast service and consistently clean food. The salad is always fresh — that's rare. Highly recommended.",
      name: "Professional",
      note: "Lunch favorite"
    }
  ];

  return (
    <section id="reviews" className="py-20 md:py-24 px-6 md:px-16 bg-mcubes-surface">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          tag="Loved by Locals"
          title={<>Clean food,<br/><em className="text-mcubes-gold italic pr-2">consistent taste.</em></>}
          subtitle="Fast, light, filling — the kind of meals you can actually eat every day."
        />

        <Reveal delay={0.2}>
          <div className="grid md:grid-cols-3 gap-3 bg-mcubes-bdr border border-mcubes-bdr rounded mt-10 overflow-hidden p-[1px]">
            {reviews.map((r, i) => (
              <div key={i} className="bg-mcubes-surface2 p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(232,176,0,0.1),transparent_52%)] opacity-80 pointer-events-none"></div>
                
                <div className="flex gap-1 mb-5 relative z-10">
                  {[1,2,3,4,5].map(star => (
                    <Star key={star} className="w-3.5 h-3.5 fill-mcubes-gold text-mcubes-gold" />
                  ))}
                </div>
                
                <p className="text-sm text-mcubes-txt leading-[1.75] relative z-10 italic">
                  "{r.quote}"
                </p>
                
                <div className="mt-6 pt-4 border-t border-mcubes-bdr flex items-center justify-between gap-4 relative z-10">
                  <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-mcubes-white">{r.name}</span>
                  <span className="text-xs text-mcubes-txt3 tracking-[0.04em] text-right">{r.note}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
