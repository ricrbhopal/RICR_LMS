import React, { useState, useRef, useEffect } from "react";
import { HiChevronDown } from "react-icons/hi";

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

const StudentHeader = () => {
  const student = {
    name: "John Doe",
    year: "3rd year",
    avatar: "https://i.pravatar.cc/150?img=12",
    studentId: "RICR2025-014",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    batch: "Batch A - Nov 2025",
  };

  const [showProfile, setShowProfile] = useState(false);
  const [notifViewMode, setNotifViewMode] = useState("cards");
  const [showNotifications, setShowNotifications] = useState(false);
  const bellRef = useRef(null);
  const notifRef = useRef(null);
  const [notifFilter, setNotifFilter] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  // Get greeting based on IST time
  const getGreeting = () => {
    const now = new Date();
    // Convert to IST (UTC+5:30)
    const istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
    const istTime = new Date(now.getTime() + istOffset);
    const hours = istTime.getUTCHours();

    if (hours >= 5 && hours < 12) {
      return "Good Morning";
    } else if (hours >= 12 && hours < 17) {
      return "Good Afternoon";
    } else if (hours >= 17 && hours < 21) {
      return "Good Evening";
    } else {
      return "Good Night";
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

  return (
    <>
      {/* Notification Overlay */}
      {showNotifications && (
        <div
          className="fixed inset-0 bg-black/40 z-1000"
          onClick={() => setShowNotifications(false)}
        />
      )}

      <div className="flex justify-between">

        <div className="flex gap-3">
          <div onClick={() => setShowProfile(true)} className="cursor-pointer">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            {getGreeting()}, {student.name}{" "}
            <span className="text-2xl">👋</span>
          </h2>
        </div>

        <div className="flex items-center gap-4 ">
          <div
            onClick={() => setShowProfile(true)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="h-6 border-l border-gray-500" />
            <img
              src={student.avatar}
              alt="avatar"
              className="h-10 w-10 rounded-full object-cover shadow"
            />
            <HiChevronDown className="w-4 h-4 text-gray-600" />
          </div>
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
                className="absolute right-0 mt-2 w-110 bg-white rounded-lg shadow-lg ring-1 ring-black/15 overflow-hidden z-1001"
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
                          <div className="text-sm font-medium">{c.label}</div>
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
                    notifFilter === "all" ? true : n.category === notifFilter
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
                              n.read ? "bg-gray-100 text-gray-400" : "bg-white"
                            }`}
                          >
                            {n.read ? (
                              <FiCheckCircle className="w-4 h-4 text-gray-400" />
                            ) : (
                              <CiUnread className="w-4 h-4 text-gray-400 " />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium">{n.title}</div>
                            <div className="text-xs text-gray-500">
                              {n.desc}
                            </div>
                          </div>
                          <div className="text-xs text-gray-400">{n.time}</div>
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
        </div>
        </div>
      </div>

      {/* Profile modal - shows when header or avatar clicked */}
      {showProfile && (
        <div
          className="fixed inset-0 z-9998 flex items-center justify-center bg-black/40 "
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
                  <div className="text-lg font-semibold">{student.name}</div>
                  <div className="text-sm text-gray-500">{student.year}</div>
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
    </>
  );
};

export default StudentHeader;
