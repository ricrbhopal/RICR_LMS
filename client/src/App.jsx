import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Headers/Header.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Home from "./pages/HomePage";
import { ReferEarnProvider } from "./contexts/ReferEarnContext.jsx";
import StudentDashboardPage from "./pages/StudentDashboardPage.jsx";
import TeacherDashboardPage from "./pages/TeacherDashboardPage.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <>
      <Router>
        <ReferEarnProvider>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/student-dashboard"
              element={<StudentDashboardPage />}
            />
            <Route
              path="/teacher-dashboard"
              element={<TeacherDashboardPage />}
            />
            <Route
              path="/login"
              element={
                <Login />
              }
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
