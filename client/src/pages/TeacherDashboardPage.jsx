import React from "react";
import Sidebar from "../components/TeacherDashboard/Sidebar";
import Modules from "../components/TeacherDashboard/Modules";
import Students from "../components/TeacherDashboard/Students";

const TeacherDashboardPage = () => {
  const [active, setActive] = React.useState("Dashboard");

  return (
    <>
      <div className="flex">
        <div className="w-64 shrink-0">
          <Sidebar active={active} setActive={setActive} />
        </div>

        <div className="w-full max-h-[90vh] overflow-y-auto">
          {active === "Dashboard" && (
            <div className="p-6">
              <h1 className="text-3xl font-bold text-slate-800 mb-6">
                Teacher Dashboard
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-blue-100 border border-blue-200 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-700">24</div>
                  <div className="text-blue-600 text-sm">Total Students</div>
                </div>
                <div className="bg-emerald-100 border border-emerald-200 rounded-lg p-4">
                  <div className="text-2xl font-bold text-emerald-700">5</div>
                  <div className="text-emerald-600 text-sm">Active Courses</div>
                </div>
                <div className="bg-purple-100 border border-purple-200 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-700">12</div>
                  <div className="text-purple-600 text-sm">
                    Pending Assignments
                  </div>
                </div>
                <div className="bg-amber-100 border border-amber-200 rounded-lg p-4">
                  <div className="text-2xl font-bold text-amber-700">92%</div>
                  <div className="text-amber-600 text-sm">Avg Attendance</div>
                </div>
              </div>
            </div>
          )}
          {active === "Modules" && <Modules />}
          {active === "Students" && <Students />}
          {active === "Assignments" && (
            <div className="p-6">
              <h1 className="text-3xl font-bold text-slate-800 mb-6">
                Assignments
              </h1>
              <p className="text-slate-600">
                Assignment management coming soon...
              </p>
            </div>
          )}
          {active === "Classes" && (
            <div className="p-6">
              <h1 className="text-3xl font-bold text-slate-800 mb-6">
                Classes
              </h1>
              <p className="text-slate-600">Class scheduling coming soon...</p>
            </div>
          )}
          {active === "Support Requests" && (
            <div className="p-6">
              <h1 className="text-3xl font-bold text-slate-800 mb-6">
                Support Requests
              </h1>
              <p className="text-slate-600">
                Student support requests coming soon...
              </p>
            </div>
          )}
          {active === "Settings" && (
            <div className="p-6">
              <h1 className="text-3xl font-bold text-slate-800 mb-6">
                Settings
              </h1>
              <p className="text-slate-600">Settings panel coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TeacherDashboardPage;
