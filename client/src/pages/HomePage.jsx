import React from "react";
import StudentDashboardPage from "./StudentDashboardPage.jsx";

const HomePage = ({ active, setActive }) => {
  return (
    <>
      <div className="max-h-screen">
        <StudentDashboardPage active={active} setActive={setActive} />
      </div>
    </>
  );
};

export default HomePage;
