import React from "react";
import "./App.css";
import Home from "./pages/HomePage";
import JavaIntroductionPage from "./components/CoursePages/JavaIntroductionPage.jsx";
import JavaDSA from "./components/CoursePages/JavaDsaPage.jsx";
import MERN from "./components/CoursePages/MernPage.jsx";
import OOP from "./components/CoursePages/OopPage.jsx";
import Aptitute from "./components/CoursePages/AptitutePage.jsx"
import DataScience from "./components/CoursePages/dataScience.jsx"


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
          <Route path="/courses/data-science" element={<DataScience />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
