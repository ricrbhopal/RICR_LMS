import React from 'react';
import { IoClose } from 'react-icons/io5';
import { FaUserTie, FaCalendarAlt, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const InfoModal = ({ lecture, onClose }) => {
  // Sample data - can be dynamic
  const lectureInfo = {
    faculty: "Prof. Rajesh Kumar",
    startDate: "Jan 15, 2025",
    endDate: "Jan 30, 2025",
    totalClasses: 10,
    attendedClasses: 7,
    duration: "45 minutes",
    topic: lecture.title,
    description: "Comprehensive coverage of fundamental concepts with practical examples and hands-on exercises."
  };

 
  return (
    <div className="fixed inset-0 bg-black/85 z-9998 flex items-center justify-center p-4 pt-10">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-xl max-h-[85vh] overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="bg-linear-to-r from-blue-100 to-cyan-100 text-gray-800 px-5 py-3 flex items-center justify-between border-b">
          <div>
            <h2 className="text-lg font-semibold">Lecture Information</h2>
            <p className="text-xs text-gray-600 mt-0.5">{lecture.title}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-600 hover:bg-gray-200 rounded-full p-1.5 transition-all"
          >
            <IoClose className="text-2xl" />
          </button>
        </div>

        {/* Info Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          
          {/* Faculty Information */}
          <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-blue-400">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
                <FaUserTie className="text-lg" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">Faculty Details</h3>
                <p className="text-xs text-gray-600">Instructor Information</p>
              </div>
            </div>
            <div className="ml-12">
              <p className="text-gray-800 font-semibold text-sm">{lectureInfo.faculty}</p>
              <p className="text-xs text-gray-600">Senior Faculty - Computer Science Department</p>
            </div>
          </div>

          {/* Schedule Information */}
          <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-cyan-400">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-cyan-100 text-cyan-600 p-2 rounded-full">
                <FaCalendarAlt className="text-lg" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">Schedule</h3>
                <p className="text-xs text-gray-600">Session Timeline</p>
              </div>
            </div>
            <div className="ml-12 space-y-1.5 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Start Date:</span>
                <span className="font-semibold text-gray-900">{lectureInfo.startDate}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">End Date:</span>
                <span className="font-semibold text-gray-900">{lectureInfo.endDate}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Duration:</span>
                <span className="font-semibold text-gray-900">{lectureInfo.duration}</span>
              </div>
            </div>
          </div>

         
          {/* Description */}
          <div className="bg-blue-50 rounded-lg p-3">
            <h3 className="text-sm font-bold text-gray-900 mb-1.5">About This Lecture</h3>
            <p className="text-xs text-gray-700 leading-relaxed">{lectureInfo.description}</p>
          </div>

        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-5 py-3 flex justify-end bg-gray-50">
          <button
            onClick={onClose}
            className="px-5 py-1.5 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
