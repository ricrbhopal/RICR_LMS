import React from "react";
import Navbar from "../components/Navbar.jsx";

import StudentDashboardPage from "./StudentDashboardPage.jsx";

const HomePage = () => {
  return (
    <>
      <div className="max-h-screen">
        <StudentDashboardPage />
      </div>
    </>
  );
};

export default HomePage;
