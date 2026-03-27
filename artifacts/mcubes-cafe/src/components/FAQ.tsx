import { useState } from "react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Is the menu 100% vegetarian?", a: "Yes — MCubes Cafe is 100% vegetarian. Our focus is balanced meals with minimal oil and fresh ingredients." },
    { q: "Does every combo include salad?", a: "Yes. Roti + Sabji combos and Paratha combos include a fresh salad by default." },
    { q: "Can I order on WhatsApp?", a: "Yes. Tap “Order on WhatsApp” to message us with your combo and pickup time." },
    { q: "Where are you located?", a: "We're in Kalveerampalayam, near Bharathiyar University, Coimbatore. Use “Open in Maps” to navigate." },
    { q: "Can I order for delivery?", a: "We currently focus on dine-in and pickup. WhatsApp us and we'll let you know about current options." }
  ];

  return (
    <section id="faq" className="py-20 md:py-24 px-6 md:px-16 bg-mcubes-surface relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeader 
          tag="FAQ"
          title={<>Everything you need<br/><em className="text-mcubes-gold italic pr-2">to know.</em></>}
          subtitle="Quick answers before you walk in or WhatsApp order."
        />

        <Reveal delay={0.2} className="mt-12 flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            
            return (
              <div 
                key={i} 
                className={cn(
                  "border rounded-md overflow-hidden bg-mcubes-black/50 backdrop-blur-md transition-colors duration-300",
                  isOpen ? "border-mcubes-gold/50" : "border-mcubes-bdr hover:border-mcubes-bdr2"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 focus:outline-none relative"
                >
                  <div className={cn(
                    "absolute left-0 top-0 bottom-0 w-1 bg-mcubes-gold transition-transform duration-300 origin-left",
                    isOpen ? "scale-x-100" : "scale-x-0"
                  )} />
                  <span className={cn(
                    "text-[15px] md:text-base font-medium transition-colors",
                    isOpen ? "text-mcubes-white" : "text-mcubes-txt"
                  )}>
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={cn(
                      "flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border transition-colors",
                      isOpen ? "border-mcubes-gold text-mcubes-gold bg-mcubes-gold/10" : "border-mcubes-bdr text-mcubes-txt2"
                    )}
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-6 pt-0 text-[14px] text-mcubes-txt2 leading-[1.75]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
