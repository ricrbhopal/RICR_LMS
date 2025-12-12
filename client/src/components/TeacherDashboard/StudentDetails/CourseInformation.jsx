import React from 'react';

const CourseInformation = ({ student }) => {
  return (
    <div className="space-y-6">
      {/* Course Information */}
      <div className="bg-slate-50 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-3">
          Course Details
        </h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-slate-600 text-sm font-medium">Course:</span>
            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-semibold">
              {student.course}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-600 text-sm font-medium">Status:</span>
            <span className={`inline-block px-3 py-1 rounded-lg text-sm font-semibold ${
              student.status === 'ongoing' 
                ? 'bg-amber-100 text-amber-700' 
                : 'bg-emerald-100 text-emerald-700'
            }`}>
              {student.status === 'ongoing' ? 'Ongoing' : 'Completed'}
            </span>
          </div>
        </div>
      </div>

      {/* Enrolled Modules */}
      <div className="bg-slate-50 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-3">
          Enrolled Modules
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {student.modules.map((module, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-lg border-2 ${
                student.status === 'completed'
                  ? 'bg-emerald-50 border-emerald-200'
                  : 'bg-blue-50 border-blue-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-sm font-semibold ${
                  student.status === 'completed'
                    ? 'text-emerald-700'
                    : 'text-blue-700'
                }`}>
                  {module}
                </span>
                <span className={`text-xs px-2 py-1 rounded ${
                  student.status === 'completed'
                    ? 'bg-emerald-100 text-emerald-600'
                    : 'bg-blue-100 text-blue-600'
                }`}>
                  {student.status === 'completed' ? 'Completed' : 'In Progress'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enrollment Information */}
      <div className="bg-slate-50 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-3">
          Enrollment Information
        </h3>
        <div className="space-y-2">
          <div className="flex justify-between py-2 border-b border-slate-200">
            <span className="text-slate-600 text-sm font-medium">Enrollment Number:</span>
            <span className="text-slate-800 text-sm font-semibold">{student.enrollmentNo}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-slate-200">
            <span className="text-slate-600 text-sm font-medium">Total Modules:</span>
            <span className="text-slate-800 text-sm font-semibold">{student.modules.length}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-slate-600 text-sm font-medium">Overall Attendance:</span>
            <span className={`text-sm font-semibold ${
              student.attendance >= 90 ? 'text-emerald-600' :
              student.attendance >= 75 ? 'text-amber-600' :
              'text-red-600'
            }`}>
              {student.attendance}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInformation;
