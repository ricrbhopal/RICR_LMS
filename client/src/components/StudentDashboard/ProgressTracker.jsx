import React, { useState } from "react";
import {
  FaChartLine,
  FaTrophy,
  FaCheck,
} from "react-icons/fa";
import { MdAssignment, MdWork, MdPeople, MdQuiz } from "react-icons/md";
import { BiTrendingDown } from "react-icons/bi";
import PerformanceOverview from "./PerformanceOverview";

const ProgressTracker = () => {
  const [selectedSubject, setSelectedSubject] = useState("Performance Overview");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Subject tabs configuration
  const subjects = [
    { id: "Performance Overview", name: "Performance Overview", icon: "📊", color: "bg-purple-500" },
    { id: "Core Java", name: "Core Java", icon: "☕", color: "bg-orange-500" },
    { id: "Java DSA", name: "Java DSA", icon: "⚙️", color: "bg-blue-500" },
    { id: "MERN Stack", name: "MERN Stack", icon: "🚀", color: "bg-green-500" },
  ];

  // Sample data for different subjects with their assessments
  const subjectData = {
    "Core Java": {
      assignments: [
        {
          id: 1,
          name: "Java Basics Assignment",
          date: "2025-01-05",
          maxMarks: 20,
          obtained: 14,
          percentage: 70,
        },
        {
          id: 2,
          name: "OOP Concepts Assignment",
          date: "2025-01-12",
          maxMarks: 25,
          obtained: 17,
          percentage: 68,
        },
        {
          id: 3,
          name: "Exception Handling Assignment",
          date: "2025-01-19",
          maxMarks: 30,
          obtained: 20,
          percentage: 66.67,
        },
      ],
      codingChallenges: [],
      projects: [],
      weeklyPerformance: [
        {
          id: 1,
          week: "Week 1",
          date: "2025-01-06",
          maxMarks: 10,
          obtained: 8,
          percentage: 80,
        },
        {
          id: 2,
          week: "Week 2",
          date: "2025-01-13",
          maxMarks: 10,
          obtained: 8,
          percentage: 80,
        },
        {
          id: 3,
          week: "Week 3",
          date: "2025-01-20",
          maxMarks: 10,
          obtained: 9,
          percentage: 90,
        },
      ],
      tests: [
        {
          id: 1,
          name: "Unit Test 1: Java Fundamentals",
          date: "2025-01-10",
          maxMarks: 40,
          obtained: 28,
          percentage: 70,
        },
        {
          id: 2,
          name: "Unit Test 2: OOP & Collections",
          date: "2025-01-24",
          maxMarks: 40,
          obtained: 26,
          percentage: 65,
        },
      ],
      groupDiscussions: [
        {
          id: 1,
          topic: "Java vs Python",
          date: "2025-01-08",
          maxMarks: 10,
          obtained: 9,
          percentage: 90,
        },
        {
          id: 2,
          topic: "Design Patterns",
          date: "2025-01-22",
          maxMarks: 10,
          obtained: 8,
          percentage: 80,
        },
      ],
    },
    "Java DSA": {
      assignments: [
        {
          id: 1,
          name: "Array & String Assignment",
          date: "2025-02-05",
          maxMarks: 25,
          obtained: 16,
          percentage: 64,
        },
        {
          id: 2,
          name: "Linked List Assignment",
          date: "2025-02-12",
          maxMarks: 30,
          obtained: 19,
          percentage: 63.33,
        },
      ],
      codingChallenges: [
        {
          id: 1,
          name: "Array Manipulation Problems",
          date: "2025-02-08",
          maxMarks: 50,
          obtained: 43,
          percentage: 86,
        },
        {
          id: 2,
          name: "String & Recursion Challenges",
          date: "2025-02-15",
          maxMarks: 50,
          obtained: 41,
          percentage: 82,
        },
        {
          id: 3,
          name: "Sorting & Searching Problems",
          date: "2025-02-22",
          maxMarks: 50,
          obtained: 40,
          percentage: 80,
        },
        {
          id: 4,
          name: "Linked List Implementation",
          date: "2025-03-01",
          maxMarks: 40,
          obtained: 30,
          percentage: 75,
        },
        {
          id: 5,
          name: "Tree & Graph Problems",
          date: "2025-03-08",
          maxMarks: 50,
          obtained: 35,
          percentage: 70,
        },
      ],
      projects: [],
      weeklyPerformance: [
        {
          id: 1,
          week: "Week 5",
          date: "2025-02-03",
          maxMarks: 10,
          obtained: 8,
          percentage: 80,
        },
        {
          id: 2,
          week: "Week 6",
          date: "2025-02-10",
          maxMarks: 10,
          obtained: 8,
          percentage: 80,
        },
        {
          id: 3,
          week: "Week 7",
          date: "2025-02-17",
          maxMarks: 10,
          obtained: 7,
          percentage: 70,
        },
      ],
      tests: [
        {
          id: 1,
          name: "Mid-Term Examination",
          date: "2025-02-20",
          maxMarks: 100,
          obtained: 68,
          percentage: 68,
        },
        {
          id: 2,
          name: "Unit Test 3: DSA Basics",
          date: "2025-03-05",
          maxMarks: 40,
          obtained: 26,
          percentage: 65,
        },
      ],
      groupDiscussions: [
        {
          id: 1,
          topic: "Time Complexity Analysis",
          date: "2025-02-07",
          maxMarks: 10,
          obtained: 9,
          percentage: 90,
        },
        {
          id: 2,
          topic: "Space Optimization Techniques",
          date: "2025-02-21",
          maxMarks: 10,
          obtained: 9,
          percentage: 90,
        },
      ],
    },
    "MERN Stack": {
      assignments: [
        {
          id: 1,
          name: "MongoDB Schema Design",
          date: "2025-03-15",
          maxMarks: 20,
          obtained: 13,
          percentage: 65,
        },
        {
          id: 2,
          name: "REST API Development",
          date: "2025-03-22",
          maxMarks: 25,
          obtained: 16,
          percentage: 64,
        },
      ],
      codingChallenges: [],
      projects: [
        {
          id: 1,
          name: "Student Management System (Backend)",
          date: "2025-03-28",
          maxMarks: 50,
          obtained: 38,
          percentage: 76,
        },
        {
          id: 2,
          name: "E-commerce API with MongoDB",
          date: "2025-04-10",
          maxMarks: 50,
          obtained: 36,
          percentage: 72,
        },
        {
          id: 3,
          name: "Real-time Chat Application (MERN)",
          date: "2025-04-25",
          maxMarks: 50,
          obtained: 34,
          percentage: 68,
        },
      ],
      weeklyPerformance: [
        {
          id: 1,
          week: "Week 10",
          date: "2025-03-17",
          maxMarks: 10,
          obtained: 7,
          percentage: 70,
        },
        {
          id: 2,
          week: "Week 11",
          date: "2025-03-24",
          maxMarks: 10,
          obtained: 8,
          percentage: 80,
        },
      ],
      tests: [
        {
          id: 1,
          name: "MongoDB & Express Test",
          date: "2025-03-20",
          maxMarks: 40,
          obtained: 27,
          percentage: 67.5,
        },
        {
          id: 2,
          name: "React Fundamentals Test",
          date: "2025-04-05",
          maxMarks: 40,
          obtained: 28,
          percentage: 70,
        },
      ],
      groupDiscussions: [
        {
          id: 1,
          topic: "Microservices Architecture",
          date: "2025-03-18",
          maxMarks: 10,
          obtained: 9,
          percentage: 90,
        },
        {
          id: 2,
          topic: "Database Optimization",
          date: "2025-04-08",
          maxMarks: 10,
          obtained: 9,
          percentage: 90,
        },
      ],
    },
  };

  // Get current subject's assessment data
  const assessmentData = selectedSubject === "Performance Overview" 
    ? subjectData["Core Java"] // Use Core Java as default for calculateStats when on overview
    : subjectData[selectedSubject];

  // Calculate overall statistics
  const calculateStats = () => {
    const allScores = [
      ...assessmentData.assignments,
      ...assessmentData.codingChallenges,
      ...assessmentData.projects,
      ...assessmentData.weeklyPerformance,
      ...assessmentData.tests,
      ...assessmentData.groupDiscussions,
    ];

    const totalObtained = allScores.reduce(
      (sum, item) => sum + item.obtained,
      0
    );
    const totalMax = allScores.reduce((sum, item) => sum + item.maxMarks, 0);
    const overallPercentage = (totalObtained / totalMax) * 100;

    // Calculate category averages (filter out empty categories)
    const categoryAvgs = {};
    if (assessmentData.assignments.length > 0) {
      categoryAvgs.assignments =
        assessmentData.assignments.reduce(
          (sum, item) => sum + item.percentage,
          0
        ) / assessmentData.assignments.length;
    }
    if (assessmentData.codingChallenges.length > 0) {
      categoryAvgs.codingChallenges =
        assessmentData.codingChallenges.reduce(
          (sum, item) => sum + item.percentage,
          0
        ) / assessmentData.codingChallenges.length;
    }
    if (assessmentData.projects.length > 0) {
      categoryAvgs.projects =
        assessmentData.projects.reduce(
          (sum, item) => sum + item.percentage,
          0
        ) / assessmentData.projects.length;
    }
    if (assessmentData.weeklyPerformance.length > 0) {
      categoryAvgs.weeklyPerformance =
        assessmentData.weeklyPerformance.reduce(
          (sum, item) => sum + item.percentage,
          0
        ) / assessmentData.weeklyPerformance.length;
    }
    if (assessmentData.tests.length > 0) {
      categoryAvgs.tests =
        assessmentData.tests.reduce((sum, item) => sum + item.percentage, 0) /
        assessmentData.tests.length;
    }
    if (assessmentData.groupDiscussions.length > 0) {
      categoryAvgs.groupDiscussions =
        assessmentData.groupDiscussions.reduce(
          (sum, item) => sum + item.percentage,
          0
        ) / assessmentData.groupDiscussions.length;
    }

    // Calculate trend (last 3 vs first 3 assignments)
    let trend = 0;
    if (assessmentData.assignments.length >= 2) {
      const recentCount = Math.min(3, assessmentData.assignments.length);
      const recentItems = assessmentData.assignments.slice(-recentCount);
      const earlyItems = assessmentData.assignments.slice(0, recentCount);
      const recentAvg =
        recentItems.reduce((sum, item) => sum + item.percentage, 0) /
        recentItems.length;
      const earlyAvg =
        earlyItems.reduce((sum, item) => sum + item.percentage, 0) /
        earlyItems.length;
      trend = recentAvg - earlyAvg;
    }

    return { totalObtained, totalMax, overallPercentage, categoryAvgs, trend };
  };

  const stats = calculateStats();

  // Generate projection based on current performance
  const calculateProjection = () => {
    const currentPercentage = stats.overallPercentage;
    let projectedGrade = "";
    let projectedPercentage = currentPercentage;

    if (stats.trend > 0) {
      projectedPercentage = Math.min(currentPercentage + stats.trend * 2, 100);
    } else if (stats.trend < 0) {
      projectedPercentage = Math.max(currentPercentage + stats.trend * 1.5, 0);
    }

    if (projectedPercentage >= 90) projectedGrade = "A+";
    else if (projectedPercentage >= 80) projectedGrade = "A";
    else if (projectedPercentage >= 70) projectedGrade = "B";
    else if (projectedPercentage >= 60) projectedGrade = "C";
    else projectedGrade = "D";

    return { projectedPercentage, projectedGrade };
  };

  const projection = calculateProjection();

  // Generate personalized suggestions
  const generateSuggestions = () => {
    const suggestions = [];
    const improvements = [];

    // Analyze each category
    Object.entries(stats.categoryAvgs).forEach(([category, avg]) => {
      if (avg < 75) {
        improvements.push({
          category: category.replace(/([A-Z])/g, " $1").trim(),
          score: avg.toFixed(1),
          priority: "high",
        });
      } else if (avg < 85) {
        improvements.push({
          category: category.replace(/([A-Z])/g, " $1").trim(),
          score: avg.toFixed(1),
          priority: "medium",
        });
      }
    });

    // Generate suggestions based on weak areas
    if (
      stats.categoryAvgs.assignments !== undefined &&
      stats.categoryAvgs.assignments < 85
    ) {
      suggestions.push({
        icon: <MdAssignment className="text-orange-500" />,
        title: "Improve Assignment Quality",
        description:
          "Allocate more time for assignment research and review before submission. Aim for early submissions to get feedback.",
      });
    }

    if (
      stats.categoryAvgs.tests !== undefined &&
      stats.categoryAvgs.tests < 85
    ) {
      suggestions.push({
        icon: <MdQuiz className="text-red-500" />,
        title: "Enhance Test Preparation",
        description:
          "Create a study schedule and practice more mock tests. Focus on time management during exams.",
      });
    }

    if (
      stats.categoryAvgs.weeklyPerformance !== undefined &&
      stats.categoryAvgs.weeklyPerformance < 85
    ) {
      suggestions.push({
        icon: <FaChartLine className="text-blue-500" />,
        title: "Boost Weekly Participation",
        description:
          "Increase class engagement by asking questions and participating in discussions. Complete daily tasks on time.",
      });
    }

    if (
      stats.categoryAvgs.groupDiscussions !== undefined &&
      stats.categoryAvgs.groupDiscussions < 85
    ) {
      suggestions.push({
        icon: <MdPeople className="text-purple-500" />,
        title: "Improve Communication Skills",
        description:
          "Prepare talking points before group discussions. Practice active listening and provide constructive feedback.",
      });
    }

    if (
      stats.categoryAvgs.codingChallenges !== undefined &&
      stats.categoryAvgs.codingChallenges < 85
    ) {
      suggestions.push({
        icon: <MdWork className="text-green-500" />,
        title: "Improve Coding Problem-Solving",
        description:
          "Practice more coding problems daily. Focus on understanding algorithms and data structures. Use platforms like LeetCode or HackerRank.",
      });
    }

    if (
      stats.categoryAvgs.projects !== undefined &&
      stats.categoryAvgs.projects < 85
    ) {
      suggestions.push({
        icon: <MdWork className="text-indigo-500" />,
        title: "Strengthen Project Execution",
        description:
          "Focus on MERN stack best practices. Build complete features end-to-end. Improve code quality and documentation.",
      });
    }

    if (stats.trend < 0) {
      suggestions.push({
        icon: <BiTrendingDown className="text-red-600" />,
        title: "Reverse Declining Trend",
        description:
          "Your recent performance shows a decline. Consider seeking help from instructors and forming study groups.",
      });
    }

    return { suggestions, improvements };
  };

  const { suggestions, improvements } = generateSuggestions();

  // Get grade based on percentage
  const getGrade = (percentage) => {
    if (percentage >= 90)
      return { grade: "A+", color: "text-green-600", bg: "bg-green-50" };
    if (percentage >= 80)
      return { grade: "A", color: "text-green-600", bg: "bg-green-50" };
    if (percentage >= 70)
      return { grade: "B", color: "text-blue-600", bg: "bg-blue-50" };
    if (percentage >= 60)
      return { grade: "C", color: "text-yellow-600", bg: "bg-yellow-50" };
    return { grade: "D", color: "text-red-600", bg: "bg-red-50" };
  };



  const getFilteredData = () => {
    if (selectedCategory === "all") {
      return [
        ...(assessmentData.assignments || []).map((item) => ({
          ...item,
          type: "Assignment",
        })),
        ...(assessmentData.codingChallenges || []).map((item) => ({
          ...item,
          type: "Coding",
        })),
        ...(assessmentData.projects || []).map((item) => ({
          ...item,
          type: "Project",
        })),
        ...(assessmentData.weeklyPerformance || []).map((item) => ({
          ...item,
          type: "Weekly",
          name: item.week,
        })),
        ...(assessmentData.tests || []).map((item) => ({
          ...item,
          type: "Test",
        })),
        ...(assessmentData.groupDiscussions || []).map((item) => ({
          ...item,
          type: "GD",
          name: item.topic,
        })),
      ].sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    const categoryData = assessmentData[selectedCategory] || [];
    return categoryData
      .map((item) => ({
        ...item,
        type:
          selectedCategory === "weeklyPerformance"
            ? "Weekly"
            : selectedCategory === "groupDiscussions"
            ? "GD"
            : selectedCategory === "codingChallenges"
            ? "Coding"
            : selectedCategory.slice(0, -1),
        name: item.name || item.week || item.topic,
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  const filteredData = getFilteredData();

  return (
    <div className="bg-[#caeaff] rounded-2xl mt-5 shadow p-6 w-[95%] mx-auto">
      <div className="max-w-7xl mx-auto">

        {/* Subject Tabs - Sleek Pill Style */}
        <div className="mb-5">
          <div className="bg-white rounded-2xl shadow-sm p-2 flex justify-evenly gap-2">
            {subjects.map((subject) => (
              <button
                key={subject.id}
                onClick={() => {
                  setSelectedSubject(subject.id);
                  setSelectedCategory("all");
                }}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                  selectedSubject === subject.id
                    ? "bg-purple-600 text-white shadow-lg shadow-blue-500/50"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <span className="text-lg">{subject.icon}</span>
                <span>{subject.name}</span>
               
              </button>
            ))}
          </div>
        </div>

        {/* Conditional Rendering based on selected tab */}
        {selectedSubject === "Performance Overview" ? (
          <PerformanceOverview 
            subjectData={subjectData}
            subjects={subjects}
            getGrade={getGrade}
            projection={projection}
            stats={stats}
            suggestions={suggestions}
          />
        ) : (
          // Individual Subject Tab Content
          <>
        {/* Overall Score with Progress Bar */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-5">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Overall Performance
              </h3>
              <p className="text-sm text-gray-500">
                {stats.totalObtained}/{stats.totalMax} marks obtained
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaTrophy className="text-3xl text-yellow-500" />
              <div className="text-right">
                <span className="text-4xl font-bold text-gray-900">
                  {stats.overallPercentage.toFixed(1)}%
                </span>
                <span
                  className={`ml-2 text-sm font-semibold px-3 py-1 rounded ${
                    getGrade(stats.overallPercentage).bg
                  } ${getGrade(stats.overallPercentage).color}`}
                >
                  {getGrade(stats.overallPercentage).grade}
                </span>
              </div>
            </div>
          </div>
          {/* Thin Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className={`h-3 rounded-full transition-all duration-500 ${
                stats.overallPercentage >= 85
                  ? "bg-linear-to-r from-green-500 to-green-600"
                  : stats.overallPercentage >= 70
                  ? "bg-linear-to-r from-blue-500 to-blue-600"
                  : "bg-linear-to-r from-orange-500 to-orange-600"
              }`}
              style={{ width: `${stats.overallPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Category Performance Overview */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-5">
          <h2 className="text-xl font-bold text-gray-900 mb-5">
            Category Performance
          </h2>
          <div
            className={`grid gap-5 ${
              Object.keys(stats.categoryAvgs).length === 1
                ? "grid-cols-1"
                : Object.keys(stats.categoryAvgs).length === 2
                ? "grid-cols-2"
                : Object.keys(stats.categoryAvgs).length === 3
                ? "grid-cols-3"
                : Object.keys(stats.categoryAvgs).length === 4
                ? "grid-cols-4"
                : Object.keys(stats.categoryAvgs).length === 5
                ? "grid-cols-5"
                : "grid-cols-6"
            }`}
          >
            {Object.entries(stats.categoryAvgs).map(([category, avg]) => {
              const gradeInfo = getGrade(avg);
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(isSelected ? "all" : category);
                  }}
                  className={`border rounded-lg p-5 transition-all transform hover:scale-105 text-left ${
                    isSelected
                      ? "border-blue-500 bg-blue-50 shadow-lg ring-2 ring-blue-500"
                      : "hover:shadow-md hover:border-gray-400"
                  }`}
                >
                  <h3 className="text-sm font-semibold text-gray-700 mb-2 capitalize">
                    {category.replace(/([A-Z])/g, " $1").trim()}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl font-bold text-gray-900">
                      {avg.toFixed(1)}%
                    </span>
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded ${gradeInfo.bg} ${gradeInfo.color}`}
                    >
                      {gradeInfo.grade}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        avg >= 85
                          ? "bg-green-500"
                          : avg >= 70
                          ? "bg-blue-500"
                          : "bg-orange-500"
                      }`}
                      style={{ width: `${avg}%` }}
                    ></div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Marksheet Section */}
          <div className="lg:col-span-2">
            {/* Marksheet Table */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-linear-to-r from-blue-500 to-blue-600 text-white">
                    <tr>
                      <th className="px-5 py-3 text-left text-sm font-semibold">
                        S.No
                      </th>
                      <th className="px-5 py-3 text-left text-sm font-semibold">
                        Type
                      </th>
                      <th className="px-5 py-3 text-left text-sm font-semibold">
                        Assessment Name
                      </th>
                      <th className="px-5 py-3 text-left text-sm font-semibold">
                        Date
                      </th>
                      <th className="px-5 py-3 text-center text-sm font-semibold">
                        Max Marks
                      </th>
                      <th className="px-5 py-3 text-center text-sm font-semibold">
                        Obtained
                      </th>
                      <th className="px-5 py-3 text-center text-sm font-semibold">
                        Percentage
                      </th>
                      <th className="px-5 py-3 text-center text-sm font-semibold">
                        Grade
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredData.map((item, index) => {
                      const gradeInfo = getGrade(item.percentage);
                      return (
                        <tr
                          key={`${item.type}-${item.id}`}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-5 py-3 text-sm text-gray-700">
                            {index + 1}
                          </td>
                          <td className="px-5 py-3">
                            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                              {item.type}
                            </span>
                          </td>
                          <td className="px-5 py-3 text-sm font-medium text-gray-900">
                            {item.name}
                          </td>
                          <td className="px-5 py-3 text-sm text-gray-600">
                            {item.date}
                          </td>
                          <td className="px-5 py-3 text-sm text-center font-semibold text-gray-700">
                            {item.maxMarks}
                          </td>
                          <td className="px-5 py-3 text-sm text-center font-semibold text-gray-900">
                            {item.obtained}
                          </td>
                          <td className="px-5 py-3 text-sm text-center">
                            <span className="font-bold text-gray-900">
                              {item.percentage.toFixed(1)}%
                            </span>
                          </td>
                          <td className="px-5 py-3 text-center">
                            <span
                              className={`text-sm font-bold px-3 py-1 rounded-full ${gradeInfo.bg} ${gradeInfo.color}`}
                            >
                              {gradeInfo.grade}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Improvements & Suggestions Sidebar */}
          <div className="space-y-5">
            {/* Areas of Improvement */}
            {improvements.length > 0 && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center gap-2 mb-5">
                  <FaCheck className="text-xl text-green-500" />
                  <h2 className="text-lg font-bold text-gray-900">
                    Areas of Improvement
                  </h2>
                </div>
                <div className="space-y-5">
                  {improvements.map((item, index) => (
                    <div
                      key={index}
                      className={`p-5 rounded-lg border-l-4 ${
                        item.priority === "high"
                          ? "border-red-500 bg-red-50"
                          : "border-green-500 bg-green-50"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-sm font-semibold text-gray-900 capitalize">
                          {item.category}
                        </h3>
                        <span
                          className={`text-xs font-bold px-2 py-1 rounded ${
                            item.priority === "high"
                              ? "bg-red-200 text-red-700"
                              : "bg-orange-200 text-orange-700"
                          }`}
                        >
                          {item.priority === "high"
                            ? "High Priority"
                            : "Medium Priority"}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Current Average: {item.score}%
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProgressTracker;
