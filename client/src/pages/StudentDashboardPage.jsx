import React, { act } from "react";
import SideBar from "../components/StudentDashboard/SideBar.jsx";
import Dashboard from "../components/StudentDashboard/Dashboard.jsx";
import Courses from "../components/StudentDashboard/Courses.jsx";
import Attendence from "../components/StudentDashboard/Attendence.jsx";
import ProgressTracker from "../components/StudentDashboard/ProgressTracker.jsx";
import LearningSupport from "../components/StudentDashboard/LearningSupport.jsx";
import JobsAndInternship from "../components/StudentDashboard/JobsAndInternship.jsx";
import ReferAndEarn from "../components/StudentDashboard/ReferAndEarn.jsx";


const StudentDashboardPage = () => {
  const [active, setActive] = React.useState("Dashboard");
  const [coursesKey, setCoursesKey] = React.useState(0);

  const handleSetActive = (newActive) => {
    // If Courses is clicked, increment key to force remount
    if (newActive === "Courses") {
      setCoursesKey(prev => prev + 1);
    }
    setActive(newActive);
  };

  return (
    <>
      <div className="flex">
        <div className="w-20 shrink-0">
          <SideBar active={active} setActive={handleSetActive} />
        </div>
    
        <div className="w-full max-h-[90vh] overflow-y-auto">
          {active === "Dashboard" && <Dashboard />}
          {active === "Courses" && <Courses key={coursesKey} />}
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
