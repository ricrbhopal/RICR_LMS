import React from 'react';

const CourseInformation = ({ student }) => {
  const completedModules = student.status === 'completed' 
    ? student.modules.length 
    : Math.floor(student.modules.length * (student.attendance / 100));

  // Sample weekly hours data (Mon -> Sun) - in real app, this would come from student data
  const weeklyHours = [2.0, 2.5, 3.0, 1.5, 2.0, 0.5, 1.0];
  const totalHours = weeklyHours.reduce((a, b) => a + b, 0);

  const cards = [
    {
      id: 1,
      title: "Total Modules",
      value: `${completedModules} / ${student.modules.length}`,
      subtitle: "Completed",
    },
    {
      id: 2,
      title: "Skill Acquired",
      value: "7/15",
      subtitle: "Technical Skills",
    },
    {
      id: 3,
      title: "Learning Streak",
      value: "15",
      subtitle: "Days in a row",
    },
    {
      id: 4,
      title: "Attendance",
      value: `${student.attendance}%`,
      subtitle: student.attendance >= 90 ? 'Excellent' : student.attendance >= 75 ? 'Good' : 'Needs focus',
    },
  ];

  return (
    <div className="space-y-4">
      {/* Course Header */}
      <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500 font-medium mb-1">Current Course</p>
            <h2 className="text-xl font-bold text-gray-900">{student.course}</h2>
            <p className="text-xs text-gray-500 mt-1">Enrollment: {student.enrollmentNo}</p>
          </div>
          <div>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${
              student.status === 'ongoing' 
                ? 'bg-amber-100 text-amber-700' 
                : 'bg-emerald-100 text-emerald-700'
            }`}>
              {student.status === 'ongoing' ? '🔄 Ongoing' : '✓ Completed'}
            </span>
          </div>
        </div>
      </div>

      {/* Weekly Activity + Stats Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Weekly Activity Graph */}
        <div className="bg-white rounded-lg p-4 shadow border border-gray-200">
          <h4 className="text-sm font-semibold text-gray-800">Weekly Activity</h4>
          <p className="text-xs text-gray-500 mt-1">
            Hours spent on the learning platform this week
          </p>
          <WeeklyHoursChart weeklyHours={weeklyHours} totalHours={totalHours} />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-3">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-gray-200 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-2">
                <p className="text-xs font-medium text-gray-600">{card.title}</p>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{card.value}</h3>
              <p className="text-xs text-gray-500 mt-1">{card.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modules List */}
      <div className="bg-white rounded-lg p-4 shadow border border-gray-200">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
          <div>
            <h4 className="text-sm font-semibold text-gray-800">Enrolled Modules</h4>
            <p className="text-xs text-gray-500 mt-1">
              {completedModules} of {student.modules.length} completed
            </p>
          </div>
          <div className="text-xs text-gray-600">
            <span className="font-medium">
              {Math.round((completedModules / student.modules.length) * 100)}% Complete
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {student.modules.map((module, idx) => {
            const isCompleted = idx < completedModules;
            return (
              <div
                key={idx}
                className={`p-3 rounded-lg border transition-all ${
                  isCompleted
                    ? 'bg-emerald-50 border-emerald-200'
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex-shrink-0 text-lg">
                    {isCompleted ? '✓' : '○'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium truncate ${
                      isCompleted ? 'text-emerald-900' : 'text-gray-700'
                    }`}>
                      {module}
                    </p>
                    <p className="text-xs text-gray-500">Module {idx + 1}</p>
                  </div>
                  <div>
                    <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                      isCompleted
                        ? 'bg-emerald-200 text-emerald-800'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {isCompleted ? 'Done' : 'Active'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Overall Progress</span>
            <span className="text-xs text-gray-600 font-semibold">
              {Math.round((completedModules / student.modules.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(completedModules / student.modules.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WeeklyHoursChart = ({ weeklyHours = [], totalHours = 0 }) => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const w = 360;
  const h = 140;
  const pad = 28;
  const max = Math.max(...weeklyHours, 1);

  // compute points
  const stepX = (w - pad * 2) / Math.max(1, weeklyHours.length - 1);
  const points = weeklyHours.map((val, i) => {
    const x = pad + i * stepX;
    const y = pad + (h - pad * 2) * (1 - val / max);
    return { x, y, val, i };
  });

  const linePath = points
    .map(
      (p, idx) => `${idx === 0 ? "M" : "L"} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`
    )
    .join(" ");

  const areaPath = `${linePath} L ${pad + (weeklyHours.length - 1) * stepX} ${
    h - pad
  } L ${pad} ${h - pad} Z`;

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium">This week</div>
        <div className="text-sm text-gray-500">
          Total: {Number(totalHours).toFixed(1)} hrs
        </div>
      </div>

      <div className="mt-3">
        <div className="rounded-lg bg-white p-3 shadow-sm">
          <svg
            viewBox={`0 0 ${w} ${h}`}
            width="100%"
            height={h}
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="gradArea" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.02" />
              </linearGradient>
            </defs>

            {/* horizontal grid lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((t, idx) => {
              const y = pad + (h - pad * 2) * t;
              return (
                <line
                  key={idx}
                  x1={pad}
                  x2={w - pad}
                  y1={y}
                  y2={y}
                  stroke="#e6e7eb"
                  strokeWidth={1}
                />
              );
            })}

            {/* area under line */}
            <path d={areaPath} fill="url(#gradArea)" stroke="none" />

            {/* line */}
            <path
              d={linePath}
              fill="none"
              stroke="#7c3aed"
              strokeWidth={2.5}
              strokeLinejoin="round"
              strokeLinecap="round"
            />

            {/* point markers */}
            {points.map((p) => (
              <g key={p.i}>
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={3.5}
                  fill="#fff"
                  stroke="#7c3aed"
                  strokeWidth={2}
                />
                <circle cx={p.x} cy={p.y} r={2} fill="#7c3aed" />
                <title>{`${days[p.i]}: ${p.val} hrs`}</title>
              </g>
            ))}
          </svg>

          <div className="mt-2 flex items-center justify-between px-1">
            {days.map((d, i) => (
              <div
                key={d}
                className="text-[11px] text-gray-500 w-1/7 text-center"
                style={{ width: `${100 / 7}%` }}
              >
                {d}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInformation;
