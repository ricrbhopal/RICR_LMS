// src/components/Sidebar.jsx
import React, { useState } from "react";

import { RxDashboard } from "react-icons/rx";
import {
  BookOpen,
  CalendarCheck,
  GraduationCap,
  BriefcaseBusiness,
  ChartSpline,
} from "lucide-react";
import { FaRegLightbulb } from "react-icons/fa6";

const Sidebar = ({ active, setActive }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    {
      icon: <RxDashboard className="h-5 w-5" />,
      text: "Dashboard",
    },
    { icon: <BookOpen className="h-5 w-5" />, text: "Courses" },
    { icon: <CalendarCheck className="h-5 w-5" />, text: "Attendence" },
    { icon: <FaRegLightbulb className="h-5 w-5" />, text: "Learning Support" },
    { icon: <ChartSpline className="h-5 w-5" />, text: "Progress Tracker" },
    {
      icon: <BriefcaseBusiness className="h-5 w-5" />,
      text: "Job & Internship",
    },
    { icon: <GraduationCap className="h-5 w-5" />, text: "Alumni" },
  ];

  return (
    <>
      <div
        className={`h-screen bg-white shadow-lg transition-all duration-300 p-2 overflow-hidden fixed left-0 z-50 scrollbar-hide ${
          isExpanded ? "w-64" : "w-20"
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="mt-8 space-y-2 overflow-y-auto h-[calc(100vh-8rem)] scrollbar-hide">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center px-6 py-4 hover:bg-gray-200 rounded cursor-pointer gap-5 overflow-hidden text-nowrap ${
                item.text === active
                  ? "bg-blue-200 font-semibold text-blue-600"
                  : ""
              }`}
              onClick={() => setActive(item.text)}
            >
              <div>{item.icon}</div>
              <div>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
