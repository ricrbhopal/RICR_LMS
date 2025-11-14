import React from 'react';

const Java3DCard = ({ title = 'JAVA', width = 360 }) => {
  const textShadow = '0 6px 0 rgba(0,0,0,0.06), 0 18px 40px rgba(0,0,0,0.12)';

  return (
    <div className="flex items-center justify-center">
      <div
        className="group relative"
        style={{ width: `${width}px`, perspective: '900px' }}
      >
        {/* Back shadow / offset layer to give the 3D base */}
        <div
          className="absolute inset-0 rounded-2xl transform translate-x-3 translate-y-3"
          style={{
            background: 'linear-gradient(180deg, #e6e9ee 0%, #d8dbe0 100%)',
            zIndex: 0,
            filter: 'blur(0.6px)'
          }}
        />

        {/* Main card */}
        <div
          className="relative rounded-2xl overflow-hidden bg-white shadow-[0_18px_50px_-20px_rgba(15,23,42,0.35)] transform transition-all duration-300 group-hover:-translate-y-3 group-hover:scale-105"
          style={{ zIndex: 10 }}
        >
          {/* Top bar (window-like) */}
          <div className="flex items-center justify-between px-4 h-12 bg-blue-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-white/90 rounded-full shadow-sm" />
              <span className="w-3 h-3 bg-white/80 rounded-full shadow-sm" />
              <span className="w-3 h-3 bg-white/70 rounded-full shadow-sm" />
            </div>
            <div className="text-white text-xs font-semibold opacity-95"> </div>
          </div>

          {/* Content area */}
          <div className="p-8 flex items-center justify-center bg-white">
            <div className="text-center">
              <div
                className="inline-block select-none"
                style={{
                  color: '#F6C40E',
                  fontWeight: 800,
                  fontSize: '56px',
                  lineHeight: 1,
                  letterSpacing: '1px',
                  textShadow
                }}
              >
                {title}
              </div>

              <div className="mt-3 text-sm text-gray-500">Introduction · 12 lectures</div>
            </div>
          </div>

          {/* Bottom subtle base to emphasize 3D thickness */}
          <div className="h-4 bg-gradient-to-b from-transparent to-gray-100" />
        </div>
      </div>
    </div>
  );
};

export default Java3DCard;
