import React from 'react';
import { FaExclamationCircle, FaQuestionCircle, FaFileAlt, FaClock, FaCheckCircle, FaCalendarAlt, FaLifeRing } from 'react-icons/fa';

const Requests = ({ student }) => {
  // Sample Learning Support requests data
  const learningSupportRequests = [
    {
      id: 1,
      title: 'Technical Support',
      description: 'Need help with project setup and configuration',
      date: '2025-12-08',
      status: 'pending',
      module: student.modules[0],
      priority: 'high',
    },
    {
      id: 2,
      title: 'Concept Clarification',
      description: 'Need clarification on advanced topics covered in last lecture',
      date: '2025-12-05',
      status: 'resolved',
      module: student.modules[1],
      priority: 'medium',
    },
    {
      id: 3,
      title: 'Assignment Help',
      description: 'Requesting guidance on assignment approach and best practices',
      date: '2025-12-03',
      status: 'pending',
      module: student.modules[0],
      priority: 'low',
    },
    {
      id: 4,
      title: 'Video Tutorial Request',
      description: 'Requesting additional video tutorials for complex topics',
      date: '2025-12-01',
      status: 'resolved',
      module: student.modules[2] || student.modules[0],
      priority: 'medium',
    },
  ];

  // Sample Leave requests data
  const leaveRequests = [
    {
      id: 1,
      title: 'Medical Leave Request',
      description: 'Requesting leave for 3 days due to medical reasons',
      startDate: '2025-12-10',
      endDate: '2025-12-12',
      status: 'pending',
      reason: 'Medical',
      days: 3,
    },
    {
      id: 2,
      title: 'Family Emergency',
      description: 'Need to attend family event in hometown',
      startDate: '2025-12-05',
      endDate: '2025-12-06',
      status: 'approved',
      reason: 'Personal',
      days: 2,
    },
    {
      id: 3,
      title: 'Interview Leave',
      description: 'Attending company interview',
      startDate: '2025-12-01',
      endDate: '2025-12-01',
      status: 'approved',
      reason: 'Professional',
      days: 1,
    },
    {
      id: 4,
      title: 'Sick Leave',
      description: 'Down with fever, need rest',
      startDate: '2025-11-28',
      endDate: '2025-11-29',
      status: 'rejected',
      reason: 'Medical',
      days: 2,
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
      case 'rejected':
        return <FaExclamationCircle className="text-red-500" />;
      default:
        return <FaExclamationCircle className="text-slate-500" />;
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'high':
        return <span className="px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">High</span>;
      case 'medium':
        return <span className="px-2 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">Medium</span>;
      case 'low':
        return <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">Low</span>;
      default:
        return null;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'pending':
        return <span className="px-2 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">Pending</span>;
      case 'approved':
        return <span className="px-2 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">Approved</span>;
      case 'resolved':
        return <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">Resolved</span>;
      case 'rejected':
        return <span className="px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">Rejected</span>;
      default:
        return null;
    }
  };

  const pendingLearningSupportRequests = learningSupportRequests.filter(r => r.status === 'pending');
  const resolvedLearningSupportRequests = learningSupportRequests.filter(r => r.status !== 'pending');
  const pendingLeaveRequests = leaveRequests.filter(r => r.status === 'pending');
  const processedLeaveRequests = leaveRequests.filter(r => r.status !== 'pending');

  return (
    <div className="space-y-6">
      {/* Request Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="bg-purple-500 p-3 rounded-lg">
              <FaLifeRing className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-700">{pendingLearningSupportRequests.length}</p>
              <p className="text-xs text-purple-600 font-medium">Support Pending</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 p-3 rounded-lg">
              <FaCheckCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-700">{resolvedLearningSupportRequests.length}</p>
              <p className="text-xs text-blue-600 font-medium">Support Resolved</p>
            </div>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="bg-amber-500 p-3 rounded-lg">
              <FaClock className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-amber-700">{pendingLeaveRequests.length}</p>
              <p className="text-xs text-amber-600 font-medium">Leave Pending</p>
            </div>
          </div>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-500 p-3 rounded-lg">
              <FaCalendarAlt className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-emerald-700">{processedLeaveRequests.length}</p>
              <p className="text-xs text-emerald-600 font-medium">Leave Processed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Learning Support Column */}
        <div className="space-y-4">
          <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
            <div className="flex items-center gap-2 mb-4">
              <FaLifeRing className="text-purple-600 text-lg" />
              <h2 className="text-lg font-bold text-purple-800">Learning Support Requests</h2>
            </div>
            <p className="text-xs text-purple-600 mb-4">All support requests made by {student.name}</p>

            {/* Pending Learning Support */}
            {pendingLearningSupportRequests.length > 0 && (
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-3">
                  Pending ({pendingLearningSupportRequests.length})
                </h3>
                <div className="space-y-3">
                  {pendingLearningSupportRequests.map((request) => (
                    <div key={request.id} className="bg-white rounded-lg p-4 border border-purple-200 shadow-sm">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800">{request.title}</h4>
                          <p className="text-xs text-slate-500">{request.module}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {getPriorityBadge(request.priority)}
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">{request.description}</p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xs text-slate-500">{request.date}</span>
                        <div className="flex gap-2">
                          <button className="px-3 py-1 bg-purple-500 text-white rounded text-xs font-medium hover:bg-purple-600 transition-colors">
                            Respond
                          </button>
                          <button className="px-3 py-1 bg-emerald-500 text-white rounded text-xs font-medium hover:bg-emerald-600 transition-colors">
                            Resolve
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Resolved Learning Support */}
            {resolvedLearningSupportRequests.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-3">
                  Resolved ({resolvedLearningSupportRequests.length})
                </h3>
                <div className="space-y-3">
                  {resolvedLearningSupportRequests.map((request) => (
                    <div key={request.id} className="bg-white rounded-lg p-4 border border-blue-200 opacity-75">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800">{request.title}</h4>
                          <p className="text-xs text-slate-500">{request.module}</p>
                        </div>
                        {getStatusBadge(request.status)}
                      </div>
                      <p className="text-sm text-slate-600 mb-2">{request.description}</p>
                      <span className="text-xs text-slate-500">{request.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Leave Requests Column */}
        <div className="space-y-4">
          <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
            <div className="flex items-center gap-2 mb-4">
              <FaCalendarAlt className="text-amber-600 text-lg" />
              <h2 className="text-lg font-bold text-amber-800">Leave Requests</h2>
            </div>
            <p className="text-xs text-amber-600 mb-4">All leave requests made by {student.name}</p>

            {/* Pending Leave Requests */}
            {pendingLeaveRequests.length > 0 && (
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-3">
                  Pending ({pendingLeaveRequests.length})
                </h3>
                <div className="space-y-3">
                  {pendingLeaveRequests.map((request) => (
                    <div key={request.id} className="bg-white rounded-lg p-4 border border-amber-200 shadow-sm">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800">{request.title}</h4>
                          <p className="text-xs text-slate-500">{request.reason}</p>
                        </div>
                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
                          {request.days} {request.days === 1 ? 'Day' : 'Days'}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">{request.description}</p>
                      <div className="flex items-center gap-2 mb-3 text-xs text-slate-500">
                        <FaCalendarAlt />
                        <span>{request.startDate} to {request.endDate}</span>
                      </div>
                      <div className="flex items-center justify-end gap-2">
                        <button className="px-3 py-1 bg-emerald-500 text-white rounded text-xs font-medium hover:bg-emerald-600 transition-colors">
                          Approve
                        </button>
                        <button className="px-3 py-1 bg-red-500 text-white rounded text-xs font-medium hover:bg-red-600 transition-colors">
                          Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Processed Leave Requests */}
            {processedLeaveRequests.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-3">
                  Processed ({processedLeaveRequests.length})
                </h3>
                <div className="space-y-3">
                  {processedLeaveRequests.map((request) => (
                    <div key={request.id} className={`bg-white rounded-lg p-4 border ${
                      request.status === 'approved' ? 'border-emerald-200' : 'border-red-200'
                    } opacity-75`}>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800">{request.title}</h4>
                          <p className="text-xs text-slate-500">{request.reason}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {getStatusBadge(request.status)}
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">{request.description}</p>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <FaCalendarAlt />
                        <span>{request.startDate} to {request.endDate}</span>
                        <span className="ml-2">({request.days} {request.days === 1 ? 'Day' : 'Days'})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requests;
