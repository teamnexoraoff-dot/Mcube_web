import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ from, to, duration = 2 }: { from: number, to: number, duration?: number }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // easeOutExpo
      const ease = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(from + (to - from) * ease));

      if (progress < duration * 1000) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, inView]);

  return <span ref={ref}>{count}</span>;
}

export function Stats() {
  return (
    <section className="relative py-16 md:py-20 bg-mcubes-black border-y border-mcubes-gold/20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,176,0,0.1),transparent_50%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-mcubes-gold/20">
          
          <div className="flex flex-col items-center justify-center text-center">
            <div className="font-display text-4xl md:text-5xl text-mcubes-gold font-bold mb-2">
              <Counter from={0} to={100} />+
            </div>
            <div className="font-mono text-xs tracking-[0.15em] text-mcubes-txt3 uppercase">Daily Orders</div>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <div className="font-display text-4xl md:text-5xl text-mcubes-gold font-bold mb-2">
              <Counter from={0} to={3} />
            </div>
            <div className="font-mono text-xs tracking-[0.15em] text-mcubes-txt3 uppercase">Founders</div>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <div className="font-display text-4xl md:text-5xl text-mcubes-gold font-bold mb-2">
              <Counter from={0} to={10} />+
            </div>
            <div className="font-mono text-xs tracking-[0.15em] text-mcubes-txt3 uppercase">Menu Items</div>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <div className="font-display text-4xl md:text-5xl text-mcubes-gold font-bold mb-2">
              ★ <Counter from={0} to={5} />.0
            </div>
            <div className="font-mono text-xs tracking-[0.15em] text-mcubes-txt3 uppercase">Rating</div>
          </div>

        </div>
      </div>
    </section>
  );
}
