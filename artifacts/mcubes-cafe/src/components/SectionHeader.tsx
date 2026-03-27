import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tag: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ tag, title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      <Reveal direction="up">
        <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-mcubes-gold mb-3 md:mb-4 flex items-center gap-3">
          <span className="block w-6 h-[1px] bg-mcubes-gold"></span>
          {tag}
        </div>
        <h2 className="font-display text-4xl md:text-5xl lg:text-[56px] text-mcubes-white font-bold tracking-tight leading-[1.1]">
          {title}
        </h2>
        {subtitle && (
          <p className="text-[15px] text-mcubes-txt2 mt-4 max-w-[480px] leading-[1.75]">
            {subtitle}
          </p>
        )}
      </Reveal>
    </div>
  );
}
