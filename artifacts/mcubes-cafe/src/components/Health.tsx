import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Health() {
  const points = [
    { num: "01", title: "High in Fiber", desc: "Chapati, vegetables, and salad together improve gut health and keep you full for longer." },
    { num: "02", title: "Rich in Vitamins", desc: "Carrot, tomato, onion, and cucumber provide Vitamins A, B, C, K, iron, and potassium." },
    { num: "03", title: "Good Protein", desc: "Paneer, dal, and mixed veg deliver plant-based protein for muscle repair and energy." },
    { num: "04", title: "Boosts Immunity", desc: "Fresh veggies and herbs add antioxidants that help improve immunity naturally." },
    { num: "05", title: "Weight Management", desc: "Low-calorie chapati + sabji meals reduce overeating and support healthy weight control." },
    { num: "06", title: "Improves Digestion", desc: "Whole wheat chapati and salad improve bowel movement and help reduce acidity." },
  ];

  return (
    <section id="health" className="py-20 md:py-24 px-6 md:px-16 bg-mcubes-black">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          tag="Nutrition"
          title={<>Why it's <em className="text-mcubes-gold italic pr-1">good</em><br/>for you.</>}
          subtitle="A smart everyday plate: carbs + protein + veggies — balanced, not heavy."
        />

        <Reveal delay={0.2}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-mcubes-bdr border border-mcubes-bdr rounded mt-10 overflow-hidden">
            {points.map((p, i) => (
              <div key={i} className="bg-mcubes-black p-8 md:p-9 relative overflow-hidden group hover:bg-mcubes-surface transition-colors duration-300">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-mcubes-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
                
                <div className="font-mono text-[11px] tracking-[0.14em] text-mcubes-txt3 mb-5">
                  {p.num}
                </div>
                <h3 className="font-display text-lg text-mcubes-white font-bold mb-3 leading-[1.3]">
                  {p.title}
                </h3>
                <p className="text-[13.5px] text-mcubes-txt2 leading-[1.7]">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
