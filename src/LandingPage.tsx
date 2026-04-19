import CtaFooter from "./components/CtaFooter";
import FeaturedFilms from "./components/FeaturedFilms";
import FilmsGrid from "./components/FilmsGrid";
import Hero from "./components/Hero";
import MinimalProcess from "./components/MinimalProcess";
import CompactServices from "./components/CompactServices";
import Navbar from "./components/Navbar";
import Noise from "./components/Noise";

const Divider = () => (
  <div className="w-full flex justify-center py-8 md:py-16">
    <div className="h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </div>
);

export default function LandingPage() {
  return (
    <div className="bg-black min-h-screen selection:bg-white selection:text-black relative">
      
      <Noise/>

      <Navbar />

      <main>
        {/* 1. HERO — Full-screen showreel */}
        <Hero />

        {/* 2. FEATURED FILMS — High priority, visually dominant */}
        <FeaturedFilms />

        <Divider />

        {/* 3. ALL FILMS GRID — Remaining work */}
        <FilmsGrid />

        <Divider />

        {/* 4. MINIMAL PROCESS — 3 steps, clean */}
        <MinimalProcess />

        <Divider />

        {/* 5. SERVICES — Icons only, low emphasis */}
        <CompactServices />

        <Divider />

        {/* 6. CONTACT — Simple CTA + footer */}
        <CtaFooter />
      </main>

    </div>
  );
}