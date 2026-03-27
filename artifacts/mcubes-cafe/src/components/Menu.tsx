import { useState } from "react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { ChevronRight, ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

// Types
type Category = 'roti' | 'aloo' | 'paneer' | 'gobi' | 'addon';

interface MenuItem {
  name: string;
  badge?: string;
  desc?: string;
}

// Data
const menuData: Record<Exclude<Category, 'addon'>, { title: string; sub: string; items: MenuItem[] }> = {
  roti: {
    title: "Roti (2) + Sabji + Salad",
    sub: "Choose your sabji — comes with 2 rotis and fresh salad",
    items: [
      { name: "Butter Paneer Combo", badge: "Popular" },
      { name: "Kadai Paneer Combo" },
      { name: "Masala Paneer Combo" },
      { name: "Paneer Burji Combo" },
      { name: "Mixed Veg Combo" },
      { name: "Mixed Veg Gravy Combo" },
      { name: "Dal Fry Combo" },
      { name: "Dal Tadka Combo" },
    ]
  },
  aloo: {
    title: "Aloo Paratha (2) + Sabji",
    sub: "Stuffed aloo paratha with your choice of sabji and salad",
    items: [
      { name: "Plain Aloo Paratha Combo" },
      { name: "Butter Aloo Paratha Combo" },
      { name: "Aloo Paratha + Kadai Paneer" },
      { name: "Aloo Paratha + Masala Paneer" },
      { name: "Aloo Paratha + Mixed Veg" },
      { name: "Aloo Paratha + Dal Fry" },
    ]
  },
  paneer: {
    title: "Paneer Paratha (2) + Sabji",
    sub: "Stuffed paneer paratha with your choice of sabji and salad",
    items: [
      { name: "Butter Paneer Combo", badge: "Best Seller" },
      { name: "Kadai Paneer Combo" },
      { name: "Masala Paneer Combo" },
      { name: "Paneer Burji Combo" },
      { name: "Mixed Veg Gravy Combo" },
      { name: "Dal Fry Combo" },
    ]
  },
  gobi: {
    title: "Gobi Paratha (2) + Sabji",
    sub: "Crispy gobi paratha with your choice of sabji and salad",
    items: [
      { name: "Plain Gobi Paratha Combo" },
      { name: "Butter Paneer Combo" },
      { name: "Kadai Paneer Combo" },
      { name: "Masala Paneer Combo" },
      { name: "Dal Fry Combo" },
    ]
  }
};

const addonItems = [
  "Roti", "Butter Roti", "Aloo Paratha", "Butter Aloo Paratha", 
  "Gobi Paratha", "Paneer Paratha", "Butter Paneer", "Kadai Paneer", 
  "Masala Paneer", "Paneer Burji (Dry)", "Mixed Veg (Dry)", 
  "Mixed Veg Gravy", "Dal Fry", "Dal Tadka", "Curd"
];

export function Menu() {
  const [activeTab, setActiveTab] = useState<Category>('roti');

  return (
    <section id="menu" className="bg-mcubes-black relative">
      {/* Hero Menu Image */}
      <div className="w-full h-[300px] relative overflow-hidden hidden md:block">
        <div className="absolute inset-0 bg-mcubes-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-mcubes-black z-10" />
        <motion.img 
          src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1600&q=80"
          className="w-full h-full object-cover origin-center"
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>

      <div className="py-20 md:py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            tag="Our Menu"
            title={<>Every combo,<br/><em className="text-mcubes-gold italic pr-2">freshly made.</em></>}
            subtitle="Pick your base. Choose your sabji. Salad included — simple, filling, and light."
          />

          {/* Tabbed Interface */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16 mt-14 relative">
            
            {/* Sidebar Tabs */}
            <div className="w-full md:w-[260px] flex-shrink-0 flex flex-row md:flex-col gap-2 overflow-x-auto hide-scrollbar pb-4 md:pb-0 z-10">
              {[
                { id: 'roti', label: 'Roti Combos' },
                { id: 'aloo', label: 'Aloo Paratha' },
                { id: 'paneer', label: 'Paneer Paratha' },
                { id: 'gobi', label: 'Gobi Paratha' },
                { id: 'addon', label: 'Add-Ons' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as Category)}
                  className={cn(
                    "flex-none text-left px-5 py-4 text-[15px] font-medium transition-all duration-300 relative group overflow-hidden md:rounded-r whitespace-nowrap md:whitespace-normal",
                    activeTab === tab.id 
                      ? "text-mcubes-gold bg-mcubes-surface" 
                      : "text-mcubes-txt2 hover:text-mcubes-white hover:bg-white/5"
                  )}
                >
                  {/* Left indicator for desktop */}
                  <div className={cn(
                    "absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-300 hidden md:block",
                    activeTab === tab.id ? "bg-mcubes-gold" : "bg-transparent group-hover:bg-mcubes-bdr2"
                  )} />
                  
                  {/* Bottom indicator for mobile */}
                  <div className={cn(
                    "absolute left-0 bottom-0 right-0 h-[3px] transition-all duration-300 md:hidden",
                    activeTab === tab.id ? "bg-mcubes-gold" : "bg-transparent"
                  )} />

                  <span className="relative z-10 flex items-center justify-between">
                    {tab.label}
                    {activeTab === tab.id && <ChevronRight className="w-4 h-4 hidden md:block" />}
                  </span>
                </button>
              ))}
            </div>

            {/* Content Panel */}
            <div className="flex-1 min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="bg-mcubes-surface/40 border border-mcubes-bdr rounded-md p-6 md:p-10 backdrop-blur-sm relative overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute -top-40 -right-40 w-80 h-80 bg-mcubes-gold/5 rounded-full blur-[100px] pointer-events-none" />

                  {activeTab !== 'addon' ? (
                    <>
                      <div className="pb-8 mb-8 border-b border-mcubes-bdr/50 relative z-10">
                        <h3 className="font-display text-3xl md:text-[38px] font-bold text-mcubes-white tracking-tight leading-[1.2]">
                          {menuData[activeTab].title}
                        </h3>
                        <p className="text-[14px] text-mcubes-txt2 mt-3 tracking-[0.02em]">
                          {menuData[activeTab].sub}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-3 relative z-10">
                        {menuData[activeTab].items.map((item, idx) => (
                          <div 
                            key={idx}
                            className="flex items-center justify-between p-4 border-l-2 border-transparent hover:border-mcubes-gold hover:bg-white/5 rounded-r group transition-all cursor-default"
                          >
                            <div className="flex items-center gap-3">
                              <span className="font-sans text-[15px] text-mcubes-txt group-hover:text-mcubes-white transition-colors">
                                {item.name}
                              </span>
                              {item.badge && (
                                <span className="font-mono text-[9px] tracking-[0.14em] uppercase bg-mcubes-gold/10 text-mcubes-gold px-2 py-0.5 rounded">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-3">
                              <ArrowRight className="w-4 h-4 text-mcubes-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                              {/* Veg Icon */}
                              <div className="w-4 h-4 border-[1.5px] border-[#4CAF50] rounded-sm flex items-center justify-center flex-shrink-0 bg-mcubes-black">
                                <div className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="pb-8 mb-8 border-b border-mcubes-bdr/50 relative z-10">
                        <h3 className="font-display text-3xl md:text-[38px] font-bold text-mcubes-white tracking-tight leading-[1.2]">
                          Choose & Add-On
                        </h3>
                        <p className="text-[14px] text-mcubes-txt2 mt-3 tracking-[0.02em]">
                          Additional items to complete your meal
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 relative z-10">
                        {addonItems.map((item, idx) => (
                          <div 
                            key={idx}
                            className="p-3.5 border border-mcubes-bdr rounded bg-mcubes-black/40 text-[14px] text-mcubes-txt2 hover:border-mcubes-gold/40 hover:text-mcubes-white hover:bg-mcubes-gold/5 transition-all text-center"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Sticky Order Button Container */}
          <div className="mt-12 flex justify-center sticky bottom-6 z-40">
            <a 
              href="https://wa.me/917603824812" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-mcubes-gold text-mcubes-black font-medium tracking-[0.06em] px-8 py-4 rounded-full shadow-[0_8px_30px_rgba(232,176,0,0.25)] hover:shadow-[0_8px_40px_rgba(232,176,0,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 fill-mcubes-black" />
              Order on WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
