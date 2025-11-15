import React, { useMemo, useState } from "react";

const Attendence = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  // demo stats
  const totalStudents = 550;
  const totalTeachers = 20;

  // demo monthly attendance overview (6 months)
  const months = ["Apr", "May", "Jun", "Jul", "Aug", "Sep"];

  // --- month selector state (last 6 months) ---
  const now = new Date();
  const last6Months = Array.from({ length: 6 }).map((_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - (5 - i), 1);
    const label = d.toLocaleString(undefined, { month: "short", year: "numeric" });
    const iso = d.toISOString().slice(0, 7); // YYYY-MM
    return { label, iso };
  });

  // last 12 months (for dropdown under graph)
  const last12Months = Array.from({ length: 12 }).map((_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - (11 - i), 1);
    const label = d.toLocaleString(undefined, { month: "short", year: "numeric" });
    const iso = d.toISOString().slice(0, 7); // YYYY-MM
    return { label, iso };
  });

  const [selectedMonth, setSelectedMonth] = useState(last12Months[last12Months.length - 1].iso);

  // per-course attendance demo data
  const perCourseRecords = {
    Java: [
      { dateISO: "2025-04-05", status: "Present" },
      { dateISO: "2025-04-12", status: "Absent" },
      { dateISO: "2025-05-02", status: "Present" },
      { dateISO: "2025-05-10", status: "Present" },
      { dateISO: "2025-06-15", status: "Leave" },
      { dateISO: "2025-07-09", status: "Present" },
      { dateISO: "2025-08-20", status: "Present" },
      { dateISO: "2025-09-14", status: "Present" },
      { dateISO: "2025-11-12", status: "Present" },
      { dateISO: "2025-11-13", status: "Absent" },
      { dateISO: "2025-11-14", status: "Present" },
    ],
    "Java + DSA": [
      { dateISO: "2025-04-03", status: "Present" },
      { dateISO: "2025-05-08", status: "Present" },
      { dateISO: "2025-06-02", status: "Present" },
      { dateISO: "2025-07-12", status: "Absent" },
      { dateISO: "2025-08-18", status: "Present" },
      { dateISO: "2025-09-25", status: "Present" },
      { dateISO: "2025-11-18", status: "Present" },
      { dateISO: "2025-11-20", status: "Present" },
    ],
    MERN: [
      { dateISO: "2025-04-10", status: "Absent" },
      { dateISO: "2025-05-15", status: "Present" },
      { dateISO: "2025-06-05", status: "Present" },
      { dateISO: "2025-07-21", status: "Leave" },
      { dateISO: "2025-08-11", status: "Present" },
      { dateISO: "2025-09-08", status: "Absent" },
      { dateISO: "2025-11-22", status: "Present" },
      { dateISO: "2025-11-25", status: "Present" },
      { dateISO: "2025-11-28", status: "Present" },
      { dateISO: "2025-11-30", status: "Present" },
    ],
    Apptitude: [
      { dateISO: "2025-04-02", status: "Present" },
      { dateISO: "2025-05-06", status: "Present" },
      { dateISO: "2025-06-14", status: "Absent" },
      { dateISO: "2025-07-19", status: "Present" },
      { dateISO: "2025-08-24", status: "Present" },
      { dateISO: "2025-09-30", status: "Leave" },
      { dateISO: "2025-11-18", status: "Present" },
    ],
  };

  const courseList = ["Java", "Java + DSA", "MERN", "Apptitude"];
  const [selectedCourse, setSelectedCourse] = useState(courseList[0]);

  const getCourseRecords = (course) => perCourseRecords[course] || [];

  const countsForMonth = (monthIso) => {
    const recs = getCourseRecords(selectedCourse).filter((r) => r.dateISO.startsWith(monthIso));
    const present = recs.filter((r) => r.status === "Present").length;
    const absent = recs.filter((r) => r.status === "Absent").length;
    const leave = recs.filter((r) => r.status === "Leave").length;
    return { present, absent, leave, total: recs.length };
  };

  const monthCounts = countsForMonth(selectedMonth);

  // compute monthly attendance totals (present count) for the last6Months for the selected course
  const monthlyData = useMemo(() => {
    return last6Months.map((m) => {
      const iso = m.iso; // YYYY-MM
      const recs = getCourseRecords(selectedCourse).filter((r) => r.dateISO.startsWith(iso));
      const present = recs.filter((r) => r.status === "Present").length;
      return present;
    });
  }, [selectedCourse]);

  // per-month Present/Absent/Leave counts for the selected course (for the last6Months)
  const monthSummaries = useMemo(() => {
    return last6Months.map((m) => {
      const iso = m.iso;
      const recs = getCourseRecords(selectedCourse).filter((r) => r.dateISO.startsWith(iso));
      return {
        month: m.label.split(" ")[0],
        present: recs.filter((r) => r.status === "Present").length,
        absent: recs.filter((r) => r.status === "Absent").length,
        leave: recs.filter((r) => r.status === "Leave").length,
      };
    });
  }, [selectedCourse]);

  // helper: get attendance status for selected course on a specific date
  const getAttendanceStatus = (iso) => {
    const rec = getCourseRecords(selectedCourse).find((r) => r.dateISO === iso);
    return rec ? rec.status : "No record";
  };

  // total present days for the selected course
  const totalDaysAttended = getCourseRecords(selectedCourse).filter((r) => r.status === "Present").length;

  // create a smooth SVG path from points using Catmull-Rom to Bezier conversion
  const catmullRom2bezier = (points) => {
    if (!points || points.length < 2) return "";
    const cr = (p0, p1, p2, p3, t) => {
      // not used directly
      return 0;
    };
    const d = [];
    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      d.push([p.x, p.y]);
    }
    const path = [];
    path.push(`M ${d[0][0]} ${d[0][1]}`);
    for (let i = 0; i < d.length - 1; i++) {
      const p0 = i === 0 ? d[0] : d[i - 1];
      const p1 = d[i];
      const p2 = d[i + 1];
      const p3 = i + 2 < d.length ? d[i + 2] : p2;

      const control1x = p1[0] + (p2[0] - p0[0]) / 6;
      const control1y = p1[1] + (p2[1] - p0[1]) / 6;
      const control2x = p2[0] - (p3[0] - p1[0]) / 6;
      const control2y = p2[1] - (p3[1] - p1[1]) / 6;

      path.push(`C ${control1x} ${control1y}, ${control2x} ${control2y}, ${p2[0]} ${p2[1]}`);
    }
    return path.join(" ");
  };

  // small holiday/notice demo
  const notices = [
    { id: 1, type: "exam", title: "Up coming Examination", date: "25 Sep 2025", body: "Final theory exams start from 25 Sep." },
    { id: 2, type: "holiday", title: "Founder's Day", date: "19 Nov 2025", body: "College closed for Founder's Day." },
  ];

  // simple helper to format ISO to day number
  const formatDay = (iso) => {
    try {
      return new Date(iso).getDate();
    } catch (e) {
      return "";
    }
  };

  // calendar view state (allows previous/next month navigation)
  const [viewDate, setViewDate] = useState(() => {
    const t = new Date();
    return new Date(t.getFullYear(), t.getMonth(), 1);
  });

  const viewYear = viewDate.getFullYear();
  const viewMonth = viewDate.getMonth();

  const prevMonth = () => setViewDate((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1));
  const nextMonth = () => setViewDate((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1));

  // specific colored marks to match the sample image
  const calendarMarks = [
    { dateISO: `${viewYear}-11-18`, bg: "bg-blue-200", text: "text-blue-800" },
    { dateISO: `${viewYear}-11-20`, bg: "bg-pink-200", text: "text-pink-800" },
    { dateISO: `${viewYear}-11-22`, bg: "bg-green-200", text: "text-green-800" },
    { dateISO: `${viewYear}-11-25`, bg: "bg-amber-200", text: "text-amber-800" },
    { dateISO: `${viewYear}-11-28`, bg: "bg-rose-200", text: "text-rose-800" },
    { dateISO: `${viewYear}-11-30`, bg: "bg-teal-200", text: "text-teal-800" },
  ];

  const daysInMonth = useMemo(() => {
    const numDays = new Date(viewYear, viewMonth + 1, 0).getDate();
    const arr = [];
    for (let d = 1; d <= numDays; d++) {
      const iso = new Date(viewYear, viewMonth, d).toISOString().slice(0, 10);
      arr.push({ day: d, iso });
    }
    return arr;
  }, [viewYear, viewMonth]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: big attendance overview */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold mt-2">Attendance Overview</h3>
     

              </div>

            </div>

            <div className="mt-6">
              <div className="rounded-lg p-4 bg-white">
                {/* Course selector cards */}
                <div className="mb-4 flex items-center gap-3">
                  {courseList.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedCourse(c)}
                      className={`px-3 py-2 rounded-lg border ${selectedCourse === c ? 'bg-blue-100 text-blue-700 border-transparent' : 'bg-white text-gray-700 border-gray-200'} shadow-sm`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                <svg viewBox="0 0 600 220" width="100%" height="220">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.02" />
                    </linearGradient>
                  </defs>

                  {/* grid lines */}
                  {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
                    <line key={i} x1={40} x2={560} y1={40 + t * 140} y2={40 + t * 140} stroke="#eef2ff" strokeWidth="1" />
                  ))}

                  {/* compute points from monthlyData and draw a smoothed area+line */}
                  {(() => {
                    const data = monthlyData;
                    const w = 520;
                    const h = 140;
                    const pad = 40;
                    const max = Math.max(...data, 1);
                    const step = w / Math.max(1, data.length - 1);
                    const points = data.map((val, i) => {
                      const x = pad + i * step;
                      const y = pad + (h - (val / max) * h);
                      return { x, y, val };
                    });

                    const smoothPath = points.length > 1 ? catmullRom2bezier(points) : `M ${points[0].x} ${points[0].y}`;
                    const areaPath = `${smoothPath} L ${pad + (data.length - 1) * step} ${pad + h} L ${pad} ${pad + h} Z`;

                    return (
                      <g>
                        <path d={areaPath} fill="url(#g1)" stroke="none" />
                        <path d={smoothPath} fill="none" stroke="#7c3aed" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
                        {points.map((p, idx) => (
                          <g key={idx}>
                            <circle cx={p.x} cy={p.y} r={6} fill="#fff" stroke="#7c3aed" strokeWidth="2" />
                            <circle cx={p.x} cy={p.y} r={3} fill="#7c3aed" />
                          </g>
                        ))}
                      </g>
                    );
                  })()}
                </svg>

                {/* Dropdown for 12 months (user can pick any of the last 12 months) */}
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <label className="text-sm text-gray-600">Select Month:</label>
                    <select
                      value={selectedMonth}
                      onChange={(e) => setSelectedMonth(e.target.value)}
                      className="border rounded px-2 py-1 text-sm"
                    >
                      {last12Months.map((m) => (
                        <option key={m.iso} value={m.iso}>
                          {m.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="text-sm text-gray-500">Total (chart): {monthlyData.reduce((a, b) => a + b, 0)}</div>
                </div>

                {/* show selected month's P/A/L summary */}
                <div className="mt-3 p-3 bg-gray-50 rounded-lg text-sm">
                  <div className="font-medium">{(last12Months.find(m => m.iso === selectedMonth) || {}).label}</div>
                  <div className="mt-2 flex gap-4 text-sm">
                    <div className="text-green-700">P: {monthCounts.present}</div>
                    <div className="text-rose-600">A: {monthCounts.absent}</div>
                    <div className="text-amber-700">L: {monthCounts.leave}</div>
                    <div className="text-gray-500">Total: {monthCounts.total}</div>
                  </div>
                </div>

                {/* Month-by-month summary for the selected course */}
                <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                  {monthSummaries.map((s) => (
                    <div key={s.month} className="bg-gray-50 rounded-lg p-2 text-center">
                      <div className="text-xs text-gray-500">{s.month}</div>
                      <div className="mt-1 text-sm">
                        <div className="text-green-700">P: {s.present}</div>
                        <div className="text-rose-600">A: {s.absent}</div>
                        <div className="text-amber-700">L: {s.leave}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar: calendar + notice */}
          <div className="bg-white rounded-2xl p-4 shadow">
            <div className=" items-center justify-between mb-2">
              <div className="text-center text-sm text-gray-600 font-medium">Calendar</div>
              <div className="flex items-center justify-center gap-3">
                <button onClick={prevMonth} aria-label="Previous month" className="px-2 py-1 rounded hover:bg-gray-100">{'<'}</button>
                <div className="text-sm font-semibold">{viewDate.toLocaleString(undefined, { month: 'long', year: 'numeric' })}</div>
                <button onClick={nextMonth} aria-label="Next month" className="px-2 py-1 rounded hover:bg-gray-100">{'>'}</button>
              </div>
            </div>

            {/* Legend for attendance statuses */}
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-green-300 inline-block" />
                <span className="text-xs text-gray-600">Present</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-rose-300 inline-block" />
                <span className="text-xs text-gray-600">Absent</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-amber-300 inline-block" />
                <span className="text-xs text-gray-600">Leave</span>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1 text-xs text-center text-gray-500 mb-2">
              {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((d) => (
                <div key={d} className="py-1">{d}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1 text-sm text-center">
              {daysInMonth.map((d) => {
                const isSelected = selectedDate === d.iso;
                const status = getAttendanceStatus(d.iso);
                const mark = calendarMarks.find((m) => m.dateISO === d.iso);
                const statusBg = mark ? mark.bg : status === 'Present' ? 'bg-green-100' : status === 'Absent' ? 'bg-rose-100' : status === 'Leave' ? 'bg-amber-100' : '';
                const statusText = mark ? mark.text : status === 'Present' ? 'text-green-800' : status === 'Absent' ? 'text-rose-800' : status === 'Leave' ? 'text-amber-800' : 'text-gray-800';
                return (
                  <div
                    key={d.iso}
                    onClick={() => setSelectedDate(d.iso)}
                    className={`p-1 rounded cursor-pointer ${isSelected ? 'ring-2 ring-purple-300' : 'hover:bg-gray-50'} relative`}
                    title={status}
                  >
                    <div className={`w-8 h-8 grid place-items-center rounded ${statusBg} ${statusText} mx-auto`}>{d.day}</div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4">
              <div className="text-sm text-gray-600 font-medium">Selected Date</div>
              <div className="mt-2">
                {selectedDate ? (
                  <div>
                    <div className="text-sm font-semibold">{selectedDate}</div>
                    <div className="mt-2">
                      {(() => {
                        const s = getAttendanceStatus(selectedDate);
                        if (s === 'Present') return <span className="px-3 py-1 rounded bg-green-100 text-green-800">Present</span>;
                        if (s === 'Leave') return <span className="px-3 py-1 rounded bg-amber-100 text-amber-800">On Leave</span>;
                        if (s === 'Absent') return <span className="px-3 py-1 rounded bg-rose-100 text-rose-800">Absent</span>;
                        return <span className="px-3 py-1 rounded bg-gray-100 text-gray-700">No record</span>;
                      })()}
                    </div>

              
                  </div>
                ) : (
                  <div className="text-sm text-gray-400">Click a date to see attendance status.</div>
                )}
              </div>
            </div>

            <div className="mt-6">
              <div className="text-lg font-medium mb-2 text-center">Notices</div>

              <div className="mb-3">
                {notices.filter(n => n.type === 'exam').map(n => (
                  <div key={n.id} className="bg-gray-50 rounded-lg p-3 mb-2">
                    <div className="text-sm font-medium">{n.title}</div>
                    <div className="text-xs text-gray-500">{n.date}</div>
                    <div className="text-xs text-gray-600 mt-1">{n.body}</div>
                  </div>
                ))}
              </div>

              <div>
                {notices.filter(n => n.type === 'holiday').map(n => (
                  <div key={n.id} className="bg-gray-50 rounded-lg p-3 mb-2">
                    <div className="text-sm font-medium">{n.title}</div>
                    <div className="text-xs text-gray-500">{n.date}</div>
                    <div className="text-xs text-gray-600 mt-1">{n.body}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Attendence;