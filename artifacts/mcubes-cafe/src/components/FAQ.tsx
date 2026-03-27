import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function FAQ() {
  const faqs = [
    { q: "Is the menu 100% vegetarian?", a: "Yes — MCubes Cafe is 100% vegetarian. Our focus is balanced meals with minimal oil and fresh ingredients." },
    { q: "Does every combo include salad?", a: "Yes. Roti + Sabji combos and Paratha combos include a fresh salad by default." },
    { q: "Can I order on WhatsApp?", a: "Yes. Tap “Order on WhatsApp” to message us with your combo and pickup time." },
    { q: "Where are you located?", a: "We're in Kalveerampalayam, near Bharathiyar University, Coimbatore. Use “Open in Maps” to navigate." },
  ];

  return (
    <section id="faq" className="py-20 md:py-24 px-6 md:px-16 bg-mcubes-black">
      <div className="max-w-4xl mx-auto">
        <SectionHeader 
          tag="FAQ"
          title={<>Everything you need<br/><em className="text-mcubes-gold italic pr-2">to know.</em></>}
          subtitle="Quick answers before you walk in or WhatsApp order."
        />

        <Reveal delay={0.2} className="mt-10 flex flex-col gap-2.5">
          {faqs.map((faq, i) => (
            <details key={i} className="group border border-mcubes-bdr bg-mcubes-surface/50 backdrop-blur-md rounded overflow-hidden">
              <summary className="cursor-pointer list-none p-5 flex items-center justify-between text-sm text-mcubes-white font-normal hover:bg-white/5 transition-colors">
                {faq.q}
                <span className="font-mono text-mcubes-gold text-lg leading-none transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <div className="px-5 pb-5 text-[13.5px] text-mcubes-txt2 leading-[1.75]">
                {faq.a}
              </div>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
