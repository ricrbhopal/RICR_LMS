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

  const tabs = [
    "Lecture",
    "Notes",
    "Resource",
    "Video",
    "Quiz/Problem",
    "Info",
    "Rating",
  ];

  const [openSteps, setOpenSteps] = useState(() =>
    steps.reduce((acc, s) => ((acc[s.id] = false), acc), {})
  );

  const [activeTabs, setActiveTabs] = useState(() =>
    steps.reduce((acc, s) => ((acc[s.id] = "Lecture"), acc), {})
  );

  const toggleOpen = (id) =>
    setOpenSteps((prev) => ({ ...prev, [id]: !prev[id] }));

  const setActiveTabFor = (id, tab) =>
    setActiveTabs((prev) => ({ ...prev, [id]: tab }));

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
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-10">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Java</h1>
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
          >
            {/* Header */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleOpen(step.id)}
                className="w-full px-6 py-2 text-left flex justify-between  items-center hover:bg-gray-50 transition-colors gap-5"
              >
                <div className="flex items-center justify-center w-full gap-2">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center ">
                    <span className="text-blue-700  font-medium text-[12px]">
                      {step.id}
                    </span>
                  </div>
                  <div className=" flex  w-full justify-between">
                    <h2 className="font-semibold  text-gray-900">
                      {step.title}
                    </h2>
                    <div className="grid grid-cols-[100px_20px] gap-2 items-center ">
                      {/* small progress bar */}
                      <div className="w-25 h-2 rounded-full bg-gray-200 overflow-hidden ">
                        <div
                          className={
                            " h-full " + getProgressColor(step.progress)
                          }
                          style={{ width: `${step.progress}%` }}
                        />
                      </div>
                      <p className="text-sm text-gray-500">{step.progress}%</p>
                    </div>
                  </div>
                </div>

                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform ${
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
              <div className="p-6">
                {/* TABLE HEADER (like screenshot) */}
                <div className="bg-white border rounded-lg overflow-hidden">
                  <div className="px-3 py-3 border-b border-gray-100">
                    <div className="grid grid-cols-12 gap-4 items-center text-sm font-medium text-gray-700">
                      <div className="col-span-6 ">Lecture</div>

                      <div className="col-span-1 text-center">Doc</div>
                      <div className="col-span-1 text-center">Video</div>
                      <div className="col-span-1 text-center">
                        Quiz / <br />
                        CodeLab
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
                        className="px-3 py-4 border-b border-gray-100 hover:bg-gray-50"
                      >
                        <div className="grid grid-cols-12 gap-4 items-center">
                          {/* Lecture column */}
                          <div className="col-span-6 flex items-center gap-4">
                            {/* lock icon circle like screenshot */}
                            <div className="w-7 h-7 flex items-center justify-center text-gray-600">
                              <IoIosLock />
                            </div>

                            <div>
                              <div className="flex items-center gap-3">
                                <span className="text-gray-500 text-sm">
                                  {lec.id}
                                </span>
                                <span className="text-gray-900">
                                  {lec.title}
                                </span>
                                <span
                                  className={`ml-2 px-2 py-0.5 rounded-full text-xs font-semibold ${getDifficultyClasses(
                                    lec.difficulty
                                  )}`}
                                >
                                  {lec.difficulty}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Doc */}
                          <div className="col-span-1 flex justify-center">
                            <div
                              className="w-8 h-8  flex items-center justify-center"
                              title="Click to view document on new Page"
                            >
                              <FaBook />
                            </div>
                          </div>

                          {/* Video */}
                          <div className="col-span-1 flex justify-center">
                            <div
                              className="w-8 h-8  flex items-center justify-center"
                              title="Click to view video (DRM Protected) in a modal can only be assecible if student submitted the Ratings"
                            >
                              <FaVideo />
                            </div>
                          </div>

                          {/* Quiz/Problem */}
                          <div className="col-span-1 flex justify-center">
                            <div
                              className="w-8 h-8  flex items-center justify-center"
                              title="Click to take quiz or solve problem on new Page"
                            >
                              <FaLaptopCode />
                            </div>
                          </div>

                          {/* Notes */}
                          <div className="col-span-1 flex justify-center">
                            <div
                              className="w-8 h-8  flex items-center justify-center"
                              title="Click to view or add notes in a modal which can be editable and saved"
                            >
                              <FaEdit />
                            </div>
                          </div>

                          {/* Info */}
                          <div className="col-span-1 flex justify-center">
                            <div
                              className="w-8 h-8  flex items-center justify-center"
                              title="Modal with Faculty name, start & end date, Student attendance"
                            >
                              <FaInfoCircle />
                            </div>
                          </div>

                          {/* Rating */}
                          <div className="col-span-1 flex justify-center">
                            <div
                              className="text-yellow-400 flex items-center me-2"
                              title="Rating will be submitted by the student and it will redirect to the related teaching faculty"
                            >
                              {/* 5 hollow stars (you can replace with interactive rating later) */}
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

                {/* temp dev */}
                <div className="mt-4 bg-blue-50 border border-blue-100 p-4 rounded-md">
                  <p>
                    Note: Make sure the entire website should be protected so
                    that no unauthorized access, copy , screenshots occurs .
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Global bottom remark */}
        <div className="mt-2 bg-white/0 text-center text-sm text-gray-500">
          {/* optional footer */}
        </div>
      </div>
    </div>
  );
};

export default CourseProgressFiveStyled;
