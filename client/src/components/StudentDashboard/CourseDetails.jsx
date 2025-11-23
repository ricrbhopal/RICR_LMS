import React, { useState } from "react";
import { FaBook, FaVideo, FaLaptopCode } from "react-icons/fa6";
import { FaEdit, FaInfoCircle, FaJava } from "react-icons/fa";
import { IoIosStar, IoIosLock } from "react-icons/io";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import TopicDescription from "./SubSections/TopicDescription";
import VideoModal from "./SubSections/VideoModal";
import TopicQuiz from "./SubSections/TopicQuiz";
import NotesModal from "./SubSections/NotesModal";
import InfoModal from "./SubSections/InfoModal";

const CourseDetails = ({ course, close }) => {
  const [topicDescriptionProgress, setTopicDescriptionProgress] = useState(0);

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

  const [showTopicDescription, setShowTopicDescription] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [selectedLecture, setSelectedLecture] = useState(null);

  const [openSteps, setOpenSteps] = useState(() =>
    steps.reduce((acc, s) => ((acc[s.id] = false), acc), {})
  );

  const [activeTabs, setActiveTabs] = useState(() =>
    steps.reduce((acc, s) => ((acc[s.id] = "Lecture"), acc), {})
  );

  if (showTopicDescription) {
    return (
      <TopicDescription
        onBack={() => setShowTopicDescription(false)}
        onProgressUpdate={(progress) => setTopicDescriptionProgress(progress)}
      />
    );
  }

  const openVideo = (lecture) => {
    setSelectedLecture(lecture);
    setShowVideoModal(true);
  };

  const openQuiz = (lecture) => {
    setSelectedLecture(lecture);
    setShowQuizModal(true);
  };

  const openNotes = (lecture) => {
    setSelectedLecture(lecture);
    setShowNotesModal(true);
  };

  const openInfo = (lecture) => {
    setSelectedLecture(lecture);
    setShowInfoModal(true);
  };

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
    <div className="py-3 px-3 min-h-screen">
      <div className="bg-[#caeaff] opacity-100 py-2 sticky top-0 z-40 flex items-center gap-3">
        {close && (
          <div className="px-1 py-3">
            <button onClick={close} className="">
              <IoArrowBackCircleOutline className="text-3xl text-blue-500  hover:text-blue-700" />
            </button>
          </div>
        )}
        <div className="w-full">
          <div className="flex items-center gap-4">
            <FaJava className="text-5xl text-orange-600" />
            <div className="w-full flex items-center justify-between mb-2">
              <div>
                <h1 className="text-4xl font-bold text-gray-900">
                  {course.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-h-screen overflow-y-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden my-3 mx-3 "
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
                            <button
                              onClick={() => setShowTopicDescription(true)}
                              className={`w-8 h-8 flex items-center justify-center transition-colors cursor-pointer ${
                                topicDescriptionProgress === 100
                                  ? "text-green-600 hover:text-green-700"
                                  : "hover:text-orange-600"
                              }`}
                              title="Click to view document on new Page"
                            >
                              <FaBook />
                            </button>
                          </div>

                          {/* Video */}
                          <div className="col-span-1 flex justify-center">
                            <button
                              onClick={() => openVideo(lec)}
                              className="w-8 h-8 flex items-center justify-center hover:text-purple-600 transition-colors cursor-pointer"
                              title="Click to view video (DRM Protected) in a modal can only be assecible if student submitted the Ratings"
                            >
                              <FaVideo />
                            </button>
                          </div>

                          {/* Quiz/Problem */}
                          <div className="col-span-1 flex justify-center">
                            <button
                              onClick={() => openQuiz(lec)}
                              className="w-8 h-8 flex items-center justify-center hover:text-green-600 transition-colors cursor-pointer"
                              title="Click to take quiz or solve problem on new Page"
                            >
                              <FaLaptopCode />
                            </button>
                          </div>

                          {/* Notes */}
                          <div className="col-span-1 flex justify-center">
                            <button
                              onClick={() => openNotes(lec)}
                              className="w-8 h-8 flex items-center justify-center hover:text-indigo-600 transition-colors cursor-pointer"
                              title="Click to view or add notes in a modal which can be editable and saved"
                            >
                              <FaEdit />
                            </button>
                          </div>

                          {/* Info */}
                          <div className="col-span-1 flex justify-center">
                            <button
                              onClick={() => openInfo(lec)}
                              className="w-8 h-8 flex items-center justify-center hover:text-blue-600 transition-colors cursor-pointer"
                              title="Modal with Faculty name, start & end date, Student attendance"
                            >
                              <FaInfoCircle />
                            </button>
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
      </div>

      {/* Modals */}
      {showVideoModal && selectedLecture && (
        <VideoModal
          lecture={selectedLecture}
          onClose={() => setShowVideoModal(false)}
        />
      )}

      {showQuizModal && selectedLecture && (
        <TopicQuiz
          lecture={selectedLecture}
          onClose={() => setShowQuizModal(false)}
          onRetryFromStart={() => {
            setShowQuizModal(false);
            setSelectedLecture(null);
            setShowTopicDescription(true);
          }}
        />
      )}

      {showNotesModal && selectedLecture && (
        <NotesModal
          lecture={selectedLecture}
          onClose={() => setShowNotesModal(false)}
        />
      )}

      {showInfoModal && selectedLecture && (
        <InfoModal
          lecture={selectedLecture}
          onClose={() => setShowInfoModal(false)}
        />
      )}
    </div>
  );
};

export default CourseDetails;
