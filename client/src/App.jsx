import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Home from "./pages/HomePage";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={
              <NotFoundPage
                category="Page"
                message="The page you are looking for does not exist."
              />
            }
          />
          <Route
            path="/empty"
            element={
              <NotFoundPage
                category="Pending"
                message="You don't have any pending items."
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
