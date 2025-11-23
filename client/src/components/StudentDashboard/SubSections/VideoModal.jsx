import React from 'react';
import { IoClose } from 'react-icons/io5';

const VideoModal = ({ lecture, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/85 z-9998 flex items-center justify-center p-4 pt-10">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl max-h-[80vh] overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="bg-linear-to-r from-purple-100 to-blue-100 text-gray-800 px-5 py-3 flex items-center justify-between border-b">
          <div>
            <h2 className="text-lg font-semibold">{lecture.title}</h2>
            <p className="text-xs text-gray-600 mt-0.5">Video Lecture - DRM Protected Content</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-600 hover:bg-gray-200 rounded-full p-1.5 transition-all"
          >
            <IoClose className="text-2xl" />
          </button>
        </div>

        {/* Video Content */}
        <div className="flex-1 overflow-y-auto bg-black">
          <div className="aspect-video w-full flex items-center justify-center">
            {/* Placeholder for video player - Replace with actual DRM protected video player */}
            <div className="text-center text-white p-6">
              <div className="mb-3">
                <svg className="w-16 h-16 mx-auto text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold mb-2">Video Player</h3>
              <p className="text-gray-400 text-sm mb-3">Protected video content for: {lecture.title}</p>
              <div className="bg-gray-800 rounded-lg p-3 max-w-md mx-auto">
                <p className="text-xs text-gray-300">
                  🔒 This video is DRM protected and can only be accessed after submitting your rating.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Details */}
        <div className="border-t border-gray-200 px-5 py-3 bg-gray-50">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <span className="text-gray-600">Duration: 15:30</span>
              <span className="text-gray-600">Quality: 1080p</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 text-xs bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
                Captions
              </button>
              <button className="px-3 py-1.5 text-xs bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors">
                Fullscreen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
