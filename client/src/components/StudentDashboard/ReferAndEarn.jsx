import React, { useState } from "react";
import { FaLink, FaRupeeSign, FaBook } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const ReferAndEarn = () => {
  const referralLink = "https://ricr.in/free-demo/MTc=";

  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("weekly"); // weekly, monthly, allTime
  const [showPolicyModal, setShowPolicyModal] = useState(false);

  const referrals = [
    {
      id: 1,
      name: "Harsh Sahare",
      handle: "24dsp04014",
      amount: "₹570",
      avatar: `https://i.pravatar.cc/40?img=12`,
    },
    {
      id: 2,
      name: "Yugant Nath",
      handle: "24ricr0205",
      amount: "₹600",
      avatar: `https://i.pravatar.cc/40?img=3`,
    },
    {
      id: 3,
      name: "Aayush Pawar",
      handle: "24ricr0423",
      amount: "₹600",
      avatar: `https://i.pravatar.cc/40?img=45`,
    },
    {
      id: 4,
      name: "Lucky Pawar",
      handle: "24ricr0424",
      amount: "₹800",
      avatar: `https://i.pravatar.cc/40?img=32`,
    },
  ];

  // Top earners data
  const topEarners = {
    weekly: [
      {
        id: 1,
        name: "Priya Sharma",
        amount: "₹1,250",
        avatar: "https://i.pravatar.cc/60?img=5",
        rank: 1,
      },
      {
        id: 2,
        name: "Rahul Verma",
        amount: "₹980",
        avatar: "https://i.pravatar.cc/60?img=13",
        rank: 2,
      },
      {
        id: 3,
        name: "Sneha Patel",
        amount: "₹850",
        avatar: "https://i.pravatar.cc/60?img=9",
        rank: 3,
      },
      {
        id: 4,
        name: "Amit Kumar",
        amount: "₹720",
        avatar: "https://i.pravatar.cc/60?img=15",
        rank: 4,
      },
      {
        id: 5,
        name: "Neha Singh",
        amount: "₹680",
        avatar: "https://i.pravatar.cc/60?img=10",
        rank: 5,
      },
    ],
    monthly: [
      {
        id: 1,
        name: "Vikram Shah",
        amount: "₹5,420",
        avatar: "https://i.pravatar.cc/60?img=8",
        rank: 1,
      },
      {
        id: 2,
        name: "Anjali Reddy",
        amount: "₹4,890",
        avatar: "https://i.pravatar.cc/60?img=20",
        rank: 2,
      },
      {
        id: 3,
        name: "Karan Joshi",
        amount: "₹4,200",
        avatar: "https://i.pravatar.cc/60?img=14",
        rank: 3,
      },
      {
        id: 4,
        name: "Pooja Nair",
        amount: "₹3,850",
        avatar: "https://i.pravatar.cc/60?img=24",
        rank: 4,
      },
      {
        id: 5,
        name: "Rohan Gupta",
        amount: "₹3,600",
        avatar: "https://i.pravatar.cc/60?img=11",
        rank: 5,
      },
    ],
    allTime: [
      {
        id: 1,
        name: "Arjun Mehta",
        amount: "₹18,500",
        avatar: "https://i.pravatar.cc/60?img=7",
        rank: 1,
      },
      {
        id: 2,
        name: "Kavya Desai",
        amount: "₹16,200",
        avatar: "https://i.pravatar.cc/60?img=16",
        rank: 2,
      },
      {
        id: 3,
        name: "Siddharth Rao",
        amount: "₹14,800",
        avatar: "https://i.pravatar.cc/60?img=33",
        rank: 3,
      },
      {
        id: 4,
        name: "Riya Kapoor",
        amount: "₹13,400",
        avatar: "https://i.pravatar.cc/60?img=25",
        rank: 4,
      },
      {
        id: 5,
        name: "Aditya Malhotra",
        amount: "₹12,900",
        avatar: "https://i.pravatar.cc/60?img=18",
        rank: 5,
      },
    ],
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      // fallback - do nothing
    }
  };

  return (
    <div className="bg-[#caeaff] rounded-2xl mt-5 shadow p-6 w-[95%] mx-auto">
      <div className="mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Refer & Earn
          </h2>
          <button 
            onClick={() => setShowPolicyModal(true)}
            className="px-6 py-3 bg-white hover:bg-gray-50 text-blue-700 font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5">
            View Cashback Policy
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left: Controls and referrals */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Start Earning in 4 Easy Steps
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Invite friends and earn cashback when they enroll.
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Step 1 */}
                  <div className="relative flex flex-col items-center text-center p-4 bg-linear-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300">
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-200 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg border-4 border-white">
                      1
                    </div>
                    <div className="w-16 h-16 bg-blue-200 rounded-2xl flex items-center justify-center mb-3 shadow-lg">
                      <FaLink className="w-7 h-7 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1 text-sm">
                      Share Your Link
                    </h4>
                    <p className="text-xs text-gray-600">
                      Send your unique referral link to friends
                    </p>
                    {/* Arrow */}
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-blue-400 text-2xl">
                      →
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex flex-col items-center text-center p-4 bg-linear-to-br from-purple-50 to-white rounded-xl border border-purple-100 hover:shadow-md transition-all duration-300">
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-purple-200 text-purple-600 rounded-full flex items-center justify-center font-bold text-lg border-4 border-white">
                      2
                    </div>
                    <div className="w-16 h-16 bg-purple-200 rounded-2xl flex items-center justify-center mb-3 shadow-lg">
                      <HiUserGroup className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1 text-sm">
                      Friend Attends Demo
                    </h4>
                    <p className="text-xs text-gray-600">
                      They join our free demo class
                    </p>
                    {/* Arrow */}
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-purple-400 text-2xl">
                      →
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex flex-col items-center text-center p-4 bg-linear-to-br from-green-50 to-white rounded-xl border border-green-100 hover:shadow-md transition-all duration-300">
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-green-200 text-green-600 rounded-full flex items-center justify-center font-bold text-lg border-4 border-white">
                      3
                    </div>
                    <div className="w-16 h-16 bg-green-200 rounded-2xl flex items-center justify-center mb-3 shadow-lg">
                      <FaBook className="w-7 h-7 text-green-600" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1 text-sm">
                      Friend Enrolls
                    </h4>
                    <p className="text-xs text-gray-600">
                      They complete course enrollment
                    </p>
                    {/* Arrow */}
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-green-400 text-2xl">
                      →
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="relative flex flex-col items-center text-center p-4 bg-linear-to-br from-yellow-50 to-white rounded-xl border border-yellow-100 hover:shadow-md transition-all duration-300">
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-yellow-200 text-yellow-600 rounded-full flex items-center justify-center font-bold text-lg border-4 border-white">
                      4
                    </div>
                    <div className="w-16 h-16 bg-yellow-200 rounded-2xl flex items-center justify-center mb-3 shadow-lg">
                      <FaRupeeSign className="w-7 h-7 text-yellow-600" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1 text-sm">
                      Get Cashback
                    </h4>
                    <p className="text-xs text-gray-600">
                      Cashback credited to your account
                    </p>
                  </div>
                </div>

                <div className="mt-1 flex gap-2 items-center">
                  <input
                    type="text"
                    readOnly
                    value={referralLink}
                    className="flex-1 bg-gray-50 border border-gray-300 rounded-l-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    aria-label="Referral link"
                  />
                  <button
                    onClick={copyLink}
                    className={`px-6 py-3 rounded-r-xl font-medium transition-all duration-300 ${
                      copied
                        ? "bg-blue-500 hover:bg-blue-600 text-white shadow-md hover:shadow-lg"
                        : "bg-blue-500 hover:bg-blue-600 text-white shadow-md hover:shadow-lg"
                    }`}
                    aria-label="Copy referral link"
                  >
                    {copied ? "✓ Copied" : "Copy"}
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
                <div className="text-sm text-gray-600 font-medium">Earning</div>
                <div className="text-2xl font-bold text-gray-800 mt-2">
                  ₹2570
                </div>
                <div className="text-xs text-red-500 font-medium mt-1">
                  (₹0 Locked)
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center justify-center">
                <div className="text-sm text-gray-600 font-medium">
                  Referred
                </div>
                <div className="text-2xl font-bold text-gray-800 mt-2">4</div>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-lg  border border-gray-100 flex flex-col items-end">
                <div className="text-sm text-gray-600 font-medium text-center">
                  Incentive
                </div>
                <div className="text-2xl font-bold text-green-500 mt-2 text-center">
                  4%
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-gray-800">Referrals</h4>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {referrals.length} friends
                </span>
              </div>
              <div className="space-y-4">
                <div className="space-y-4 ref-scroll max-h-28 overflow-y-auto pr-2">
                  {referrals.map((r) => (
                    <div
                      key={r.id}
                      className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={r.avatar}
                          alt="avatar"
                          className="h-12 w-12 rounded-full object-cover border-2 border-purple-200"
                        />
                        <div>
                          <div className="font-semibold text-gray-800">
                            {r.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {r.handle}
                          </div>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-green-500 bg-green-50 px-3 py-1 rounded-lg">
                        {r.amount}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Top Earners Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                🏆 Top Earners
              </h3>

              {/* Tabs */}
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setActiveTab("weekly")}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    activeTab === "weekly"
                      ? "bg-indigo-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Weekly
                </button>
                <button
                  onClick={() => setActiveTab("monthly")}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    activeTab === "monthly"
                      ? "bg-indigo-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setActiveTab("allTime")}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    activeTab === "allTime"
                      ? "bg-indigo-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  All Time
                </button>
              </div>

              {/* Top Earners List */}
              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                {topEarners[activeTab].map((earner) => (
                  <div
                    key={earner.id}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                      earner.rank === 1
                        ? "bg-green-100 border-2 border-green-200"
                        : earner.rank === 2
                        ? "bg-yellow-100 border-2 border-yellow-200"
                        : earner.rank === 3
                        ? "bg-blue-100 border-2 border-blue-200"
                        : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {/* Rank Badge */}
                    <div
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        earner.rank === 1
                          ? "bg-green-200 text-green-800"
                          : earner.rank === 2
                          ? "bg-yellow-200 text-yellow-800"
                          : earner.rank === 3
                          ? "bg-blue-200 text-blue-800"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {earner.rank}
                    </div>

                    {/* Avatar */}
                    <img
                      src={earner.avatar}
                      alt={earner.name}
                      className={`w-12 h-12 rounded-full object-cover ${
                        earner.rank <= 3
                          ? "ring-2 ring-offset-2 grayscale-100 " +
                            (earner.rank === 1
                              ? "ring-green-100"
                              : earner.rank === 2
                              ? "ring-yellow-100"
                              : "ring-blue-100")
                          : "border-2 border-gray-200"
                      }`}
                    />

                    {/* Name and Amount */}
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-800 truncate">
                        {earner.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {activeTab === "weekly"
                          ? "This Week"
                          : activeTab === "monthly"
                          ? "This Month"
                          : "Total Earnings"}
                      </div>
                    </div>

                    {/* Amount */}
                    <div
                      className={`font-bold text-lg ${
                        earner.rank === 1
                          ? "text-green-600"
                          : earner.rank === 2
                          ? "text-yellow-600"
                          : earner.rank === 3
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      {earner.amount}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer Note */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-center text-gray-500">
                  Keep referring to climb the leaderboard! 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cashback Policy Modal */}
      {showPolicyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-9998 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="bg-linear-to-r from-blue-600 to-indigo-600 text-white px-6 py-5 flex items-center justify-between sticky top-0">
              <h2 className="text-2xl font-bold">Cashback Policy</h2>
              <button
                onClick={() => setShowPolicyModal(false)}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all duration-200"
                aria-label="Close modal"
              >
                <MdClose className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
              <div className="space-y-6">
                {/* Introduction */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    This Cashback Policy outlines the terms and conditions for availing cashback under our{" "}
                    <span className="font-semibold">Referral Discount</span> and{" "}
                    <span className="font-semibold">Group Discount</span> programs. Please read carefully to understand the benefits and rules associated with the program.
                  </p>
                </div>

                {/* Section 1: Group Discount Policy */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                    Group Discount Policy
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-green-500 font-bold mt-1">•</span>
                      <span>A <span className="font-semibold">minimum of 3 students</span> is required to be eligible for the Group Discount.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-green-500 font-bold mt-1">•</span>
                      <span>Group Discount will be applicable only after <span className="font-semibold">all students in the group complete their fee payments in full</span>.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-green-500 font-bold mt-1">•</span>
                      <span>If any student in the group drops out and the group size reduces to less than 3 students, the Group Discount will not be granted.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-green-500 font-bold mt-1">•</span>
                      <span>Group Discount is <span className="font-semibold">locked to the course initially joined</span> by the students. If any student upgrades their course later, the Group Discount will not apply to the upgraded course.</span>
                    </li>
                  </ul>
                </div>

                {/* Section 2: Referral Discount Policy */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                    Referral Discount Policy
                  </h3>
                  <p className="text-gray-700 mb-3">Referral incentives are based on the number of successful admissions made through the referring student's unique referral link:</p>
                  
                  {/* Referral Tiers */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <div className="font-bold text-blue-700">1-3 admissions</div>
                      <div className="text-2xl font-bold text-blue-600">3% cashback</div>
                    </div>
                    <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3">
                      <div className="font-bold text-indigo-700">4-6 admissions</div>
                      <div className="text-2xl font-bold text-indigo-600">4% cashback</div>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                      <div className="font-bold text-purple-700">7-10 admissions</div>
                      <div className="text-2xl font-bold text-purple-600">5% cashback</div>
                    </div>
                    <div className="bg-pink-50 border border-pink-200 rounded-lg p-3">
                      <div className="font-bold text-pink-700">11+ admissions</div>
                      <div className="text-2xl font-bold text-pink-600">6% cashback</div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🎉</span>
                      <div>
                        <span className="font-bold text-yellow-800">Bonus Incentive:</span>
                        <span className="text-gray-700"> Upon completing the <span className="font-semibold">10th admission</span>, the referrer will receive an additional <span className="font-bold text-green-600">₹2,525</span> bonus incentive.</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-purple-500 font-bold mt-1">•</span>
                      <span>Referral cashback will only be granted if the <span className="font-semibold">referred student completes their fee payment in full</span>.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-purple-500 font-bold mt-1">•</span>
                      <span>If a referred student drops out or fails to complete payment, the referrer will not receive cashback for that student.</span>
                    </li>
                  </ul>
                </div>

                {/* Section 3: General Terms */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                    General Terms for Cashback
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-orange-500 font-bold mt-1">•</span>
                      <span>Cashback will be processed and credited within <span className="font-semibold">15 working days</span> after the complete fee payment of all eligible students.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-orange-500 font-bold mt-1">•</span>
                      <span>Cashback will be applicable only to the <span className="font-semibold">course initially enrolled in</span>. If any student upgrades their course, the referral or group discount will not be applied to the upgraded course.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-orange-500 font-bold mt-1">•</span>
                      <span>Both Group and Referral Discounts <span className="font-semibold">cannot be combined</span> with any other ongoing offers or discounts.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-orange-500 font-bold mt-1">•</span>
                      <span>Any disputes regarding the cashback process must be raised within <span className="font-semibold">10 working days</span> of the cashback credit date.</span>
                    </li>
                  </ul>
                </div>

                {/* Section 4: Additional Notes */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                    Additional Notes
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-red-500 font-bold mt-1">•</span>
                      <span>All students joining under the Group Discount must provide their group details during enrollment.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-500 font-bold mt-1">•</span>
                      <span>Referrals must be recorded through the <span className="font-semibold">unique referral code</span> provided by the institute. Verbal referrals will not be considered.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-500 font-bold mt-1">•</span>
                      <span>The institute reserves the right to modify or discontinue this Cashback Policy at any time without prior notice.</span>
                    </li>
                  </ul>
                </div>

                {/* Footer */}
                <div className="bg-linear-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 text-center">
                  <p className="text-sm text-gray-600">
                    For any questions or clarifications regarding this policy, please contact our support team.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 px-6 py-4 flex justify-end border-t border-gray-200">
              <button
                onClick={() => setShowPolicyModal(false)}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Got it, Thanks!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReferAndEarn;
