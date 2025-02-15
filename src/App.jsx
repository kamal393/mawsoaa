import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Scholars from "./pages/Scholars";
import ScholarDetails from "./components/ScholarDetails"; // Correct
import Articles from "./pages/Articles"; // Gardez le nom "Articles"
import ArticleDetailPage from "./components/ArticleDetailPage.jsx"; // Nouveau nom
import Library from "./pages/Library";
import QA from "./pages/QA";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-50 text-gray-800 font-arabic">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scholars" element={<Scholars />} />
            <Route path="/scholar/:id" element={<ScholarDetails />} />
            <Route path="/library" element={<Library />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/article/:id" element={<ArticleDetailPage />} /> {/* Utilisez le nouveau nom */}
            <Route path="/qa" element={<QA />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;