import CtaFooter from "./components/CtaFooter";
import FeaturedFilms from "./components/FeaturedFilms";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WhyGenwe from "./components/WhyGenwe";

const Divider = () => (
  <div className="w-full flex justify-center py-4">
    <div className="h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </div>
);

export default function LandingPage() {
  return (
    <div className="bg-black min-h-screen selection:bg-white selection:text-black relative">
      
      <Navbar />

      <main>
        {/* HERO */}
        <Hero />

        {/* FEATURED FILMS (has its own background effect) */}
        <FeaturedFilms />

        <Divider />

        {/* WHY GENWE */}
        <WhyGenwe />

        <Divider />

        {/* CTA */}
        <div id="contact">
          <CtaFooter />
        </div>
      </main>

    </div>
  );
}