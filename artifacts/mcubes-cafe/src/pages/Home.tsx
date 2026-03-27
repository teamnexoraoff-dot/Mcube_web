import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Gallery } from "@/components/Gallery";
import { Moments } from "@/components/Moments";
import { IPLNights } from "@/components/IPLNights";
import { Story } from "@/components/Story";
import { Menu } from "@/components/Menu";
import { Health } from "@/components/Health";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

export default function Home() {
  return (
    <div className="bg-mcubes-black min-h-screen text-mcubes-txt selection:bg-mcubes-gold/30">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Gallery />
        <Moments />
        <IPLNights />
        <Story />
        <Menu />
        <Health />
        <Reviews />
        <FAQ />
        <Location />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
