import React, { useState, useRef, useEffect } from "react";
import { HiChevronDown } from "react-icons/hi";
import { FiLogOut, FiUser, FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const TeacherHeader = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const teacher = {
    name: "Dr. Sarah Johnson",
    designation: "Assistant Professor",
    avatar: "https://i.pravatar.cc/150?img=47",
    teacherId: "TCH2025-042",
    email: "sarah.johnson@ricr.in",
    phone: "+91 98765 43210",
    department: "Computer Science",
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  const handleLogout = () => {
    // Add logout logic here
    console.log("Logging out...");
    navigate("/login");
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-6">
      {/* Greeting */}
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-bold text-slate-800">
          {getGreeting()}, {teacher.name.split(" ")[1]}{" "}
          <span className="text-xl">👋</span>
        </h2>
      </div>

      {/* Divider */}
      <div className="h-8 border-l border-gray-300" />

      {/* Profile with Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <div
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
        >
          <img
            src={teacher.avatar}
            alt={teacher.name}
            className="h-10 w-10 rounded-full object-cover border-2 border-blue-200 shadow-sm"
          />
          <div className="hidden md:block text-left">
            <div className="text-sm font-semibold text-slate-800">
              {teacher.name}
            </div>
            <div className="text-xs text-slate-500">{teacher.designation}</div>
          </div>
          <HiChevronDown
            className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
              showDropdown ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Dropdown Menu */}
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
            {/* Profile Info */}
            <div className="px-4 py-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <img
                  src={teacher.avatar}
                  alt={teacher.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-slate-800">
                    {teacher.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {teacher.teacherId}
                  </div>
                </div>
              </div>
              <div className="mt-2 text-xs text-slate-600">
                <div>{teacher.email}</div>
                <div>{teacher.department}</div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="py-1">
              <button
                onClick={() => {
                  setShowDropdown(false);
                  // Navigate to profile
                }}
                className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3 transition-colors"
              >
                <FiUser className="w-4 h-4" />
                View Profile
              </button>
              <button
                onClick={() => {
                  setShowDropdown(false);
                  // Navigate to settings
                }}
                className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3 transition-colors"
              >
                <FiSettings className="w-4 h-4" />
                Settings
              </button>
            </div>

            {/* Logout */}
            <div className="border-t border-slate-100 py-1">
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-3 transition-colors"
              >
                <FiLogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherHeader;
