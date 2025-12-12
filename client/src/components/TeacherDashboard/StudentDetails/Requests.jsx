import React from 'react';
import { FaExclamationCircle, FaQuestionCircle, FaFileAlt, FaClock, FaCheckCircle } from 'react-icons/fa';

const Requests = ({ student }) => {
  // Sample requests data
  const requests = [
    {
      id: 1,
      type: 'Leave',
      title: 'Medical Leave Request',
      description: 'Requesting leave for 3 days due to medical reasons',
      date: '2025-12-08',
      status: 'pending',
      module: student.modules[0],
    },
    {
      id: 2,
      type: 'Assignment',
      title: 'Assignment Extension Request',
      description: 'Requesting 2 days extension for assignment submission',
      date: '2025-12-05',
      status: 'approved',
      module: student.modules[1],
    },
    {
      id: 3,
      type: 'Support',
      title: 'Technical Support',
      description: 'Need help with project setup and configuration',
      date: '2025-12-03',
      status: 'resolved',
      module: student.modules[2] || student.modules[0],
    },
    {
      id: 4,
      type: 'Doubt',
      title: 'Concept Clarification',
      description: 'Need clarification on advanced topics covered in last lecture',
      date: '2025-12-01',
      status: 'pending',
      module: student.modules[0],
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <FaClock className="text-amber-500" />;
      case 'approved':
        return <FaCheckCircle className="text-emerald-500" />;
      case 'resolved':
        return <FaCheckCircle className="text-blue-500" />;
      default:
        return <FaExclamationCircle className="text-slate-500" />;
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Leave':
        return <FaExclamationCircle className="text-red-500" />;
      case 'Assignment':
        return <FaFileAlt className="text-blue-500" />;
      case 'Support':
        return <FaQuestionCircle className="text-purple-500" />;
      case 'Doubt':
        return <FaQuestionCircle className="text-amber-500" />;
      default:
        return <FaFileAlt className="text-slate-500" />;
    }
  };

  const pendingRequests = requests.filter(r => r.status === 'pending');
  const resolvedRequests = requests.filter(r => r.status !== 'pending');

  return (
    <div className="space-y-6">
      {/* Request Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="bg-amber-500 p-3 rounded-lg">
              <FaClock className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-amber-700">{pendingRequests.length}</p>
              <p className="text-xs text-amber-600 font-medium">Pending</p>
            </div>
          </div>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-500 p-3 rounded-lg">
              <FaCheckCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-emerald-700">{resolvedRequests.length}</p>
              <p className="text-xs text-emerald-600 font-medium">Resolved</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 p-3 rounded-lg">
              <FaFileAlt className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-700">{requests.length}</p>
              <p className="text-xs text-blue-600 font-medium">Total</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pending Requests */}
      {pendingRequests.length > 0 && (
        <div className="bg-slate-50 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-4">
            Pending Requests
          </h3>
          <div className="space-y-3">
            {pendingRequests.map((request) => (
              <div key={request.id} className="bg-white rounded-lg p-4 border-l-4 border-amber-500 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {getTypeIcon(request.type)}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800">{request.title}</h4>
                      <p className="text-xs text-slate-500">{request.module}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(request.status)}
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
                      {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-2">{request.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">{request.date}</span>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-emerald-500 text-white rounded text-xs font-medium hover:bg-emerald-600 transition-colors">
                      Approve
                    </button>
                    <button className="px-3 py-1 bg-red-500 text-white rounded text-xs font-medium hover:bg-red-600 transition-colors">
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Resolved Requests */}
      <div className="bg-slate-50 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-4">
          Resolved Requests
        </h3>
        <div className="space-y-3">
          {resolvedRequests.map((request) => (
            <div key={request.id} className={`bg-white rounded-lg p-4 border-l-4 ${
              request.status === 'approved' ? 'border-emerald-500' : 'border-blue-500'
            }`}>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  {getTypeIcon(request.type)}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800">{request.title}</h4>
                    <p className="text-xs text-slate-500">{request.module}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusIcon(request.status)}
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    request.status === 'approved' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-2">{request.description}</p>
              <span className="text-xs text-slate-500">{request.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* New Request Button */}
      <div className="flex justify-center">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm">
          View All Requests
        </button>
      </div>
    </div>
  );
};

export default Requests;
