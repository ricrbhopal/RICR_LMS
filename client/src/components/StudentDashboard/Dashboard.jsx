import React, { useState } from "react";

const Dashboard = () => {
  const cards = [
    {
      id: 1,
      title: "Academic Score",
      value: "92%",
      subtitle: "Average score",
      icon: "💯",
    },
    {
      id: 2,
      title: "Assignment Status",
      value: "5/8",
      subtitle: "Completed",
      icon: "📝",
    },
    {
      id: 3,
      title: "Learning Streak",
      value: "12 days",
      subtitle: "Keep it up!",
      icon: "🔥",
    },
    {
      id: 4,
      title: "Skills Acquired",
      value: "7/15",
      subtitle: "Technical skills",
      icon: "🎯",
    },
  ];

  const events = [
    {
      id: 1,
      date: "2025-11-18",
      title: "Data Structures Webinar",
      time: "10:00 AM",
      location: "https://example.com/webinar-link",
      type: "webinar",
    },
    {
      id: 2,
      date: "2025-11-20",
      title: "Mock Test - DS",
      time: "2:00 PM",
      location: "AV lab-2",
      type: "test",
    },
    {
      id: 3,
      date: "2025-11-22",
      title: "Project Presentation",
      time: "11:00 AM",
      location: "Audi 1",
      type: "presentation",
    },
    {
      id: 4,
      date: "2025-11-25",
      title: "Revision Session - MERN",
      time: "3:00 PM",
      location: "AV lab-3",
      type: "revision",
    },
    {
      id: 5,
      date: "2025-11-28",
      title: "Doubt Clearing Session",
      time: "4:00 PM",
      location: "AV lab-4",
      type: "doubt",
    },
    {
      id: 6,
      date: "2025-11-30",
      title: "Extra Class - React",
      time: "5:00 PM",
      location: "AV lab-5",
      type: "extra",
    },
  ];

  const getClassColor = (type) => {
    switch (type) {
      case "webinar":
        return "bg-blue-200 text-blue-700";
      case "test":
        return "bg-fuchsia-200 text-fuchsia-700";
      case "presentation":
        return "bg-lime-200 text-lime-700";
      case "revision":
        return "bg-amber-200 text-amber-700";
      case "doubt":
        return "bg-red-200 text-red-700";
      case "extra":
        return "bg-teal-200 text-teal-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const students = [
    { id: 1, name: "Aisha Khan", rank: 1, linkedin: "https://linkedin.com" },
    { id: 2, name: "Ravi Patel", rank: 2, linkedin: "https://linkedin.com" },
    { id: 3, name: "Sana Mir", rank: 3, linkedin: "https://linkedin.com" },
    { id: 4, name: "Vikram Rao", rank: 4, linkedin: "https://linkedin.com" },
    { id: 5, name: "Bhavya Singh", rank: 5, linkedin: "https://linkedin.com" },
  ];

  // sample weekly hours data (Mon -> Sun)
  const weeklyHours = [1.5, 2.0, 3.0, 2.5, 1.0, 0.5, 0.5];

  const totalHours = weeklyHours.reduce((a, b) => a + b, 0);

  // selected calendar date (ISO string like '2025-11-18')
  const [selectedDate, setSelectedDate] = useState(null);

  // simple helper to format date for display
  const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
  };

  return (
    <div className="p-6 min-h-screen">
      <div className="max-w-8xl mx-auto">
        <div className="bg-[#caeaff] rounded-2xl shadow px-6 pt-1 pb-6">
          <div className="grid md:grid-cols-4 gap-6 mt-6">
            <div className="grid md:col-span-3 gap-6">
              {/* Weekly activity + Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow">
                  <h4 className="text-lg font-semibold">Weekly Activity</h4>
                  <p className="text-sm text-gray-500">
                    Hours spent on the learning platform this week
                  </p>

                  <WeeklyHoursChart
                    weeklyHours={weeklyHours}
                    totalHours={totalHours}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cards.map((c) => (
                    <div
                      key={c.id}
                      className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <p className="text-sm font-medium text-gray-600">
                          {c.title}
                        </p>
                        <span className="text-2xl">{c.icon}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mt-2">
                        {c.value}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">{c.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Class Student List - Card Grid Layout */}

              <div className="flex md:flex-row gap-5 items-start">
                <div className="bg-white rounded-lg p-5 shadow w-full border border-gray-200">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        Class Student List
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        Top performers in your batch
                      </p>
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Top 5 rankers</span>
                    </div>
                  </div>

                  <div className="flex gap-2 overflow-x-auto pb-2 justify-center">
                    {students.map((s) => {
                      return (
                        <div
                          key={s.id}
                          className="group bg-gray-50 hover:bg-gray-100 rounded-lg p-4 transition-colors duration-200 border border-gray-200 w-45 shrink-0"
                        >
                          <div className="flex flex-col items-center text-center">
                            {/* Avatar */}
                            <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-white shadow-sm">
                              <img
                                src={`https://i.pravatar.cc/150?img=${
                                  s.id + 10
                                }`}
                                alt={s.name}
                                className="w-full h-full object-cover grayscale-100"
                              />
                            </div>

                            {/* Student info */}
                            <div className="mb-3 w-full">
                              <div className="flex items-center justify-center gap-2 mb-1">
                                <h5 className="font-medium text-gray-900">
                                  {s.name}
                                </h5>
                              </div>
                              <div className="text-xs text-gray-500">
                                Score: {95 - s.rank}%
                              </div>
                            </div>

                            {/* LinkedIn button */}
                            <a
                              href={s.linkedin}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-1.5 px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white text-xs font-medium rounded transition-colors duration-200 w-full justify-center"
                            >
                              <svg
                                className="w-3.5 h-3.5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                              </svg>
                              <span>LinkedIn</span>
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Right sidebar: upcoming events */}
            <div className=" bg-white rounded-lg p-4 shadow grid justify-center h-fit">
              <h4 className="text-md mb-3 text-center text-gray-500">Events</h4>

              <div className="grid gap-6">
                {/* Simple calendar preview */}
                <div className="w-60">
                  <div className="flex justify-between items-center font-medium mb-2">
                    <div>{"<"}</div>
                    <span>November 2025</span>
                    <div>{">"}</div>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-xs text-center">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                      (d) => (
                        <div key={d} className="text-gray-400 py-1">
                          {d}
                        </div>
                      )
                    )}
                    {Array.from({ length: 30 }).map((_, i) => {
                      const day = i + 1;
                      const iso = `2025-11-${String(day).padStart(2, "0")}`;
                      const ev = events.find((e) => e.date === iso);
                      const hasEvent = !!ev;
                      const isSelected = selectedDate === iso;
                      const baseClasses = "p-2 rounded text-center select-none";
                      const hoverClass = hasEvent
                        ? "cursor-pointer"
                        : "cursor-pointer hover:bg-gray-100";
                      const eventClass = hasEvent
                        ? getClassColor(ev.type) + " font-semibold"
                        : "text-gray-700";
                      const selectedClass = isSelected
                        ? "ring-2 ring-purple-300 font-semibold"
                        : "";
                      return (
                        <div
                          key={i}
                          onClick={() => setSelectedDate(iso)}
                          className={`${baseClasses} ${hoverClass} ${
                            isSelected ? selectedClass : eventClass
                          }`}
                        >
                          {day}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <hr className="text-gray-300" />
                {/* Events list (shows events for selected date or upcoming events) */}
                <div className="flex-1 space-y-3 overflow-y-auto max-h-64">
                  {selectedDate ? (
                    <div className="flex items-center gap-4">
                      <div
                        className={`text-sm grid place-items-center border px-3 rounded ${getClassColor(
                          events.find((e) => e.date === selectedDate)?.type
                        )}`}
                      >
                        <span className="text-lg">
                          {formatDate(selectedDate).split(" ")[1]}
                        </span>
                        <span className="text-xs">
                          {formatDate(selectedDate).split(" ")[0]}
                        </span>
                      </div>
                      {events.filter((e) => e.date === selectedDate).length >
                      0 ? (
                        events
                          .filter((e) => e.date === selectedDate)
                          .map((ev) => (
                            <div
                              key={ev.id}
                              className="border-b last:border-b-0"
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="text-sm font-medium">
                                    {ev.title}
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    {ev.time}
                                  </div>
                                  {ev.type === "webinar" ? (
                                    <div className="text-xs text-blue-600">
                                      <a
                                        href={ev.location}
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        Join Webinar Link
                                      </a>
                                    </div>
                                  ) : (
                                    <div
                                      className="text-xs text-gray-400 cursor-pointer"
                                      title="In case of webinar need a link to join the class"
                                    >
                                      RICR : {ev.location}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))
                      ) : (
                        <div className="text-sm text-gray-500">
                          No events for the selected date.
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500">
                      Click a date to see events for that day.
                    </div>
                  )}
                </div>
              </div>
            </div>
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

export default Dashboard;
