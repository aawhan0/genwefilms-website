import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "./LandingPage";
import ProjectPage from "./ProjectPage";
import AIstudio from "./pages/AIStudio";
import Work from "./pages/Work";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import ServicePage from "./pages/ServicePage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ai-studio" element={<AIstudio />} />
        <Route path="/work" element={<Work />} />
        <Route path="/process" element={<Process />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/ai-studio/:slug" element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  );
}

