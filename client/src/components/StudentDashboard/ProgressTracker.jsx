import React, { useState } from 'react';
import { FaChartLine, FaTrophy, FaExclamationTriangle, FaCheckCircle, FaCheck } from 'react-icons/fa';
import { MdAssignment, MdWork, MdPeople, MdQuiz } from 'react-icons/md';
import { BiTrendingUp, BiTrendingDown } from 'react-icons/bi';
import { HiLightBulb } from 'react-icons/hi';

const ProgressTracker = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample data for different assessment types
  const assessmentData = {
    assignments: [
      { id: 1, name: 'Java Basics Assignment', date: '2025-01-05', maxMarks: 20, obtained: 14, percentage: 70 },
      { id: 2, name: 'OOP Concepts Assignment', date: '2025-01-12', maxMarks: 25, obtained: 17, percentage: 68 },
      { id: 3, name: 'Data Structures Assignment', date: '2025-01-19', maxMarks: 30, obtained: 20, percentage: 66.67 },
      { id: 4, name: 'Algorithm Design Assignment', date: '2025-01-26', maxMarks: 20, obtained: 13, percentage: 65 },
      { id: 5, name: 'Java Collections Assignment', date: '2025-02-02', maxMarks: 25, obtained: 16, percentage: 64 },
    ],
    projects: [
      { id: 1, name: 'Student Management System', date: '2025-01-15', maxMarks: 50, obtained: 43, percentage: 86 },
      { id: 2, name: 'E-commerce Backend API', date: '2025-02-10', maxMarks: 50, obtained: 41, percentage: 82 },
      { id: 3, name: 'Chat Application', date: '2025-02-28', maxMarks: 50, obtained: 40, percentage: 80 },
    ],
    weeklyPerformance: [
      { id: 1, week: 'Week 1', date: '2025-01-06', maxMarks: 10, obtained: 8, percentage: 80 },
      { id: 2, week: 'Week 2', date: '2025-01-13', maxMarks: 10, obtained: 8, percentage: 80 },
      { id: 3, week: 'Week 3', date: '2025-01-20', maxMarks: 10, obtained: 9, percentage: 90 },
      { id: 4, week: 'Week 4', date: '2025-01-27', maxMarks: 10, obtained: 7, percentage: 70 },
      { id: 5, week: 'Week 5', date: '2025-02-03', maxMarks: 10, obtained: 8, percentage: 80 },
      { id: 6, week: 'Week 6', date: '2025-02-10', maxMarks: 10, obtained: 8, percentage: 80 },
      { id: 7, week: 'Week 7', date: '2025-02-17', maxMarks: 10, obtained: 7, percentage: 70 },
      { id: 8, week: 'Week 8', date: '2025-02-24', maxMarks: 10, obtained: 8, percentage: 80 },
    ],
    tests: [
      { id: 1, name: 'Unit Test 1: Java Fundamentals', date: '2025-01-10', maxMarks: 40, obtained: 28, percentage: 70 },
      { id: 2, name: 'Unit Test 2: OOP & Collections', date: '2025-01-24', maxMarks: 40, obtained: 26, percentage: 65 },
      { id: 3, name: 'Mid-Term Examination', date: '2025-02-14', maxMarks: 100, obtained: 68, percentage: 68 },
      { id: 4, name: 'Unit Test 3: DSA Basics', date: '2025-02-28', maxMarks: 40, obtained: 26, percentage: 65 },
    ],
    groupDiscussions: [
      { id: 1, topic: 'Java vs Python', date: '2025-01-08', maxMarks: 10, obtained: 9, percentage: 90 },
      { id: 2, topic: 'Design Patterns', date: '2025-01-22', maxMarks: 10, obtained: 8, percentage: 80 },
      { id: 3, topic: 'Microservices Architecture', date: '2025-02-05', maxMarks: 10, obtained: 9, percentage: 90 },
      { id: 4, topic: 'Database Optimization', date: '2025-02-19', maxMarks: 10, obtained: 9, percentage: 90 },
    ],
  };

  // Calculate overall statistics
  const calculateStats = () => {
    const allAssessments = [
      ...assessmentData.assignments,
      ...assessmentData.projects,
      ...assessmentData.weeklyPerformance,
      ...assessmentData.tests,
      ...assessmentData.groupDiscussions,
    ];

    const totalObtained = allAssessments.reduce((sum, item) => sum + item.obtained, 0);
    const totalMax = allAssessments.reduce((sum, item) => sum + item.maxMarks, 0);
    const overallPercentage = (totalObtained / totalMax) * 100;

    // Calculate category averages
    const categoryAvgs = {
      assignments: assessmentData.assignments.reduce((sum, item) => sum + item.percentage, 0) / assessmentData.assignments.length,
      projects: assessmentData.projects.reduce((sum, item) => sum + item.percentage, 0) / assessmentData.projects.length,
      weeklyPerformance: assessmentData.weeklyPerformance.reduce((sum, item) => sum + item.percentage, 0) / assessmentData.weeklyPerformance.length,
      tests: assessmentData.tests.reduce((sum, item) => sum + item.percentage, 0) / assessmentData.tests.length,
      groupDiscussions: assessmentData.groupDiscussions.reduce((sum, item) => sum + item.percentage, 0) / assessmentData.groupDiscussions.length,
    };

    // Calculate trend (last 3 vs first 3 assignments)
    const recentAvg = assessmentData.assignments.slice(-3).reduce((sum, item) => sum + item.percentage, 0) / 3;
    const earlyAvg = assessmentData.assignments.slice(0, 3).reduce((sum, item) => sum + item.percentage, 0) / 3;
    const trend = recentAvg - earlyAvg;

    return { totalObtained, totalMax, overallPercentage, categoryAvgs, trend };
  };

  const stats = calculateStats();

  // Generate projection based on current performance
  const calculateProjection = () => {
    const currentPercentage = stats.overallPercentage;
    let projectedGrade = '';
    let projectedPercentage = currentPercentage;

    if (stats.trend > 0) {
      projectedPercentage = Math.min(currentPercentage + stats.trend * 2, 100);
    } else if (stats.trend < 0) {
      projectedPercentage = Math.max(currentPercentage + stats.trend * 1.5, 0);
    }

    if (projectedPercentage >= 90) projectedGrade = 'A+';
    else if (projectedPercentage >= 80) projectedGrade = 'A';
    else if (projectedPercentage >= 70) projectedGrade = 'B';
    else if (projectedPercentage >= 60) projectedGrade = 'C';
    else projectedGrade = 'D';

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
          category: category.replace(/([A-Z])/g, ' $1').trim(),
          score: avg.toFixed(1),
          priority: 'high',
        });
      } else if (avg < 85) {
        improvements.push({
          category: category.replace(/([A-Z])/g, ' $1').trim(),
          score: avg.toFixed(1),
          priority: 'medium',
        });
      }
    });

    // Generate suggestions based on weak areas
    if (stats.categoryAvgs.assignments < 85) {
      suggestions.push({
        icon: <MdAssignment className="text-orange-500" />,
        title: 'Improve Assignment Quality',
        description: 'Allocate more time for assignment research and review before submission. Aim for early submissions to get feedback.',
      });
    }

    if (stats.categoryAvgs.tests < 85) {
      suggestions.push({
        icon: <MdQuiz className="text-red-500" />,
        title: 'Enhance Test Preparation',
        description: 'Create a study schedule and practice more mock tests. Focus on time management during exams.',
      });
    }

    if (stats.categoryAvgs.weeklyPerformance < 85) {
      suggestions.push({
        icon: <FaChartLine className="text-blue-500" />,
        title: 'Boost Weekly Participation',
        description: 'Increase class engagement by asking questions and participating in discussions. Complete daily tasks on time.',
      });
    }

    if (stats.categoryAvgs.groupDiscussions < 85) {
      suggestions.push({
        icon: <MdPeople className="text-purple-500" />,
        title: 'Improve Communication Skills',
        description: 'Prepare talking points before group discussions. Practice active listening and provide constructive feedback.',
      });
    }

    if (stats.categoryAvgs.projects < 85) {
      suggestions.push({
        icon: <MdWork className="text-green-500" />,
        title: 'Strengthen Project Execution',
        description: 'Break projects into smaller milestones. Focus on code quality, documentation, and timely deliverables.',
      });
    }

    if (stats.trend < 0) {
      suggestions.push({
        icon: <BiTrendingDown className="text-red-600" />,
        title: 'Reverse Declining Trend',
        description: 'Your recent performance shows a decline. Consider seeking help from instructors and forming study groups.',
      });
    }

    return { suggestions, improvements };
  };

  const { suggestions, improvements } = generateSuggestions();

  // Get grade based on percentage
  const getGrade = (percentage) => {
    if (percentage >= 90) return { grade: 'A+', color: 'text-green-600', bg: 'bg-green-50' };
    if (percentage >= 80) return { grade: 'A', color: 'text-green-600', bg: 'bg-green-50' };
    if (percentage >= 70) return { grade: 'B', color: 'text-blue-600', bg: 'bg-blue-50' };
    if (percentage >= 60) return { grade: 'C', color: 'text-yellow-600', bg: 'bg-yellow-50' };
    return { grade: 'D', color: 'text-red-600', bg: 'bg-red-50' };
  };

  const categories = [
    { id: 'all', name: 'All Assessments', icon: <FaChartLine />, color: 'bg-blue-500' },
    { id: 'assignments', name: 'Assignments', icon: <MdAssignment />, color: 'bg-orange-500' },
    { id: 'projects', name: 'Project Work', icon: <MdWork />, color: 'bg-green-500' },
    { id: 'weeklyPerformance', name: 'Weekly Performance', icon: <FaChartLine />, color: 'bg-blue-500' },
    { id: 'tests', name: 'Test Results', icon: <MdQuiz />, color: 'bg-red-500' },
    { id: 'groupDiscussions', name: 'Group Discussions', icon: <MdPeople />, color: 'bg-purple-500' },
  ];

  const getFilteredData = () => {
    if (selectedCategory === 'all') {
      return [
        ...assessmentData.assignments.map(item => ({ ...item, type: 'Assignment' })),
        ...assessmentData.projects.map(item => ({ ...item, type: 'Project' })),
        ...assessmentData.weeklyPerformance.map(item => ({ ...item, type: 'Weekly', name: item.week })),
        ...assessmentData.tests.map(item => ({ ...item, type: 'Test' })),
        ...assessmentData.groupDiscussions.map(item => ({ ...item, type: 'GD', name: item.topic })),
      ].sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    return assessmentData[selectedCategory].map(item => ({
      ...item,
      type: selectedCategory === 'weeklyPerformance' ? 'Weekly' : selectedCategory === 'groupDiscussions' ? 'GD' : selectedCategory.slice(0, -1),
      name: item.name || item.week || item.topic,
    })).sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  const filteredData = getFilteredData();

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Academic Progress Tracker</h1>
          <p className="text-gray-600">Track your performance, projections, and areas of improvement</p>
        </div>

        {/* Overall Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {/* Overall Score */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-gray-600">Overall Score</h3>
              <FaTrophy className="text-2xl text-yellow-500" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">{stats.overallPercentage.toFixed(1)}%</span>
              <span className={`text-sm font-semibold px-2 py-1 rounded ${getGrade(stats.overallPercentage).bg} ${getGrade(stats.overallPercentage).color}`}>
                {getGrade(stats.overallPercentage).grade}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-2">{stats.totalObtained}/{stats.totalMax} marks obtained</p>
          </div>

          {/* Projected Score */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-gray-600">Projected Score</h3>
              <BiTrendingUp className="text-2xl text-purple-500" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">{projection.projectedPercentage.toFixed(1)}%</span>
              <span className={`text-sm font-semibold px-2 py-1 rounded ${getGrade(projection.projectedPercentage).bg} ${getGrade(projection.projectedPercentage).color}`}>
                {projection.projectedGrade}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-2">Based on current pace</p>
          </div>

          {/* Performance Trend */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-gray-600">Performance Trend</h3>
              {stats.trend >= 0 ? (
                <BiTrendingUp className="text-2xl text-green-500" />
              ) : (
                <BiTrendingDown className="text-2xl text-red-500" />
              )}
            </div>
            <div className="flex items-baseline gap-2">
              <span className={`text-3xl font-bold ${stats.trend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {stats.trend >= 0 ? '+' : ''}{stats.trend.toFixed(1)}%
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-2">Recent vs Early performance</p>
          </div>

          {/* Total Assessments */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-gray-600">Total Assessments</h3>
              <FaCheckCircle className="text-2xl text-orange-500" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">{filteredData.length}</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">Completed evaluations</p>
          </div>
        </div>

        {/* Category Performance Overview */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Category Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {Object.entries(stats.categoryAvgs).map(([category, avg]) => {
              const gradeInfo = getGrade(avg);
              return (
                <div key={category} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2 capitalize">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl font-bold text-gray-900">{avg.toFixed(1)}%</span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${gradeInfo.bg} ${gradeInfo.color}`}>
                      {gradeInfo.grade}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${avg >= 85 ? 'bg-green-500' : avg >= 70 ? 'bg-blue-500' : 'bg-orange-500'}`}
                      style={{ width: `${avg}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Marksheet Section */}
          <div className="lg:col-span-2">
            {/* Category Filter */}
            <div className="bg-white rounded-xl shadow-md p-4 mb-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      selectedCategory === cat.id
                        ? `${cat.color} text-white shadow-md`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat.icon}
                    <span>{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Marksheet Table */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-linear-to-r from-blue-500 to-blue-600 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold">S.No</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Type</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Assessment Name</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Date</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold">Max Marks</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold">Obtained</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold">Percentage</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold">Grade</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredData.map((item, index) => {
                      const gradeInfo = getGrade(item.percentage);
                      return (
                        <tr key={`${item.type}-${item.id}`} className="hover:bg-gray-50 transition-colors">
                          <td className="px-4 py-3 text-sm text-gray-700">{index + 1}</td>
                          <td className="px-4 py-3">
                            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                              {item.type}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm font-medium text-gray-900">{item.name}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{item.date}</td>
                          <td className="px-4 py-3 text-sm text-center font-semibold text-gray-700">{item.maxMarks}</td>
                          <td className="px-4 py-3 text-sm text-center font-semibold text-gray-900">{item.obtained}</td>
                          <td className="px-4 py-3 text-sm text-center">
                            <span className="font-bold text-gray-900">{item.percentage.toFixed(1)}%</span>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <span className={`text-sm font-bold px-3 py-1 rounded-full ${gradeInfo.bg} ${gradeInfo.color}`}>
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
          <div className="space-y-6">
            {/* Areas of Improvement */}
            {improvements.length > 0 && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FaCheck className="text-xl text-green-500" />
                  <h2 className="text-lg font-bold text-gray-900">Areas of Improvement</h2>
                </div>
                <div className="space-y-3">
                  {improvements.map((item, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border-l-4 ${
                        item.priority === 'high'
                          ? 'border-red-500 bg-red-50'
                          : 'border-green-500 bg-green-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-sm font-semibold text-gray-900 capitalize">{item.category}</h3>
                        <span
                          className={`text-xs font-bold px-2 py-1 rounded ${
                            item.priority === 'high' ? 'bg-red-200 text-red-700' : 'bg-orange-200 text-orange-700'
                          }`}
                        >
                          {item.priority === 'high' ? 'High Priority' : 'Medium Priority'}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">Current Average: {item.score}%</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Personalized Suggestions */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-2 mb-4">
                <HiLightBulb className="text-xl text-yellow-500" />
                <h2 className="text-lg font-bold text-gray-900">Personalized Suggestions</h2>
              </div>
              <div className="space-y-4">
                {suggestions.length > 0 ? (
                  suggestions.map((suggestion, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl mt-1">{suggestion.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-sm font-bold text-gray-900 mb-1">{suggestion.title}</h3>
                          <p className="text-xs text-gray-600 leading-relaxed">{suggestion.description}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
                    <FaCheckCircle className="text-3xl text-green-500 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-green-800">Excellent Performance!</p>
                    <p className="text-xs text-green-600 mt-1">Keep up the great work across all categories.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Performance Insights */}
            <div className="bg-linear-to-br from-blue-500 to-purple-600 rounded-xl shadow-md p-6 text-white">
              <h2 className="text-lg font-bold mb-3">Performance Insights</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-yellow-300">•</span>
                  <p>You have completed <strong>{filteredData.length}</strong> assessments so far.</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-300">•</span>
                  <p>
                    Your strongest category is <strong>
                      {Object.entries(stats.categoryAvgs).reduce((a, b) => (a[1] > b[1] ? a : b))[0]
                        .replace(/([A-Z])/g, ' $1')
                        .trim()}
                    </strong> at{' '}
                    <strong>{Object.entries(stats.categoryAvgs).reduce((a, b) => (a[1] > b[1] ? a : b))[1].toFixed(1)}%</strong>
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-yellow-300">•</span>
                  <p>
                    Maintaining current pace will result in a final grade of <strong>{projection.projectedGrade}</strong>.
                  </p>
                </div>
                {stats.trend < 0 && (
                  <div className="flex items-start gap-2 bg-white/20 rounded p-2 mt-2">
                    <FaExclamationTriangle className="text-yellow-300 mt-0.5" />
                    <p className="text-xs">
                      Your performance is declining. Focus on weak areas and seek assistance if needed.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;