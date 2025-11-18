import React, { act } from "react";
import SideBar from "../components/StudentDashboard/SideBar.jsx";
import Dashboard from "../components/StudentDashboard/Dashboard.jsx";
import Courses from "../components/StudentDashboard/Courses.jsx";
import Attendence from "../components/StudentDashboard/Attendence.jsx";
import ProgressTracker from "../components/StudentDashboard/ProgressTracker.jsx";
import LearningSupport from "../components/StudentDashboard/LearningSupport.jsx";
import JobsAndInternship from "../components/StudentDashboard/JobsAndInternship.jsx";
import ReferAndEarn from "../components/StudentDashboard/ReferAndEarn.jsx";
import Cashback from "../components/StudentDashboard/Cashback.jsx";
const StudentDashboardPage = () => {
  const [active, setActive] = React.useState("Dashboard");
  return (
    <>
      <div className="flex">
        <div className="relative w-20 z-99">
          <SideBar active={active} setActive={setActive} className="absolute" />
        </div>
    
        <div className="w-full">
          {active === "Dashboard" && <Dashboard />}
          {active === "Courses" && <Courses />}
          {active === "Attendence" && <Attendence />}
          {active === "Progress Tracker" && <ProgressTracker />}
          {active === "Learning Support" && <LearningSupport />}
          {active === "Job & Internship" && <JobsAndInternship />}
          {active === "Refer & Earn" && <ReferAndEarn />}
          {active === "Cashbacks" && <Cashback />}
        </div>
      </div>
    </>
  );
};

export default StudentDashboardPage;
