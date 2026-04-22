import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import LandingPage from "./LandingPage";
import ProjectPage from "./ProjectPage";

import AIStudio from "./pages/AIStudio";

import Work from "./pages/Work";
import Process from "./pages/Process";
import Contact from "./pages/Contact";

import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* 🏠 Main Pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/ai-studio" element={<AIStudio />} />

        {/* 🔥 FIXED */}
        <Route path="/ai-studio/:slug" element={<ProjectPage />} />

        {/* 🎬 Work */}
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<ProjectPage />} />

        {/* 📄 Static */}
        <Route path="/process" element={<Process />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
              <h1 className="text-3xl">404 — Page Not Found</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}