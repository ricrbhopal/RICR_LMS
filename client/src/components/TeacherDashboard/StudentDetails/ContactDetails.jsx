import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaUser,
  FaBirthdayCake,
  FaIdCard,
  FaGraduationCap,
  FaCalendarAlt,
  FaFileAlt,
  FaDownload,
  FaEye,
  FaTimes,
} from "react-icons/fa";

const ContactDetails = ({ student }) => {
  const [documentModal, setDocumentModal] = useState({
    isOpen: false,
    document: null,
    title: "",
  });

  const openDocumentModal = (docType) => {
    const documents = {
      aadhar: {
        title: "Aadhar Card",
        image:
          student.aadharImage ||
          "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=1200",
      },
      marksheet: {
        title: "Previous Year Marksheet",
        image:
          student.marksheetImage ||
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=1200",
      },
    };
    setDocumentModal({ isOpen: true, ...documents[docType] });
  };

  const closeDocumentModal = () => {
    setDocumentModal({ isOpen: false, document: null, title: "" });
  };

  return (
    <div className="space-y-6">
      {/* Personal Information */}
      <div className="bg-slate-50 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-4">
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200">
            <div className="bg-purple-100 p-3 rounded-lg">
              <FaIdCard className="w-5 h-5 text-purple-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-slate-500 font-medium">
                Enrollment Number
              </p>
              <p className="text-sm font-semibold text-slate-800">
                {student.enrollmentNo}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <FaUser className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-slate-500 font-medium">Full Name</p>
              <p className="text-sm font-semibold text-slate-800">
                {student.name}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200">
            <div className="bg-pink-100 p-3 rounded-lg">
              <FaBirthdayCake className="w-5 h-5 text-pink-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-slate-500 font-medium">
                Date of Birth
              </p>
              <p className="text-sm font-semibold text-slate-800">
                15 Aug 2002
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200">
            <div className="bg-orange-100 p-3 rounded-lg">
              <FaMapMarkerAlt className="w-5 h-5 text-orange-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-slate-500 font-medium">Location</p>
              <p className="text-sm font-semibold text-slate-800">Bhopal, MP</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200">
            <div className="bg-teal-100 p-3 rounded-lg">
              <FaGraduationCap className="w-5 h-5 text-teal-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-slate-500 font-medium">College</p>
              <p className="text-sm font-semibold text-slate-800">
                {student.college || "ABC College"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200">
            <div className="bg-cyan-100 p-3 rounded-lg">
              <FaCalendarAlt className="w-5 h-5 text-cyan-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-slate-500 font-medium">Year</p>
              <p className="text-sm font-semibold text-slate-800">
                {student.semester || "3rd Year"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200">
            <div className="bg-blue-100 p-3 rounded-lg">
              <FaEnvelope className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-slate-500 font-medium">
                Email Address
              </p>
              <p className="text-sm font-semibold text-slate-800">
                {student.email}
              </p>
            </div>
            <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded text-xs font-medium hover:bg-blue-200 transition-colors">
              Send Email
            </button>
          </div>
          <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200">
            <div className="bg-emerald-100 p-3 rounded-lg">
              <FaPhone className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-slate-500 font-medium">Phone Number</p>
              <p className="text-sm font-semibold text-slate-800">
                {student.phone}
              </p>
            </div>
            <button className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded text-xs font-medium hover:bg-emerald-200 transition-colors">
              Call
            </button>
          </div>
        </div>
      </div>

      {/* Documents */}
      <div
        className="bg-slate-50 rounded-lg p-4"
        title="Only visible to Manager and Admin"
      >
        <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-4">
          Documents
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200">
            <div className="bg-amber-100 p-3 rounded-lg">
              <FaFileAlt className="w-5 h-5 text-amber-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-slate-500 font-medium">Aadhar Card</p>
              <p className="text-xs text-slate-400 mt-0.5">Identity Proof</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => openDocumentModal("aadhar")}
                className="p-2 bg-amber-100 text-amber-600 rounded hover:bg-amber-200 transition-colors"
                title="View"
              >
                <FaEye className="w-4 h-4" />
              </button>
              <button
                className="p-2 bg-amber-100 text-amber-600 rounded hover:bg-amber-200 transition-colors"
                title="Download"
              >
                <FaDownload className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200">
            <div className="bg-violet-100 p-3 rounded-lg">
              <FaFileAlt className="w-5 h-5 text-violet-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-slate-500 font-medium">
                Previous Year Marksheet
              </p>
              <p className="text-xs text-slate-400 mt-0.5">Academic Record</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => openDocumentModal("marksheet")}
                className="p-2 bg-violet-100 text-violet-600 rounded hover:bg-violet-200 transition-colors"
                title="View"
              >
                <FaEye className="w-4 h-4" />
              </button>
              <button
                className="p-2 bg-violet-100 text-violet-600 rounded hover:bg-violet-200 transition-colors"
                title="Download"
              >
                <FaDownload className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Social Profiles */}
      <div className="bg-slate-50 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-4">
          Social Profiles
        </h3>
        <div className="flex gap-3">
          <a
            href={student.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200 hover:border-slate-800 transition-colors group"
          >
            <div className="bg-slate-800 p-3 rounded-lg group-hover:bg-slate-700 transition-colors">
              <FaGithub className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-slate-500 font-medium">
                GitHub Profile
              </p>
              <p className="text-sm font-semibold text-slate-800">
                @{student.name.toLowerCase().replace(" ", "")}
              </p>
            </div>
          </a>

          <a
            href={student.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200 hover:border-blue-600 transition-colors group"
          >
            <div className="bg-blue-600 p-3 rounded-lg group-hover:bg-blue-700 transition-colors">
              <FaLinkedin className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-slate-500 font-medium">
                LinkedIn Profile
              </p>
              <p className="text-sm font-semibold text-slate-800">
                @{student.name.toLowerCase().replace(" ", "")}
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* Emergency Contact */}
      <div
        className="bg-slate-50 rounded-lg p-4"
        title="Only visible to Manager and Admin"
      >
        <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-4">
          Emergency Contact
        </h3>
        <div className="bg-white p-4 rounded-lg border border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm font-semibold text-slate-800">
                Parent/Guardian
              </p>
              <p className="text-xs text-slate-500">Primary Contact</p>
            </div>
            <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-semibold">
              Emergency
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FaPhone className="text-slate-400 text-sm" />
              <a
                href="tel:+919876512345"
                className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                +91 98765 12345
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-slate-400 text-sm" />
              <a
                href="mailto:parent@example.com"
                className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                parent@example.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Document Modal */}
      {documentModal.isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeDocumentModal}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full h-[85vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-200 flex-shrink-0">
              <h3 className="text-lg font-semibold text-slate-800">
                {documentModal.title}
              </h3>
              <div className="flex items-center gap-2">
                <a
                  href={documentModal.image}
                  download={documentModal.title}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <FaDownload className="w-4 h-4" />
                  <span>Download</span>
                </a>
                <button
                  onClick={closeDocumentModal}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <FaTimes className="w-5 h-5 text-slate-600" />
                </button>
              </div>
            </div>
            <div className="p-4 overflow-y-auto flex-1">
              <img
                src={documentModal.image}
                alt={documentModal.title}
                className="w-full h-auto rounded-lg border border-slate-200"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactDetails;
