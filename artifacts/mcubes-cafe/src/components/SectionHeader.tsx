import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  tag: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ tag, title, subtitle, className }: SectionHeaderProps) {
  return (
    <motion.div 
      className={cn("mb-12 md:mb-16", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.15 }
        }
      }}
    >
      <motion.div 
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } }
        }}
        className="font-mono text-[10px] tracking-[0.22em] uppercase text-mcubes-gold mb-3 md:mb-4 flex items-center gap-3"
      >
        <span className="block w-6 h-[1px] bg-mcubes-gold"></span>
        {tag}
      </motion.div>
      <motion.h2 
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } }
        }}
        className="font-display text-4xl md:text-5xl lg:text-[56px] text-mcubes-white font-bold tracking-tight leading-[1.1]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } }
          }}
          className="text-[15px] text-mcubes-txt2 mt-4 max-w-[480px] leading-[1.75]"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
