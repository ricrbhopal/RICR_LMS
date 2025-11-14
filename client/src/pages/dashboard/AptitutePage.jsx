import React, { useState } from "react";
import { FaBook, FaVideo, FaLaptopCode } from "react-icons/fa6";
import { FaEdit, FaInfoCircle } from "react-icons/fa";
import { IoIosStar, IoIosLock } from "react-icons/io";

/**
 * CourseProgressFiveStyled.jsx
 * - 5 stacked dropdowns
 * - when expanded, shows table-like lecture list with icons, difficulty badges and star rating
 * - Tailwind CSS required
 */

const CourseProgressFiveStyled = () => {
  const steps = [
    { id: 1, title: "Intro", progress: 25 },
    { id: 2, title: "Conditional Statements", progress: 67 },
    { id: 3, title: "Iteration Statement", progress: 58 },
    { id: 4, title: "Arrays", progress: 33 },
    { id: 5, title: "Strings", progress: 0 },
  ];

  // lecture data (same for all steps here; you can make it dynamic per step)
  const lectures = [
    { id: 1, title: "Introduction to Java", difficulty: "Easy" },
    { id: 2, title: "Data Types", difficulty: "Medium" },
    { id: 3, title: "Variables", difficulty: "Easy" },
    { id: 4, title: "Operators", difficulty: "Hard" },
  ];

  const [openSteps, setOpenSteps] = useState(() =>
    steps.reduce((acc, s) => ((acc[s.id] = false), acc), {})
  );

  const toggleOpen = (id) =>
    setOpenSteps((prev) => ({ ...prev, [id]: !prev[id] }));

  const getDifficultyClasses = (difficulty) => {
    if (difficulty === "Easy") return "bg-green-100 text-green-700";
    if (difficulty === "Medium") return "bg-yellow-100 text-yellow-700";
    return "bg-red-100 text-red-700";
  };

  const getProgressColor = (progress) => {
    if (progress === 0) return "bg-gray-400";
    return "bg-green-700";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 px-3 sm:py-6 sm:px-4 lg:py-8 lg:px-6 xl:px-10">
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Aptitude</h1>
        
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
          >
            {/* Header */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleOpen(step.id)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4 w-full">
                  <div className="w-6 h-6 sm:w-5 sm:h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-medium text-xs sm:text-[12px]">
                      {step.id}
                    </span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-2 sm:gap-0">
                    <h2 className="font-semibold text-gray-900 text-sm sm:text-base">
                      {step.title}
                    </h2>
                    
                    <div className="flex items-center gap-2 sm:gap-3">
                      {/* Progress bar */}
                      <div className="w-16 sm:w-20 md:w-24 h-2 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                        <div
                          className={`h-full ${getProgressColor(step.progress)}`}
                          style={{ width: `${step.progress}%` }}
                        />
                      </div>
                      
                      <p className="text-xs sm:text-sm text-gray-500 min-w-[35px] sm:min-w-[40px]">
                        {step.progress}%
                      </p>
                    </div>
                  </div>
                </div>

                <svg
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-transform flex-shrink-0 ml-2 ${
                    openSteps[step.id] ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            {/* Expanded Content */}
            {openSteps[step.id] && (
              <div className="p-3 sm:p-4 md:p-6">
                {/* TABLE CONTAINER */}
                <div className="bg-white border rounded-lg overflow-hidden">
                  {/* TABLE HEADER - Hidden on mobile, shown on sm and above */}
                  <div className="hidden sm:block px-3 py-3 border-b border-gray-100">
                    <div className="grid grid-cols-12 gap-2 md:gap-4 items-center text-xs md:text-sm font-medium text-gray-700">
                      <div className="col-span-6">Lecture</div>
                      <div className="col-span-1 text-center">Doc</div>
                      <div className="col-span-1 text-center">Video</div>
                      <div className="col-span-1 text-center">
                        <span className="hidden md:inline">Quiz /</span>
                        <span className="hidden md:inline">CodeLab</span>
                        <span className="md:hidden">Quiz</span>
                      </div>
                      <div className="col-span-1 text-center">Notes</div>
                      <div className="col-span-1 text-center">Info</div>
                      <div className="col-span-1 text-center">Rating</div>
                    </div>
                  </div>

                  {/* LECTURE ROWS */}
                  <div>
                    {lectures.map((lec) => (
                      <div
                        key={lec.id}
                        className="px-3 py-3 sm:py-4 border-b border-gray-100 hover:bg-gray-50"
                      >
                        {/* Mobile Layout */}
                        <div className="sm:hidden">
                          {/* Lecture Info */}
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-6 h-6 flex items-center justify-center text-gray-600 flex-shrink-0 mt-0.5">
                              <IoIosLock size={16} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-gray-500 text-xs">
                                  {lec.id}
                                </span>
                                <span className="text-gray-900 text-sm font-medium truncate">
                                  {lec.title}
                                </span>
                              </div>
                              <span
                                className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getDifficultyClasses(
                                  lec.difficulty
                                )}`}
                              >
                                {lec.difficulty}
                              </span>
                            </div>
                          </div>

                          {/* Action Icons */}
                          <div className="flex justify-between items-center px-2">
                            <div className="flex flex-col items-center gap-1">
                              <div className="w-7 h-7 flex items-center justify-center text-gray-600" title="Document">
                                <FaBook size={14} />
                              </div>
                              <span className="text-xs text-gray-500">Doc</span>
                            </div>
                            
                            <div className="flex flex-col items-center gap-1">
                              <div className="w-7 h-7 flex items-center justify-center text-gray-600" title="Video">
                                <FaVideo size={14} />
                              </div>
                              <span className="text-xs text-gray-500">Video</span>
                            </div>
                            
                            <div className="flex flex-col items-center gap-1">
                              <div className="w-7 h-7 flex items-center justify-center text-gray-600" title="Quiz/CodeLab">
                                <FaLaptopCode size={14} />
                              </div>
                              <span className="text-xs text-gray-500">Quiz</span>
                            </div>
                            
                            <div className="flex flex-col items-center gap-1">
                              <div className="w-7 h-7 flex items-center justify-center text-gray-600" title="Notes">
                                <FaEdit size={14} />
                              </div>
                              <span className="text-xs text-gray-500">Notes</span>
                            </div>
                            
                            <div className="flex flex-col items-center gap-1">
                              <div className="w-7 h-7 flex items-center justify-center text-gray-600" title="Info">
                                <FaInfoCircle size={14} />
                              </div>
                              <span className="text-xs text-gray-500">Info</span>
                            </div>
                            
                            <div className="flex flex-col items-center gap-1">
                              <div className="text-yellow-400 flex items-center" title="Rating">
                                <IoIosStar size={12} />
                                <IoIosStar size={12} />
                                <IoIosStar size={12} />
                                <IoIosStar size={12} />
                                <IoIosStar size={12} />
                              </div>
                              <span className="text-xs text-gray-500">Rating</span>
                            </div>
                          </div>
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden sm:grid sm:grid-cols-12 gap-2 md:gap-4 items-center">
                          {/* Lecture column */}
                          <div className="col-span-6 flex items-center gap-3 md:gap-4">
                            <div className="w-6 h-6 flex items-center justify-center text-gray-600 flex-shrink-0">
                              <IoIosLock size={16} />
                            </div>

                            <div className="flex items-center gap-2 md:gap-3 min-w-0">
                              <span className="text-gray-500 text-sm flex-shrink-0">
                                {lec.id}
                              </span>
                              <span className="text-gray-900 truncate">
                                {lec.title}
                              </span>
                              <span
                                className={`ml-2 px-2 py-0.5 rounded-full text-xs font-semibold flex-shrink-0 ${getDifficultyClasses(
                                  lec.difficulty
                                )}`}
                              >
                                {lec.difficulty}
                              </span>
                            </div>
                          </div>

                          {/* Doc */}
                          <div className="col-span-1 flex justify-center">
                            <div
                              className="w-7 h-7 flex items-center justify-center text-gray-600"
                              title="Click to view document on new Page"
                            >
                              <FaBook size={14} />
                            </div>
                          </div>

                          {/* Video */}
                          <div className="col-span-1 flex justify-center">
                            <div
                              className="w-7 h-7 flex items-center justify-center text-gray-600"
                              title="Click to view video (DRM Protected) in a modal can only be accessible if student submitted the Ratings"
                            >
                              <FaVideo size={14} />
                            </div>
                          </div>

                          {/* Quiz/Problem */}
                          <div className="col-span-1 flex justify-center">
                            <div
                              className="w-7 h-7 flex items-center justify-center text-gray-600"
                              title="Click to take quiz or solve problem on new Page"
                            >
                              <FaLaptopCode size={14} />
                            </div>
                          </div>

                          {/* Notes */}
                          <div className="col-span-1 flex justify-center">
                            <div
                              className="w-7 h-7 flex items-center justify-center text-gray-600"
                              title="Click to view or add notes in a modal which can be editable and saved"
                            >
                              <FaEdit size={14} />
                            </div>
                          </div>

                          {/* Info */}
                          <div className="col-span-1 flex justify-center">
                            <div
                              className="w-7 h-7 flex items-center justify-center text-gray-600"
                              title="Modal with Faculty name, start & end date, Student attendance"
                            >
                              <FaInfoCircle size={14} />
                            </div>
                          </div>

                          {/* Rating */}
                          <div className="col-span-1 flex justify-center">
                            <div
                              className="text-yellow-400 flex items-center"
                              title="Rating will be submitted by the student and it will redirect to the related teaching faculty"
                            >
                              <IoIosStar size={12} />
                              <IoIosStar size={12} />
                              <IoIosStar size={12} />
                              <IoIosStar size={12} />
                              <IoIosStar size={12} />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Security Note */}
                <div className="mt-3 sm:mt-4 bg-blue-50 border border-blue-100 p-3 sm:p-4 rounded-md">
                  <p className="text-xs sm:text-sm text-blue-800">
                    Note: Make sure the entire website should be protected so
                    that no unauthorized access, copy, screenshots occurs.
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Global bottom remark */}
        <div className="mt-2 text-center text-xs sm:text-sm text-gray-500">
          {/* optional footer */}
        </div>
      </div>
    </div>
  );
};

export default CourseProgressFiveStyled;