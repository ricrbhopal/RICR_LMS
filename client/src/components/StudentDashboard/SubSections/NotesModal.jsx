import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaSave } from 'react-icons/fa';

const NotesModal = ({ lecture, onClose }) => {
  const [notes, setNotes] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // Save notes logic here (API call)
    console.log('Saving notes:', notes);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/85 z-9998 flex items-center justify-center p-4 pt-10">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="bg-linear-to-r from-indigo-100 to-purple-100 text-gray-800 px-5 py-3 flex items-center justify-between border-b">
          <div>
            <h2 className="text-lg font-semibold">Notes: {lecture.title}</h2>
            <p className="text-xs text-gray-600 mt-0.5">Write and save your personal notes</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-600 hover:bg-gray-200 rounded-full p-1.5 transition-all"
          >
            <IoClose className="text-2xl" />
          </button>
        </div>

        {/* Notes Content */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-3">
            {/* Editor Area */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Your Notes
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Write your notes here... You can add key points, questions, or any observations about this lecture."
                className="w-full h-64 p-3 border border-gray-300 rounded-lg focus:border-indigo-400 focus:ring-1 focus:ring-indigo-200 transition-all resize-none"
                style={{ fontSize: '13px', lineHeight: '1.5' }}
              />
            </div>

            {/* Tips Section */}
            <div className="bg-indigo-50 border-l-4 border-indigo-400 rounded-lg p-3">
              <h4 className="text-xs font-semibold text-indigo-900 mb-1.5">💡 Note-taking Tips:</h4>
              <ul className="text-xs text-indigo-800 space-y-0.5 ml-3">
                <li>• Summarize key concepts in your own words</li>
                <li>• Write down questions for further research</li>
                <li>• Add code examples and explanations</li>
                <li>• Mark important topics to review later</li>
              </ul>
            </div>

            {/* Character Count */}
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{notes.length} characters</span>
              {saved && (
                <span className="text-green-600 font-semibold flex items-center gap-2">
                  <FaSave /> Notes saved successfully!
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-5 py-3 flex justify-between items-center bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-sm text-gray-600 hover:text-gray-800 font-semibold transition-colors"
          >
            Cancel
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => setNotes('')}
              className="px-4 py-1.5 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors font-semibold"
            >
              Clear
            </button>
            <button
              onClick={handleSave}
              disabled={!notes.trim()}
              className={`px-5 py-1.5 text-sm rounded font-semibold transition-colors flex items-center gap-1.5 ${
                !notes.trim()
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
              }`}
            >
              <FaSave className="text-xs" />
              Save Notes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesModal;
