import React, { useMemo, useState, useEffect, useRef, use } from "react";
import { FaBook } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import {
  MdCheckCircle,
  MdEdit,
  MdImage,
  MdClose,
  MdSend,
  MdList,
  MdSchedule,
  MdCheckBox,
  MdCancel,
  MdVideoCall,
  MdSchool,
  MdSearch,
  MdAdd,
  MdStar,
  MdStarBorder,
  MdLock,
  MdLibraryBooks,
  MdChevronRight,
  MdCheck,
  MdPlayCircle,
  MdInsertDriveFile,
  MdPictureAsPdf,
} from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { HiClipboardList } from "react-icons/hi";
import { BiSolidCategory } from "react-icons/bi";
import NotFoundPage from "../../pages/NotFoundPage";

const LearningSupport = () => {
  const Courses = [
    { id: "java", name: "Java", status: "Completed" },
    { id: "dsa", name: "DSA", status: "In Progress" },
    { id: "web", name: "Web Development", status: "Not Started" },
    { id: "apt", name: "Aptitude", status: "Not Started" },
  ];
  // Course content with steps and lectures
  const courseData = {
    java: {
      name: "Java",
      steps: [
        {
          id: 1,
          title: "Intro",
          progress: 25,
          lectures: [
            { id: 1, title: "Introduction to Java", difficulty: "Easy" },
            { id: 2, title: "Data Types", difficulty: "Medium" },
            { id: 11, title: "Variables & Literals", difficulty: "Easy" },
            { id: 12, title: "Basic Syntax & Structure", difficulty: "Easy" },
          ],
        },
        {
          id: 2,
          title: "Conditional Statements",
          progress: 67,
          lectures: [
            { id: 3, title: "If-Else and Switch", difficulty: "Medium" },
            { id: 4, title: "Ternary Operator", difficulty: "Easy" },
            { id: 13, title: "Nested Ifs", difficulty: "Medium" },
            { id: 14, title: "Logical Operators", difficulty: "Easy" },
          ],
        },
        {
          id: 3,
          title: "Iteration Statement",
          progress: 58,
          lectures: [
            { id: 5, title: "For Loop", difficulty: "Easy" },
            { id: 6, title: "While & Do-While", difficulty: "Medium" },
            { id: 15, title: "Enhanced For / for-each", difficulty: "Easy" },
            {
              id: 16,
              title: "Loop Control (break/continue)",
              difficulty: "Easy",
            },
          ],
        },
        {
          id: 4,
          title: "Arrays",
          progress: 33,
          lectures: [
            { id: 7, title: "1D Arrays", difficulty: "Medium" },
            { id: 8, title: "2D Arrays", difficulty: "Hard" },
            {
              id: 17,
              title: "Array Utilities and Traversal",
              difficulty: "Medium",
            },
            { id: 18, title: "Sorting Arrays", difficulty: "Medium" },
          ],
        },
        {
          id: 5,
          title: "Strings",
          progress: 0,
          lectures: [
            { id: 9, title: "String Basics", difficulty: "Easy" },
            { id: 10, title: "String Methods", difficulty: "Medium" },
            {
              id: 19,
              title: "StringBuilder & StringBuffer",
              difficulty: "Medium",
            },
            { id: 20, title: "Regular Expressions", difficulty: "Hard" },
          ],
        },
      ],
    },
    dsa: {
      name: "DSA",
      steps: [
        {
          id: 1,
          title: "Introduction to DSA",
          progress: 30,
          lectures: [
            { id: 1, title: "What is DSA?", difficulty: "Easy" },
            { id: 2, title: "Time & Space Complexity", difficulty: "Medium" },
            { id: 3, title: "Big O Notation", difficulty: "Medium" },
            { id: 4, title: "Recursion Basics", difficulty: "Hard" },
          ],
        },
        {
          id: 2,
          title: "Arrays & Searching",
          progress: 50,
          lectures: [
            { id: 5, title: "Array Operations", difficulty: "Easy" },
            { id: 6, title: "Linear Search", difficulty: "Easy" },
            { id: 7, title: "Binary Search", difficulty: "Medium" },
            { id: 8, title: "Two Pointer Technique", difficulty: "Medium" },
          ],
        },
        {
          id: 3,
          title: "Sorting Algorithms",
          progress: 40,
          lectures: [
            { id: 9, title: "Bubble Sort", difficulty: "Easy" },
            { id: 10, title: "Selection Sort", difficulty: "Easy" },
            { id: 11, title: "Insertion Sort", difficulty: "Medium" },
            { id: 12, title: "Merge Sort", difficulty: "Hard" },
            { id: 13, title: "Quick Sort", difficulty: "Hard" },
          ],
        },
        {
          id: 4,
          title: "Linked Lists",
          progress: 20,
          lectures: [
            { id: 14, title: "Singly Linked List", difficulty: "Medium" },
            { id: 15, title: "Doubly Linked List", difficulty: "Medium" },
            { id: 16, title: "Circular Linked List", difficulty: "Hard" },
            { id: 17, title: "Linked List Operations", difficulty: "Medium" },
          ],
        },
        {
          id: 5,
          title: "Stacks & Queues",
          progress: 25,
          lectures: [
            { id: 18, title: "Stack Implementation", difficulty: "Easy" },
            { id: 19, title: "Queue Implementation", difficulty: "Easy" },
            { id: 20, title: "Circular Queue", difficulty: "Medium" },
            { id: 21, title: "Priority Queue", difficulty: "Hard" },
          ],
        },
      ],
    },
    web: {
      name: "Web Development",
      steps: [
        {
          id: 1,
          title: "HTML Basics",
          progress: 80,
          lectures: [
            { id: 1, title: "HTML Introduction", difficulty: "Easy" },
            { id: 2, title: "HTML Elements & Tags", difficulty: "Easy" },
            { id: 3, title: "Forms & Input", difficulty: "Medium" },
            { id: 4, title: "Semantic HTML", difficulty: "Medium" },
          ],
        },
        {
          id: 2,
          title: "CSS Fundamentals",
          progress: 60,
          lectures: [
            { id: 5, title: "CSS Selectors", difficulty: "Easy" },
            { id: 6, title: "Box Model", difficulty: "Medium" },
            { id: 7, title: "Flexbox", difficulty: "Medium" },
            { id: 8, title: "CSS Grid", difficulty: "Hard" },
            { id: 9, title: "Responsive Design", difficulty: "Medium" },
          ],
        },
        {
          id: 3,
          title: "JavaScript Basics",
          progress: 45,
          lectures: [
            { id: 10, title: "Variables & Data Types", difficulty: "Easy" },
            { id: 11, title: "Functions", difficulty: "Medium" },
            { id: 12, title: "Arrays & Objects", difficulty: "Medium" },
            { id: 13, title: "DOM Manipulation", difficulty: "Hard" },
          ],
        },
        {
          id: 4,
          title: "React Fundamentals",
          progress: 30,
          lectures: [
            { id: 14, title: "Components & Props", difficulty: "Medium" },
            { id: 15, title: "State & Hooks", difficulty: "Hard" },
            { id: 16, title: "Event Handling", difficulty: "Medium" },
            { id: 17, title: "Routing", difficulty: "Hard" },
          ],
        },
      ],
    },
    apt: {
      name: "Aptitude",
      steps: [
        {
          id: 1,
          title: "Quantitative Aptitude",
          progress: 40,
          lectures: [
            { id: 1, title: "Number System", difficulty: "Easy" },
            { id: 2, title: "Percentages", difficulty: "Easy" },
            { id: 3, title: "Profit & Loss", difficulty: "Medium" },
            { id: 4, title: "Time & Work", difficulty: "Medium" },
            { id: 5, title: "Time, Speed & Distance", difficulty: "Hard" },
          ],
        },
        {
          id: 2,
          title: "Logical Reasoning",
          progress: 35,
          lectures: [
            { id: 6, title: "Series Completion", difficulty: "Easy" },
            { id: 7, title: "Coding-Decoding", difficulty: "Medium" },
            { id: 8, title: "Blood Relations", difficulty: "Medium" },
            { id: 9, title: "Syllogism", difficulty: "Hard" },
          ],
        },
        {
          id: 3,
          title: "Verbal Ability",
          progress: 50,
          lectures: [
            { id: 10, title: "Synonyms & Antonyms", difficulty: "Easy" },
            { id: 11, title: "Sentence Correction", difficulty: "Medium" },
            { id: 12, title: "Reading Comprehension", difficulty: "Hard" },
            { id: 13, title: "Para Jumbles", difficulty: "Medium" },
          ],
        },
        {
          id: 4,
          title: "Data Interpretation",
          progress: 20,
          lectures: [
            { id: 14, title: "Tables & Charts", difficulty: "Medium" },
            { id: 15, title: "Graphs & Diagrams", difficulty: "Medium" },
            { id: 16, title: "Pie Charts", difficulty: "Easy" },
            { id: 17, title: "Mixed DI", difficulty: "Hard" },
          ],
        },
      ],
    },
  };

  const [activeTab, setActiveTab] = useState("create"); // "create" or "submitted"
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedTopics, setSelectedTopics] = useState([]); // array of {id, value, label}
  const [topicToAdd, setTopicToAdd] = useState("");
  const [classType, setClassType] = useState("");
  const [description, setDescription] = useState("");
  const [screenshots, setScreenshots] = useState([]); // array of {id, file, preview, type, name, size}
  const idRef = React.useRef(1);
  const topicSelectRef = useRef(null); // Add ref at top level

  // Rating modal state
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  // Status filter state
  const [statusFilter, setStatusFilter] = useState("all");

  // Typing effect state
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  // Text content for typing effect
  const typingTexts = {
    create: "Get instant help - Request a Doubt Session or Book a Backup Class",
    submitted: "Track and manage your learning support requests"
  };

  // Mock submitted requests data
  const [submittedRequests, setSubmittedRequests] = useState([
    {
      id: 1,
      course: "Java",
      topics: ["Intro - Introduction to Java", "Arrays - 1D Arrays"],
      classType: "doubt",
      description: "Need help understanding array initialization",
      status: "pending",
      submittedAt: "2025-11-18T10:30:00",
      updatedAt: "2025-11-18T10:30:00",
      classMode: null,
      location: null,
      rating: null,
      completedDate: null,
      closedDate: null,
    },
    {
      id: 2,
      course: "DSA",
      topics: [
        "Sorting Algorithms - Merge Sort",
        "Sorting Algorithms - Quick Sort",
      ],
      classType: "backup",
      description: "Missed the sorting algorithms class",
      status: "approved",
      submittedAt: "2025-11-17T14:20:00",
      updatedAt: "2025-11-18T09:15:00",
      scheduledDate: "2025-11-20T15:00:00",
      classMode: "online",
      location: "https://example.com/meeting-link",
      rating: null,
      completedDate: null,
      closedDate: null,
    },
    {
      id: 3,
      course: "DSA",
      topics: [
        "Sorting Algorithms - Merge Sort",
        "Sorting Algorithms - Quick Sort",
      ],
      classType: "backup",
      description: "Missed the sorting algorithms class",
      status: "approved",
      submittedAt: "2025-11-17T14:20:00",
      updatedAt: "2025-11-18T09:15:00",
      scheduledDate: "2025-11-20T15:00:00",
      classMode: "offline",
      location: "AV Lab-2",
      rating: null,
      completedDate: null,
      closedDate: null,
    },
    {
      id: 4,
      course: "DSA",
      topics: [
        "Sorting Algorithms - Merge Sort",
        "Sorting Algorithms - Quick Sort",
      ],
      classType: "backup",
      description: "Missed the sorting algorithms class",
      status: "completed",
      submittedAt: "2025-11-17T14:20:00",
      updatedAt: "2025-11-18T09:15:00",
      scheduledDate: "2025-11-20T15:00:00",
      classMode: "online",
      location: "https://example.com/meeting-link",
      rating: null,
      completedDate: "2025-11-20T16:00:00",
      closedDate: null,
    },
    {
      id: 5,
      course: "Web Development",
      topics: ["React Fundamentals - State & Hooks"],
      classType: "doubt",
      description: "Confused about useEffect dependencies",
      status: "closed",
      submittedAt: "2025-11-15T11:00:00",
      updatedAt: "2025-11-16T16:30:00",
      classMode: "offline",
      location: null,
      rating: 5,
      completedDate: "2025-11-20T16:00:00",
      closedDate: "2025-11-21T10:00:00",
    },
    {
      id: 6,
      course: "DSA",
      topics: [
        "Linked Lists - Singly Linked List",
        "Linked Lists - Doubly Linked List",
      ],
      classType: "doubt",
      description: "Need clarification on pointer operations in linked lists",
      status: "cancelled",
      submittedAt: "2025-11-16T13:30:00",
      updatedAt: "2025-11-18T10:45:00",
      scheduledDate: "2025-11-18T14:00:00",
      classMode: "online",
      location: "https://example.com/meeting-link",
      rating: null,
      completedDate: null,
      closedDate: null,
      cancellationReason:
        "Student was not present at the scheduled date and time (Nov 18, 2025 at 2:00 PM). Request has been closed.",
    },
  ]);

  // Build topic options based on selected course
  const topicOptions = useMemo(() => {
    if (!selectedCourse || !courseData[selectedCourse]) return [];

    const opts = [];
    const steps = courseData[selectedCourse].steps;

    steps.forEach((s) => {
      // parent-only option
      opts.push({
        value: `step-${s.id}`,
        label: s.title,
        stepId: s.id,
        lectureId: null,
      });

      // children for this step
      (s.lectures || []).forEach((l) => {
        opts.push({
          value: `${selectedCourse}::s${s.id}::l${l.id}`,
          label: `${s.title} - ${l.title}`,
          stepId: s.id,
          lectureId: l.id,
        });
      });
    });
    return opts;
  }, [selectedCourse]);

  // Calculate status counts
  const statusCounts = useMemo(() => {
    const counts = {
      all: submittedRequests.length,
      pending: 0,
      approved: 0,
      completed: 0,
      closed: 0,
      cancelled: 0,
    };
    submittedRequests.forEach((req) => {
      if (counts[req.status] !== undefined) {
        counts[req.status]++;
      }
    });
    return counts;
  }, [submittedRequests]);

  // Filter requests based on status
  const filteredRequests = useMemo(() => {
    if (statusFilter === "all") return submittedRequests;
    return submittedRequests.filter((req) => req.status === statusFilter);
  }, [submittedRequests, statusFilter]);

  // Handle course change - clear all selections
  const handleCourseChange = (courseValue) => {
    setSelectedCourse(courseValue);
    setSelectedTopics([]);
    setTopicToAdd("");
  };

  const addTopic = (topicValue) => {
    if (!topicValue) return;
    const opt = topicOptions.find((o) => o.value === topicValue);
    const label = opt ? opt.label : topicValue;

    const newItem = { id: idRef.current++, value: topicValue, label };
    setSelectedTopics((s) => [...s, newItem]);
    setTopicToAdd("");
  };

  const removeTopic = (id) => {
    setSelectedTopics((s) => s.filter((t) => t.id !== id));
  };

  // Helper function to determine file type
  const getFileType = (file) => {
    const type = file.type;
    if (type.startsWith("image/")) return "image";
    if (type.startsWith("video/")) return "video";
    if (type === "application/pdf") return "pdf";
    if (type.includes("zip") || type.includes("rar") || type.includes("7z"))
      return "archive";
    return "document";
  };

  const handleScreenshotUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const fileType = getFileType(file);
      const reader = new FileReader();

      reader.onloadend = () => {
        setScreenshots((prev) => [
          ...prev,
          {
            id: Date.now() + Math.random(),
            file: file,
            preview: reader.result,
            type: fileType,
            name: file.name,
            size: file.size,
          },
        ]);
      };

      reader.readAsDataURL(file);
    });
    // Reset input
    e.target.value = "";
  };

  const removeScreenshot = (id) => {
    setScreenshots((prev) => prev.filter((s) => s.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedTopics.length === 0) {
      toast.error("Please add at least one topic.");
      return;
    }
    if (!classType) {
      toast.error("Please select a class type.");
      return;
    }

    const payload = {
      topics: selectedTopics.map((t) => ({ value: t.value, label: t.label })),
      classType,
      description,
      createdAt: new Date().toISOString(),
    };

    // For now: log payload and show success message.
    // Replace with real API call where appropriate.
    console.log("Learning support request:", payload);

    // Add to submitted requests
    const newRequest = {
      id: submittedRequests.length + 1,
      course: courseData[selectedCourse].name,
      topics: selectedTopics.map((t) => t.label),
      classType,
      description,
      status: "pending",
      submittedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setSubmittedRequests((prev) => [newRequest, ...prev]);

    toast.success("Request submitted successfully!");

    // Clear form
    setSelectedTopics([]);
    setClassType("");
    setDescription("");
    setScreenshots([]); // Switch to submitted tab after 2 seconds
    setTimeout(() => {
      setActiveTab("submitted");
      setStatusMessage(null);
    }, 2000);
  };

  const handleMarkComplete = (requestId) => {
    setSelectedRequestId(requestId);
    setShowRatingModal(true);
    setRating(0);
    setHoverRating(0);
  };

  const handleSubmitRating = () => {
    if (rating === 0) {
      alert("Please select a rating");
      return;
    }

    // Update the request with rating and mark as closed
    setSubmittedRequests((prev) =>
      prev.map((req) =>
        req.id === selectedRequestId
          ? {
              ...req,
              status: "closed",
              rating,
              closedDate: new Date().toISOString(),
            }
          : req
      )
    );

    // Close modal and reset
    setShowRatingModal(false);
    setSelectedRequestId(null);
    setRating(0);
  };

  // Handler to clear requests of the current category
  const handleClearCategory = () => {
    if (statusFilter === "all") {
      setSubmittedRequests([]);
    } else {
      setSubmittedRequests((prev) =>
        prev.filter((req) => req.status !== statusFilter)
      );
    }
  };

  useEffect(() => {
    setActiveTab("create");
  }, []);

  // Typing effect
  useEffect(() => {
    const currentText = typingTexts[activeTab];
    
    if (textIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 50); // Typing speed in milliseconds

      return () => clearTimeout(timeout);
    } else {
      // After typing is complete, wait 3 seconds then restart
      const restartTimeout = setTimeout(() => {
        setDisplayedText("");
        setTextIndex(0);
      }, 3000);
      return () => clearTimeout(restartTimeout);
    }
  }, [textIndex, activeTab, typingTexts]);

  // Reset typing effect when tab changes
  useEffect(() => {
    setDisplayedText("");
    setTextIndex(0);
  }, [activeTab]);

  return (
    <div className="bg-green-50 rounded-2xl mt-5 shadow px-6 w-[95%] mx-auto">
      <div className="min-h-screen py-4 px-4">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="max-w-8xl mx-auto">
          {/* Toggle Slider Header */}
          <div className="mb-4">
            <div className="flex items-center justify-center mb-4">
              <div className="relative flex items-center  bg-gray-200 rounded-full p-1 shadow-inner w-[70%]">
                {/* Slider Background */}
                <div
                  className={`absolute top-1 bottom-1 rounded-full bg-indigo-500 transition-all duration-300 ease-in-out ${
                    activeTab === "create" ? "left-1" : "left-[calc(50%-4px)]"
                  }`}
                  style={{ width: "calc(50% - 4px)" }}
                />

                {/* Toggle Buttons */}
                <button
                  onClick={() => setActiveTab("create")}
                  className={`relative z-10 px-6 py-2 w-full flex justify-center rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeTab === "create"
                      ? "text-white"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <IoIosAddCircle className="w-4 h-4" />
                    <span>Get Learning Support</span>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab("submitted")}
                  className={`relative z-10 px-6 py-2 w-full flex justify-center rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeTab === "submitted"
                      ? "text-white"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <HiClipboardList className="w-4 h-4" />
                    <span>View Raised Requests</span>
                    <span
                      className={`ml-1 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                        activeTab === "submitted"
                          ? "bg-white bg-opacity-30 text-indigo-600"
                          : "bg-gray-300 text-gray-700"
                      }`}
                    >
                      {statusCounts.all}
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Section Title */}
            <div className="text-center mb-4">
              <p className="text-sm text-gray-600 min-h-5">
                {displayedText}
                <span className="animate-pulse ">|</span>
              </p>
            </div>
          </div>
          {/* Tab Content */}
          {activeTab === "create" ? (
            <form onSubmit={handleSubmit} className="p-6">
              {/* Single Column Layout */}
              <div className="flex flex-col gap-6 max-w-4xl mx-auto">
                {/* Class Type Selection */}
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <BiSolidCategory className="w-5 h-5 text-indigo-600" />
                    <label className="block text-sm font-semibold text-gray-900">
                      Class Type
                    </label>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Doubt Class Card */}
                    <div
                      onClick={() => setClassType("doubt")}
                      className={`cursor-pointer rounded-lg p-4 border-2 transition-all ${
                        classType === "doubt"
                          ? "border-indigo-600 bg-indigo-50 shadow-md"
                          : "border-gray-300 bg-white hover:border-indigo-400 hover:shadow-sm"
                      }`}
                    >
                      <div className="flex flex-col items-center text-center gap-2">
                        <div
                          className={`text-3xl ${
                            classType === "doubt" ? "scale-110" : ""
                          } transition-transform`}
                        >
                          💡
                        </div>
                        <div
                          className={`font-semibold ${
                            classType === "doubt"
                              ? "text-indigo-900"
                              : "text-gray-900"
                          }`}
                        >
                          Raise a Doubt
                        </div>
                        <div className="text-xs text-gray-600">
                          Get technical help for Specific Topics
                        </div>
                      </div>
                    </div>

                    {/* Backup Class Card */}
                    <div
                      onClick={() => setClassType("backup")}
                      className={`cursor-pointer rounded-lg p-4 border-2 transition-all ${
                        classType === "backup"
                          ? "border-indigo-600 bg-indigo-50 shadow-md"
                          : "border-gray-300 bg-white hover:border-indigo-400 hover:shadow-sm"
                      }`}
                    >
                      <div className="flex flex-col items-center text-center gap-2">
                        <div
                          className={`text-3xl ${
                            classType === "backup" ? "scale-110" : ""
                          } transition-transform`}
                        >
                          📚
                        </div>
                        <div
                          className={`font-semibold ${
                            classType === "backup"
                              ? "text-indigo-900"
                              : "text-gray-900"
                          }`}
                        >
                          Request Backup Class
                        </div>
                        <div className="text-xs text-gray-600">
                          Schedule an extra session for a topic or chapter you
                          missed
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Selection - Show only if class type is selected */}
                {classType && (
                  <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                      <FaBook className="text-indigo-600" />
                      <label className="block text-sm font-semibold text-gray-900">
                        Select Course
                      </label>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Courses.map((course) => (
                        <div
                          key={course.id}
                          onClick={() =>
                            course.status !== "Not Started" &&
                            handleCourseChange(course.id)
                          }
                          className={`cursor-pointer rounded-xl p-4 border-2 transition-all ${
                            course.status === "Not Started"
                              ? "border-gray-200 bg-gray-100 opacity-50 cursor-not-allowed"
                              : selectedCourse === course.id
                              ? "border-indigo-600 bg-indigo-50 shadow-md"
                              : "border-gray-300 bg-white hover:border-indigo-400 hover:shadow-sm"
                          }`}
                        >
                          <div className="flex flex-col items-center text-center gap-2">
                            <div className="text-2xl">📖</div>
                            <div
                              className={`font-semibold text-sm ${
                                selectedCourse === course.id
                                  ? "text-indigo-900"
                                  : course.status === "Not Started"
                                  ? "text-gray-400"
                                  : "text-gray-900"
                              }`}
                            >
                              {course.name}
                            </div>
                            <div
                              className={`text-xs px-2 py-0.5 rounded-full ${
                                course.status === "Completed"
                                  ? "bg-green-100 text-green-700"
                                  : course.status === "In Progress"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-gray-200 text-gray-500"
                              }`}
                            >
                              {course.status}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Topic Selection & Selected Topics Combined - Show only if course is selected */}
                {selectedCourse && (
                  <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-200">
                    {/* Topic Selection Dropdown */}
                    <div className="flex items-center gap-2 mb-3">
                      <MdSchool className="w-5 h-5 text-indigo-600" />
                      <label className="block text-sm font-semibold text-gray-900">
                        Add Topics
                      </label>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <MdSchedule className="w-4 h-4" />
                        Click to select topics from the dropdown
                      </p>
                    </div>
                    <div className="flex gap-2 mb-4">
                      <div className="relative flex-1" ref={topicSelectRef}>
                        <SearchableTopicSelect
                          topicOptions={topicOptions}
                          searchTerm={topicToAdd}
                          setSearchTerm={setTopicToAdd}
                          onPick={(value) => {
                            addTopic(value);
                          }}
                          disabled={false}
                        />
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t-2 border-indigo-300 my-4"></div>

                    {/* Selected Topics Display */}
                    <div className="flex items-center gap-2 mb-3">
                      <MdCheckBox className="w-5 h-5 text-indigo-600" />
                      <label className="block text-sm font-semibold text-gray-900">
                        Selected Topics
                        {selectedTopics.length > 0 && (
                          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700 border border-indigo-200">
                            {selectedTopics.length}
                          </span>
                        )}
                      </label>
                    </div>
                    <div className="max-h-38 overflow-y-auto scrollbar-hide">
                      <div className="flex flex-wrap gap-2 min-h-[60px]">
                        {selectedTopics.length === 0 && (
                          <div className="w-full flex items-center justify-center py-6 text-sm text-gray-400 italic">
                            <MdSchedule className="w-5 h-5 mr-2" />
                            No topics selected yet. Start by selecting from
                            above.
                          </div>
                        )}

                        {selectedTopics.map((t) => (
                          <span
                            key={t.id}
                            className="inline-flex items-center bg-white text-gray-800 px-4 py-2 rounded-lg text-xs font-medium shadow-sm border border-indigo-200 hover:shadow-md transition-shadow"
                          >
                            <span className="mr-2">{t.label}</span>
                            <button
                              type="button"
                              onClick={() => removeTopic(t.id)}
                              className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                              aria-label={`Remove ${t.label}`}
                            >
                              <MdClose className="w-3 h-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Description Section - Show only if topics are selected */}
                {classType === "doubt" && selectedTopics.length > 0 && (
                  <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="flex items-center gap-2 mb-3">
                      <MdEdit className="w-5 h-5 text-indigo-600" />
                      <label className="block text-sm font-semibold text-gray-900">
                        Describe your Doubt
                      </label>
                      <span className="text-xs text-gray-500">(Optional)</span>
                    </div>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={5}
                      className="w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                      placeholder="Example: I'm struggling with 2D arrays implementation and need more practice problems."
                    />
                    <div className="mt-3">
                      <div className="flex items-center gap-2 mb-3">
                        <MdImage className="w-5 h-5 text-indigo-600" />
                        <label className="block text-sm font-semibold text-gray-900">
                          Upload Files
                        </label>
                        <span className="text-xs text-gray-500">
                          (Optional)
                        </span>
                      </div>

                      {/* Upload Button */}
                      <div className="mb-3">
                        <label className="cursor-pointer inline-flex items-center px-4 py-2 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-lg hover:bg-indigo-100 transition-colors">
                          <MdAdd className="w-5 h-5 mr-2" />
                          Add Files
                          <input
                            type="file"
                            onChange={handleScreenshotUpload}
                            className="hidden"
                            multiple={true}
                            accept="image/*,video/*,.pdf,.zip,.rar,.7z"
                          />
                        </label>
                        <p className="text-xs text-gray-500 mt-1">
                          Upload images, videos, PDFs, or archives (Max 10MB
                          each)
                        </p>
                      </div>

                      {/* File Preview Grid */}
                      {screenshots.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                          {screenshots.map((file) => (
                            <div
                              key={file.id}
                              className="relative rounded-lg border-2 border-gray-300 overflow-hidden group bg-gray-50 hover:border-indigo-400 transition-colors"
                            >
                              {/* Preview based on file type */}
                              <div className="aspect-square w-full flex items-center justify-center">
                                {file.type === "image" && (
                                  <img
                                    src={file.preview}
                                    alt={file.name}
                                    className="w-full h-full object-cover"
                                  />
                                )}
                                {file.type === "video" && (
                                  <div className="relative w-full h-full bg-black">
                                    <video
                                      src={file.preview}
                                      className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                                      <MdPlayCircle className="w-12 h-12 text-white opacity-80" />
                                    </div>
                                  </div>
                                )}
                                {file.type === "pdf" && (
                                  <div className="flex flex-col items-center justify-center p-4">
                                    <MdPictureAsPdf className="w-16 h-16 text-red-500" />
                                    <span className="text-xs text-gray-600 mt-2 text-center truncate w-full px-2">
                                      {file.name}
                                    </span>
                                  </div>
                                )}
                                {(file.type === "archive" ||
                                  file.type === "document") && (
                                  <div className="flex flex-col items-center justify-center p-4">
                                    <MdInsertDriveFile className="w-16 h-16 text-gray-500" />
                                    <span className="text-xs text-gray-600 mt-2 text-center truncate w-full px-2">
                                      {file.name}
                                    </span>
                                  </div>
                                )}
                              </div>

                              {/* File size badge */}
                              <div className="absolute bottom-1 left-1 bg-black bg-opacity-60 text-white text-xs px-2 py-0.5 rounded">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </div>

                              {/* Remove button */}
                              <button
                                type="button"
                                onClick={() => removeScreenshot(file.id)}
                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-red-600"
                                aria-label="Remove file"
                              >
                                <MdClose className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Screenshot Upload Section */}

                {/* Submit Button - Show only if topics are selected */}
                {selectedTopics.length > 0 && (
                  <div className="pt-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-500">
                        Your request will be reviewed by the faculty team
                      </p>
                      <button
                        type="submit"
                        className="inline-flex items-center px-8 py-3 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all shadow-md hover:shadow-lg whitespace-nowrap"
                      >
                        <MdSend className="w-5 h-5 mr-2" />
                        Submit Request
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </form>
          ) : (
            /* Submitted Requests View */
            <div className="p-2">
              {/* Status Filter Buttons */}
              <div className="mb-6 p-2 ">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setStatusFilter("all")}
                    className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      statusFilter === "all"
                        ? "bg-indigo-100 text-indigo-700 border-2 border-indigo-200 shadow-sm"
                        : "bg-white text-gray-700 border border-gray-300 hover:border-indigo-300"
                    }`}
                  >
                    <MdList className="w-4 h-4 mr-1.5" />
                    All Requests
                    <span
                      className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                        statusFilter === "all"
                          ? "bg-indigo-500 text-indigo-100"
                          : "bg-gray-100"
                      }`}
                    >
                      {statusCounts.all}
                    </span>
                  </button>

                  <button
                    onClick={() => setStatusFilter("pending")}
                    className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      statusFilter === "pending"
                        ? "bg-amber-100 text-amber-700 border-2 border-amber-200 shadow-sm"
                        : "bg-white text-amber-700 border border-amber-200 hover:border-amber-300"
                    }`}
                  >
                    <MdSchedule className="w-4 h-4 mr-1.5" />
                    Pending
                    <span
                      className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                        statusFilter === "pending"
                          ? "bg-amber-500 text-amber-100"
                          : "bg-amber-100"
                      }`}
                    >
                      {statusCounts.pending}
                    </span>
                  </button>

                  <button
                    onClick={() => setStatusFilter("approved")}
                    className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      statusFilter === "approved"
                        ? "bg-green-100 text-green-700 border-2 border-green-200 shadow-sm"
                        : "bg-white text-green-700 border border-green-200 hover:border-green-300"
                    }`}
                  >
                    <MdCheckCircle className="w-4 h-4 mr-1.5" />
                    Approved
                    <span
                      className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                        statusFilter === "approved"
                          ? "bg-green-500 text-green-100"
                          : "bg-green-100"
                      }`}
                    >
                      {statusCounts.approved}
                    </span>
                  </button>

                  <button
                    onClick={() => setStatusFilter("completed")}
                    className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      statusFilter === "completed"
                        ? "bg-blue-100 text-blue-700 border-2 border-blue-200 shadow-sm"
                        : "bg-white text-blue-700 border border-blue-200 hover:border-blue-300"
                    }`}
                  >
                    <MdCheckBox className="w-4 h-4 mr-1.5" />
                    Completed
                    <span
                      className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                        statusFilter === "completed"
                          ? "bg-blue-500 text-blue-100"
                          : "bg-blue-100"
                      }`}
                    >
                      {statusCounts.completed}
                    </span>
                  </button>

                  <button
                    onClick={() => setStatusFilter("closed")}
                    className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      statusFilter === "closed"
                        ? "bg-purple-100 text-purple-700 border-2 border-purple-200 shadow-sm"
                        : "bg-white text-purple-700 border border-purple-200 hover:border-purple-300"
                    }`}
                  >
                    <MdLock className="w-4 h-4 mr-1.5" />
                    Closed
                    <span
                      className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                        statusFilter === "closed"
                          ? "bg-purple-500 text-purple-100"
                          : "bg-purple-100"
                      }`}
                    >
                      {statusCounts.closed}
                    </span>
                  </button>

                  <button
                    onClick={() => setStatusFilter("cancelled")}
                    className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      statusFilter === "cancelled"
                        ? "bg-red-100 text-red-700 border-2 border-red-200 shadow-sm"
                        : "bg-white text-red-700 border border-red-200 hover:border-red-300"
                    }`}
                  >
                    <MdCancel className="w-4 h-4 mr-1.5" />
                    Cancelled
                    <span
                      className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                        statusFilter === "cancelled"
                          ? "bg-red-500 text-red-100"
                          : "bg-red-100"
                      }`}
                    >
                      {statusCounts.cancelled}
                    </span>
                  </button>
                </div>
              </div>

              {submittedRequests.length === 0 ? (
                <NotFoundPage
                  category="All Requests"
                  message="You haven't submitted any learning support requests yet. Click 'Get Learning Support' to create your first request."
                />
              ) : (
                <div className="space-y-3">
                  {filteredRequests.length === 0 ? (
                    <NotFoundPage
                      category={statusFilter === "all" ? "All Requests" : statusFilter.charAt(0).toUpperCase() + statusFilter.slice(1) + " Requests"}
                      message={
                        statusFilter === "all"
                          ? "You haven't submitted any learning support requests yet. Start by creating a new request."
                          : statusFilter === "pending"
                          ? "No pending requests found. All your requests have been processed or you haven't created any pending requests yet."
                          : statusFilter === "approved"
                          ? "No approved requests found. Your requests are either still pending or have been completed."
                          : statusFilter === "completed"
                          ? "No completed requests found. Complete your approved classes to see them here."
                          : statusFilter === "closed"
                          ? "No closed requests found. Rate your completed classes to close them and see them here."
                          : statusFilter === "cancelled"
                          ? "No cancelled requests found. This is a good thing! Keep attending your scheduled classes."
                          : "No requests found for this category."
                      }
                    />
                  ) : (
                    <>
                    {filteredRequests.map((request) => (
                      <div
                        key={request.id}
                        className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                              <h3 className="text-base font-bold text-gray-900">
                                {request.course}
                              </h3>
                              <span
                                className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  request.classType === "doubt"
                                    ? "bg-yellow-50 text-yellow-700 border border-yellow-200"
                                    : "bg-blue-50 text-blue-700 border border-blue-200"
                                }`}
                              >
                                {request.classType === "doubt"
                                  ? "💡 Doubt"
                                  : "📚 Backup"}
                              </span>
                            </div>
                            <p className="text-xs text-gray-500">
                              Submitted on{" "}
                              {new Date(
                                request.submittedAt
                              ).toLocaleDateString()}{" "}
                              at{" "}
                              {new Date(
                                request.submittedAt
                              ).toLocaleTimeString()}
                            </p>
                          </div>
                          <div className="grid items-center gap-2">
                            <div
                              className={`px-3 py-1 rounded-lg text-xs font-medium text-center border ${
                                request.status === "pending"
                                  ? "bg-amber-50 text-amber-700 border-amber-200"
                                  : request.status === "approved"
                                  ? "bg-green-50 text-green-700 border-green-200"
                                  : request.status === "completed"
                                  ? "bg-blue-50 text-blue-700 border-blue-200"
                                  : request.status === "closed"
                                  ? "bg-purple-50 text-purple-700 border-purple-200"
                                  : request.status === "cancelled"
                                  ? "bg-red-50 text-red-700 border-red-200"
                                  : "bg-gray-50 text-gray-700 border-gray-200"
                              }`}
                            >
                              {request.status.toUpperCase()}
                            </div>

                            {/* Close Ticket Button for Completed Requests */}
                            {request.status === "completed" && (
                              <button
                                onClick={() => handleMarkComplete(request.id)}
                                className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-lg border border-green-200 hover:bg-green-100 transition-colors flex items-center gap-1"
                              >
                                <MdCheckCircle className="w-3 h-3" />
                                Close Ticket
                              </button>
                            )}

                            {/* Rating Stars for Closed Requests */}
                            {request.status === "closed" && request.rating && (
                              <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((star) =>
                                  star <= request.rating ? (
                                    <MdStar
                                      key={star}
                                      className="w-4 h-4 text-yellow-400"
                                    />
                                  ) : (
                                    <MdStarBorder
                                      key={star}
                                      className="w-4 h-4 text-gray-300"
                                    />
                                  )
                                )}
                                <span className="text-xs text-gray-600 ml-1">
                                  ({request.rating}/5)
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="mb-2">
                          <p className="text-xs font-semibold text-gray-700 mb-1.5">
                            Topics:
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {request.topics.map((topic, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded-lg text-xs font-medium border border-indigo-200"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>

                        {request.status === "approved" &&
                          request.scheduledDate && (
                            <div className="flex gap-2">
                              {/* Class Schedule */}
                              <div className="flex-1 bg-green-50 border border-green-200 rounded-lg p-2 flex items-center gap-2">
                                <MdSchedule className="w-4 h-4 text-green-600 shrink-0" />
                                <div>
                                  <p className="text-xs font-semibold text-green-800">
                                    Class Scheduled
                                  </p>
                                  <p className="text-xs text-green-700">
                                    {new Date(
                                      request.scheduledDate
                                    ).toLocaleDateString()}{" "}
                                    at{" "}
                                    {new Date(
                                      request.scheduledDate
                                    ).toLocaleTimeString()}
                                  </p>
                                </div>
                              </div>

                              {/* Class Mode */}
                              {request.classMode && (
                                <div className="flex-1 bg-indigo-50 border border-indigo-200 rounded-lg p-2 flex items-center gap-2">
                                  {request.classMode === "online" ? (
                                    <MdVideoCall className="w-4 h-4 text-indigo-600 shrink-0" />
                                  ) : (
                                    <MdSchool className="w-4 h-4 text-indigo-600 shrink-0" />
                                  )}
                                  <div>
                                    <p className="text-xs font-semibold text-indigo-800">
                                      {request.classMode === "online"
                                        ? "Online Class"
                                        : "Offline Class"}
                                    </p>
                                    {request.classMode === "online" &&
                                      request.location && (
                                        <a
                                          href={request.location}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-xs text-indigo-600 hover:text-indigo-800 underline"
                                        >
                                          Join Meeting
                                        </a>
                                      )}
                                    {request.classMode === "offline" &&
                                      request.location && (
                                        <p className="text-xs text-indigo-700">
                                          {request.location}
                                        </p>
                                      )}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}

                        {request.status === "completed" &&
                          request.completedDate && (
                            <div className="space-y-2">
                              <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 flex items-center gap-2">
                                <MdCheckCircle className="w-4 h-4 text-blue-600" />
                                <div className="flex-1">
                                  <p className="text-xs font-semibold text-blue-800">
                                    Class Completed
                                  </p>
                                  <p className="text-xs text-blue-700">
                                    Completed on{" "}
                                    {new Date(
                                      request.completedDate
                                    ).toLocaleDateString()}
                                  </p>
                                </div>
                              </div>
                              {request.rating && (
                                <div className="flex items-center justify-between bg-yellow-50 border border-yellow-200 rounded-lg p-2">
                                  <div className="flex items-center gap-1">
                                    <span className="text-xs font-semibold text-gray-700">
                                      Your Rating:
                                    </span>
                                    {[1, 2, 3, 4, 5].map((star) =>
                                      star <= request.rating ? (
                                        <MdStar
                                          key={star}
                                          className="w-4 h-4 text-yellow-500"
                                        />
                                      ) : (
                                        <MdStarBorder
                                          key={star}
                                          className="w-4 h-4 text-gray-300"
                                        />
                                      )
                                    )}
                                    <span className="text-xs text-gray-600 ml-1">
                                      ({request.rating}/5)
                                    </span>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}

                        {request.status === "closed" && request.closedDate && (
                          <div className="space-y-2">
                            <div className="grid grid-cols-2 gap-2">
                              {request.completedDate && (
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 flex items-center gap-1.5">
                                  <MdCheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                  <div>
                                    <p className="text-xs font-semibold text-blue-800">
                                      Completed on
                                    </p>
                                    <p className="text-xs text-blue-700">
                                      {new Date(
                                        request.completedDate
                                      ).toLocaleDateString()}
                                    </p>
                                  </div>
                                </div>
                              )}
                              <div className="bg-purple-50 border border-purple-200 rounded-lg p-2 flex items-center gap-1.5">
                                <MdCheckCircle className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                                <div>
                                  <p className="text-xs font-semibold text-purple-800">
                                    Closed on
                                  </p>
                                  <p className="text-xs text-purple-700">
                                    {new Date(
                                      request.closedDate
                                    ).toLocaleDateString()}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {request.status === "cancelled" &&
                          request.cancellationReason && (
                            <div className="space-y-2">
                              {/* Show scheduled class details if they exist */}
                              {request.scheduledDate && (
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-2 flex items-center gap-2">
                                    <MdSchedule className="w-4 h-4 text-orange-600 shrink-0" />
                                    <div>
                                      <p className="text-xs font-semibold text-orange-800">
                                        Was Scheduled
                                      </p>
                                      <p className="text-xs text-orange-700">
                                        {new Date(
                                          request.scheduledDate
                                        ).toLocaleDateString()}{" "}
                                        at{" "}
                                        {new Date(
                                          request.scheduledDate
                                        ).toLocaleTimeString()}
                                      </p>
                                    </div>
                                  </div>

                                  {/* Class Mode */}
                                  {request.classMode && (
                                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-2 flex items-center gap-2">
                                      {request.classMode === "online" ? (
                                        <MdVideoCall className="w-4 h-4 text-orange-600 shrink-0" />
                                      ) : (
                                        <MdSchool className="w-4 h-4 text-orange-600 shrink-0" />
                                      )}
                                      <div>
                                        <p className="text-xs font-semibold text-orange-800">
                                          {request.classMode === "online"
                                            ? "Online"
                                            : "Offline"}
                                        </p>
                                        {request.location && (
                                          <p className="text-xs text-orange-700 truncate">
                                            {request.classMode === "online"
                                              ? "Meeting Link"
                                              : request.location}
                                          </p>
                                        )}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}

                              {/* Cancellation reason */}
                              <div className="bg-red-50 border border-red-200 rounded-lg p-2 flex items-start gap-2">
                                <MdCancel className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                                <div>
                                  <p className="text-xs font-semibold text-red-800">
                                    Request Cancelled
                                  </p>
                                  <p className="text-xs text-red-700">
                                    Reason: {request.cancellationReason}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}
                      </div>
                    ))}
                    
                    {/* Check Button - For UI Testing Only */}
                    <div className="flex justify-center mt-6 pt-4 border-t border-gray-200">
                      <button
                        onClick={handleClearCategory}
                        className="px-6 py-2.5 bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-600 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                        title="Check Button - For UI Testing Only"
                      >
                        <MdCheck className="w-4 h-4" />
                        Check - Clear {statusFilter.charAt(0).toUpperCase() + statusFilter.slice(1)} Requests
                      </button>
                    </div>
                    </>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Rating Modal */}
        {showRatingModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
            <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden transform transition-all animate-slideUp">
              {/* Modal Header with Gradient */}
              <div className="bg-indigo-500 px-6 py-8 relative">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      🌟 Rate Your Experience
                    </h3>
                    <p className="text-indigo-100 text-sm">
                      Help us improve our teaching quality
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setShowRatingModal(false);
                      setSelectedRequestId(null);
                      setRating(0);
                      setFeedback("");
                    }}
                    className="text-white hover:bg-white hover:text-indigo-600 hover:bg-opacity-20 rounded-full p-2 transition-all"
                  >
                    <MdClose className="w-6 h-6" />
                  </button>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>
              </div>

              <div className="px-8 py-6">
                {/* Rating Stars */}
                <div className="mb-6">
                  <label className="block text-base font-semibold text-gray-800 mb-4 text-center">
                    How would you rate the class?
                  </label>
                  <div className="flex justify-center gap-3 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="transition-all duration-200 hover:scale-125 active:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 rounded-full"
                      >
                        <MdStar
                          className={`w-14 h-14 ${
                            star <= (hoverRating || rating)
                              ? "text-yellow-400 fill-current drop-shadow-lg"
                              : "text-gray-300"
                          } transition-all duration-200`}
                        />
                      </button>
                    ))}
                  </div>
                  {rating > 0 && (
                    <div className="text-center bg-yellow-50 border border-yellow-200 rounded-xl py-3 px-4">
                      <p className="text-lg font-bold text-gray-800">
                        {rating === 1 && "😞 Poor"}
                        {rating === 2 && "😐 Fair"}
                        {rating === 3 && "🙂 Good"}
                        {rating === 4 && "😊 Very Good"}
                        {rating === 5 && "🤩 Excellent"}
                      </p>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={handleSubmitRating}
                    disabled={rating === 0}
                    className="flex-1 px-6 py-3.5 bg-indigo-500 text-white font-semibold rounded-xl hover:bg-indigo-600 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <MdCheck className="w-5 h-5" />
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* Helper component: SearchableTopicSelect */
function SearchableTopicSelect({
  topicOptions,
  searchTerm,
  setSearchTerm,
  onPick,
  disabled,
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target))
        setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const groups = useMemo(() => {
    const map = new Map();
    (topicOptions || []).forEach((o) => {
      const sid = o.stepId ?? "root";
      if (!map.has(sid)) map.set(sid, { stepId: sid, items: [] });
      map.get(sid).items.push(o);
    });
    // convert to array and sort by stepId (numeric if possible)
    return Array.from(map.values()).sort((a, b) => {
      const na = parseInt(a.stepId, 10);
      const nb = parseInt(b.stepId, 10);
      if (Number.isNaN(na) || Number.isNaN(nb)) return 0;
      return na - nb;
    });
  }, [topicOptions]);

  const filteredGroups = useMemo(() => {
    const term = (searchTerm || "").toLowerCase().trim();
    if (!term) return groups;
    return groups
      .map((g) => {
        const items = g.items.filter((o) =>
          o.label.toLowerCase().includes(term)
        );
        return { ...g, items };
      })
      .filter((g) => g.items.length > 0);
  }, [groups, searchTerm]);

  return (
    <div className="relative" ref={wrapperRef}>
      <div className="relative">
        <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            if (disabled) return;
            setSearchTerm(e.target.value);
            setOpen(true);
          }}
          onFocus={() => !disabled && setOpen(true)}
          placeholder={
            disabled
              ? "Please select a course first..."
              : "Search topics (e.g., 'Arrays', 'For Loop')..."
          }
          className={`w-full rounded-lg border-2 bg-white pl-10 pr-4 py-3 focus:outline-none transition-all ${
            disabled
              ? "border-gray-200 text-gray-400 cursor-not-allowed bg-gray-100"
              : "border-gray-300 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          }`}
          disabled={disabled}
        />
      </div>

      {open && !disabled && filteredGroups.length > 0 && (
        <ul className="absolute z-20 left-0 right-0 mt-2 max-h-64 overflow-auto rounded-lg border-2 border-indigo-200 bg-white shadow-xl">
          {filteredGroups.map((g) => {
            // determine header label (step title) from a step-only item if present
            const stepOnly =
              g.items.find((i) => i.lectureId === null) || g.items[0];
            const headerLabel = stepOnly
              ? stepOnly.lectureId === null
                ? stepOnly.label
                : String(stepOnly.label).split(" - ")[0]
              : "";

            return (
              <li key={g.stepId} className="border-b last:border-b-0">
                <div className="px-4 py-2.5 bg-indigo-50 text-sm font-semibold text-indigo-900 cursor-default flex items-center gap-2">
                  <MdLibraryBooks className="w-4 h-4 text-indigo-600" />
                  {headerLabel}
                </div>

                <ul>
                  {g.items
                    .filter((it) => it.lectureId !== null)
                    .map((child) => (
                      <li
                        key={child.value}
                        onClick={() => {
                          onPick(child.value);
                          setSearchTerm("");
                          setOpen(false);
                        }}
                        className="pl-8 pr-4 py-2.5 text-sm hover:bg-indigo-50 cursor-pointer text-gray-700 flex items-center gap-2 transition-colors group"
                      >
                        <MdChevronRight className="w-3 h-3 text-gray-400 group-hover:text-indigo-600" />
                        <span className="group-hover:text-indigo-900 group-hover:font-medium">
                          {String(child.label).split(" - ")[1] || child.label}
                        </span>
                      </li>
                    ))}
                </ul>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default LearningSupport;
