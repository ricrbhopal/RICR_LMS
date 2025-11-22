import React, { useMemo, useState } from "react";

const Attendence = () => {
  const [selectedDate, setSelectedDate] = useState(() => {
    const y = new Date().getFullYear();
    return `${y}-01-16`;
  });

  const [showTopicModal, setShowTopicModal] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");

  // demo stats
  const totalStudents = 550;
  const totalTeachers = 20;

  // demo monthly attendance overview (6 months)
  const months = ["Apr", "May", "Jun", "Jul", "Aug", "Sep"];

  // --- month selector state (last 6 months) ---
  const now = new Date();
  const last6Months = Array.from({ length: 6 }).map((_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - (5 - i), 1);
    const label = d.toLocaleString(undefined, {
      month: "short",
      year: "numeric",
    });
    const iso = d.toISOString().slice(0, 7); // YYYY-MM
    return { label, iso };
  });

  // last 12 months (for dropdown under graph)
  const last12Months = Array.from({ length: 12 }).map((_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - (11 - i), 1);
    const label = d.toLocaleString(undefined, {
      month: "short",
      year: "numeric",
    });
    const iso = d.toISOString().slice(0, 7); // YYYY-MM
    return { label, iso };
  });

  const [selectedMonth, setSelectedMonth] = useState(
    last12Months[last12Months.length - 1].iso
  );

  // Course data with start dates, end dates, class schedules, and topics for each date
  const courseData = {
    Java: {
      startDate: "2025-01-16",
      endDate: "2025-03-18",
      classDays: [1, 3, 5], // Monday, Wednesday, Friday
      topics: {
        "2025-01-16": "Introduction to Java Programming",
        "2025-01-17": "Variables and Data Types",
        "2025-01-18": "Variables and Data Types",
        "2025-01-19": "Variables and Data Types",
        "2025-01-20": "Operators and Expressions",
        "2025-01-21": "Variables and Data Types",
        "2025-01-22": "Control Statements - If-Else",
        "2025-01-23": "Variables and Data Types",
        "2025-01-24": "Loops - For, While, Do-While",
        "2025-01-25": "Variables and Data Types",
        "2025-01-26": "Variables and Data Types",
        "2025-01-27": "Arrays and Strings",
        "2025-01-28": "Variables and Data Types",
        "2025-01-29": "Methods and Functions",
        "2025-01-30": "Variables and Data Types",
        "2025-01-31": "Object-Oriented Programming Basics",
        "2025-02-01": "Classes and Objects",
        "2025-02-02": "Classes and Objects",
        "2025-02-03": "Classes and Objects",
        "2025-02-04": "Classes and Objects",
        "2025-02-05": "Inheritance and Polymorphism",
        "2025-02-06": "Classes and Objects",
        "2025-02-07": "Abstraction and Interfaces",
        "2025-02-08": "Classes and Objects",
        "2025-02-09": "Classes and Objects",
        "2025-02-10": "Exception Handling",
        "2025-02-11": "Classes and Objects",
        "2025-02-12": "Collections Framework",
        "2025-02-13": "Classes and Objects",
        "2025-02-14": "ArrayList and LinkedList",
        "2025-02-15": "Classes and Objects",
        "2025-02-16": "Classes and Objects",
        "2025-02-17": "HashMap and HashSet",
        "2025-02-18": "Classes and Objects",
        "2025-02-19": "File Handling",
        "2025-02-20": "Classes and Objects",
        "2025-02-21": "Multithreading Basics",
        "2025-02-22": "Classes and Objects",
        "2025-02-23": "Classes and Objects",
        "2025-02-24": "Classes and Objects",
        "2025-02-25": "JDBC and Database Connectivity",
        "2025-02-26": "Java 8 Features - Lambda",
        "2025-02-27": "Java 8 Features - Streams",
        "2025-02-28": "Final Project Discussion",
      },
      records: [
        { dateISO: "2025-01-16", status: "Present" },
        { dateISO: "2025-01-17", status: "Present" },
        { dateISO: "2025-01-20", status: "Present" },
        { dateISO: "2025-01-22", status: "Absent" },
        { dateISO: "2025-01-24", status: "Present" },
        { dateISO: "2025-01-27", status: "Present" },
        { dateISO: "2025-01-29", status: "Leave" },
        { dateISO: "2025-01-31", status: "Present" },
        { dateISO: "2025-02-03", status: "Present" },
        { dateISO: "2025-02-05", status: "Present" },
        { dateISO: "2025-02-07", status: "Present" },
        { dateISO: "2025-02-10", status: "Absent" },
        { dateISO: "2025-02-12", status: "Present" },
        { dateISO: "2025-02-14", status: "Present" },
        { dateISO: "2025-02-17", status: "Present" },
        { dateISO: "2025-02-19", status: "Present" },
        { dateISO: "2025-02-21", status: "Leave" },
        { dateISO: "2025-02-24", status: "Present" },
        { dateISO: "2025-02-26", status: "Present" },
        { dateISO: "2025-02-28", status: "Present" },
      ],
    },
    "Java + DSA": {
      startDate: "2025-03-25",
      endDate: "2025-05-25",
      classDays: [0, 2, 4], // Sunday, Tuesday, Thursday
      topics: {
        "2025-03-25": "Introduction to Data Structures",
        "2025-03-27": "Arrays and Array Operations",
        "2025-03-30": "Time and Space Complexity",
        "2025-04-01": "Linked Lists - Singly Linked",
        "2025-04-03": "Doubly Linked Lists",
        "2025-04-06": "Stacks and Applications",
        "2025-04-08": "Queues and Circular Queues",
        "2025-04-10": "Trees - Binary Trees",
        "2025-04-13": "Binary Search Trees",
        "2025-04-15": "Tree Traversal Methods",
        "2025-04-17": "Graphs - Representation",
        "2025-04-20": "Graph Traversal - BFS & DFS",
        "2025-04-22": "Sorting Algorithms - Bubble Sort",
        "2025-04-24": "Quick Sort and Merge Sort",
        "2025-05-01": "Searching Algorithms",
        "2025-05-06": "Dynamic Programming Basics",
        "2025-05-13": "Greedy Algorithms",
        "2025-05-20": "Backtracking Problems",
        "2025-05-25": "Final DSA Project",
      },
      records: [
        { dateISO: "2025-03-25", status: "Present" },
        { dateISO: "2025-03-27", status: "Present" },
        { dateISO: "2025-03-30", status: "Present" },
        { dateISO: "2025-04-01", status: "Absent" },
        { dateISO: "2025-04-03", status: "Present" },
        { dateISO: "2025-04-06", status: "Present" },
        { dateISO: "2025-04-08", status: "Present" },
        { dateISO: "2025-04-10", status: "Leave" },
        { dateISO: "2025-04-13", status: "Present" },
        { dateISO: "2025-04-15", status: "Present" },
        { dateISO: "2025-04-17", status: "Present" },
        { dateISO: "2025-04-20", status: "Present" },
        { dateISO: "2025-04-22", status: "Absent" },
        { dateISO: "2025-04-24", status: "Present" },
        { dateISO: "2025-05-01", status: "Present" },
        { dateISO: "2025-05-06", status: "Present" },
        { dateISO: "2025-05-13", status: "Leave" },
        { dateISO: "2025-05-20", status: "Present" },
        { dateISO: "2025-05-25", status: "Present" },
      ],
    },
    MERN: {
      startDate: "2025-05-27",
      endDate: "2025-07-27",
      classDays: [1, 3, 5], // Monday, Wednesday, Friday
      topics: {
        "2025-05-27": "Introduction to MERN Stack",
        "2025-05-29": "HTML5 and CSS3 Fundamentals",
        "2025-06-02": "JavaScript ES6+ Features",
        "2025-06-04": "React Basics and Components",
        "2025-06-09": "React Hooks - useState & useEffect",
        "2025-06-11": "React Router and Navigation",
        "2025-06-16": "Node.js and Express.js Setup",
        "2025-06-18": "RESTful API Development",
        "2025-06-23": "MongoDB and Mongoose",
        "2025-06-25": "Authentication with JWT",
        "2025-06-30": "State Management with Context API",
        "2025-07-02": "Redux for State Management",
        "2025-07-07": "Building Full Stack Applications",
        "2025-07-09": "Deployment Strategies",
        "2025-07-14": "Testing React Applications",
        "2025-07-16": "Performance Optimization",
        "2025-07-21": "Final Project Development",
        "2025-07-23": "Project Presentation",
        "2025-07-27": "Career Guidance and Next Steps",
      },
      records: [
        { dateISO: "2025-05-27", status: "Present" },
        { dateISO: "2025-05-29", status: "Present" },
        { dateISO: "2025-06-02", status: "Absent" },
        { dateISO: "2025-06-04", status: "Present" },
        { dateISO: "2025-06-09", status: "Present" },
        { dateISO: "2025-06-11", status: "Present" },
        { dateISO: "2025-06-16", status: "Leave" },
        { dateISO: "2025-06-18", status: "Present" },
        { dateISO: "2025-06-23", status: "Present" },
        { dateISO: "2025-06-25", status: "Present" },
        { dateISO: "2025-06-30", status: "Present" },
        { dateISO: "2025-07-02", status: "Present" },
        { dateISO: "2025-07-07", status: "Present" },
        { dateISO: "2025-07-09", status: "Present" },
        { dateISO: "2025-07-14", status: "Present" },
        { dateISO: "2025-07-16", status: "Present" },
        { dateISO: "2025-07-21", status: "Present" },
        { dateISO: "2025-07-23", status: "Present" },
        { dateISO: "2025-07-27", status: "Present" },
      ],
    },
    Apptitude: {
      startDate: "2025-07-27",
      endDate: "2025-09-27",
      classDays: [0, 2, 4, 6], // Sunday, Tuesday, Thursday, Saturday
      topics: {
        "2025-07-27": "Quantitative Aptitude Basics",
        "2025-07-29": "Number Systems and Properties",
        "2025-08-03": "Percentage and Profit-Loss",
        "2025-08-05": "Ratio and Proportion",
        "2025-08-10": "Time, Speed and Distance",
        "2025-08-17": "Time and Work Problems",
        "2025-08-24": "Simple and Compound Interest",
        "2025-08-31": "Permutations and Combinations",
        "2025-09-07": "Probability Concepts",
        "2025-09-14": "Data Interpretation - Tables",
        "2025-09-21": "Data Interpretation - Graphs",
        "2025-09-27": "Mock Test and Analysis",
      },
      records: [
        { dateISO: "2025-07-27", status: "Present" },
        { dateISO: "2025-07-29", status: "Present" },
        { dateISO: "2025-08-03", status: "Absent" },
        { dateISO: "2025-08-05", status: "Present" },
        { dateISO: "2025-08-10", status: "Leave" },
        { dateISO: "2025-08-17", status: "Present" },
        { dateISO: "2025-08-24", status: "Present" },
        { dateISO: "2025-08-31", status: "Present" },
        { dateISO: "2025-09-07", status: "Present" },
        { dateISO: "2025-09-14", status: "Present" },
        { dateISO: "2025-09-21", status: "Present" },
        { dateISO: "2025-09-27", status: "Present" },
      ],
    },
  };

  const courseList = ["All Courses", "Java", "Java + DSA", "MERN", "Apptitude"];
  const [selectedCourse, setSelectedCourse] = useState(courseList[1]);

  // Optional per-course start markers (show 'Start' badge on calendar)
  const courseStartMarkers = {
    Java: "2025-01-16",
    "Java + DSA": "2025-03-25",
    MERN: "2025-05-27",
    Apptitude: "2025-07-27",
  };

  // Optional per-course end markers (show 'End' badge on calendar)
  const courseEndMarkers = {
    Java: "2025-03-18",
    "Java + DSA": "2025-05-25",
    MERN: "2025-07-27",
    Apptitude: "2025-09-27",
  };

  // Get course records
  const getCourseRecords = (course) => {
    if (!course || course === "All Courses") {
      return Object.values(courseData).flatMap((course) => course.records);
    }
    return courseData[course]?.records || [];
  };

  // Get course schedule info
  const getCourseSchedule = (course) => {
    if (!course || course === "All Courses") return null;
    return courseData[course];
  };

  // Get topic for a specific date and course
  const getTopicForDate = (course, dateISO) => {
    if (!course || course === "All Courses") return null;
    const schedule = getCourseSchedule(course);
    return schedule?.topics?.[dateISO] || null;
  };

  // Handle date click - show topic modal
  const handleDateClick = (dateISO) => {
    setSelectedDate(dateISO);

    if (selectedCourse && selectedCourse !== "All Courses") {
      const topic = getTopicForDate(selectedCourse, dateISO);
      if (topic) {
        setSelectedTopic(topic);
        setShowTopicModal(true);
      }
    }
  };

  // Handle course selection
  const handleCourseClick = (course) => {
    setSelectedCourse(course);

    if (course && course !== "All Courses") {
      const schedule = getCourseSchedule(course);
      if (schedule) {
        // Set view to course start date
        const startDate = new Date(schedule.startDate);
        setViewDate(new Date(startDate.getFullYear(), startDate.getMonth(), 1));
        // select the course start date as the focused date
        setSelectedDate(schedule.startDate);
        // seed calendar marks with random P/A/L for this course's range
        setCalendarMarks(
          generateMarksForRange(schedule.startDate, schedule.endDate)
        );
        setSelectedMonth(startDate.toISOString().slice(0, 7));
      }
    }
  };

  // calendar view state (allows previous/next month navigation)
  const [viewDate, setViewDate] = useState(() => {
    const t = new Date();
    // default to January of current year so calendar opens at Jan
    return new Date(t.getFullYear(), 0, 1);
  });

  const viewYear = viewDate.getFullYear();
  const viewMonth = viewDate.getMonth();

  const prevMonth = () =>
    setViewDate((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1));
  const nextMonth = () =>
    setViewDate((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1));

  // initial marks: generate random Present/Absent/Leave between Jan 16 and Mar 18 of 2025
  const generateInitialMarks = () => {
    const marks = [];
    const year = 2025;
    const start = new Date(year, 0, 16); // Jan 16 2025
    const end = new Date(year, 2, 18); // Mar 18 2025
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      const yy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const dd = String(d.getDate()).padStart(2, "0");
      const iso = `${yy}-${mm}-${dd}`;
      const r = Math.random();
      let status = "Present";
      if (r < 0.6) status = "Present";
      else if (r < 0.85) status = "Absent";
      else status = "Leave";
      // Ensure any defined course start date is always Present
      if (Object.values(courseStartMarkers).includes(iso)) {
        status = "Present";
      }
      marks.push({ dateISO: iso, status });
    }
    return marks;
  };

  // Generate random marks for an arbitrary inclusive range (iso strings YYYY-MM-DD)
  const generateMarksForRange = (startIso, endIso) => {
    const start = new Date(startIso);
    const end = new Date(endIso);
    const marks = [];
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      const yy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const dd = String(d.getDate()).padStart(2, "0");
      const iso = `${yy}-${mm}-${dd}`;
      const r = Math.random();
      let status = "Present";
      if (r < 0.6) status = "Present";
      else if (r < 0.85) status = "Absent";
      else status = "Leave";
      // ensure the start date is Present
      if (iso === startIso) status = "Present";
      marks.push({ dateISO: iso, status });
    }
    return marks;
  };

  // Generate initial marks but explicitly remove any accidental 2025-01-15 entry
  const [calendarMarks, setCalendarMarks] = useState(() =>
    generateInitialMarks().filter((m) => m.dateISO !== "2025-01-15")
  );

  const statusToClasses = (status) => {
    if (!status) return { bg: "", text: "text-gray-800" };
    const s = status.toLowerCase();
    if (s === "present") return { bg: "bg-green-100", text: "text-green-800" };
    if (s === "absent") return { bg: "bg-rose-100", text: "text-rose-800" };
    if (s === "leave") return { bg: "bg-amber-100", text: "text-amber-800" };
    if (s === "scheduled") return { bg: "bg-blue-100", text: "text-blue-800" };
    return { bg: "", text: "text-gray-800" };
  };

  const setStatusForDate = (iso, status) => {
    setCalendarMarks((marks) => {
      const idx = marks.findIndex((m) => m.dateISO === iso);
      if (!status) {
        // remove mark if exists
        if (idx === -1) return marks;
        const next = [...marks.slice(0, idx), ...marks.slice(idx + 1)];
        return next;
      }
      if (idx === -1) {
        return [...marks, { dateISO: iso, status }];
      }
      const copy = [...marks];
      copy[idx] = { ...copy[idx], status };
      return copy;
    });
  };

  const daysInMonth = useMemo(() => {
    const numDays = new Date(viewYear, viewMonth + 1, 0).getDate();
    const arr = [];
    for (let d = 1; d <= numDays; d++) {
      const yy = viewYear;
      const mm = String(viewMonth + 1).padStart(2, "0");
      const dd = String(d).padStart(2, "0");
      const iso = `${yy}-${mm}-${dd}`;
      arr.push({ day: d, iso });
    }
    return arr;
  }, [viewYear, viewMonth]);

  // Get attendance status for selected course on specific date
  const getAttendanceStatus = (iso) => {
    // Check calendar marks first, but only consider marks that belong to the selected course's date range
    const schedule =
      selectedCourse && selectedCourse !== "All Courses"
        ? getCourseSchedule(selectedCourse)
        : null;
    const mark = calendarMarks.find((m) => {
      if (m.dateISO !== iso) return false;
      if (!schedule) return true; // All Courses or no schedule -> show marks
      const d = new Date(m.dateISO);
      return (
        d >= new Date(schedule.startDate) && d <= new Date(schedule.endDate)
      );
    });
    if (mark && mark.status) return mark.status;

    // Check course records
    const rec = getCourseRecords(selectedCourse).find((r) => r.dateISO === iso);
    if (rec) return rec.status;

    // Check if this is a class day for the selected course
    if (selectedCourse && selectedCourse !== "All Courses") {
      const schedule = getCourseSchedule(selectedCourse);
      if (schedule) {
        const date = new Date(iso);
        const dayOfWeek = date.getDay();
        const courseStart = new Date(schedule.startDate);
        const courseEnd = new Date(schedule.endDate);

        // Check if date is within course duration and is a class day
        if (
          date >= courseStart &&
          date <= courseEnd &&
          schedule.classDays.includes(dayOfWeek)
        ) {
          return "Scheduled";
        }
      }
    }

    return "No record";
  };

  // Counts for a specific month
  const countsForMonth = (monthIso) => {
    const schedule =
      selectedCourse && selectedCourse !== "All Courses"
        ? getCourseSchedule(selectedCourse)
        : null;

    // Prefer calendarMarks (but only those inside the selected course schedule when a course is selected)
    const marksInMonth = calendarMarks.filter((m) => {
      if (!m.dateISO.startsWith(monthIso)) return false;
      if (!schedule) return true;
      const d = new Date(m.dateISO);
      return (
        d >= new Date(schedule.startDate) && d <= new Date(schedule.endDate)
      );
    });

    if (marksInMonth.length > 0) {
      const present = marksInMonth.filter((r) => r.status === "Present").length;
      const absent = marksInMonth.filter((r) => r.status === "Absent").length;
      const leave = marksInMonth.filter((r) => r.status === "Leave").length;
      return {
        present,
        absent,
        leave,
        scheduled: 0,
        total: marksInMonth.length,
      };
    }

    const recs = getCourseRecords(selectedCourse).filter((r) =>
      r.dateISO.startsWith(monthIso)
    );
    const present = recs.filter((r) => r.status === "Present").length;
    const absent = recs.filter((r) => r.status === "Absent").length;
    const leave = recs.filter((r) => r.status === "Leave").length;

    // Count scheduled classes
    let scheduled = 0;
    if (selectedCourse && selectedCourse !== "All Courses") {
      const schedule = getCourseSchedule(selectedCourse);
      if (schedule) {
        const [year, month] = monthIso.split("-").map(Number);
        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 0);
        const courseStart = new Date(schedule.startDate);
        const courseEnd = new Date(schedule.endDate);

        for (
          let d = new Date(startDate);
          d <= endDate;
          d.setDate(d.getDate() + 1)
        ) {
          const dayOfWeek = d.getDay();
          if (
            d >= courseStart &&
            d <= courseEnd &&
            schedule.classDays.includes(dayOfWeek)
          ) {
            scheduled++;
          }
        }
      }
    }

    return { present, absent, leave, scheduled, total: recs.length };
  };

  const monthCounts = selectedMonth
    ? countsForMonth(selectedMonth)
    : { present: 0, absent: 0, leave: 0, scheduled: 0, total: 0 };

  // Counts for selected date month
  const countsForSelectedDateMonth = selectedDate
    ? countsForMonth(selectedDate.slice(0, 7))
    : null;

  return (
    <div className="bg-green-50  w-[95%] mx-auto rounded-2xl shadow mt-5">
      <div className="p-6 mx-auto w-fit">
        {/* Topic Modal */}
        {showTopicModal && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setShowTopicModal(false)}
          >
            <div
              className="bg-white rounded-xl p-6 max-w-md w-full mx-4 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Topic Taught - {selectedDate}
                </h3>
                <button
                  onClick={() => setShowTopicModal(false)}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  ×
                </button>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">
                  Course: <span className="font-medium">{selectedCourse}</span>
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 font-medium">{selectedTopic}</p>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setShowTopicModal(false)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: big attendance overview */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold mt-2">
                  Attendance Overview
                </h3>
              </div>
            </div>

            <div className="mt-6 justify-">
              <div className="rounded-lg p-4 bg-white">
                {/* Course selector cards */}
                <div className="mb-4 flex items-center gap-3">
                  {courseList.map((c) => (
                    <button
                      key={c}
                      onClick={() => handleCourseClick(c)}
                      className={`px-3 py-2 rounded-lg border ${
                        selectedCourse === c
                          ? "bg-indigo-100 text-indigo-700 border-transparent"
                          : "bg-white text-gray-700 border-gray-200"
                      } shadow-sm`}
                    >
                      {c}
                    </button>
                  ))}
                </div>

                {/* Right sidebar: calendar + notice */}
                <div className="bg-white rounded-2xl p-6 shadow ">
                  <div className="flex items-center justify-between mb-4 ">
                    <div className="flex items-center justify-between gap-3 w-full">
                      <button
                        onClick={prevMonth}
                        aria-label="Previous month"
                        className="px-2 py-1 rounded hover:bg-gray-100"
                      >
                        {"<"}
                      </button>
                      <div className="text-sm font-semibold">
                        {viewDate.toLocaleString(undefined, {
                          month: "long",
                          year: "numeric",
                        })}
                      </div>
                      <button
                        onClick={nextMonth}
                        aria-label="Next month"
                        className="px-2 py-1 rounded hover:bg-gray-100"
                      >
                        {">"}
                      </button>
                    </div>
                  </div>

                  {/* Legend for attendance statuses */}
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-green-300 inline-block" />
                      <span className="text-xs text-gray-600">Present</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-rose-300 inline-block" />
                      <span className="text-xs text-gray-600">Absent</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-amber-300 inline-block" />
                      <span className="text-xs text-gray-600">Leave</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-xs text-center text-gray-500 mb-2">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                      (d) => (
                        <div key={d} className="py-1">
                          {d}
                        </div>
                      )
                    )}
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-sm text-center">
                    {daysInMonth.map((d) => {
                      const isSelected = selectedDate === d.iso;
                      const status = getAttendanceStatus(d.iso);
                      const classes = statusToClasses(status);
                      const statusBg = classes.bg;
                      const statusText = classes.text;

                      // Check if this date has a topic
                      const hasTopic =
                        selectedCourse &&
                        selectedCourse !== "All Courses" &&
                        getTopicForDate(selectedCourse, d.iso);

                      // determine if this date is a course start or end
                      const startCourseForDate = Object.entries(
                        courseStartMarkers
                      ).find(([c, iso]) => iso === d.iso);
                      const endCourseForDate = Object.entries(
                        courseEndMarkers
                      ).find(([c, iso]) => iso === d.iso);
                      const isStartForSelectedCourse =
                        selectedCourse &&
                        courseStartMarkers[selectedCourse] === d.iso;
                      const isEndForSelectedCourse =
                        selectedCourse &&
                        courseEndMarkers[selectedCourse] === d.iso;

                      return (
                        <div
                          key={d.iso}
                          onClick={() => handleDateClick(d.iso)}
                          className={`p-1 rounded cursor-pointer w-20 relative`}
                          title={status}
                        >
                          <div
                            className={`w-8 h-8 grid place-items-center rounded ${statusBg} ${statusText} mx-auto`}
                          >
                            {d.day}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6">
                    <div className="mt-2">
                      {selectedDate ? (
                        <div>
                          {/* month totals for the selected date's month */}
                          {countsForSelectedDateMonth && (
                            <div className="mt-4 flex gap-5 text-sm text-gray-700">
                              <div className="flex gap-5 items-center px-5 py-3 ">
                                <div className="bg-green-100 text-green-700 px-2 py-1 rounded">
                                  P: {countsForSelectedDateMonth.present}
                                </div>
                                <div className="bg-rose-100 text-rose-700 px-2 py-1 rounded">
                                  A: {countsForSelectedDateMonth.absent}
                                </div>
                                <div className="bg-amber-100 text-amber-700 px-2 py-1 rounded">
                                  L: {countsForSelectedDateMonth.leave}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="text-sm text-gray-400">
                          Click a date to see attendance status.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendence;
