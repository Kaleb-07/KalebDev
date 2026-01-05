import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

// Pages
import Landing from "./pages/Landing/Landing";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";

function App() {
  return (
    <BrowserRouter>
      {/* Header always visible */}
      <Header />
      {/* Hero Section */}
      <Hero />

      {/* Routes */}
      <Routes>
        {/* Single-page Landing */}
        <Route path="/" element={<Landing />} />

        {/* Dynamic project detail page */}
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
