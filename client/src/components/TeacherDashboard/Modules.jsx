import React, { useState } from "react";
import { BookOpen, Calendar } from "lucide-react";
import { FaArrowRight, FaUserGraduate } from "react-icons/fa";

const Modules = () => {
  const [filter, setFilter] = useState("ongoing");

  // Sample module data
  const modulesData = [
    {
      id: 1,
      title: "WEBRAPID 02",
      students: 6,
      batch: "WEBRAPID Batch",
      progress: 90,
      status: "ongoing",
    },
    {
      id: 2,
      title: "WEB 05",
      students: 27,
      batch: "WEB Batch",
      progress: 28,
      status: "ongoing",
    },
    {
      id: 3,
      title: "WEB 04",
      students: 31,
      batch: "WEB Batch",
      progress: 29,
      status: "ongoing",
    },
    {
      id: 4,
      title: "JAVA 03",
      students: 45,
      batch: "JAVA Batch",
      progress: 100,
      status: "completed",
    },
    {
      id: 5,
      title: "DSA 01",
      students: 38,
      batch: "DSA Batch",
      progress: 100,
      status: "ongoing",
    },
    {
      id: 6,
      title: "MERN 02",
      students: 22,
      batch: "MERN Batch",
      progress: 0,
      status: "upcoming",
    },
    {
      id: 7,
      title: "PYTHON 04",
      students: 19,
      batch: "PYTHON Batch",
      progress: 0,
      status: "upcoming",
    },
    {
      id: 8,
      title: "REACT 01",
      students: 52,
      batch: "REACT Batch",
      progress: 100,
      status: "completed",
    },
  ];

  // Filter modules based on selected status
  const filteredModules = modulesData.filter(
    (module) => module.status === filter
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "ongoing":
        return "from-blue-100 to-blue-200";
      case "completed":
        return "from-emerald-100 to-emerald-200";
      case "upcoming":
        return "from-amber-100 to-amber-200";
      default:
        return "from-slate-100 to-slate-200";
    }
  };

  const getTextColor = (status) => {
    switch (status) {
      case "ongoing":
        return "text-blue-700";
      case "completed":
        return "text-emerald-700";
      case "upcoming":
        return "text-amber-700";
      default:
        return "text-slate-700";
    }
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header with Filters */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 mb-1">Modules</h1>
            <p className="text-slate-600 text-sm">
              Manage your course modules and batches
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 bg-white rounded-lg p-1 shadow-sm border border-slate-200">
            <button
              onClick={() => setFilter("ongoing")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "ongoing"
                  ? "bg-blue-500 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              Ongoing
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "completed"
                  ? "bg-emerald-500 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              Completed
            </button>
            <button
              onClick={() => setFilter("upcoming")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "upcoming"
                  ? "bg-amber-500 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              Upcoming
            </button>
          </div>
        </div>

        {/* Module Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredModules.map((module) => (
            <div
              key={module.id}
              className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              {/* Header Section with Gradient */}
              <div
                className={`bg-linear-to-r ${getStatusColor(
                  module.status
                )} p-3 relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 opacity-10">
                  <BookOpen className="w-16 h-16 transform rotate-12" />
                </div>
                <div className="relative z-10">
                  <h3
                    className={`text-lg font-bold mb-1 ${getTextColor(
                      module.status
                    )}`}
                  >
                    {module.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span
                      className={`bg-white/60 px-2 py-0.5 rounded-full text-[10px] font-semibold ${getTextColor(
                        module.status
                      )}`}
                    >
                      {module.batch}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-3">
                {/* Students Info */}
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-50 p-1.5 rounded-md">
                      <FaUserGraduate className="w-3 h-3 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-slate-800">
                        {module.students}
                      </div>
                      <div className="text-[10px] text-slate-500">Students</div>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-[11px] font-medium underline">
                    View
                  </button>
                </div>

                {/* Progress Section */}
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-medium text-slate-600">
                      Progress
                    </span>
                    <span className="text-[11px] font-bold text-slate-800">
                      {module.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                    <div
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        module.progress === 100
                          ? "bg-emerald-400"
                          : "bg-blue-400"
                      }`}
                      style={{ width: `${module.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium py-1.5 px-3 rounded-md transition-colors duration-200 flex items-center justify-center gap-1.5 text-xs">
                    Manage
                    <FaArrowRight className="w-2.5 h-2.5" />
                  </button>
                  {module.status === "ongoing" && (
                    <button
                      className="px-3 py-1.5 border border-red-200 text-red-600 hover:bg-red-50 rounded-md font-medium text-xs transition-colors disabled:text-red-200 disabled:border-red-100 disabled:cursor-not-allowed"
                      disabled={module.progress !== 100}
                    >
                      End
                    </button>
                  )}
                </div>
              </div>

              {/* Status Badge */}
              <div
                className={`px-3 py-1.5 ${
                  module.status === "ongoing"
                    ? "bg-blue-50 text-blue-600"
                    : module.status === "completed"
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-amber-50 text-amber-600"
                }`}
              >
                <div className="flex items-center gap-1.5 text-[10px] font-semibold">
                  <Calendar className="w-2.5 h-2.5" />
                  <span className="uppercase tracking-wide">
                    {module.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredModules.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-slate-700 mb-2">
              No {filter} modules found
            </h3>
            <p className="text-slate-500">
              Try selecting a different filter to see modules
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modules;
