// src/components/Sidebar.jsx
import React, { useState } from "react";

import { RxDashboard } from "react-icons/rx";
import { AiOutlineStock } from "react-icons/ai";
import { BookOpen, CalendarCheck } from "lucide-react";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { BsCash } from "react-icons/bs";
import { CiGift } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";

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
    { icon: <AiOutlineStock className="h-5 w-5" />, text: "Progress Tracker" },
    {
      icon: <PiSuitcaseSimpleLight className="h-5 w-5" />,
      text: "Job & Internship",
    },
    { icon: <BsCash className="h-5 w-5" />, text: "Cashbacks" },
    { icon: <CiGift className="h-5 w-5" />, text: "Refer & Earn" },
    { icon: <LuLogOut className="h-5 w-5" />, text: "Logout" },
  ];

  return (
    <>
      <div
        className={`h-screen bg-white shadow-lg transition-all duration-300 p-2 ${
          isExpanded ? "w-64" : "w-20"
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >

        <div className="mt-8 space-y-2">
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
