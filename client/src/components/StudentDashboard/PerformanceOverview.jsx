import React from "react";
import {
  FaCheckCircle,
} from "react-icons/fa";
import { PiFlagCheckeredFill } from "react-icons/pi";
import { Play, PlayIcon } from "lucide-react";

const PerformanceOverview = ({
  subjectData,
  subjects,
  projection,
}) => {
  // Calculate overall performance
  const calculateOverallPerformance = () => {
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
      totalObtained += allScores.reduce((sum, item) => sum + item.obtained, 0);
      totalMax += allScores.reduce((sum, item) => sum + item.maxMarks, 0);
    });
    return (totalObtained / totalMax) * 100;
  };

  // Calculate subject completion
  const calculateSubjectCompletion = () => {
    const subjects = Object.keys(subjectData);
    const completedSubjects = subjects.filter((subject) => {
      const data = subjectData[subject];
      const allScores = [
        ...data.assignments,
        ...data.codingChallenges,
        ...data.projects,
        ...data.weeklyPerformance,
        ...data.tests,
        ...data.groupDiscussions,
      ];
      if (allScores.length === 0) return false;
      const totalObtained = allScores.reduce(
        (sum, item) => sum + item.obtained,
        0
      );
      const totalMax = allScores.reduce((sum, item) => sum + item.maxMarks, 0);
      return (totalObtained / totalMax) * 100 >= 50;
    });
    return {
      completed: completedSubjects,
      total: subjects.length,
      names: completedSubjects,
    };
  };

  const overallPercentage = calculateOverallPerformance();
  const subjectCompletion = calculateSubjectCompletion();

  // Career pathway stages based on learning progress
  const careerPathways = [
    {
      id: 0,
      title: "Getting Started",
      description: "Begin Your Journey",
      requirement: "Enroll in RICR LMS",
      jobs: ["Student", "Beginner", "Learner"],
      minScore: 0,
      requiredSubjects: 0,
    },
    {
      id: 1,
      title: "Foundation",
      description: "Core Java Programming",
      requirement: "Java Fundamentals + OOP",
      jobs: ["Junior Trainee", "Coding Tutor", "Technical Support"],
      minScore: 0,
      requiredSubjects: 0,
    },
    {
      id: 2,
      title: "Problem Solver",
      description: "DSA & Problem Solving",
      requirement: "Java + Data Structures & Algorithms",
      jobs: [
        "Algorithm Developer",
        "Competitive Programming Mentor",
        "Software Tester Intern",
      ],
      minScore: 40,
      requiredSubjects: 1,
    },
    {
      id: 3,
      title: "Frontend Specialist",
      description: "Client-Side Development",
      requirement: "HTML/CSS/JS + React + Responsive Design",
      jobs: [
        "Frontend Developer",
        "React Developer",
        "Web Developer",
      ],
      minScore: 55,
      requiredSubjects: 2,
    },
    {
      id: 4,
      title: "UI/UX Designer",
      description: "User Interface & Experience Design",
      requirement: "Design Principles + UI/UX + Frontend Technologies",
      jobs: [
        "UI/UX Designer",
        "Product Designer",
        "Web Designer",
      ],
      minScore: 65,
      requiredSubjects: 3,
    },
    {
      id: 5,
      title: "Backend Expert",
      description: "Advanced Server & Database",
      requirement: "Express.js + REST APIs + SQL & MongoDB",
      jobs: [
        "Backend Developer",
        "Database Engineer",
        "API Architect",
      ],
      minScore: 75,
      requiredSubjects: 4,
    },
    {
      id: 6,
      title: "Full Stack Developer",
      description: "End-to-End Development",
      requirement: "Complete MERN Stack + Deployment + All Skills Mastered",
      jobs: [
        "Full Stack Developer",
        "MERN Stack Developer",
        "Software Engineer",
      ],
      minScore: 85,
      requiredSubjects: 5,
    },
  ];

  // Determine current career stage
  const getCurrentStage = () => {
    const completedCount = subjectCompletion.completed.length;
    for (let i = careerPathways.length - 1; i >= 0; i--) {
      const pathway = careerPathways[i];
      if (
        pathway.minScore !== undefined &&
        pathway.requiredSubjects !== undefined &&
        overallPercentage >= pathway.minScore &&
        completedCount >= pathway.requiredSubjects
      ) {
        return i;
      }
    }
    return 0;
  };

  const currentStage = getCurrentStage();



  return (
    <div className="space-y-4">
     
 {/* Compact Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100">
          <div className="text-xs font-medium text-slate-600 mb-1">Overall Performance</div>
          <div className="text-2xl font-bold text-blue-600">
            {overallPercentage.toFixed(1)}%
          </div>
        </div>
        <div className="bg-linear-to-br from-violet-50 to-purple-50 rounded-lg p-4 border border-violet-100">
          <div className="text-xs font-medium text-slate-600 mb-1">Skills Acquired</div>
          <div className="text-2xl font-bold text-violet-600">
            {"7/15"}
          </div>
        </div>
        <div className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-lg p-4 border border-emerald-100">
          <div className="text-xs font-medium text-slate-600 mb-1">Projected Score</div>
          <div className="text-2xl font-bold text-emerald-600">
            {projection.projectedPercentage.toFixed(1)}%
          </div>
        </div>
        <div
          className={`rounded-lg p-4 border-2 ${
            overallPercentage >= 75
              ? "bg-emerald-50 border-emerald-200"
              : "bg-amber-50 border-amber-200"
          }`}
        >
          <div className="text-xs font-medium text-slate-600 mb-1">Referral Status</div>
          {overallPercentage >= 75 ? (
            <div className="flex items-center gap-1">
              <FaCheckCircle className="text-sm text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-900">Eligible</span>
            </div>
          ) : (
            <div className="text-sm font-semibold text-amber-900">
              {(75 - overallPercentage).toFixed(1)}% to go
            </div>
          )}
        </div>
      </div>
      {/* Horizontal Progress Steps */}
      <div className="bg-white rounded-lg border border-slate-200 p-5">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Career Pathway Progress</h3>
        
        {/* Progress Bar with Checkpoints */}
        <div className="relative mb-8">
          {/* Progress Line */}
          <div className="absolute top-8 left-15 right-15 h-1 bg-slate-200">
            <div 
              className="h-full bg-linear-to-r from-emerald-400 to-indigo-500 transition-all duration-500 rounded-full"
              style={{ width: `${(currentStage / (careerPathways.length - 1)) * 100}%` }}
            ></div>
          </div>

          {/* Checkpoints */}
          <div className="relative flex items-center justify-between">
            {/* Career Stages */}
            {careerPathways.map((pathway, index) => {
              const isCompleted = index <= currentStage;
              const isCurrent = index === currentStage;
              const isFirst = index === 0;
              const isLast = index === careerPathways.length - 1;

              return (
                <div key={pathway.id} className="flex flex-col items-center" style={{ width: `${100 / careerPathways.length}%` }}>
                  {/* Circle Checkpoint */}
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold transition-all ${
                        isFirst
                          ? "bg-emerald-500 text-white shadow-md"
                          : isLast && isCompleted
                          ? "bg-yellow-400 text-white shadow-lg animate-pulse"
                          : isCurrent
                          ? "bg-indigo-500 text-white shadow-lg scale-110 ring-4 ring-indigo-100"
                          : isCompleted
                          ? "bg-emerald-500 text-white shadow-md"
                          : "bg-slate-200 text-slate-400"
                      }`}
                    >
                      {isFirst ? <PlayIcon/> : isLast ? <PiFlagCheckeredFill className="text-2xl" /> : isCompleted && !isCurrent ? "✓" : index}
                    </div>
                    {isCurrent && !isLast && !isFirst && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                        <span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-0.5 rounded-full font-semibold border border-indigo-200">
                          Current
                        </span>
                      </div>
                    )}
                    {isLast && isCompleted && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                        <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 rounded-full font-semibold border border-yellow-200">
                          Finish!
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Label */}
                  <div className="text-center mt-5">
                    <h4 className={`text-sm font-bold ${
                      isLast && isCompleted ? "text-yellow-600" : isCurrent ? "text-indigo-900" : isCompleted ? "text-emerald-900" : "text-slate-500"
                    }`}>
                      {pathway.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Cards for Each Stage */}
        <div className="space-y-2">
          {careerPathways.filter((pathway, index) => index > 0).map((pathway, index) => {
            const actualIndex = index + 1; // Adjust index since we filtered out first item
            const isCompleted = actualIndex <= currentStage;
            const isCurrent = actualIndex === currentStage;

            return (
              <div
                key={pathway.id}
                className={`border rounded-lg p-3 transition-all ${
                  isCurrent
                    ? "border-indigo-300 bg-linear-to-br from-indigo-50 to-blue-50"
                    : isCompleted
                    ? "border-emerald-200 bg-emerald-50"
                    : "border-slate-200 bg-slate-50 opacity-60"
                }`}
              >
                <div className="flex items-start gap-3">
                  {/* Stage Number Badge */}
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      isCurrent
                        ? "bg-indigo-500 text-white"
                        : isCompleted
                        ? "bg-emerald-500 text-white"
                        : "bg-slate-300 text-slate-500"
                    }`}
                  >
                    {isCompleted && !isCurrent ? "✓" : actualIndex}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4
                        className={`text-sm font-bold ${
                          isCurrent
                            ? "text-indigo-900"
                            : isCompleted
                            ? "text-emerald-900"
                            : "text-slate-600"
                        }`}
                      >
                        {pathway.title}
                      </h4>
                      {isCurrent && (
                        <span className="bg-indigo-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                          Active
                        </span>
                      )}
                      <span className={`text-xs ml-auto ${isCompleted ? "text-slate-600" : "text-slate-500"}`}>
                        {pathway.description}
                      </span>
                    </div>

                    <div className="flex gap-4 text-xs">
                      <div className="flex-1">
                        <span className="font-semibold text-slate-500">Req: </span>
                        <span className={isCompleted ? "text-slate-700" : "text-slate-500"}>
                          {pathway.requirement}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mt-2">
                      {pathway.jobs.map((job, idx) => (
                        <span
                          key={idx}
                          className={`text-xs px-2 py-0.5 rounded ${
                            isCompleted
                              ? "bg-white border border-slate-200 text-slate-700"
                              : "bg-slate-100 text-slate-500 border border-slate-200"
                          }`}
                        >
                          {job}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

     



      {/* Next Steps */}
      <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-200 p-4">
        <h3 className="text-base font-bold text-slate-800 mb-3">
          Next Steps to <strong>{currentStage < careerPathways.length - 1 ? careerPathways[currentStage + 1].title : "Maintain"}</strong>
        </h3>

        {currentStage < careerPathways.length - 1 ? (
          <div className="space-y-3">
            <div className="bg-white rounded-lg border border-amber-200 p-3 space-y-2">
              <div className="flex items-start gap-2">
                <div className="shrink-0 w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-bold">1</div>
                <div className="text-sm text-slate-700">
                  Achieve <strong className="text-slate-900">{careerPathways[currentStage + 1].minScore}%</strong> overall
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="shrink-0 w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-bold">2</div>
                <div className="text-sm text-slate-700">
                  Acquire <strong className="text-slate-900">{careerPathways[currentStage + 1].requiredSubjects}</strong> skills
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="shrink-0 w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-bold">3</div>
                <div className="text-sm text-slate-700">
                  Focus: <strong className="text-slate-900">{careerPathways[currentStage + 1].requirement}</strong>
                </div>
              </div>
            </div>
            <div className="p-3 bg-white rounded-lg border border-amber-200">
              <div className="text-xs font-semibold text-slate-600 mb-2">
                Progress to Next Level
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-linear-to-r from-amber-400 to-orange-400 h-2.5 rounded-full transition-all"
                  style={{
                    width: `${Math.min(
                      (overallPercentage /
                        careerPathways[currentStage + 1].minScore) *
                        100,
                      100
                    )}%`,
                  }}>
                </div>
              </div>
              <div className="text-xs text-slate-600 mt-1">
                {overallPercentage.toFixed(1)}% / {careerPathways[currentStage + 1].minScore}%
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-4 bg-white rounded-lg border border-emerald-200">
            <div className="text-3xl mb-2">🎉</div>
            <p className="text-base font-bold text-slate-900 mb-1">
              Congratulations!
            </p>
            <p className="text-sm text-slate-600">
              You've reached the highest level!
            </p>
          </div>
        )}
      </div>

      {/* Skill Mastery */}
      <div className="bg-white rounded-lg border border-slate-200 p-4">
        <h3 className="text-base font-bold text-slate-800 mb-3">
          Skill Mastery Progress
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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
            const subjectInfo = subjects.find((s) => s.id === subject);

            return (
              <div
                key={subject}
                className="border border-slate-200 rounded-lg p-3 hover:border-slate-300 transition-all bg-linear-to-br from-white to-slate-50"
              >
                <div className="mb-2">
                  <h4 className="font-semibold text-slate-800 text-sm">{subject}</h4>
                  <div className="text-xs text-slate-500">
                    {totalObtained} / {totalMax} marks
                  </div>
                </div>
                <div className={`text-xl font-bold mb-2 ${
                  percentage >= 75
                    ? "text-emerald-600"
                    : percentage >= 50
                    ? "text-indigo-600"
                    : "text-amber-600"
                }`}>
                  {percentage.toFixed(1)}%
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-2 rounded-full transition-all ${
                      percentage >= 75
                        ? "bg-linear-to-r from-emerald-400 to-emerald-500"
                        : percentage >= 50
                        ? "bg-linear-to-r from-indigo-400 to-indigo-500"
                        : "bg-linear-to-r from-amber-400 to-amber-500"
                    }`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PerformanceOverview;
