import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Home from "./pages/HomePage";
import { ReferEarnProvider } from "./contexts/ReferEarnContext.jsx";

function App() {
  const [active, setActive] = React.useState("Dashboard");

  return (
    <>
      <Router>
        <ReferEarnProvider>
          <Header setActive={setActive} />

          <Routes>
            <Route
              path="/"
              element={<Home active={active} setActive={setActive} />}
            />

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
        </ReferEarnProvider>
      </Router>
    </>
  );
}

export default App;
