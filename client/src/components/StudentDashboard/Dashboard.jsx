import React, { useState, useRef, useEffect } from "react";
import { HiBadgeCheck, HiChevronDown } from "react-icons/hi";
import {
  FiSearch,
  FiBell,
  FiMessageCircle,
  FiCalendar,
  FiUserCheck,
  FiCheckCircle,
} from "react-icons/fi";
import { CiUnread } from "react-icons/ci";

import { FaRupeeSign, FaBriefcase, FaBook, FaGift } from "react-icons/fa";

const Dashboard = () => {
  const student = {
    name: "John Doe",
    year: "3rd year",
    avatar: "https://i.pravatar.cc/150?img=12",
    studentId: "RICR2025-014",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    batch: "Batch A - Nov 2025",
  };

  const badges = [
    { id: 1, title: "Active Learner", color: "bg-purple-100 text-purple-700" },
    { id: 2, title: "Top Performer", color: "bg-yellow-100 text-yellow-700" },
    { id: 3, title: "Team Player", color: "bg-green-100 text-green-700" },
  ];

  const cards = [
    { id: 1, title: "Score", value: "92%", subtitle: "Average score" },
    { id: 2, title: "Leave Status", value: "1 day", subtitle: "Last month" },
    { id: 3, title: "Fee Status", value: "Paid", subtitle: "No due" },
    {
      id: 4,
      title: "Total Referrals",
      value: "3",
      subtitle: "Rewards pending",
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

  // map notification category to an icon
  const getNotifIcon = (category) => {
    switch (category) {
      case "fees":
        return <FaRupeeSign className="w-4 h-4" />;
      case "event":
        return <FiCalendar className="w-4 h-4" />;
      case "leave":
        return <FiUserCheck className="w-4 h-4" />;
      case "learning":
        return <FaBook className="w-4 h-4" />;
      case "Job & Internships":
        return <FaBriefcase className="w-4 h-4" />;
      case "cashbacks":
        return <FaGift className="w-4 h-4" />;
      default:
        return <FiBell className="w-4 h-4" />;
    }
  };

  const students = [
    { id: 1, name: "Aisha Khan", rank: 1, linkedin: "https://linkedin.com" },
    { id: 2, name: "Ravi Patel", rank: 2, linkedin: "https://linkedin.com" },
    { id: 3, name: "Sana Mir", rank: 3, linkedin: "https://linkedin.com" },
    { id: 4, name: "Vikram Rao", rank: 4, linkedin: "https://linkedin.com" },
  ];

  // sample weekly hours data (Mon -> Sun)
  const weeklyHours = [1.5, 2.0, 3.0, 2.5, 1.0, 0.5, 0.5];

  const totalHours = weeklyHours.reduce((a, b) => a + b, 0);

  // selected calendar date (ISO string like '2025-11-18')
  const [selectedDate, setSelectedDate] = useState(null);

  // profile modal
  const [showProfile, setShowProfile] = useState(false);

  // notifications dropdown
  const [showNotifications, setShowNotifications] = useState(false);
  const bellRef = useRef(null);
  const notifRef = useRef(null);

  const [notifFilter, setNotifFilter] = useState("all");
  // notification dropdown view mode: 'cards' or 'list'
  const [notifViewMode, setNotifViewMode] = useState("cards");
  const [selectedCategory, setSelectedCategory] = useState(null);

  // initial requested counts: fees:2, event:4, leave:6 (other categories default 0)
  const initialCounts = {
    all: 0,
    fees: 2,
    event: 4,
    leave: 6,
    learning: 2,
    "Job & Internships": 2,
    cashbacks: 1,
  };

  // build initial placeholder notifications (each starts unread: read=false)
  const buildInitialNotifications = () => {
    const arr = [];
    let idCounter = 1;
    Object.entries(initialCounts).forEach(([category, count]) => {
      if (category === "all") return; // skip 'all' as it's not a real category
      for (let i = 1; i <= count; i++) {
        arr.push({
          id: idCounter++,
          category,
          title: `${
            category.charAt(0).toUpperCase() + category.slice(1)
          } notification #${i}`,
          desc: `This is a placeholder ${category} notification (${i}).`,
          time: `${i}d ago`,
          read: false,
        });
      }
    });
    return arr;
  };

  const [notifications, setNotifications] = useState(buildInitialNotifications);

  // leave requests state (used by Leave Status card)
  const [leaveFilter, setLeaveFilter] = useState("month");
  const [leaveRequests, setLeaveRequests] = useState([
    {
      id: 1,
      title: "Emergency Leave",
      dateISO: "2025-11-10",
      color: "bg-rose-50 text-rose-600",
      status: "Pending",
      badge: "",
    },
    {
      id: 2,
      title: "Medical Leave",
      dateISO: "2025-11-12",
      color: "bg-sky-50 text-sky-600",
      status: "Approved",
      badge: "Approved",
    },
    {
      id: 3,
      title: "Medical Leave",
      dateISO: "2025-10-21",
      color: "bg-sky-50 text-sky-600",
      status: "Declined",
      badge: "Declined",
    },
    {
      id: 4,
      title: "Fever",
      dateISO: "2025-11-03",
      color: "bg-rose-50 text-rose-600",
      status: "Approved",
      badge: "Approved",
    },
    {
      id: 5,
      title: "Personal Leave",
      dateISO: "2025-09-15",
      color: "bg-amber-50 text-amber-600",
      status: "Approved",
      badge: "Approved",
    },
    {
      id: 6,
      title: "Medical Leave",
      dateISO: "2024-06-15",
      color: "bg-sky-50 text-sky-600",
      status: "Approved",
      badge: "Approved",
    },
    {
      id: 7,
      title: "Emergency Leave",
      dateISO: "2024-06-16",
      color: "bg-rose-50 text-rose-600",
      status: "Declined",
      badge: "Declined",
    },
    {
      id: 8,
      title: "Sick",
      dateISO: "2025-11-14",
      color: "bg-rose-50 text-rose-600",
      status: "Pending",
      badge: "",
    },
  ]);

  // return leaves filtered by selected range (month / year / week)
  const getFilteredLeaves = () => {
    const now = new Date();
    let start;
    if (leaveFilter === "month") {
      start = new Date(now.getFullYear(), now.getMonth(), 1);
    } else if (leaveFilter === "year") {
      start = new Date(now.getFullYear(), 0, 1);
    } else if (leaveFilter === "week") {
      start = new Date(now);
      start.setDate(now.getDate() - 7);
    } else {
      start = new Date(0);
    }
    const end = now;
    return leaveRequests.filter((l) => {
      const d = new Date(l.dateISO);
      return d >= start && d <= end;
    });
  };

  const handleLeaveFilterChange = (val) => {
    setLeaveFilter(val);
    // keep leaveRequests unchanged; filtering is done by getFilteredLeaves()
  };

  // fees reminders (sample installments)
  const [feesRequests, setFeesRequests] = useState([
    {
      id: 1,
      title: " One",
      amount: "₹2500",
      lastDateISO: "2025-10-25",
      status: "Due",
    },
    {
      id: 2,
      title: " Two",
      amount: "₹2500",
      lastDateISO: "2025-11-10",
      status: "Due",
    },
    {
      id: 3,
      title: " Three",
      amount: "₹2500",
      lastDateISO: "2025-12-05",
      status: "Complete",
    },
  ]);

  const payNow = (id) => {
    setFeesRequests((prev) =>
      prev.map((f) => (f.id === id ? { ...f, status: "Complete" } : f))
    );
  };

  // Payment modal state
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [paymentTarget, setPaymentTarget] = useState(null);
  const [payMode, setPayMode] = useState("upi");
  const [processing, setProcessing] = useState(false);

  const openPayment = (fee) => {
    setPaymentTarget(fee);
    setPayMode("upi");
    setPaymentOpen(true);
  };

  const confirmPayment = () => {
    if (!paymentTarget) return;
    setProcessing(true);
    // simulate async payment processing
    setTimeout(() => {
      payNow(paymentTarget.id);
      setProcessing(false);
      setPaymentOpen(false);
      setPaymentTarget(null);
    }, 900);
  };

  const getUnreadCount = (key) => {
    if (key === "all") return notifications.filter((n) => !n.read).length;
    return notifications.filter((n) => n.category === key && !n.read).length;
  };

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllRead = (category) => {
    setNotifications((prev) =>
      prev.map((n) => {
        if (!category || category === "all") return { ...n, read: true };
        return n.category === category ? { ...n, read: true } : n;
      })
    );
  };

  // total unread across all categories
  const unreadTotal = notifications.filter((n) => !n.read).length;

  const handleCardClick = (key) => {
    if (selectedCategory === key) {
      setSelectedCategory(null);
      setNotifFilter("all");
    } else {
      setSelectedCategory(key);
      setNotifFilter(key);
    }
  };

  useEffect(() => {
    function onDocClick(e) {
      if (bellRef.current && !bellRef.current.contains(e.target)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // simple helper to format date for display
  const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <style>{`
        /* Thin horizontal scrollbar for category row (WebKit browsers) */
        .no-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .no-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(99,102,241,0.6);
          border-radius: 9999px;
        }
        .no-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        /* Firefox */
        .no-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(99,102,241,0.6) transparent;
        }

        /* Notification dot pulse: scales from 0 -> 100% and back */
        .notif-dot {
          transform-origin: center;
          display: inline-block;
          animation: notifPulse 1600ms ease-in-out infinite;
        }

        @keyframes notifPulse {
          0% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1);
            opacity: 1;
          }
   
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        <div className="bg-green-50 rounded-2xl shadow px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <div
              onClick={() => setShowProfile(true)}
              className="cursor-pointer"
            >
              <h2 className="text-2xl font-bold flex items-center gap-2">
                Welcome back, {student.name}{" "}
                <span className="text-2xl">👋</span>
              </h2>
              <p className="text-sm text-gray-500">
                Let's learn something new today
              </p>
            </div>

            <div className="flex-1 mx-">
              <div className="relative max-w-lg ml-90 mx-auto">
                <input
                  type="text"
                  placeholder="Search course, events..."
                  className="w-80 pl-12 pr-4 py-3 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                <FiSearch className="absolute right-12 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center gap-4 ">
              <div ref={bellRef} className="relative">
                <button
                  className="relative p-2 rounded-full bg-white hover:bg-gray-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowNotifications((s) => {
                      const now = !s;
                      if (now) {
                        // when opening, show category cards and pre-select 'fees'
                        setNotifViewMode("cards");
                        setSelectedCategory("fees");
                        setNotifFilter("fees");
                      }
                      return now;
                    });
                  }}
                >
                  <FiBell className="w-5 h-5 text-gray-700" />
                  {unreadTotal > 0 && (
                    <span className="absolute top-1 -right-0.2 inline-flex h-2 w-2 bg-red-500 rounded-full notif-dot" />
                  )}
                </button>

                {showNotifications && (
                  <div
                    ref={notifRef}
                    onClick={(e) => e.stopPropagation()}
                    className="absolute right-0 mt-2 w-110 bg-white rounded-lg shadow-lg ring-1 ring-black/5 overflow-hidden z-50"
                  >
                    <div className="px-4 py-3 border-b">
                      <div className="text-sm font-medium">Notifications</div>
                    </div>

                    {/* Category cards (grid); click a card to view its notifications */}
                    <div className="px-3 py-3">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {[
                          {
                            key: "fees",
                            label: "Fee",
                            color: "bg-rose-50 text-rose-600",
                          },
                          {
                            key: "event",
                            label: "Event",
                            color: "bg-blue-50 text-blue-600",
                          },
                          {
                            key: "leave",
                            label: "Leave",
                            color: "bg-amber-50 text-amber-700",
                          },
                          {
                            key: "learning",
                            label: "Learning",
                            color: "bg-purple-50 text-purple-700",
                          },
                          {
                            key: "Job & Internships",
                            label: "Jobs",
                            color: "bg-green-50 text-green-700",
                          },
                          {
                            key: "cashbacks",
                            label: "Cashbacks",
                            color: "bg-fuchsia-50 text-fuchsia-700",
                          },
                        ].map((c) => (
                          <div
                            key={c.key}
                            onClick={() => handleCardClick(c.key)}
                            className={`cursor-pointer p-3 rounded-lg shadow-sm flex items-center gap-3 ${
                              c.color
                            } ${
                              selectedCategory === c.key
                                ? "ring-2 ring-purple-300 scale-105"
                                : ""
                            }`}
                          >
                            <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                              <div className="text-lg text-gray-700">
                                {getNotifIcon(c.key)}
                              </div>
                            </div>
                            <div className="">
                              <div className="text-sm font-medium">
                                {c.label}
                              </div>
                              <div className="text-xs text-gray-500 ">
                                {getUnreadCount(c.key) > 0
                                  ? `${getUnreadCount(c.key)} unread`
                                  : ""}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* when a category is selected, show header for that category above the list below */}
                      {selectedCategory && (
                        <div className="mt-3 flex items-center justify-between px-1 mb-2">
                          <div className="flex items-center gap-3"></div>
                        </div>
                      )}
                    </div>

                    <div className="max-h-64 overflow-y-auto">
                      {notifications.filter((n) =>
                        notifFilter === "all"
                          ? true
                          : n.category === notifFilter
                      ).length === 0 ? (
                        <div className="p-4 text-sm text-gray-500">
                          No notifications in this category.
                        </div>
                      ) : (
                        notifications
                          .filter((n) =>
                            notifFilter === "all"
                              ? true
                              : n.category === notifFilter
                          )
                          .map((n) => (
                            <div
                              key={n.id}
                              onClick={() => {
                                if (!n.read) markAsRead(n.id);
                              }}
                              className="px-4 py-3 hover:bg-gray-50 flex items-start gap-3 cursor-pointer"
                            >
                              <div
                                className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 ${
                                  n.read
                                    ? "bg-gray-100 text-gray-400"
                                    : "bg-white"
                                }`}
                              >
                                {n.read ? (
                                  <FiCheckCircle className="w-4 h-4 text-gray-400" />
                                ) : (
                                  <CiUnread className="w-4 h-4 text-gray-400 " />
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-medium">
                                  {n.title}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {n.desc}
                                </div>
                              </div>
                              <div className="text-xs text-gray-400">
                                {n.time}
                              </div>
                            </div>
                          ))
                      )}
                    </div>
                    <div className="px-3 py-2 border-t text-center text-sm">
                      <button
                        className="text-sm text-gray-500 hover:underline"
                        onClick={() => {
                          markAllRead(selectedCategory);
                        }}
                      >
                        Mark all read
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button className="p-2 rounded-full bg-white hover:bg-gray-100">
                <FiMessageCircle className="w-5 h-5 text-gray-700" />
              </button>

              <div className="h-6 border-l border-gray-500 mx-2" />

              <div
                onClick={() => setShowProfile(true)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <img
                  src={student.avatar}
                  alt="avatar"
                  className="h-10 w-10 rounded-full object-cover shadow"
                />
                <HiChevronDown className="w-4 h-4 text-gray-600" />
              </div>
            </div>
          </div>

          {/* Profile modal - shows when header or avatar clicked */}
          {showProfile && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 "
              onClick={() => setShowProfile(false)}
            >
              <div
                className="bg-white rounded-xl shadow-lg w-full max-w-md p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={student.avatar}
                      alt="avatar"
                      className="h-16 w-16 rounded-full object-cover shadow"
                    />
                    <div>
                      <div className="text-lg font-semibold">
                        {student.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {student.year}
                      </div>
                    </div>
                  </div>
                  <button
                    className="text-gray-500 hover:text-gray-800"
                    onClick={() => setShowProfile(false)}
                    aria-label="Close profile"
                  >
                    ✕
                  </button>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-2 text-sm text-gray-700">
                  <div>
                    <span className="font-medium">Student ID:</span>{" "}
                    <span className="ml-2">{student.studentId}</span>
                  </div>
                  <div>
                    <span className="font-medium">Batch:</span>{" "}
                    <span className="ml-2">{student.batch}</span>
                  </div>
                  <div>
                    <span className="font-medium">Email:</span>{" "}
                    <span className="ml-2">{student.email}</span>
                  </div>
                  <div>
                    <span className="font-medium">Phone:</span>{" "}
                    <span className="ml-2">{student.phone}</span>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                    onClick={() => setShowProfile(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Payment modal - opens when Pay Now clicked */}
          {paymentOpen && paymentTarget && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
              onClick={() => {
                if (!processing) setPaymentOpen(false);
              }}
            >
              <div
                className="bg-white rounded-xl shadow-lg w-full max-w-md p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-lg font-semibold">
                      Pay {paymentTarget.title}
                    </div>
                    <div className="text-sm text-gray-500">
                      Amount: {paymentTarget.amount}
                    </div>
                  </div>
                  <button
                    className="text-gray-500 hover:text-gray-800"
                    onClick={() => !processing && setPaymentOpen(false)}
                    aria-label="Close payment"
                  >
                    ✕
                  </button>
                </div>

                <div className="mt-4">
                  <div className="text-sm font-medium mb-2">
                    Choose payment method
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="paymode"
                        value="upi"
                        checked={payMode === "upi"}
                        onChange={() => setPayMode("upi")}
                      />
                      <span className="text-sm">UPI</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="paymode"
                        value="card"
                        checked={payMode === "card"}
                        onChange={() => setPayMode("card")}
                      />
                      <span className="text-sm">Card</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="paymode"
                        value="netbank"
                        checked={payMode === "netbank"}
                        onChange={() => setPayMode("netbank")}
                      />
                      <span className="text-sm">Net Banking</span>
                    </label>
                  </div>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <button
                    className="px-4 py-2 bg-gray-100 rounded-md"
                    onClick={() => !processing && setPaymentOpen(false)}
                    disabled={processing}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-purple-600 text-white rounded-md"
                    onClick={() => !processing && confirmPayment()}
                    disabled={processing}
                  >
                    {processing
                      ? "Processing..."
                      : `Pay (${paymentTarget.amount})`}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Top: profile and badges */}
          <div className="flex items-center  justify-end">
            <div className="flex items-center space-x-3">
              {badges.map((b) => (
                <div
                  key={b.id}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg shadow-sm ${b.color}`}
                >
                  <HiBadgeCheck className="h-5 w-5" />
                  <span className="text-sm font-medium">{b.title}</span>
                </div>
              ))}
            </div>
          </div>

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
                      className="bg-gray-50 p-4 rounded-xl shadow-sm"
                    >
                      <p className="text-sm text-gray-500">{c.title}</p>
                      <h3 className="text-xl font-bold mt-2">{c.value}</h3>
                      <p className="text-xs text-gray-400 mt-1">{c.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main content: calendar/events + student list */}

              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="bg-white rounded-lg p-4  shadow ">
                  <h4 className="text-lg font-semibold mb-3">
                    Class Student List
                  </h4>
                  <div className="space-y-3">
                    {students.map((s) => (
                      <div
                        key={s.id}
                        className="flex gap-8 items-center justify-between"
                      >
                        <div className="flex items-center">
                          <div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                            <img
                              src={student.avatar}
                              alt="avatar"
                              className="rounded-full object-cover shadow"
                            />
                          </div>
                          <div>
                            <div className="font-medium">{s.name}</div>
                            <div className="text-xs text-gray-400">
                              Rank #{s.rank}
                            </div>
                          </div>
                        </div>
                        <a
                          href={s.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 text-sm"
                        >
                          LinkedIn
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Leave Status box (matches provided UI) */}
                <div className="bg-white rounded-lg p-4 shadow w-full md:w-80 h-70">
                  <div className="flex items-start justify-between">
                    <div>
                      <h5 className="text-md font-semibold">Leave Status</h5>
                    </div>

                    <div>
                      <select
                        className="text-[12px] border border-gray-200 rounded-lg px-1 py-1 bg-white"
                        value={leaveFilter}
                        onChange={(e) =>
                          handleLeaveFilterChange(e.target.value)
                        }
                      >
                        <option value="month">This Month</option>
                        <option value="year">This Year</option>
                        <option value="week">Last Week</option>
                      </select>
                    </div>
                  </div>
                  <hr className="my-2 border-gray-200" />
                  {/* sample leave requests data */}
                  <div className="mt-3 space-y-3 max-h-48 overflow-y-auto  ">
                    {getFilteredLeaves().map((l) => (
                      <div
                        key={l.id}
                        className="flex items-center justify-between  rounded-md p-1"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`${l.color} p-2 rounded-md grid place-items-center`}
                          >
                            <FiUserCheck className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">{l.title}</div>
                            <div className="text-xs text-gray-400">
                              Date :{" "}
                              {new Date(l.dateISO).toLocaleDateString(
                                undefined,
                                {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                }
                              )}
                            </div>
                          </div>
                        </div>

                        <div>
                          {l.badge ? (
                            <span
                              className={`text-[11px] font-semibold px-1 py-1 rounded-lg ${
                                l.badge === "Approved"
                                  ? "bg-green-100 text-green-700"
                                  : l.badge === "Declined"
                                  ? "bg-red-100 text-red-700"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {l.badge}
                            </span>
                          ) : (
                            <span className="text-xs text-gray-400">
                              {l.status}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fees Reminder section (with header columns) */}
                <div className="bg-white rounded-lg p-2 shadow w-full md:w-80">
                  <div className="flex items-center justify-between px-2">
                    <div>
                      <h5 className="text-md font-semibold">Fees Reminder</h5>
                    </div>
                  </div>
                  <hr className="my-2 border-gray-200" />

                  {/* Header row for columns */}
                  <div className="mt-3 grid grid-cols-4 gap-2 items-center text-xs text-gray-500 font-medium px-2">
                    <div className="col-span-1 text-[11px]">Installment</div>
                    <div className="col-span-1 text-[11px]">Last Date</div>
                    <div className="col-span-1 text-[11px]">Status</div>
                    <div className="col-span-1 text-[11px] ">Pay Now</div>
                  </div>

                  <div className="mt-2 space-y-2 max-h-48 overflow-y-auto text-start px-2">
                    {feesRequests.map((f) => (
                      <div
                        key={f.id}
                        className="grid grid-cols-4 items-center bg-gray-50 rounded-md p-3 gap-2"
                      >
                        {/* Installment column */}
                        <div className="col-span-1 flex items-center gap-3">
                          <div className="flex flex-col">
                            <div className="text-[12px] font-medium">
                              {f.title}
                            </div>
                            <div className="text-[11px] text-red-500">
                              {f.amount}
                            </div>
                          </div>
                        </div>

                        {/* Last Date column */}
                        <div className="col-span-1 text-[9px] text-gray-600">
                          {new Date(f.lastDateISO).toLocaleDateString(
                            undefined,
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </div>

                        {/* Status column */}
                        <div className="col-span-1">
                          {f.status === "Due" ? (
                            <span className="text-[11px] bg-pink-100 text-pink-700 px-2 py-1 rounded-lg">
                              Due
                            </span>
                          ) : (
                            <span className="text-[11px] bg-green-100 text-green-800 px-2 py-1 rounded-lg">
                              Complete
                            </span>
                          )}
                        </div>

                        {/* Action column */}
                        <div className="col-span-1 text-right">
                          {f.status === "Due" ? (
                            <button
                              onClick={() => openPayment(f)}
                              className="mt-1 inline-block text-[10px] px-2 py-1 bg-purple-600 text-white rounded-md"
                            >
                              Pay Now
                            </button>
                          ) : (
                            <div className="text-[11px] text-gray-400">—</div>
                          )}
                        </div>
                      </div>
                    ))}
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
