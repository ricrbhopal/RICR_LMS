import React from "react";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/HomePage";
import JavaIntroductionPage from "./pages/dashboard/JavaIntroductionPage.jsx";
import JavaDSA from "./pages/dashboard/JavaDsaPage.jsx";
import MERN from "./pages/dashboard/MernPage.jsx";
import OOP from "./pages/dashboard/OopPage.jsx";
import Aptitute from "./pages/dashboard/AptitutePage.jsx"


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses/java" element={<JavaIntroductionPage />} />
          <Route path="/courses/java-dsa" element={<JavaDSA />} />
          <Route path="/courses/mern" element={<MERN />} />
          <Route path="/courses/oop" element={<OOP />} />
          <Route path="/courses/aptitute" element={<Aptitute />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
