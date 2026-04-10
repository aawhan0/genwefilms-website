import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import ProjectPage from "./ProjectPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}
