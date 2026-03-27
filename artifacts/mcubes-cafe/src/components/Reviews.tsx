import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { Star } from "lucide-react";

export function Reviews() {
  const reviewsRow1 = [
    {
      quote: "Perfect daily meal — light, filling, and never oily. Best roti combo in Coimbatore.",
      name: "R. Priya",
      role: "Regular",
      stars: 5
    },
    {
      quote: "We come for IPL every match night. The vibe is great and the parathas are fire!",
      name: "S. Kumar",
      role: "IPL Fan",
      stars: 5
    },
    {
      quote: "As a Bharathiyar student, this is my go-to. Affordable, clean, and always fresh.",
      name: "A. Meena",
      role: "Student",
      stars: 5
    },
    // Duplicate for infinite scroll
    {
      quote: "Perfect daily meal — light, filling, and never oily. Best roti combo in Coimbatore.",
      name: "R. Priya",
      role: "Regular",
      stars: 5
    },
    {
      quote: "We come for IPL every match night. The vibe is great and the parathas are fire!",
      name: "S. Kumar",
      role: "IPL Fan",
      stars: 5
    },
    {
      quote: "As a Bharathiyar student, this is my go-to. Affordable, clean, and always fresh.",
      name: "A. Meena",
      role: "Student",
      stars: 5
    }
  ];

  const reviewsRow2 = [
    {
      quote: "The salad + sabji combo changed how I think about food near campus.",
      name: "M. Rajan",
      role: "Professional",
      stars: 5
    },
    {
      quote: "Fast service, consistent quality, and super affordable. Come here daily.",
      name: "K. Nair",
      role: "Daily Regular",
      stars: 5
    },
    {
      quote: "Best vegetarian combo in this area. Minimal oil is not a gimmick — you can taste the difference.",
      name: "P. Sharma",
      role: "Health Lover",
      stars: 5
    },
    // Duplicate for infinite scroll
    {
      quote: "The salad + sabji combo changed how I think about food near campus.",
      name: "M. Rajan",
      role: "Professional",
      stars: 5
    },
    {
      quote: "Fast service, consistent quality, and super affordable. Come here daily.",
      name: "K. Nair",
      role: "Daily Regular",
      stars: 5
    },
    {
      quote: "Best vegetarian combo in this area. Minimal oil is not a gimmick — you can taste the difference.",
      name: "P. Sharma",
      role: "Health Lover",
      stars: 5
    }
  ];

  const ReviewCard = ({ review }: { review: any }) => (
    <div className="w-[340px] md:w-[400px] flex-shrink-0 bg-mcubes-surface border border-mcubes-bdr rounded-md p-7 relative overflow-hidden group hover:border-mcubes-gold/30 transition-colors">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(232,176,0,0.05),transparent_52%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      
      <div className="absolute -top-4 -left-2 text-6xl text-mcubes-bdr2 font-display select-none">"</div>
      
      <div className="flex gap-1 mb-5 relative z-10">
        {[...Array(review.stars)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-mcubes-gold text-mcubes-gold" />
        ))}
      </div>
      
      <p className="text-[15px] text-mcubes-white leading-[1.7] relative z-10 font-display italic mb-6">
        "{review.quote}"
      </p>
      
      <div className="mt-auto pt-4 border-t border-mcubes-bdr flex items-center justify-between gap-4 relative z-10">
        <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-mcubes-white">{review.name}</span>
        <span className="font-mono text-[10px] tracking-[0.1em] text-mcubes-gold uppercase">{review.role}</span>
      </div>
    </div>
  );

  return (
    <section id="reviews" className="py-20 md:py-24 bg-mcubes-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <SectionHeader 
          tag="Loved by Locals"
          title={<>Clean food,<br/><em className="text-mcubes-gold italic pr-2">consistent taste.</em></>}
          subtitle="Fast, light, filling — the kind of meals you can actually eat every day."
        />
      </div>

      <Reveal delay={0.2} variant="fade-up">
        <div className="mt-10 flex flex-col gap-5 relative">
          
          {/* Edge gradients for smooth scrolling effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-mcubes-black to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-mcubes-black to-transparent z-20 pointer-events-none" />

          {/* Row 1 - Scrolling Left */}
          <div className="flex overflow-hidden group">
            <div className="flex gap-5 animate-marquee group-hover:[animation-play-state:paused] w-max">
              {reviewsRow1.map((r, i) => <ReviewCard key={i} review={r} />)}
            </div>
          </div>

          {/* Row 2 - Scrolling Right */}
          <div className="flex overflow-hidden group">
            <div className="flex gap-5 animate-marquee-reverse group-hover:[animation-play-state:paused] w-max">
              {reviewsRow2.map((r, i) => <ReviewCard key={i} review={r} />)}
            </div>
          </div>
          
        </div>
      </Reveal>
    </section>
  );
}
