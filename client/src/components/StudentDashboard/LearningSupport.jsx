import React, { useMemo, useState, useEffect, useRef } from "react";
import { FaBook } from "react-icons/fa6";

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
  const [statusMessage, setStatusMessage] = useState(null);
  const idRef = React.useRef(1);
  const topicSelectRef = useRef(null); // Add ref at top level

  // Rating modal state
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  // Status filter state
  const [statusFilter, setStatusFilter] = useState("all");

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
      topics: ["Linked Lists - Singly Linked List", "Linked Lists - Doubly Linked List"],
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
      cancellationReason: "Student was not present at the scheduled date and time (Nov 18, 2025 at 2:00 PM). Request has been closed.",
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
    setStatusMessage(null);
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedTopics.length === 0) {
      setStatusMessage({
        type: "error",
        text: "Please add at least one topic.",
      });
      return;
    }
    if (!classType) {
      setStatusMessage({ type: "error", text: "Please select a class type." });
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

    setStatusMessage({
      type: "success",
      text: "Request submitted successfully.",
    });

    // Clear form
    setSelectedTopics([]);
    setClassType("");
    setDescription("");

    // Switch to submitted tab after 2 seconds
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

  return (
    <div className="min-h-screen py-4 px-4">
      <div className="max-w-8xl mx-auto">
        {/* Toggle Slider Header */}
        <div className="mb-4">
          <div className="flex items-center justify-center mb-4">
            <div className="relative flex items-center  bg-gray-200 rounded-full p-1 shadow-inner w-[70%]" >
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
                  
                  <span>How can we help you?</span>
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
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                  <span>View Raised Requests</span>
                  <span className={`ml-1 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                  activeTab === "submitted"
                    ? "bg-white bg-opacity-30 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}>
                    {statusCounts.all}
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Section Title */}
          <div className="text-center mb-4">
            <p className="text-sm text-gray-600">
              {activeTab === "create"
                ? "Need help with a topic? Request a Doubt or Backup class"
                : "Track and manage your learning support requests"}
            </p>
          </div>
        </div>

          {/* Tab Content */}
          {activeTab === "create" ? (
            <form onSubmit={handleSubmit} className="p-6">
              {/* 2 Column Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Class Type Selection */}
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      className="w-5 h-5 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
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
                          Schedule an extra session for a topic or chapter you missed
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Topic Selection Section */}
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <FaBook className="text-indigo-600" />
                      <label className="block text-sm font-semibold text-gray-900">
                        Select Course
                      </label>
                    </div>
                    <div className="flex justify-around gap-2 mb-3">
                      {/* Show only Completed or inprogress Courses */}

                      {Courses.map((course) => (
                        <div
                          key={course.id}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="course"
                            id={course.id}
                            value={course.id}
                            checked={selectedCourse === course.id}
                            onChange={(e) => handleCourseChange(e.target.value)}
                            disabled={course.status === "Not Started"}
                          />
                          <span
                            className={`${
                              course.status === "Not Started"
                                ? "text-gray-400"
                                : ""
                            }`}
                          >
                            {course.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-[90%] border-b-1 mx-auto my-3 text-gray-300"></div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <svg
                        className="w-5 h-5 text-indigo-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                      <label className="block text-sm font-semibold text-gray-900">
                        Select Topics
                      </label>
                      {!selectedCourse ? (
                        <span className="text-xs text-amber-600 font-medium">
                          (Select a course first)
                        </span>
                      ) : (
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Click on any lecture from the dropdown to add it. You
                          can add multiple topics.
                        </p>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <div className="relative flex-1" ref={topicSelectRef}>
                        <SearchableTopicSelect
                          topicOptions={topicOptions}
                          searchTerm={topicToAdd}
                          setSearchTerm={setTopicToAdd}
                          onPick={(value) => {
                            addTopic(value);
                          }}
                          disabled={!selectedCourse}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Selected Topics Display */}
                <div
                  className={`bg-indigo-50 rounded-xl p-5 border border-indigo-200 h-55 ${
                    (classType === "backup" || classType === "") &&"lg:col-span-2"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      className="w-5 h-5 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
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
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                          </svg>
                          No topics selected yet. Start by selecting from above.
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
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description Section */}
                {classType === "doubt" && (
                  <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 h-55">
                    <div className="flex items-center gap-2 mb-3">
                      <svg
                        className="w-5 h-5 text-indigo-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
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
                      placeholder="Explain why you need this class or what specific topics you want covered...

Example: I'm struggling with 2D arrays implementation and need more practice problems."
                    />
                  </div>
                )}

                {/* Status Message */}
                {statusMessage && (
                  <div
                    className={`lg:col-span-2 px-5 py-4 rounded-xl text-sm font-medium flex items-center gap-3 ${
                      statusMessage.type === "error"
                        ? "bg-red-50 text-red-700 border border-red-200"
                        : "bg-green-50 text-green-700 border border-green-200"
                    }`}
                  >
                    {statusMessage.type === "error" ? (
                      <svg
                        className="w-5 h-5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    <span>{statusMessage.text}</span>
                  </div>
                )}

                {/* Submit Button */}
                <div className="lg:col-span-2 flex items-center justify-between pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    Your request will be reviewed by the faculty team
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-3 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all shadow-md hover:shadow-lg"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    Submit Request
                  </button>
                </div>
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
                    <svg
                      className="w-4 h-4 mr-1.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                    All Requests
                    <span
                      className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                        statusFilter === "all"
                          ? "bg-indigo-100 text-indigo-700"
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
                    <svg
                      className="w-4 h-4 mr-1.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Pending
                    <span
                      className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                        statusFilter === "pending"
                          ? "bg-amber-100 text-amber-700"
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
                    <svg
                      className="w-4 h-4 mr-1.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Approved
                    <span
                      className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                        statusFilter === "approved"
                          ? "bg-green-100 text-green-700"
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
                    <svg
                      className="w-4 h-4 mr-1.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Completed
                    <span
                      className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                        statusFilter === "completed"
                          ? "bg-blue-100 text-blue-700"
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
                    <svg
                      className="w-4 h-4 mr-1.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Closed
                    <span
                      className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                        statusFilter === "closed"
                          ? "bg-purple-100 text-purple-700"
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
                    <svg
                      className="w-4 h-4 mr-1.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Cancelled
                    <span
                      className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                        statusFilter === "cancelled"
                          ? "bg-red-100 text-red-700"
                          : "bg-red-100"
                      }`}
                    >
                      {statusCounts.cancelled}
                    </span>
                  </button>
                </div>
              </div>

              {submittedRequests.length === 0 ? (
                <div className="text-center py-12">
                  <svg
                    className="w-16 h-16 mx-auto text-gray-400 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No Requests Yet
                  </h3>
                  <p className="text-gray-500 mb-4">
                    You haven't submitted any learning support requests.
                  </p>
                  <button
                    onClick={() => setActiveTab("create")}
                    className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
                  >
                    Create Your First Request
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredRequests.length === 0 ? (
                    <div className="text-center py-12">
                      <svg
                        className="w-16 h-16 mx-auto text-gray-400 mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        No {statusFilter === "all" ? "" : statusFilter.charAt(0).toUpperCase() + statusFilter.slice(1)} Requests
                      </h3>
                      <p className="text-gray-500 mb-4">
                        {statusFilter === "all"
                          ? "You haven't submitted any learning support requests yet."
                          : `No requests with "${statusFilter}" status found.`}
                      </p>
                      {statusFilter !== "all" && (
                        <button
                          onClick={() => setStatusFilter("all")}
                          className="inline-flex items-center px-4 py-2 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-lg hover:bg-indigo-100 transition-colors"
                        >
                          View All Requests
                        </button>
                      )}
                    </div>
                  ) : (
                    filteredRequests.map((request) => (
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
                            {new Date(request.submittedAt).toLocaleDateString()}{" "}
                            at{" "}
                            {new Date(request.submittedAt).toLocaleTimeString()}
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
                              <svg
                                className="w-3 h-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              Close Ticket
                            </button>
                          )}

                          {/* Rating Stars for Closed Requests */}
                          {request.status === "closed" && request.rating && (
                            <div className="flex items-center gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                  key={star}
                                  className={`w-4 h-4 ${
                                    star <= request.rating
                                      ? "text-yellow-400 fill-current"
                                      : "text-gray-300"
                                  }`}
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
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
                              <svg
                                className="w-4 h-4 text-green-600 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
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
                                <svg
                                  className="w-4 h-4 text-indigo-600 flex-shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={
                                      request.classMode === "online"
                                        ? "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                        : "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    }
                                  />
                                </svg>
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
                              <svg
                                className="w-4 h-4 text-blue-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
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
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                      key={star}
                                      className={`w-4 h-4 ${
                                        star <= request.rating
                                          ? "text-yellow-500 fill-current"
                                          : "text-gray-300"
                                      }`}
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                  ))}
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
                                <svg
                                  className="w-3.5 h-3.5 text-blue-600 flex-shrink-0"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
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
                              <svg
                                className="w-3.5 h-3.5 text-purple-600 flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
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
                                  <svg
                                    className="w-4 h-4 text-orange-600 shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                  </svg>
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
                                    <svg
                                      className="w-4 h-4 text-orange-600 shrink-0"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d={
                                          request.classMode === "online"
                                            ? "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                            : "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                        }
                                      />
                                    </svg>
                                    <div>
                                      <p className="text-xs font-semibold text-orange-800">
                                        {request.classMode === "online"
                                          ? "Online"
                                          : "Offline"}
                                      </p>
                                      {request.location && (
                                        <p className="text-xs text-orange-700 truncate">
                                          {request.classMode === "online" ? "Meeting Link" : request.location}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Cancellation reason */}
                            <div className="bg-red-50 border border-red-200 rounded-lg p-2 flex items-start gap-2">
                              <svg
                                className="w-4 h-4 text-red-600 mt-0.5 shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                  clipRule="evenodd"
                                />
                              </svg>
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
                  ))
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
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
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
                      <svg
                        className={`w-14 h-14 ${
                          star <= (hoverRating || rating)
                            ? "text-yellow-400 fill-current drop-shadow-lg"
                            : "text-gray-300"
                        } transition-all duration-200`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
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
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
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
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
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
                  <svg
                    className="w-4 h-4 text-indigo-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
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
                        <svg
                          className="w-3 h-3 text-gray-400 group-hover:text-indigo-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
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
