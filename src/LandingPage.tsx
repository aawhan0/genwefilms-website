import CtaFooter from "./components/CtaFooter";
import FeaturesChess from "./components/FeaturesChess";
import FeaturesGrid from "./components/FeaturesGrid";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SelectedWork from "./components/SelectedWork";
import StartSection from "./components/StartSection";
import WhyUs from "./components/WhyUs";

export default function LandingPage() {
  return (
    <div className="bg-black min-h-screen selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <StartSection />
        <FeaturesChess />
        <FeaturesGrid />
        <WhyUs />
        <SelectedWork />
        <CtaFooter />
      </main>
    </div>
  );
}
