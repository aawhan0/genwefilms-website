import CtaFooter from "./components/CtaFooter";
import FeaturedFilms from "./components/FeaturedFilms";
import FilmsGrid from "./components/FilmsGrid";
import Hero from "./components/Hero";
import MinimalProcess from "./components/MinimalProcess";
import CompactServices from "./components/CompactServices";
import Navbar from "./components/Navbar";
import Noise from "./components/Noise";

const Divider = () => (
  <div className="w-full flex justify-center py-4">
    <div className="h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </div>
);

export default function LandingPage() {
  return (
    <div className="bg-black min-h-screen selection:bg-white selection:text-black relative">
      
      {/* Noise overlay (optional) */}
      {/* <Noise /> */}

      <Navbar />

      <main>
        {/* 1. HERO */}
        <Hero />

        {/* 2. FEATURED FILMS */}
        <FeaturedFilms />

        <Divider />

        {/* 3. ALL FILMS */}
        <FilmsGrid />

        <Divider />

        {/* 4. SERVICES (moved up) */}
        <CompactServices />

        <Divider />

        {/* 5. PROCESS (after services) */}
        <MinimalProcess />

        <Divider />

        {/* 6. CTA + FOOTER (with contact id for scroll) */}
        <div id="contact">
          <CtaFooter />
        </div>
      </main>

    </div>
  );
}