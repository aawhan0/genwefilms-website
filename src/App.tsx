import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import LandingPage from "./LandingPage";
import ProjectPage from "./ProjectPage";
import Connect from "./pages/Connect";
import AIStudio from "./pages/AIStudio";

import Work from "./pages/Work";
import Process from "./pages/Process";
// ❌ Contact removed

import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* 🏠 Main Pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/ai-studio" element={<AIStudio />} />

        {/* 🔥 AI Studio Projects */}
        <Route path="/ai-studio/:slug" element={<ProjectPage />} />

        {/* 🎬 Work */}
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<ProjectPage />} />

        {/* 📄 Static */}
        <Route path="/process" element={<Process />} />
        {/* ❌ Contact route removed */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/connect" element={<Connect />} />

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