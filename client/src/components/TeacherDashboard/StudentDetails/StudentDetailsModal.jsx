import React, { useState } from "react";
import {
  FaTimes,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import CourseInformation from "./CourseInformation";
import Progress from "./Progress";
import Attendance from "./Attendance";
import Requests from "./Requests";
import ContactDetails from "./ContactDetails";

const StudentDetailsModal = ({ student, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('course');

  if (!isOpen || !student) return null;

  const tabs = [
    { id: 'course', label: 'Course Information' },
    { id: 'progress', label: 'Progress' },
    { id: 'attendance', label: 'Attendance' },
    { id: 'requests', label: 'Requests' },
    { id: 'contact', label: 'Contact Details' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'course':
        return <CourseInformation student={student} />;
      case 'progress':
        return <Progress student={student} />;
      case 'attendance':
        return <Attendance student={student} />;
      case 'requests':
        return <Requests student={student} />;
      case 'contact':
        return <ContactDetails student={student} />;
      default:
        return <CourseInformation student={student} />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 mt-5">
      <div className="bg-white rounded-lg shadow-xl max-w-5xl w-full max-h-[85vh] overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="bg-linear-to-r from-blue-500 to-blue-600 text-white py-4 px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-blue-600 font-bold text-xl">
                {student.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <h2 className="text-xl font-bold">
                  {student.name}
                </h2>
                <p className="text-blue-100 text-sm">
                  <span className="font-semibold">{student.course}</span> | {student.enrollmentNo}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg font-semibold text-sm ${
                  student.status === "ongoing"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-emerald-100 text-emerald-700"
                }`}
              >
                {student.status === "ongoing" ? (
                  <FaClock className="w-3 h-3" />
                ) : (
                  <FaCheckCircle className="w-3 h-3" />
                )}
                {student.status === "ongoing" ? "Ongoing" : "Completed"}
              </span>
              <span
                className={`inline-block px-3 py-1.5 rounded-lg font-semibold text-sm ${
                  student.attendance >= 90
                    ? "bg-emerald-100 text-emerald-700"
                    : student.attendance >= 75
                    ? "bg-amber-100 text-amber-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {student.attendance}%
              </span>
              <button
                onClick={onClose}
                className="text-white hover:bg-white hover:text-red-500 hover:bg-opacity-20 rounded-full p-2 transition-colors"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white border-b border-slate-200">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default StudentDetailsModal;
