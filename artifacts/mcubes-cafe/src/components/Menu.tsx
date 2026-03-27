import { useState, useRef, useEffect } from "react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { Instagram, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Types
type Category = 'roti' | 'aloo' | 'paneer' | 'gobi' | 'addon';

interface MenuItem {
  name: string;
  badge?: string;
}

// Data
const menuData: Record<Exclude<Category, 'addon'>, { title: string; sub: string; items: MenuItem[] }> = {
  roti: {
    title: "Roti (2) + Sabji + Salad",
    sub: "Choose your sabji — comes with 2 rotis and fresh salad",
    items: [
      { name: "Butter Paneer Combo" },
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
    title: "Aloo Paratha (2) + Sabji + Salad",
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
    title: "Paneer Paratha (2) + Sabji + Salad",
    sub: "Stuffed paneer paratha with your choice of sabji and salad",
    items: [
      { name: "Butter Paneer Combo", badge: "Popular" },
      { name: "Kadai Paneer Combo" },
      { name: "Masala Paneer Combo" },
      { name: "Paneer Burji Combo" },
      { name: "Mixed Veg Gravy Combo" },
      { name: "Dal Fry Combo" },
    ]
  },
  gobi: {
    title: "Gobi Paratha (2) + Sabji + Salad",
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

const PREVIEW_IMGS = {
  paratha: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1200&q=80",
  roti: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1200&q=80",
  salad: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=80",
  dal: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=1200&q=80",
  paneer: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1200&q=80",
  veg: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1200&q=80"
};

export function Menu() {
  const [activeTab, setActiveTab] = useState<Category>('roti');
  const [preview, setPreview] = useState<{name: string, img: string}>({
    name: 'Paneer Paratha Combo', 
    img: PREVIEW_IMGS.paratha
  });

  const getPreviewImg = (name: string) => {
    const l = name.toLowerCase();
    if(l.includes('dal')) return PREVIEW_IMGS.dal;
    if(l.includes('salad')) return PREVIEW_IMGS.salad;
    if(l.includes('roti')) return PREVIEW_IMGS.roti;
    if(l.includes('paratha')) return PREVIEW_IMGS.paratha;
    if(l.includes('paneer')) return PREVIEW_IMGS.paneer;
    if(l.includes('veg')) return PREVIEW_IMGS.veg;
    return PREVIEW_IMGS.veg;
  };

  const handleHover = (name: string) => {
    setPreview({ name, img: getPreviewImg(name) });
  };

  return (
    <section id="menu" className="py-20 md:py-24 px-6 md:px-16 bg-mcubes-surface">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          tag="Our Menu"
          title={<>Every combo,<br/><em className="text-mcubes-gold italic pr-2">freshly made.</em></>}
          subtitle="Pick your base. Choose your sabji. Salad included — simple, filling, and light."
        />

        {/* IG Embed Banner */}
        <Reveal delay={0.2}>
          <div className="mt-8 border border-mcubes-bdr rounded bg-mcubes-surface/60 backdrop-blur-md p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-mcubes-txt3">Menu (Instagram)</span>
              <p className="text-[13px] text-mcubes-txt2 mt-1">Check our pinned post for exact pricing.</p>
            </div>
            <a 
              href="https://www.instagram.com/p/DSKz5Y7D16s/?img_index=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2.5 rounded-lg border border-mcubes-bdr2 bg-white/5 text-mcubes-white text-xs font-medium tracking-[0.06em] hover:border-mcubes-gold hover:text-mcubes-gold transition-all"
            >
              <Instagram className="w-4 h-4" />
              View Menu Post
            </a>
          </div>
        </Reveal>

        {/* Interactive Menu Grid */}
        <div className="grid lg:grid-cols-[220px_1fr_360px] gap-8 xl:gap-14 items-start mt-14">
          
          {/* Sidebar */}
          <Reveal delay={0.1} className="lg:sticky lg:top-24 flex flex-row lg:flex-col gap-2 overflow-x-auto hide-scrollbar pb-2 lg:pb-0">
            <div className="hidden lg:block font-mono text-[10px] tracking-[0.2em] uppercase text-mcubes-txt3 mb-4">Category</div>
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
                  "flex-none lg:w-full text-left px-4 py-3 text-sm font-light border lg:border-y-0 lg:border-r-0 lg:border-l-2 rounded lg:rounded-none lg:rounded-r transition-all duration-200 relative",
                  activeTab === tab.id 
                    ? "text-mcubes-white border-mcubes-gold lg:bg-mcubes-gold/5 bg-mcubes-surface2" 
                    : "text-mcubes-txt2 border-mcubes-bdr lg:border-l-mcubes-bdr hover:text-mcubes-white hover:bg-white/5"
                )}
              >
                {tab.label}
                {activeTab === tab.id && <ChevronRight className="hidden lg:block absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-mcubes-gold" />}
              </button>
            ))}
          </Reveal>

          {/* Main List */}
          <Reveal delay={0.2} className="min-h-[500px]">
            {activeTab !== 'addon' ? (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="pb-6 mb-6 border-b border-mcubes-bdr">
                  <h3 className="font-display text-[32px] font-bold text-mcubes-white tracking-tight leading-[1.2]">
                    {menuData[activeTab].title}
                  </h3>
                  <p className="text-[13px] text-mcubes-txt2 mt-2 tracking-[0.04em]">
                    {menuData[activeTab].sub}
                  </p>
                </div>
                
                <div className="flex flex-col gap-1">
                  {menuData[activeTab].items.map((item, idx) => (
                    <div 
                      key={idx}
                      onMouseEnter={() => handleHover(item.name)}
                      onClick={() => handleHover(item.name)}
                      className="flex items-center justify-between p-3.5 border border-transparent rounded hover:bg-mcubes-gold/5 hover:border-mcubes-gold/20 hover:text-mcubes-white text-sm text-mcubes-txt transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded bg-mcubes-surface2 border border-mcubes-bdr flex-shrink-0 bg-cover bg-center group-hover:border-mcubes-gold/30 transition-colors"
                          style={{ backgroundImage: `url(${getPreviewImg(item.name)})` }}
                        />
                        <span className="flex items-center flex-wrap gap-2">
                          <span className="w-1.5 h-1.5 bg-mcubes-gold rounded-full opacity-70"></span>
                          {item.name}
                          {item.badge && (
                            <span className="font-mono text-[9px] tracking-[0.14em] uppercase bg-mcubes-gold/10 border border-mcubes-gold/20 text-mcubes-gold px-2 py-0.5 rounded">
                              {item.badge}
                            </span>
                          )}
                        </span>
                      </div>
                      {/* Veg Icon */}
                      <div className="w-3.5 h-3.5 border-[1.5px] border-[#4CAF50] rounded-sm flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="pb-6 mb-6 border-b border-mcubes-bdr">
                  <h3 className="font-display text-[32px] font-bold text-mcubes-white tracking-tight leading-[1.2]">
                    Choose & Add-On
                  </h3>
                  <p className="text-[13px] text-mcubes-txt2 mt-2 tracking-[0.04em]">
                    Additional items to complete your meal
                  </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {addonItems.map((item, idx) => (
                    <div 
                      key={idx}
                      onMouseEnter={() => handleHover(item)}
                      onClick={() => handleHover(item)}
                      className="flex items-center gap-2.5 p-3 border border-mcubes-bdr rounded bg-mcubes-surface text-[13px] text-mcubes-txt2 hover:border-mcubes-gold/30 hover:text-mcubes-white hover:bg-mcubes-gold/5 transition-all cursor-pointer group"
                    >
                      <div 
                        className="w-8 h-8 rounded bg-mcubes-surface2 border border-mcubes-bdr flex-shrink-0 bg-cover bg-center group-hover:border-mcubes-gold/30 transition-colors"
                        style={{ backgroundImage: `url(${getPreviewImg(item)})` }}
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Reveal>

          {/* Sticky Preview */}
          <Reveal delay={0.3} className="hidden lg:block sticky top-24">
            <div className="border border-mcubes-bdr bg-mcubes-surface2/80 backdrop-blur-md rounded overflow-hidden">
              <div className="p-4.5 pb-0">
                <div className="font-display text-[22px] font-bold text-mcubes-white tracking-tight leading-[1.1]">
                  Dish Preview
                </div>
                <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-mcubes-txt3 mt-2 line-clamp-1">
                  {preview.name}
                </div>
              </div>
              <div className="mt-3.5 border-y border-mcubes-bdr relative h-[320px] bg-mcubes-black">
                <img 
                  key={preview.img}
                  src={preview.img} 
                  alt={preview.name} 
                  className="w-full h-full object-cover filter brightness-[0.82] saturate-[1.02] animate-in fade-in duration-500"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(232,176,0,0.15),transparent_45%),linear-gradient(to_top,rgba(12,12,12,0.7)0%,transparent_55%)] pointer-events-none"></div>
                <div className="absolute left-4 right-4 bottom-3 flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-mcubes-white truncate pr-4">
                    {preview.name}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
