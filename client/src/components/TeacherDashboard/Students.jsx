import React, { useState } from "react";
import {
  FaSearch,
  FaChevronDown,
  FaChevronUp,
  FaUserGraduate,
  FaCheckCircle,
  FaClock,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { HiFilter } from "react-icons/hi";

const Students = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCourse, setFilterCourse] = useState("all");
  const [showOngoing, setShowOngoing] = useState(true);
  const [showCompleted, setShowCompleted] = useState(true);

  // Sample student data
  const studentsData = [
    {
      id: 1,
      name: "Rahul Sharma",
      enrollmentNo: "RICR2025-001",
      email: "rahul.sharma@example.com",
      phone: "+91 98765 43210",
      course: "POB FSD",
      modules: ["Java 01", "DSA 01", "WEB 01"],
      attendance: 92,
      status: "ongoing",
      avatar: "https://i.pravatar.cc/100?img=12",
      github: "https://github.com/rahulsharma",
      linkedin: "https://linkedin.com/in/rahulsharma",
    },
    {
      id: 2,
      name: "Priya Patel",
      enrollmentNo: "RICR2025-002",
      email: "priya.patel@example.com",
      phone: "+91 98765 43211",
      course: "POB DS",
      modules: ["Python 01", "APM 01", "ML 01", "DL 01"],
      attendance: 88,
      status: "ongoing",
      avatar: "https://i.pravatar.cc/100?img=5",
      github: "https://github.com/priyapatel",
      linkedin: "https://linkedin.com/in/priyapatel",
    },
    {
      id: 3,
      name: "Amit Kumar",
      enrollmentNo: "RICR2025-003",
      email: "amit.kumar@example.com",
      phone: "+91 98765 43212",
      course: "POB FSD",
      modules: ["Java 01", "DSA 01", "WEB 01"],
      attendance: 95,
      status: "ongoing",
      avatar: "https://i.pravatar.cc/100?img=33",
      github: "https://github.com/amitkumar",
      linkedin: "https://linkedin.com/in/amitkumar",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      enrollmentNo: "RICR2025-004",
      email: "sneha.reddy@example.com",
      phone: "+91 98765 43213",
      course: "POB FSD",
      modules: ["Java 02", "DSA 02", "WEB 02"],
      attendance: 98,
      status: "completed",
      avatar: "https://i.pravatar.cc/100?img=9",
      github: "https://github.com/snehareddy",
      linkedin: "https://linkedin.com/in/snehareddy",
    },
    {
      id: 5,
      name: "Vikram Singh",
      enrollmentNo: "RICR2025-005",
      email: "vikram.singh@example.com",
      phone: "+91 98765 43214",
      course: "POB DS",
      modules: ["Python 01", "APM 01", "ML 01", "DL 01"],
      attendance: 90,
      status: "ongoing",
      avatar: "https://i.pravatar.cc/100?img=15",
      github: "https://github.com/vikramsingh",
      linkedin: "https://linkedin.com/in/vikramsingh",
    },
    {
      id: 6,
      name: "Anjali Verma",
      enrollmentNo: "RICR2025-006",
      email: "anjali.verma@example.com",
      phone: "+91 98765 43215",
      course: "Web Development",
      modules: ["WEB 01"],
      attendance: 96,
      status: "completed",
      avatar: "https://i.pravatar.cc/100?img=20",
      github: "https://github.com/anjaliverma",
      linkedin: "https://linkedin.com/in/anjaliverma",
    },
    {
      id: 7,
      name: "Rohan Mehta",
      enrollmentNo: "RICR2025-007",
      email: "rohan.mehta@example.com",
      phone: "+91 98765 43216",
      course: "POB FSD",
      modules: ["Java 01", "DSA 01", "WEB 01"],
      attendance: 94,
      status: "ongoing",
      avatar: "https://i.pravatar.cc/100?img=8",
      github: "https://github.com/rohanmehta",
      linkedin: "https://linkedin.com/in/rohanmehta",
    },
    {
      id: 8,
      name: "Kavya Nair",
      enrollmentNo: "RICR2025-008",
      email: "kavya.nair@example.com",
      phone: "+91 98765 43217",
      course: "POB DS",
      modules: ["Python 02", "APM 02", "ML 02", "DL 02"],
      attendance: 100,
      status: "completed",
      avatar: "https://i.pravatar.cc/100?img=25",
      github: "https://github.com/kavyanair",
      linkedin: "https://linkedin.com/in/kavyanair",
    },
    {
      id: 9,
      name: "Arjun Joshi",
      enrollmentNo: "RICR2025-009",
      email: "arjun.joshi@example.com",
      phone: "+91 98765 43218",
      course: "Web Development",
      modules: ["WEB 02"],
      attendance: 85,
      status: "ongoing",
      avatar: "https://i.pravatar.cc/100?img=17",
      github: "https://github.com/arjunjoshi",
      linkedin: "https://linkedin.com/in/arjunjoshi",
    },
    {
      id: 10,
      name: "Neha Gupta",
      enrollmentNo: "RICR2025-010",
      email: "neha.gupta@example.com",
      phone: "+91 98765 43219",
      course: "POB FSD",
      modules: ["Java 02", "DSA 02", "WEB 02"],
      attendance: 97,
      status: "completed",
      avatar: "https://i.pravatar.cc/100?img=24",
      github: "https://github.com/nehagupta",
      linkedin: "https://linkedin.com/in/nehagupta",
    },
  ];

  // Get unique courses for filters
  const courses = ["all", ...new Set(studentsData.map((s) => s.course))];

  // Filter students
  const filteredStudents = studentsData.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.enrollmentNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.course.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCourse =
      filterCourse === "all" || student.course === filterCourse;

    return matchesSearch && matchesCourse;
  });

  // Separate ongoing and completed students
  const ongoingStudents = filteredStudents.filter(
    (s) => s.status === "ongoing"
  );
  const completedStudents = filteredStudents.filter(
    (s) => s.status === "completed"
  );

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-800 mb-1">Students</h1>
          <p className="text-slate-600 text-sm">
            View and manage student enrollments
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Search */}
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-sm" />
              <input
                type="text"
                placeholder="Search by name, enrollment, email, or course..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent outline-none"
              />
            </div>

            {/* Course Filter */}
            <div className="relative">
              <HiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-sm" />
              <select
                value={filterCourse}
                onChange={(e) => setFilterCourse(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent outline-none appearance-none bg-white"
              >
                {courses.map((course) => (
                  <option key={course} value={course}>
                    {course === "all" ? "All Courses" : course}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500 p-2 rounded-lg">
                <FaUserGraduate className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-700">
                  {filteredStudents.length}
                </div>
                <div className="text-blue-600 text-xs font-medium">
                  Total Students
                </div>
              </div>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
            <div className="flex items-center gap-3">
              <div className="bg-amber-500 p-2 rounded-lg">
                <FaClock className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-700">
                  {ongoingStudents.length}
                </div>
                <div className="text-amber-600 text-xs font-medium">
                  Ongoing
                </div>
              </div>
            </div>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-500 p-2 rounded-lg">
                <FaCheckCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-700">
                  {completedStudents.length}
                </div>
                <div className="text-emerald-600 text-xs font-medium">
                  Completed
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ongoing Students Table */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 mb-4 overflow-hidden">
          <div
            onClick={() => setShowOngoing(!showOngoing)}
            className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50 transition-colors border-b border-slate-200"
          >
            <div className="flex items-center gap-3">
              <div className="bg-amber-100 p-2 rounded-lg">
                <FaClock className="w-4 h-4 text-amber-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-800">
                  Ongoing Students
                </h2>
                <p className="text-xs text-slate-500">
                  {ongoingStudents.length} students currently enrolled
                </p>
              </div>
            </div>
            {showOngoing ? (
              <FaChevronUp className="text-slate-600" />
            ) : (
              <FaChevronDown className="text-slate-600" />
            )}
          </div>

          {showOngoing && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Student
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Course
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Modules
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Attendance
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Social Links
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {ongoingStudents.map((student) => (
                    <tr
                      key={student.id}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm">
                            {student.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <div className="font-semibold text-slate-800 text-sm">
                              {student.name}
                            </div>
                            <div className="text-xs text-slate-500">
                              {student.enrollmentNo}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-block bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-medium">
                          {student.course}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-1">
                          {student.modules.map((mod, idx) => (
                            <span
                              key={idx}
                              className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                            >
                              {mod}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                            student.attendance >= 90
                              ? "bg-emerald-100 text-emerald-700"
                              : student.attendance >= 75
                              ? "bg-amber-100 text-amber-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {student.attendance}%
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="text-xs text-slate-600">
                          <div>{student.email}</div>
                          <div className="text-slate-500">{student.phone}</div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <a
                            href={student.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-600 hover:text-slate-800 transition-colors"
                          >
                            <FaGithub className="w-4 h-4" />
                          </a>
                          <a
                            href={student.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            <FaLinkedin className="w-4 h-4" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {ongoingStudents.length === 0 && (
                <div className="text-center py-8 text-slate-500 text-sm">
                  No ongoing students found
                </div>
              )}
            </div>
          )}
        </div>

        {/* Completed Students Table */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div
            onClick={() => setShowCompleted(!showCompleted)}
            className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50 transition-colors border-b border-slate-200"
          >
            <div className="flex items-center gap-3">
              <div className="bg-emerald-100 p-2 rounded-lg">
                <FaCheckCircle className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-800">
                  Completed Students
                </h2>
                <p className="text-xs text-slate-500">
                  {completedStudents.length} students completed their modules
                </p>
              </div>
            </div>
            {showCompleted ? (
              <FaChevronUp className="text-slate-600" />
            ) : (
              <FaChevronDown className="text-slate-600" />
            )}
          </div>

          {showCompleted && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Student
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Course
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Modules
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Attendance
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Social Links
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {completedStudents.map((student) => (
                    <tr
                      key={student.id}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-semibold text-sm">
                            {student.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <div className="font-semibold text-slate-800 text-sm">
                              {student.name}
                            </div>
                            <div className="text-xs text-slate-500">
                              {student.enrollmentNo}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-block bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-medium">
                          {student.course}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-1">
                          {student.modules.map((mod, idx) => (
                            <span
                              key={idx}
                              className="inline-block bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-medium"
                            >
                              {mod}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-block bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-semibold">
                          {student.attendance}%
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="text-xs text-slate-600">
                          <div>{student.email}</div>
                          <div className="text-slate-500">{student.phone}</div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <a
                            href={student.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-600 hover:text-slate-800 transition-colors"
                          >
                            <FaGithub className="w-4 h-4" />
                          </a>
                          <a
                            href={student.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            <FaLinkedin className="w-4 h-4" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {completedStudents.length === 0 && (
                <div className="text-center py-8 text-slate-500 text-sm">
                  No completed students found
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Students;
