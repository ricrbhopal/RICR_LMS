import React, { useState, useMemo } from "react";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const Attendance = ({ student }) => {
  // Calendar state
  const [viewDate, setViewDate] = useState(() => new Date());
  const [selectedDate, setSelectedDate] = useState(() =>
    new Date().toISOString().slice(0, 10)
  );
  const [selectedModule, setSelectedModule] = useState(student.modules[0]);

  // Generate attendance data for each module with date-wise records
  const generateModuleAttendanceData = () => {
    const data = {};
    student.modules.forEach((module) => {
      const records = {};
      const startDate = new Date(2025, 0, 1);
      const endDate = new Date();

      for (
        let d = new Date(startDate);
        d <= endDate;
        d.setDate(d.getDate() + 1)
      ) {
        const year = d.getFullYear();
        const month = d.getMonth();
        const day = d.getDate();
        const iso = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const dayOfWeek = d.getDay();

        // Only weekdays
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
          const rand = Math.random();
          if (rand > 0.92) {
            records[iso] = "Absent";
          } else if (rand > 0.88) {
            records[iso] = "Late";
          } else {
            records[iso] = "Present";
          }
        }
      }

      data[module] = records;
    });
    return data;
  };

  const moduleAttendanceData = useMemo(
    () => generateModuleAttendanceData(),
    [student.modules]
  );

  // Calculate statistics for selected module
  const getModuleStats = (module) => {
    const records = moduleAttendanceData[module] || {};
    const present = Object.values(records).filter(
      (s) => s === "Present"
    ).length;
    const absent = Object.values(records).filter((s) => s === "Absent").length;
    const late = Object.values(records).filter((s) => s === "Late").length;
    const total = present + absent + late;
    const percentage = total > 0 ? Math.floor((present / total) * 100) : 0;

    return { present, absent, late, total, percentage };
  };

  // Get all modules stats
  const allModulesStats = student.modules.map((module) => ({
    name: module,
    ...getModuleStats(module),
  }));

  // Calculate total
  const totalClasses = allModulesStats.reduce((acc, m) => acc + m.total, 0);
  const totalPresent = allModulesStats.reduce((acc, m) => acc + m.present, 0);
  const totalAbsent = allModulesStats.reduce((acc, m) => acc + m.absent, 0);
  const totalLate = allModulesStats.reduce((acc, m) => acc + m.late, 0);

  // Calendar navigation
  const prevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  // Get days in current month view
  const daysInMonth = useMemo(() => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysArray = [];

    // Helper function to create ISO string without timezone issues
    const toISOLocal = (year, month, day) => {
      return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    };

    // Add padding days from previous month
    const firstDayOfWeek = firstDay.getDay();
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const d = new Date(year, month, -i);
      daysArray.push({
        date: d.getDate(),
        iso: toISOLocal(d.getFullYear(), d.getMonth(), d.getDate()),
        isCurrentMonth: false,
      });
    }

    // Add days of current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      daysArray.push({
        date: i,
        iso: toISOLocal(year, month, i),
        isCurrentMonth: true,
      });
    }

    // Add padding days from next month
    const remainingDays = 7 - (daysArray.length % 7);
    if (remainingDays < 7) {
      for (let i = 1; i <= remainingDays; i++) {
        daysArray.push({
          date: i,
          iso: toISOLocal(year, month + 1, i),
          isCurrentMonth: false,
        });
      }
    }

    return daysArray;
  }, [viewDate]);

  const getAttendanceStatus = (iso) => {
    return moduleAttendanceData[selectedModule]?.[iso] || null;
  };

  const statusToClasses = (status) => {
    switch (status) {
      case "Present":
        return {
          bg: "bg-emerald-100",
          text: "text-emerald-800",
          border: "border-emerald-400",
        };
      case "Absent":
        return {
          bg: "bg-red-100",
          text: "text-red-800",
          border: "border-red-400",
        };
      case "Late":
        return {
          bg: "bg-amber-100",
          text: "text-amber-800",
          border: "border-amber-400",
        };
      default:
        return {
          bg: "bg-slate-100",
          text: "text-slate-600",
          border: "border-slate-200",
        };
    }
  };

  // Get stats for selected month
  const getMonthStats = () => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const records = moduleAttendanceData[selectedModule] || {};

    let present = 0,
      absent = 0,
      late = 0;

    Object.entries(records).forEach(([iso, status]) => {
      const [isoYear, isoMonth] = iso.split('-').map(Number);
      if (isoYear === year && isoMonth - 1 === month) {
        if (status === "Present") present++;
        else if (status === "Absent") absent++;
        else if (status === "Late") late++;
      }
    });

    return { present, absent, late };
  };

  const monthStats = getMonthStats();

  return (
    <div className="space-y-6">
      {/* Attendance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Overall Attendance */}
        <div className="bg-linear-to-r from-emerald-50 to-emerald-100 rounded-lg p-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-emerald-900">
                Overall <br />
                Attendance
              </h3>
            </div>
            <div className="text-3xl font-semibold text-emerald-600">
              {student.attendance}%
            </div>
          </div>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-2">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-200 p-3 rounded-lg">
              <FaCheckCircle className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-lg text-emerald-700 font-medium">Present</p>
              <p className="text-xl font-bold text-emerald-500">
                {totalPresent}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-2">
          <div className="flex items-center gap-3">
            <div className="bg-red-200 p-3 rounded-lg">
              <FaTimesCircle className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="text-lg text-red-600 font-medium">Absent</p>
              <p className="text-xl font-bold text-red-700">{totalAbsent}</p>
            </div>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-2">
          <div className="flex items-center gap-3">
            <div className="bg-amber-200 p-3 rounded-lg">
              <FaClock className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-lg text-amber-600 font-medium">Late</p>
              <p className="text-xl font-bold text-amber-700">{totalLate}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Module Selector and Calendar */}
        <div className="bg-slate-50 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-4">
            Attendance Calendar
          </h3>

          {/* Module Selector */}
          <div className="mb-4 flex flex-wrap gap-2">
            {student.modules.map((module) => (
              <button
                key={module}
                onClick={() => setSelectedModule(module)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedModule === module
                    ? "bg-blue-600 text-white"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {module}
              </button>
            ))}
          </div>

          {/* Calendar */}
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={prevMonth}
                className="px-2 py-1 rounded hover:bg-slate-100"
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
                className="px-2 py-1 rounded hover:bg-slate-100"
              >
                {">"}
              </button>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-8 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-emerald-200" />
                <span className="text-xs text-slate-600">Present</span>
                <span className="text-emerald-700 font-bold">
                  {monthStats.present}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-red-200" />
                <span className="text-xs text-slate-600">Absent</span>
                <span className="text-red-700 font-bold">
                  {monthStats.absent}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-amber-200" />
                <span className="text-xs text-slate-600">Late</span>
                <span className="text-amber-700 font-bold">
                  {monthStats.late}
                </span>
              </div>
            </div>

            {/* Day Headers */}
            <div className="grid grid-cols-7 gap-1 text-xs text-center text-slate-500 mb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="py-1">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-1 text-sm text-center">
              {daysInMonth.map((d, idx) => {
                const status = getAttendanceStatus(d.iso);
                const classes = statusToClasses(status);
                const isSelected = selectedDate === d.iso;
                const isToday = d.iso === new Date().toISOString().slice(0, 10);

                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedDate(d.iso)}
                    className={`
                    p-1 rounded cursor-pointer relative
                    ${!d.isCurrentMonth ? "opacity-40" : ""}
                    hover:opacity-80
                  `}
                  >
                    <div
                      className={`
                      w-8 h-8 flex items-center justify-center rounded mx-auto
                      ${
                        status
                          ? classes.bg + " " + classes.text
                          : "bg-slate-100 text-slate-600"
                      }
                      ${
                        isToday && d.isCurrentMonth
                          ? "ring-2 ring-blue-500"
                          : ""
                      }
                      ${isSelected ? "ring-2 ring-blue-400" : ""}
                    `}
                    >
                      {d.date}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Module-wise Statistics */}
        <div className="bg-slate-50 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-4">
            Module-wise Statistics
          </h3>
          <div className="space-y-3">
            {allModulesStats.map((module, idx) => {
              const total = module.present + module.absent + module.late;
              const percentage = Math.floor((module.present / total) * 100);

              return (
                <div
                  key={idx}
                  className="bg-white rounded-lg border border-slate-200"
                >
                  {/* Stats */}
                  <div className="grid grid-cols-5 gap-2">
                    <div className="flex flex-col justify-between items-center border-r border-slate-200 pr-3 bg-gray-100 p-4">
                      <span className="text-sm font-semibold text-slate-800">
                        {module.name}
                      </span>
                      <span
                        className={`text-base font-bold ${
                          percentage >= 90
                            ? "text-emerald-600"
                            : percentage >= 75
                            ? "text-amber-600"
                            : "text-red-600"
                        }`}
                      >
                        {percentage}%
                      </span>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                      <p className="text-xs text-slate-600">Total</p>
                      <p className="text-sm font-semibold text-slate-800">
                        {total}
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-xs text-emerald-600">Present</p>
                      <p className="text-sm font-semibold text-emerald-700">
                        {module.present}
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-xs text-red-600">Absent</p>
                      <p className="text-sm font-semibold text-red-700">
                        {module.absent}
                      </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-xs text-amber-600">Late</p>
                      <p className="text-sm font-semibold text-amber-700">
                        {module.late}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* Selected Date Details */}
            {selectedDate && (
              <div className="mt-4 bg-white p-3 rounded-lg border border-slate-200">
                <div className="text-xs text-slate-600 mb-1">
                  {(() => {
                    const [year, month, day] = selectedDate.split('-').map(Number);
                    return new Date(year, month - 1, day).toLocaleDateString(undefined, {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    });
                  })()}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-600 flex gap-3">
                      <span className="font-semibold">Attendance Status:</span>
                      {moduleAttendanceData[selectedModule]?.[selectedDate] || "N/A"}
                    </p>
                    <p className="text-xs text-slate-600 flex gap-3">
                      <span className="font-semibold">Remarks:</span>
                      <span>
                        {moduleAttendanceData[selectedModule]?.[selectedDate]
                          ? "Some remarks about the attendance on this date by the teacher."
                          : "No attendance data available for this date."}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
