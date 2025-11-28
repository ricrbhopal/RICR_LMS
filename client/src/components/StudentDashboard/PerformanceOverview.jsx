import React from "react";
import { FaChartLine, FaTrophy, FaCheckCircle } from "react-icons/fa";
import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";
import { HiLightBulb } from "react-icons/hi";

const PerformanceOverview = ({
  subjectData,
  subjects,
  getGrade,
  projection,
  stats,
  suggestions,
}) => {
  return (
    <div className="space-y-5">
      {/* Overall Performance Card */}
      <div className="bg-white rounded-xl shadow-md p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">
              Overall Performance
            </h3>
            <p className="text-sm text-gray-500">
              Combined performance across all subjects
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* Job & Internship Referral Badge */}
            <div className="flex justify-end">
              <div
                className={`flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg ${(() => {
                  const allSubjects = Object.keys(subjectData);
                  let totalObtained = 0;
                  let totalMax = 0;
                  allSubjects.forEach((subject) => {
                    const data = subjectData[subject];
                    const allScores = [
                      ...data.assignments,
                      ...data.codingChallenges,
                      ...data.projects,
                      ...data.weeklyPerformance,
                      ...data.tests,
                      ...data.groupDiscussions,
                    ];
                    totalObtained += allScores.reduce(
                      (sum, item) => sum + item.obtained,
                      0
                    );
                    totalMax += allScores.reduce(
                      (sum, item) => sum + item.maxMarks,
                      0
                    );
                  });
                  const percentage = (totalObtained / totalMax) * 100;
                  return percentage >= 75
                    ? "bg-green-100 text-green-700 border-2 border-green-500"
                    : "bg-red-100 text-red-700 border-2 border-red-500";
                })()}`}
              >
                <span className="text-md">
                  {(() => {
                    const allSubjects = Object.keys(subjectData);
                    let totalObtained = 0;
                    let totalMax = 0;
                    allSubjects.forEach((subject) => {
                      const data = subjectData[subject];
                      const allScores = [
                        ...data.assignments,
                        ...data.codingChallenges,
                        ...data.projects,
                        ...data.weeklyPerformance,
                        ...data.tests,
                        ...data.groupDiscussions,
                      ];
                      totalObtained += allScores.reduce(
                        (sum, item) => sum + item.obtained,
                        0
                      );
                      totalMax += allScores.reduce(
                        (sum, item) => sum + item.maxMarks,
                        0
                      );
                    });
                    const percentage = (totalObtained / totalMax) * 100;
                    return percentage >= 75 ? "✓ Fit for Job & Internship Referral" : "✗ Not Fit for Job & Internship Referral";
                  })()}
                </span>
                <span></span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar with Percentage Inside */}
        <div className="w-full bg-gray-200 rounded-full h-8 relative mb-4">
          <div
            className={`h-8 rounded-full transition-all duration-500 flex items-center justify-center ${(() => {
              const allSubjects = Object.keys(subjectData);
              let totalObtained = 0;
              let totalMax = 0;
              allSubjects.forEach((subject) => {
                const data = subjectData[subject];
                const allScores = [
                  ...data.assignments,
                  ...data.codingChallenges,
                  ...data.projects,
                  ...data.weeklyPerformance,
                  ...data.tests,
                  ...data.groupDiscussions,
                ];
                totalObtained += allScores.reduce(
                  (sum, item) => sum + item.obtained,
                  0
                );
                totalMax += allScores.reduce(
                  (sum, item) => sum + item.maxMarks,
                  0
                );
              });
              const percentage = (totalObtained / totalMax) * 100;
              return percentage >= 85
                ? "bg-linear-to-r from-green-500 to-green-600"
                : percentage >= 70
                ? "bg-linear-to-r from-blue-500 to-blue-600"
                : "bg-linear-to-r from-orange-500 to-orange-600";
            })()}`}
            style={{
              width: `${(() => {
                const allSubjects = Object.keys(subjectData);
                let totalObtained = 0;
                let totalMax = 0;
                allSubjects.forEach((subject) => {
                  const data = subjectData[subject];
                  const allScores = [
                    ...data.assignments,
                    ...data.codingChallenges,
                    ...data.projects,
                    ...data.weeklyPerformance,
                    ...data.tests,
                    ...data.groupDiscussions,
                  ];
                  totalObtained += allScores.reduce(
                    (sum, item) => sum + item.obtained,
                    0
                  );
                  totalMax += allScores.reduce(
                    (sum, item) => sum + item.maxMarks,
                    0
                  );
                });
                return (totalObtained / totalMax) * 100;
              })()}%`,
            }}
          >
            <span className="text-white font-bold text-lg">
              {(() => {
                const allSubjects = Object.keys(subjectData);
                let totalObtained = 0;
                let totalMax = 0;
                allSubjects.forEach((subject) => {
                  const data = subjectData[subject];
                  const allScores = [
                    ...data.assignments,
                    ...data.codingChallenges,
                    ...data.projects,
                    ...data.weeklyPerformance,
                    ...data.tests,
                    ...data.groupDiscussions,
                  ];
                  totalObtained += allScores.reduce(
                    (sum, item) => sum + item.obtained,
                    0
                  );
                  totalMax += allScores.reduce(
                    (sum, item) => sum + item.maxMarks,
                    0
                  );
                });
                const overallPercentage = (totalObtained / totalMax) * 100;
                return `${overallPercentage.toFixed(1)}%`;
              })()}
            </span>
          </div>
        </div>

        {/* Statistics Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Projected Score Card */}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <BiTrendingUp className="text-2xl text-green-500" />
              <h3 className="text-lg font-semibold text-gray-700">
                Projected Score
              </h3>
            </div>
            <div className="mb-2">
              <span className="text-2xl font-semibold text-gray-900">
                {projection.projectedPercentage.toFixed(1)}%
              </span>
              <span
                className={`ml-2 text-sm font-semibold px-3 py-1 rounded ${
                  getGrade(projection.projectedPercentage).bg
                } ${getGrade(projection.projectedPercentage).color}`}
              >
                {projection.projectedGrade}
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Expected performance by end of course
            </p>
          </div>

          {/* Performance Trend Card */}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              {(() => {
                const allSubjects = Object.keys(subjectData);
                let totalObtained = 0;
                let totalMax = 0;
                allSubjects.forEach((subject) => {
                  const data = subjectData[subject];
                  const allScores = [
                    ...data.assignments,
                    ...data.codingChallenges,
                    ...data.projects,
                    ...data.weeklyPerformance,
                    ...data.tests,
                    ...data.groupDiscussions,
                  ];
                  totalObtained += allScores.reduce(
                    (sum, item) => sum + item.obtained,
                    0
                  );
                  totalMax += allScores.reduce(
                    (sum, item) => sum + item.maxMarks,
                    0
                  );
                });
                const currentPercentage = (totalObtained / totalMax) * 100;
                const trend =
                  projection.projectedPercentage - currentPercentage;

                return trend >= 0 ? (
                  <BiTrendingUp className="text-2xl text-green-500" />
                ) : (
                  <BiTrendingDown className="text-2xl text-red-500" />
                );
              })()}
              <h3 className="text-lg font-semibold text-gray-700">
                Performance Trend
              </h3>
            </div>
            <div className="mb-2">
              <span
                className={`text-2xl font-semibold ${(() => {
                  const allSubjects = Object.keys(subjectData);
                  let totalObtained = 0;
                  let totalMax = 0;
                  allSubjects.forEach((subject) => {
                    const data = subjectData[subject];
                    const allScores = [
                      ...data.assignments,
                      ...data.codingChallenges,
                      ...data.projects,
                      ...data.weeklyPerformance,
                      ...data.tests,
                      ...data.groupDiscussions,
                    ];
                    totalObtained += allScores.reduce(
                      (sum, item) => sum + item.obtained,
                      0
                    );
                    totalMax += allScores.reduce(
                      (sum, item) => sum + item.maxMarks,
                      0
                    );
                  });
                  const currentPercentage = (totalObtained / totalMax) * 100;
                  const trend =
                    projection.projectedPercentage - currentPercentage;

                  return trend >= 0 ? "text-green-600" : "text-red-600";
                })()}`}
              >
                {(() => {
                  const allSubjects = Object.keys(subjectData);
                  let totalObtained = 0;
                  let totalMax = 0;
                  allSubjects.forEach((subject) => {
                    const data = subjectData[subject];
                    const allScores = [
                      ...data.assignments,
                      ...data.codingChallenges,
                      ...data.projects,
                      ...data.weeklyPerformance,
                      ...data.tests,
                      ...data.groupDiscussions,
                    ];
                    totalObtained += allScores.reduce(
                      (sum, item) => sum + item.obtained,
                      0
                    );
                    totalMax += allScores.reduce(
                      (sum, item) => sum + item.maxMarks,
                      0
                    );
                  });
                  const currentPercentage = (totalObtained / totalMax) * 100;
                  const trend =
                    projection.projectedPercentage - currentPercentage;

                  return `${trend >= 0 ? "+" : ""}${trend.toFixed(1)}%`;
                })()}
              </span>
            </div>
            <p className="text-sm text-gray-500">
              {(() => {
                const allSubjects = Object.keys(subjectData);
                let totalObtained = 0;
                let totalMax = 0;
                allSubjects.forEach((subject) => {
                  const data = subjectData[subject];
                  const allScores = [
                    ...data.assignments,
                    ...data.codingChallenges,
                    ...data.projects,
                    ...data.weeklyPerformance,
                    ...data.tests,
                    ...data.groupDiscussions,
                  ];
                  totalObtained += allScores.reduce(
                    (sum, item) => sum + item.obtained,
                    0
                  );
                  totalMax += allScores.reduce(
                    (sum, item) => sum + item.maxMarks,
                    0
                  );
                });
                const currentPercentage = (totalObtained / totalMax) * 100;
                const trend =
                  projection.projectedPercentage - currentPercentage;

                return trend >= 0 ? "Improving trend" : "Declining trend";
              })()}
            </p>
          </div>

          {/* Total Assessments Card */}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <FaChartLine className="text-2xl text-blue-500" />
              <h3 className="text-lg font-semibold text-gray-700">
                Total Assessments
              </h3>
            </div>
            <div className="mb-2">
              <span className="text-2xl font-semibold text-gray-900">
                {(() => {
                  const allSubjects = Object.keys(subjectData);
                  let totalCount = 0;
                  allSubjects.forEach((subject) => {
                    const data = subjectData[subject];
                    totalCount += [
                      ...data.assignments,
                      ...data.codingChallenges,
                      ...data.projects,
                      ...data.weeklyPerformance,
                      ...data.tests,
                      ...data.groupDiscussions,
                    ].length;
                  });
                  return totalCount;
                })()}
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Completed across all subjects
            </p>
          </div>
        </div>
      </div>

      {/* Subject-wise Performance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {Object.keys(subjectData).map((subject) => {
          const data = subjectData[subject];
          const allScores = [
            ...data.assignments,
            ...data.codingChallenges,
            ...data.projects,
            ...data.weeklyPerformance,
            ...data.tests,
            ...data.groupDiscussions,
          ];
          const totalObtained = allScores.reduce(
            (sum, item) => sum + item.obtained,
            0
          );
          const totalMax = allScores.reduce(
            (sum, item) => sum + item.maxMarks,
            0
          );
          const percentage = (totalObtained / totalMax) * 100;
          const gradeInfo = getGrade(percentage);
          const subjectInfo = subjects.find((s) => s.id === subject);

          return (
            <div
              key={subject}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{subjectInfo?.icon}</span>
                <h3 className="text-base font-bold text-gray-900">{subject}</h3>
              </div>
              <div className="mb-2">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl font-bold text-gray-900">
                    {percentage.toFixed(1)}%
                  </span>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${gradeInfo.bg} ${gradeInfo.color}`}
                  >
                    {gradeInfo.grade}
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  {totalObtained}/{totalMax} marks
                </p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    percentage >= 85
                      ? "bg-green-500"
                      : percentage >= 70
                      ? "bg-blue-500"
                      : "bg-orange-500"
                  }`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Personalized Suggestions */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center gap-2 mb-5">
          <HiLightBulb className="text-xl text-yellow-500" />
          <h2 className="text-lg font-bold text-gray-900">
            Personalized Suggestions
          </h2>
        </div>
        <div className="space-y-5">
          {suggestions.length > 0 ? (
            suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="p-5 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl mt-1">{suggestion.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-gray-900 mb-1">
                      {suggestion.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {suggestion.description}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-5 bg-green-50 rounded-lg border border-green-200 text-center">
              <FaCheckCircle className="text-3xl text-green-500 mx-auto mb-2" />
              <p className="text-sm font-semibold text-green-800">
                Excellent Performance!
              </p>
              <p className="text-xs text-green-600 mt-1">
                Keep up the great work across all categories.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PerformanceOverview;
