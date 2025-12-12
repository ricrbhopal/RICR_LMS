import React from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaUser,
  FaBirthdayCake,
  FaIdCard,
} from 'react-icons/fa';

const ContactDetails = ({ student }) => {
  return (
    <div className="space-y-6">
      {/* Contact Information */}
      <div className="bg-slate-50 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-4">
          Contact Information
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200">
            <div className="bg-blue-100 p-3 rounded-lg">
              <FaEnvelope className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-slate-500 font-medium">Email Address</p>
              <p className="text-sm font-semibold text-slate-800">{student.email}</p>
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
              <p className="text-sm font-semibold text-slate-800">{student.phone}</p>
            </div>
            <button className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded text-xs font-medium hover:bg-emerald-200 transition-colors">
              Call
            </button>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-slate-50 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-4">
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg border border-slate-200">
            <div className="flex items-center gap-2 mb-1">
              <FaIdCard className="text-slate-400 text-sm" />
              <p className="text-xs text-slate-500 font-medium">Enrollment Number</p>
            </div>
            <p className="text-sm font-semibold text-slate-800">{student.enrollmentNo}</p>
          </div>
          
          <div className="bg-white p-3 rounded-lg border border-slate-200">
            <div className="flex items-center gap-2 mb-1">
              <FaUser className="text-slate-400 text-sm" />
              <p className="text-xs text-slate-500 font-medium">Full Name</p>
            </div>
            <p className="text-sm font-semibold text-slate-800">{student.name}</p>
          </div>
          
          <div className="bg-white p-3 rounded-lg border border-slate-200">
            <div className="flex items-center gap-2 mb-1">
              <FaBirthdayCake className="text-slate-400 text-sm" />
              <p className="text-xs text-slate-500 font-medium">Date of Birth</p>
            </div>
            <p className="text-sm font-semibold text-slate-800">15 Aug 2002</p>
          </div>
          
          <div className="bg-white p-3 rounded-lg border border-slate-200">
            <div className="flex items-center gap-2 mb-1">
              <FaMapMarkerAlt className="text-slate-400 text-sm" />
              <p className="text-xs text-slate-500 font-medium">Location</p>
            </div>
            <p className="text-sm font-semibold text-slate-800">Bhopal, MP</p>
          </div>
        </div>
      </div>

      {/* Social Profiles */}
      <div className="bg-slate-50 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-4">
          Social Profiles
        </h3>
        <div className="space-y-3">
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
              <p className="text-xs text-slate-500 font-medium">GitHub Profile</p>
              <p className="text-sm font-semibold text-slate-800">@{student.name.toLowerCase().replace(' ', '')}</p>
            </div>
            <span className="text-xs text-slate-500 group-hover:text-slate-800">Visit →</span>
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
              <p className="text-xs text-slate-500 font-medium">LinkedIn Profile</p>
              <p className="text-sm font-semibold text-slate-800">@{student.name.toLowerCase().replace(' ', '')}</p>
            </div>
            <span className="text-xs text-slate-500 group-hover:text-blue-600">Visit →</span>
          </a>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-slate-50 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-4">
          Emergency Contact
        </h3>
        <div className="bg-white p-4 rounded-lg border border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm font-semibold text-slate-800">Parent/Guardian</p>
              <p className="text-xs text-slate-500">Primary Contact</p>
            </div>
            <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-semibold">
              Emergency
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FaPhone className="text-slate-400 text-sm" />
              <span className="text-sm text-slate-700">+91 98765 12345</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-slate-400 text-sm" />
              <span className="text-sm text-slate-700">parent@example.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4 border-t border-slate-200">
        <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
          Send Message
        </button>
        <button className="flex-1 px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors font-medium">
          Schedule Meeting
        </button>
      </div>
    </div>
  );
};

export default ContactDetails;
