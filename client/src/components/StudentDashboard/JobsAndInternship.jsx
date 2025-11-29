import React, { useState } from "react";
import { FaBriefcase, FaStar, FaUserCheck, FaBookmark } from "react-icons/fa";

const JobsAndInternship = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  // Sample student profile data (in real app, fetch from backend based on performance)
  const studentProfile = {
    skills: [
      "Java",
      "DSA",
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    overallPerformance: 75.2, // From progress tracker
    eligibleForReferral: true,
    experience: "Fresher",
    completedCourses: ["Core Java", "Java DSA", "MERN Stack"],
  };

  // Sample job postings with relevancy scoring
  const jobPostings = [
    {
      id: 1,
      title: "Java Backend Developer",
      company: "TechCorp Solutions",
      location: "Bangalore",
      type: "Full-time",
      category: "job",
      salary: "4-6 LPA",
      experience: "Fresher",
      skills: ["Java", "Spring Boot", "MySQL", "REST APIs"],
      description:
        "Looking for passionate Java developers to join our backend team.",
      postedDate: "2 days ago",
      applicants: 45,
      matchScore: 40,
      recommended: true,
      isReferral: false,
      companyLogo: "https://placehold.co/600x400?text=TC",
    },
    {
      id: 2,
      title: "MERN Stack Developer Intern",
      company: "StartupHub",
      location: "Remote",
      type: "Internship",
      category: "internship",
      salary: "15-20k/month",
      duration: "6 months",
      experience: "Fresher",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      description: "Build real-world applications with our dynamic team.",
      postedDate: "1 day ago",
      applicants: 28,
      matchScore: 100,
      recommended: true,
      isReferral: false,
      companyLogo: "https://placehold.co/600x400?text=SH",
    },
    {
      id: 3,
      title: "Full Stack Java Developer",
      company: "InfoSystems Ltd",
      location: "Pune",
      type: "Full-time",
      category: "job",
      salary: "5-8 LPA",
      experience: "Fresher",
      skills: ["Java", "React", "Spring Boot", "PostgreSQL"],
      description:
        "Join our product development team working on enterprise solutions.",
      postedDate: "3 days ago",
      applicants: 67,
      matchScore: 65,
      recommended: true,
      isReferral: true,
      companyLogo: "https://placehold.co/600x400?text=IS",
    },
    {
      id: 4,
      title: "DSA Problem Setter Intern",
      company: "CodeLearn Platform",
      location: "Hyderabad",
      type: "Internship",
      category: "internship",
      salary: "20-25k/month",
      duration: "3 months",
      experience: "Fresher",
      skills: ["DSA", "Java", "Problem Solving", "Algorithms"],
      description:
        "Create coding problems and solutions for our learning platform.",
      postedDate: "5 days ago",
      applicants: 34,
      matchScore: 45,
      recommended: true,
      isReferral: false,
      companyLogo: "https://placehold.co/600x400?text=CL",
    },
    {
      id: 5,
      title: "React Developer",
      company: "WebTech Solutions",
      location: "Mumbai",
      type: "Full-time",
      category: "job",
      salary: "3.5-5 LPA",
      experience: "Fresher",
      skills: ["React", "JavaScript", "HTML", "CSS", "Redux"],
      description: "Develop modern web applications for diverse clients.",
      postedDate: "1 week ago",
      applicants: 89,
      matchScore: 85,
      recommended: false,
      isReferral: true,
      companyLogo: "https://placehold.co/600x400?text=WT",
    },
    {
      id: 6,
      title: "Backend Developer Intern",
      company: "CloudNine Technologies",
      location: "Chennai",
      type: "Internship",
      category: "internship",
      salary: "18-22k/month",
      duration: "4 months",
      experience: "Fresher",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
      description: "Work on scalable backend systems and microservices.",
      postedDate: "4 days ago",
      applicants: 41,
      matchScore: 87,
      recommended: true,
      isReferral: false,
      companyLogo: "https://placehold.co/600x400?text=CN",
    },
  ];

  // Filter jobs based on selected filters
  const filteredJobs = jobPostings
    .filter(
      (job) =>
        activeTab === "all" ||
        (activeTab === "recommended" && job.recommended) ||
        (activeTab === "referral" && job.isReferral)
    )
    .filter((job) => selectedType === "all" || job.category === selectedType)
    .sort((a, b) => b.matchScore - a.matchScore);

  const toggleBookmark = (jobId) => {
    setBookmarkedJobs((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId]
    );
  };

  return (
    <div className="bg-[#caeaff] rounded-2xl mt-5 shadow p-6 w-[95%] mx-auto">
      <div className="p-5 space-y-5">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-50 p-3 rounded-lg">
                <FaBriefcase className="text-xl text-blue-500" />
              </div>
              <div>
                <div className="text-xl font-semibold text-gray-800">
                  {filteredJobs.length}
                </div>
                <div className="text-xs text-gray-500">Available Positions</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <div className="flex items-center gap-3">
              <div className="bg-green-50 p-3 rounded-lg">
                <FaStar className="text-xl text-green-500" />
              </div>
              <div>
                <div className="text-xl font-semibold text-gray-800">
                  {filteredJobs.filter((j) => j.recommended).length}
                </div>
                <div className="text-xs text-gray-500">Recommended</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <div className="flex items-center gap-3">
              <div className="bg-purple-50 p-3 rounded-lg">
                <FaUserCheck className="text-xl text-purple-500" />
              </div>
              <div>
                <div className="text-xl font-semibold text-gray-800">
                  {filteredJobs.filter((j) => j.isReferral).length}
                </div>
                <div className="text-xs text-gray-500">Referral Jobs</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <div className="flex items-center gap-3">
              <div className="bg-orange-50 p-3 rounded-lg">
                <FaBookmark className="text-xl text-orange-500" />
              </div>
              <div>
                <div className="text-xl font-semibold text-gray-800">
                  {bookmarkedJobs.length}
                </div>
                <div className="text-xs text-gray-500">Saved for Later</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex flex-wrap items-center gap-4">
            {/* Tab Filters */}
            <div className="flex items-center gap-2">
              <div className="flex gap-2">
                {[
                  { id: "all", label: "All Jobs" },
                  { id: "recommended", label: "Recommended" },
                  { id: "referral", label: "Referral" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                      activeTab === tab.id
                        ? "bg-blue-500 text-white shadow-sm"
                        : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Type Filter */}
            <div className="flex items-center gap-2 ml-auto">
              <span className="text-sm font-medium text-gray-600">Type:</span>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 font-medium text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              >
                <option value="all">All</option>
                <option value="job">Jobs Only</option>
                <option value="internship">Internships Only</option>
              </select>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {filteredJobs.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                No Jobs Found
              </h3>
              <p className="text-sm text-gray-500">
                Try adjusting your filters
              </p>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className={`bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 overflow-hidden ${
                  job.recommended
                    ? "border-blue-200 bg-blue-50/30"
                    : "border-gray-100"
                }`}
              >
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    {/* Left Section - Job Details */}
                    <div className="flex-1">
                      {/* Company Logo, Name and Job Title */}
                      <div className="flex items-start gap-4 mb-3">
                        <img 
                          src={job.companyLogo} 
                          alt={job.company}
                          className="w-16 h-16 rounded-xl object-cover border border-gray-200 shrink-0"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-800 mb-1 flex items-center gap-2 flex-wrap">
                            {job.title}
                            {job.isReferral && (
                              <span className="bg-green-50 text-green-600 text-xs font-medium px-2.5 py-1 rounded-full border border-green-200">
                                Referral
                              </span>
                            )}
                            {job.recommended && (
                              <span className="bg-blue-50 text-blue-600 text-xs font-medium px-2.5 py-1 rounded-full border border-blue-200">
                                Recommended
                              </span>
                            )}
                          </h3>
                          <div className="text-gray-700 text-sm font-semibold mb-2">
                            {job.company}
                          </div>
                          <div className="flex items-center gap-3 text-gray-600 text-xs">
                            <span>{job.location}</span>
                            <span>•</span>
                            <span>{job.postedDate}</span>
                          </div>
                        </div>
                      </div>

                      {/* Job Meta Info */}

                      {/* Description */}
                      <p className="text-gray-600 text-sm mb-3">
                        {job.description}
                      </p>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {job.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              studentProfile.skills.includes(skill)
                                ? "bg-green-50 text-green-600 border border-green-200"
                                : "bg-gray-50 text-gray-600 border border-gray-200"
                            }`}
                          >
                            {skill}
                            {studentProfile.skills.includes(skill) && " ✓"}
                          </span>
                        ))}
                      </div>

                      {/* Job Additional Info */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700">
                        <span className="font-semibold">
                          ₹ {job.salary}
                        </span>
                        <span>{job.type}</span>
                        {job.duration && (
                          <span>{job.duration}</span>
                        )}
                        <span>{job.experience}</span>
                        <span className="text-gray-500">
                          {job.applicants} applicants
                        </span>
                      </div>
                    </div>

                    {/* Right Section - Match Score & Actions */}
                    <div className="flex flex-col gap-3 w-32">
                      {/* Match Score */}
                      <div className="bg-blue-50 rounded-xl p-3 text-center border border-blue-100">
                        <div className="text-2xl font-semibold text-blue-600">
                          {job.matchScore}%
                        </div>
                        <div className="text-xs text-gray-500 font-medium">
                          Match
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <button className="bg-blue-500 text-white px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-blue-600 transition-all">
                        Apply
                      </button>
                      <button
                        onClick={() => toggleBookmark(job.id)}
                        className={`px-4 py-2.5 rounded-lg font-medium text-sm border transition-all ${
                          bookmarkedJobs.includes(job.id)
                            ? "bg-orange-50 border-orange-300 text-orange-600 hover:bg-orange-100"
                            : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {bookmarkedJobs.includes(job.id) ? "Saved" : "Save"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default JobsAndInternship;
