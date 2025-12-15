import React, { useState } from 'react';
import { FaChartLine, FaTrophy, FaCheck } from 'react-icons/fa';
import { MdAssignment, MdQuiz, MdPeople } from 'react-icons/md';

const Progress = ({ student }) => {
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Generate detailed progress data for each module
  const generateModuleData = (moduleName, moduleIndex) => {
    const baseScore = student.status === 'completed' ? 75 : 65;
    const variation = moduleIndex * 3;
    
    return {
      assignments: [
        {
          id: 1,
          name: `${moduleName} - Assignment 1`,
          date: `2025-0${moduleIndex + 1}-05`,
          maxMarks: 20,
          obtained: baseScore >= 70 ? 15 : 12,
          percentage: baseScore >= 70 ? 75 : 60,
        },
        {
          id: 2,
          name: `${moduleName} - Assignment 2`,
          date: `2025-0${moduleIndex + 1}-12`,
          maxMarks: 25,
          obtained: baseScore >= 70 ? 19 : 15,
          percentage: baseScore >= 70 ? 76 : 60,
        },
        {
          id: 3,
          name: `${moduleName} - Assignment 3`,
          date: `2025-0${moduleIndex + 1}-19`,
          maxMarks: 30,
          obtained: baseScore >= 70 ? 23 : 18,
          percentage: baseScore >= 70 ? 76.67 : 60,
        },
      ],
      weeklyPerformance: [
        {
          id: 1,
          week: 'Week 1',
          date: `2025-0${moduleIndex + 1}-06`,
          maxMarks: 10,
          obtained: baseScore >= 70 ? 8 : 6,
          percentage: baseScore >= 70 ? 80 : 60,
        },
        {
          id: 2,
          week: 'Week 2',
          date: `2025-0${moduleIndex + 1}-13`,
          maxMarks: 10,
          obtained: baseScore >= 70 ? 8 : 7,
          percentage: baseScore >= 70 ? 80 : 70,
        },
        {
          id: 3,
          week: 'Week 3',
          date: `2025-0${moduleIndex + 1}-20`,
          maxMarks: 10,
          obtained: baseScore >= 70 ? 9 : 7,
          percentage: baseScore >= 70 ? 90 : 70,
        },
      ],
      tests: [
        {
          id: 1,
          name: `${moduleName} - Unit Test 1`,
          date: `2025-0${moduleIndex + 1}-10`,
          maxMarks: 40,
          obtained: baseScore >= 70 ? 30 : 24,
          percentage: baseScore >= 70 ? 75 : 60,
        },
        {
          id: 2,
          name: `${moduleName} - Unit Test 2`,
          date: `2025-0${moduleIndex + 1}-24`,
          maxMarks: 40,
          obtained: baseScore >= 70 ? 32 : 26,
          percentage: baseScore >= 70 ? 80 : 65,
        },
      ],
      groupDiscussions: [
        {
          id: 1,
          topic: `${moduleName} - Discussion 1`,
          date: `2025-0${moduleIndex + 1}-08`,
          maxMarks: 10,
          obtained: baseScore >= 70 ? 9 : 7,
          percentage: baseScore >= 70 ? 90 : 70,
        },
        {
          id: 2,
          topic: `${moduleName} - Discussion 2`,
          date: `2025-0${moduleIndex + 1}-22`,
          maxMarks: 10,
          obtained: baseScore >= 70 ? 8 : 7,
          percentage: baseScore >= 70 ? 80 : 70,
        },
      ],
    };
  };

  // Generate module progress with detailed assessments
  const moduleProgress = student.modules.map((module, idx) => {
    const progress = student.status === 'completed' ? 100 : Math.floor(Math.random() * 40) + 50;
    return {
      name: module,
      progress,
      topics: Math.floor(Math.random() * 10) + 15,
      completedTopics: student.status === 'completed' ? Math.floor(Math.random() * 10) + 15 : Math.floor(Math.random() * 8) + 5,
      assessments: generateModuleData(module, idx),
    };
  });

  const overallProgress = Math.floor(
    moduleProgress.reduce((acc, m) => acc + m.progress, 0) / moduleProgress.length
  );

  // Get current module's assessment data
  const currentModule = selectedModule !== null ? moduleProgress[selectedModule] : moduleProgress[0];
  const assessmentData = currentModule?.assessments || { assignments: [], weeklyPerformance: [], tests: [], groupDiscussions: [] };

  // Calculate statistics for selected module
  const calculateStats = () => {
    const allScores = [
      ...assessmentData.assignments,
      ...assessmentData.weeklyPerformance,
      ...assessmentData.tests,
      ...assessmentData.groupDiscussions,
    ];

    const totalObtained = allScores.reduce((sum, item) => sum + item.obtained, 0);
    const totalMax = allScores.reduce((sum, item) => sum + item.maxMarks, 0);
    const overallPercentage = totalMax > 0 ? (totalObtained / totalMax) * 100 : 0;

    const categoryAvgs = {};
    if (assessmentData.assignments.length > 0) {
      categoryAvgs.assignments =
        assessmentData.assignments.reduce((sum, item) => sum + item.percentage, 0) / assessmentData.assignments.length;
    }
    if (assessmentData.weeklyPerformance.length > 0) {
      categoryAvgs.weeklyPerformance =
        assessmentData.weeklyPerformance.reduce((sum, item) => sum + item.percentage, 0) / assessmentData.weeklyPerformance.length;
    }
    if (assessmentData.tests.length > 0) {
      categoryAvgs.tests =
        assessmentData.tests.reduce((sum, item) => sum + item.percentage, 0) / assessmentData.tests.length;
    }
    if (assessmentData.groupDiscussions.length > 0) {
      categoryAvgs.groupDiscussions =
        assessmentData.groupDiscussions.reduce((sum, item) => sum + item.percentage, 0) / assessmentData.groupDiscussions.length;
    }

    return { totalObtained, totalMax, overallPercentage, categoryAvgs };
  };

  const stats = selectedModule !== null ? calculateStats() : { totalObtained: 0, totalMax: 0, overallPercentage: 0, categoryAvgs: {} };

  // Get grade based on percentage
  const getGrade = (percentage) => {
    if (percentage >= 90) return { grade: 'A+', color: 'text-green-600', bg: 'bg-green-50' };
    if (percentage >= 80) return { grade: 'A', color: 'text-green-600', bg: 'bg-green-50' };
    if (percentage >= 70) return { grade: 'B', color: 'text-blue-600', bg: 'bg-blue-50' };
    if (percentage >= 60) return { grade: 'C', color: 'text-yellow-600', bg: 'bg-yellow-50' };
    return { grade: 'D', color: 'text-red-600', bg: 'bg-red-50' };
  };

  // Get filtered data based on category
  const getFilteredData = () => {
    if (selectedCategory === 'all') {
      return [
        ...(assessmentData.assignments || []).map((item) => ({ ...item, type: 'Assignment' })),
        ...(assessmentData.weeklyPerformance || []).map((item) => ({ ...item, type: 'Weekly', name: item.week })),
        ...(assessmentData.tests || []).map((item) => ({ ...item, type: 'Test' })),
        ...(assessmentData.groupDiscussions || []).map((item) => ({ ...item, type: 'GD', name: item.topic })),
      ].sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    const categoryData = assessmentData[selectedCategory] || [];
    return categoryData
      .map((item) => ({
        ...item,
        type: selectedCategory === 'weeklyPerformance' ? 'Weekly' : selectedCategory === 'groupDiscussions' ? 'GD' : selectedCategory.slice(0, -1),
        name: item.name || item.week || item.topic,
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  const filteredData = selectedModule !== null ? getFilteredData() : [];

  return (
    <div className="space-y-5">
      {/* Overall Progress Card */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-lg font-semibold text-slate-700">Overall Progress</h3>
            <p className="text-sm text-slate-500">Across all modules</p>
          </div>
          <div className="flex items-center gap-3">
            <FaTrophy className="text-3xl text-amber-400" />
            <div className="text-right">
              <span className="text-4xl font-bold text-slate-800">{overallProgress}%</span>
              <span className={`ml-2 text-sm font-semibold px-3 py-1 rounded ${getGrade(overallProgress).bg} ${getGrade(overallProgress).color}`}>
                {getGrade(overallProgress).grade}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-3">
          <div
            className={`h-3 rounded-full transition-all duration-500 ${
              overallProgress >= 85 ? 'bg-gradient-to-r from-emerald-400 to-emerald-500' :
              overallProgress >= 70 ? 'bg-gradient-to-r from-blue-400 to-blue-500' :
              'bg-gradient-to-r from-amber-400 to-amber-500'
            }`}
            style={{ width: `${overallProgress}%` }}
          ></div>
        </div>
      </div>

      {/* Module Tabs */}
      <div className="bg-white rounded-2xl shadow-sm p-2 flex flex-wrap gap-2">
        {moduleProgress.map((module, idx) => (
          <button
            key={idx}
            onClick={() => {
              setSelectedModule(idx);
              setSelectedCategory('all');
            }}
            className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
              selectedModule === idx
                ? 'bg-purple-200 text-purple-600 shadow-lg shadow-purple-500/50'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <span>{module.name}</span>
          </button>
        ))}
      </div>

      {/* Module Details - Only show if a module is selected */}
      {selectedModule !== null && (
        <>
          {/* Module Score Card */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-lg font-semibold text-slate-700">{currentModule.name} Performance</h3>
                <p className="text-sm text-slate-500">
                  {stats.totalObtained}/{stats.totalMax} marks obtained
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaChartLine className="text-3xl text-blue-400" />
                <div className="text-right">
                  <span className="text-4xl font-bold text-slate-800">{stats.overallPercentage.toFixed(1)}%</span>
                  <span className={`ml-2 text-sm font-semibold px-3 py-1 rounded ${getGrade(stats.overallPercentage).bg} ${getGrade(stats.overallPercentage).color}`}>
                    {getGrade(stats.overallPercentage).grade}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-3">
              <div
                className={`h-3 rounded-full transition-all duration-500 ${
                  stats.overallPercentage >= 85 ? 'bg-gradient-to-r from-emerald-400 to-emerald-500' :
                  stats.overallPercentage >= 70 ? 'bg-gradient-to-r from-blue-400 to-blue-500' :
                  'bg-gradient-to-r from-amber-400 to-amber-500'
                }`}
                style={{ width: `${stats.overallPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Category Performance Overview */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
            <h2 className="text-xl font-bold text-slate-800 mb-5">Category Performance</h2>
            <div className={`grid gap-5 ${
              Object.keys(stats.categoryAvgs).length === 1 ? 'grid-cols-1' :
              Object.keys(stats.categoryAvgs).length === 2 ? 'grid-cols-2' :
              Object.keys(stats.categoryAvgs).length === 3 ? 'grid-cols-3' :
              'grid-cols-4'
            }`}>
              {Object.entries(stats.categoryAvgs).map(([category, avg]) => {
                const gradeInfo = getGrade(avg);
                const isSelected = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(isSelected ? 'all' : category)}
                    className={`border rounded-lg p-5 transition-all transform hover:scale-105 text-left ${
                      isSelected
                        ? 'border-indigo-300 bg-indigo-50 shadow-md ring-2 ring-indigo-200'
                        : 'border-slate-200 hover:shadow-sm hover:border-slate-300 bg-white'
                    }`}
                  >
                    <h3 className="text-sm font-semibold text-slate-700 mb-2 capitalize">
                      {category.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-2xl font-bold text-slate-800">{avg.toFixed(1)}%</span>
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${gradeInfo.bg} ${gradeInfo.color}`}>
                        {gradeInfo.grade}
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          avg >= 85 ? 'bg-emerald-400' : avg >= 70 ? 'bg-blue-400' : 'bg-amber-400'
                        }`}
                        style={{ width: `${avg}%` }}
                      ></div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Marksheet Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-indigo-400 to-blue-400 text-white">
                  <tr>
                    <th className="px-5 py-3 text-left text-sm font-semibold">S.No</th>
                    <th className="px-5 py-3 text-left text-sm font-semibold">Type</th>
                    <th className="px-5 py-3 text-left text-sm font-semibold">Assessment Name</th>
                    <th className="px-5 py-3 text-left text-sm font-semibold">Date</th>
                    <th className="px-5 py-3 text-center text-sm font-semibold">Max Marks</th>
                    <th className="px-5 py-3 text-center text-sm font-semibold">Obtained</th>
                    <th className="px-5 py-3 text-center text-sm font-semibold">Percentage</th>
                    <th className="px-5 py-3 text-center text-sm font-semibold">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredData.map((item, index) => {
                    const gradeInfo = getGrade(item.percentage);
                    return (
                      <tr key={`${item.type}-${item.id}`} className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-3 text-sm text-slate-700">{index + 1}</td>
                        <td className="px-5 py-3">
                          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-indigo-50 text-indigo-600">
                            {item.type}
                          </span>
                        </td>
                        <td className="px-5 py-3 text-sm font-medium text-slate-800">{item.name}</td>
                        <td className="px-5 py-3 text-sm text-slate-600">{item.date}</td>
                        <td className="px-5 py-3 text-sm text-center font-semibold text-slate-700">{item.maxMarks}</td>
                        <td className="px-5 py-3 text-sm text-center font-semibold text-slate-800">{item.obtained}</td>
                        <td className="px-5 py-3 text-sm text-center">
                          <span className="font-bold text-slate-800">{item.percentage.toFixed(1)}%</span>
                        </td>
                        <td className="px-5 py-3 text-center">
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
        </>
      )}

      {/* Module Overview Grid - Show when no module is selected */}
      {selectedModule === null && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {moduleProgress.map((module, idx) => (
            <div key={idx} className="bg-white rounded-lg p-5 border border-slate-200 hover:shadow-md transition-shadow cursor-pointer" onClick={() => setSelectedModule(idx)}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-slate-800">{module.name}</h3>
                <span className={`text-sm font-bold ${
                  module.progress === 100 ? 'text-emerald-600' :
                  module.progress >= 70 ? 'text-blue-600' : 'text-amber-600'
                }`}>
                  {module.progress}%
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 mb-3">
                <div
                  className={`h-2 rounded-full transition-all ${
                    module.progress === 100 ? 'bg-emerald-500' :
                    module.progress >= 70 ? 'bg-blue-500' : 'bg-amber-500'
                  }`}
                  style={{ width: `${module.progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-slate-600">
                <span>Topics: {module.completedTopics}/{module.topics}</span>
                <span className={getGrade(module.progress).color}>{getGrade(module.progress).grade}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Progress;
