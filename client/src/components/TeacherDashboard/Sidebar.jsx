import React from "react";
import { RxDashboard } from "react-icons/rx";
import {
  BookOpen,
  CalendarCheck,
  GraduationCap,
  Users,
  FileText,
  Settings,
} from "lucide-react";
import { FaRegLightbulb, FaChalkboardTeacher } from "react-icons/fa";

const Sidebar = ({ active, setActive }) => {
  const menuItems = [
    {
      icon: <RxDashboard className="h-5 w-5" />,
      text: "Dashboard",
    },
    { icon: <BookOpen className="h-5 w-5" />, text: "Modules" },
    { icon: <Users className="h-5 w-5" />, text: "Students" },
    { icon: <FileText className="h-5 w-5" />, text: "Assignments" },
    { icon: <FaChalkboardTeacher className="h-5 w-5" />, text: "Classes" },
    { icon: <FaRegLightbulb className="h-5 w-5" />, text: "Support Requests" },
  ];

  return (
    <div className="w-64 h-screen bg-white shadow-lg p-2 overflow-hidden fixed left-0 z-50">
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
  );
};

export default Sidebar;
