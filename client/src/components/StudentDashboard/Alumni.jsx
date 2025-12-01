import React, { useState } from "react";
import { FaLinkedin, FaSearch, FaFilter, FaBriefcase, FaGraduationCap, FaBuilding } from "react-icons/fa";

const Alumni = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCompany, setFilterCompany] = useState("all");
  const [filterBatch, setFilterBatch] = useState("all");

  // Sample alumni data
  const alumniData = [
    {
      id: 1,
      name: "Rahul Sharma",
      package: "12 LPA",
      linkedin: "https://linkedin.com/in/rahulsharma",
      company: "Google",
      companyLogo: "https://placehold.co/60?text=G",
      position: "Software Engineer",
      batch: "RICR 2023-A",
      college: "NIT Bhopal",
      branch: "Computer Science",
      location: "Bangalore",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
      id: 2,
      name: "Priya Patel",
      package: "18 LPA",
      linkedin: "https://linkedin.com/in/priyapatel",
      company: "Microsoft",
      companyLogo: "https://placehold.co/60?text=M",
      position: "SDE-2",
      batch: "RICR 2022-B",
      college: "MANIT Bhopal",
      branch: "Information Technology",
      location: "Hyderabad",
      avatar: "https://i.pravatar.cc/100?img=5",
    },
    {
      id: 3,
      name: "Amit Kumar",
      package: "10 LPA",
      linkedin: "https://linkedin.com/in/amitkumar",
      company: "Amazon",
      companyLogo: "https://placehold.co/60?text=A",
      position: "Full Stack Developer",
      batch: "RICR 2023-A",
      college: "RGPV Bhopal",
      branch: "Computer Science",
      location: "Mumbai",
      avatar: "https://i.pravatar.cc/100?img=33",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      package: "15 LPA",
      linkedin: "https://linkedin.com/in/snehareddy",
      company: "Flipkart",
      companyLogo: "https://placehold.co/60?text=F",
      position: "Backend Developer",
      batch: "RICR 2023-B",
      college: "VIT Bhopal",
      branch: "Electronics & Communication",
      location: "Bangalore",
      avatar: "https://i.pravatar.cc/100?img=9",
    },
    {
      id: 5,
      name: "Vikram Singh",
      package: "20 LPA",
      linkedin: "https://linkedin.com/in/vikramsingh",
      company: "Google",
      companyLogo: "https://placehold.co/60?text=G",
      position: "Senior Software Engineer",
      batch: "RICR 2022-A",
      college: "IIT Indore",
      branch: "Computer Science",
      location: "Bangalore",
      avatar: "https://i.pravatar.cc/100?img=15",
    },
    {
      id: 6,
      name: "Anjali Verma",
      package: "14 LPA",
      linkedin: "https://linkedin.com/in/anjaliverma",
      company: "TCS",
      companyLogo: "https://placehold.co/60?text=T",
      position: "Tech Lead",
      batch: "RICR 2022-B",
      college: "LNCT Bhopal",
      branch: "Information Technology",
      location: "Pune",
      avatar: "https://i.pravatar.cc/100?img=20",
    },
    {
      id: 7,
      name: "Rohan Mehta",
      package: "16 LPA",
      linkedin: "https://linkedin.com/in/rohanmehta",
      company: "Infosys",
      companyLogo: "https://placehold.co/60?text=I",
      position: "System Engineer Specialist",
      batch: "RICR 2023-A",
      college: "Truba Bhopal",
      branch: "Computer Science",
      location: "Bangalore",
      avatar: "https://i.pravatar.cc/100?img=8",
    },
    {
      id: 8,
      name: "Kavya Nair",
      package: "22 LPA",
      linkedin: "https://linkedin.com/in/kavyanair",
      company: "Amazon",
      companyLogo: "https://placehold.co/60?text=A",
      position: "SDE-3",
      batch: "RICR 2021-A",
      college: "NIT Bhopal",
      branch: "Computer Science",
      location: "Hyderabad",
      avatar: "https://i.pravatar.cc/100?img=25",
    },
  ];

  // Get unique companies and batches for filters
  const companies = ["all", ...new Set(alumniData.map((a) => a.company))];
  const batches = ["all", ...new Set(alumniData.map((a) => a.batch))];

  // Filter alumni based on search and filters
  const filteredAlumni = alumniData.filter((alumni) => {
    const matchesSearch =
      alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.college.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCompany = filterCompany === "all" || alumni.company === filterCompany;
    const matchesBatch = filterBatch === "all" || alumni.batch === filterBatch;

    return matchesSearch && matchesCompany && matchesBatch;
  });

  return (
    <div className="bg-[#caeaff] w-[95%] mx-auto rounded-2xl shadow mt-5 p-3">        
         {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Alumni Network
          </h1>
          <div className="w-40 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
        

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-blue-100 border border-blue-200 rounded-lg p-3 shadow-sm">
            <div className="text-2xl font-bold mb-0.5 text-blue-700">{alumniData.length}</div>
            <div className="text-blue-600 text-xs font-medium">Total Alumni</div>
          </div>
          <div className="bg-emerald-100 border border-emerald-200 rounded-lg p-3 shadow-sm">
            <div className="text-2xl font-bold mb-0.5 text-emerald-700">{companies.length - 1}</div>
            <div className="text-emerald-600 text-xs font-medium">Companies</div>
          </div>
          <div className="bg-purple-100 border border-purple-200 rounded-lg p-3 shadow-sm">
            <div className="text-2xl font-bold mb-0.5 text-purple-700">
              {Math.max(...alumniData.map((a) => parseInt(a.package)))} LPA
            </div>
            <div className="text-purple-600 text-xs font-medium">Highest Package</div>
          </div>
          <div className="bg-amber-100 border border-amber-200 rounded-lg p-3 shadow-sm">
            <div className="text-2xl font-bold mb-0.5 text-amber-700">
              {(alumniData.reduce((sum, a) => sum + parseInt(a.package), 0) / alumniData.length).toFixed(1)} LPA
            </div>
            <div className="text-amber-600 text-xs font-medium">Average Package</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Search */}
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-sm" />
              <input
                type="text"
                placeholder="Search by name, company, or college..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent outline-none"
              />
            </div>

            {/* Company Filter */}
            <div className="relative">
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-sm" />
              <select
                value={filterCompany}
                onChange={(e) => setFilterCompany(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent outline-none appearance-none bg-white"
              >
                {companies.map((company) => (
                  <option key={company} value={company}>
                    {company === "all" ? "All Companies" : company}
                  </option>
                ))}
              </select>
            </div>

            {/* Batch Filter */}
            <div className="relative">
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-sm" />
              <select
                value={filterBatch}
                onChange={(e) => setFilterBatch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent outline-none appearance-none bg-white"
              >
                {batches.map((batch) => (
                  <option key={batch} value={batch}>
                    {batch === "all" ? "All Batches" : batch}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map((alumni) => (
            <div
              key={alumni.id}
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Card Header with Company */}
              <div className="bg-slate-100 border-b border-slate-200 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={alumni.companyLogo}
                    alt={alumni.company}
                    className="w-12 h-12 rounded-lg bg-white p-1 border border-slate-200"
                  />
                  <div>
                    <h3 className="text-slate-800 font-bold text-lg">{alumni.company}</h3>
                    <p className="text-slate-500 text-xs">{alumni.location}</p>
                  </div>
                </div>
                <div className="bg-blue-100 border border-blue-200 px-3 py-1 rounded-full">
                  <span className="text-blue-700 font-bold text-sm">{alumni.package}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5">
                {/* Profile Section */}
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={alumni.avatar}
                    alt={alumni.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-slate-200 grayscale-100"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-slate-800 mb-1">{alumni.name}</h4>
                    <div className="flex items-center gap-2 text-slate-600 text-sm mb-2">
                      <FaBriefcase className="text-slate-400" />
                      <span>{alumni.position}</span>
                    </div>
                    <a
                      href={alumni.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                    >
                      <FaLinkedin />
                      <span>LinkedIn Profile</span>
                    </a>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 border-t border-slate-100 pt-4">
                  <div className="flex items-start gap-2 text-sm">
                    <FaGraduationCap className="text-slate-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-slate-700 font-medium">{alumni.college}</div>
                      <div className="text-slate-500 text-xs">{alumni.branch}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaBuilding className="text-slate-400 shrink-0" />
                    <span className="text-slate-700">
                      <span className="font-medium">Batch:</span> {alumni.batch}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredAlumni.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-slate-700 mb-2">No alumni found</h3>
            <p className="text-slate-500">Try adjusting your search or filters</p>
          </div>
        )}
      
    </div>
  );
};

export default Alumni;