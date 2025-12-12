import React from 'react';
import { FaCheckCircle, FaSpinner, FaLock } from 'react-icons/fa';

const Progress = ({ student }) => {
  // Generate progress data for each module
  const moduleProgress = student.modules.map((module, idx) => ({
    name: module,
    progress: student.status === 'completed' ? 100 : Math.floor(Math.random() * 40) + 50,
    topics: Math.floor(Math.random() * 10) + 15,
    completedTopics: student.status === 'completed' ? Math.floor(Math.random() * 10) + 15 : Math.floor(Math.random() * 8) + 5,
    assignments: Math.floor(Math.random() * 5) + 5,
    completedAssignments: student.status === 'completed' ? Math.floor(Math.random() * 5) + 5 : Math.floor(Math.random() * 4) + 2,
  }));

  const overallProgress = Math.floor(
    moduleProgress.reduce((acc, m) => acc + m.progress, 0) / moduleProgress.length
  );

  return (
    <div className="space-y-6">
      {/* Overall Progress */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-blue-900">Overall Progress</h3>
            <p className="text-sm text-blue-700">Across all modules</p>
          </div>
          <div className="text-4xl font-bold text-blue-600">{overallProgress}%</div>
        </div>
        <div className="w-full bg-blue-200 rounded-full h-3">
          <div
            className="bg-blue-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${overallProgress}%` }}
          ></div>
        </div>
      </div>

      {/* Module-wise Progress */}
      <div className="bg-slate-50 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-4">
          Module-wise Progress
        </h3>
        <div className="space-y-4">
          {moduleProgress.map((module, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-800">{module.name}</span>
                  {module.progress === 100 && (
                    <FaCheckCircle className="text-emerald-500" />
                  )}
                  {module.progress < 100 && module.progress > 0 && (
                    <FaSpinner className="text-blue-500 animate-spin" />
                  )}
                </div>
                <span className={`text-sm font-bold ${
                  module.progress === 100 ? 'text-emerald-600' :
                  module.progress >= 70 ? 'text-blue-600' :
                  'text-amber-600'
                }`}>
                  {module.progress}%
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-slate-200 rounded-full h-2 mb-3">
                <div
                  className={`h-2 rounded-full transition-all ${
                    module.progress === 100 ? 'bg-emerald-500' :
                    module.progress >= 70 ? 'bg-blue-500' :
                    'bg-amber-500'
                  }`}
                  style={{ width: `${module.progress}%` }}
                ></div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 rounded p-2">
                  <p className="text-xs text-slate-600">Topics</p>
                  <p className="text-sm font-semibold text-slate-800">
                    {module.completedTopics}/{module.topics}
                  </p>
                </div>
                <div className="bg-slate-50 rounded p-2">
                  <p className="text-xs text-slate-600">Assignments</p>
                  <p className="text-sm font-semibold text-slate-800">
                    {module.completedAssignments}/{module.assignments}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Summary */}
      <div className="bg-slate-50 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-3">
          Performance Summary
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-3 text-center border border-slate-200">
            <p className="text-2xl font-bold text-blue-600">
              {moduleProgress.filter(m => m.progress === 100).length}
            </p>
            <p className="text-xs text-slate-600">Completed</p>
          </div>
          <div className="bg-white rounded-lg p-3 text-center border border-slate-200">
            <p className="text-2xl font-bold text-amber-600">
              {moduleProgress.filter(m => m.progress > 0 && m.progress < 100).length}
            </p>
            <p className="text-xs text-slate-600">In Progress</p>
          </div>
          <div className="bg-white rounded-lg p-3 text-center border border-slate-200">
            <p className="text-2xl font-bold text-slate-600">
              {moduleProgress.reduce((acc, m) => acc + m.completedAssignments, 0)}
            </p>
            <p className="text-xs text-slate-600">Assignments Done</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
