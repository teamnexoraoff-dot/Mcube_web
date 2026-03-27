import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Gallery() {
  const items = [
    {
      title: "Paneer Paratha Combo",
      img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=900&q=85",
      className: "md:row-span-2 md:col-span-2 h-[200px] md:h-auto"
    },
    {
      title: "Fresh Salad",
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
      className: "h-[200px] md:h-auto"
    },
    {
      title: "Dal Fry",
      img: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=600&q=80",
      className: "h-[200px] md:h-auto"
    },
    {
      title: "Roti Combo",
      img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
      className: "h-[200px] md:h-auto"
    },
    {
      title: "Gobi Paratha",
      img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80",
      className: "h-[200px] md:h-auto"
    }
  ];

  return (
    <section id="gallery" className="py-20 md:py-24 px-6 md:px-16 bg-mcubes-black">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          tag="Gallery"
          title={<>Food that looks<br/><em className="text-mcubes-gold italic pr-2">as good as it feels.</em></>}
          subtitle="Freshly made plates, clean ingredients, and simple combos you can eat daily."
        />

        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-[260px_260px] gap-2.5">
            {items.map((item, i) => (
              <div 
                key={i} 
                className={`relative overflow-hidden rounded-[3px] bg-mcubes-surface group cursor-pointer ${item.className}`}
              >
                {/* gallery item */}
                <img 
                  src={item.img} 
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-500 ease-out filter brightness-[0.7] saturate-[0.9] group-hover:scale-105 group-hover:brightness-[0.85] group-hover:saturate-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mcubes-black/80 via-mcubes-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-mcubes-white">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
