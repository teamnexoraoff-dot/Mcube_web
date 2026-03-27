export function Marquee() {
  const items = [
    "Roti Combo", "Aloo Paratha", "Gobi Paratha", "Paneer Paratha", 
    "Kadai Paneer", "Dal Fry", "Mixed Veg Gravy", "Masala Paneer", "Fresh Salad"
  ];

  return (
    <div className="py-4 border-y border-mcubes-bdr overflow-hidden bg-mcubes-surface">
      <div className="flex w-max animate-marquee">
        {/* Double the items for seamless infinite scroll */}
        {[...items, ...items, ...items].map((item, i) => (
          <div 
            key={i} 
            className="font-mono text-[11px] tracking-[0.18em] text-mcubes-txt2 uppercase px-7 flex items-center gap-7 whitespace-nowrap"
          >
            {item}
            <span className="text-mcubes-gold text-[8px]">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
