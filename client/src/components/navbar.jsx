import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  const navStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.5rem 1rem",
    background: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
  };

  const brandStyle = {
    fontWeight: 700,
    fontSize: "1rem",
  };

  const profileBtn = {
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: "#e5e7eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    padding: 0,
    cursor: "pointer",
  };

  return (
    <nav style={navStyle}>
      <div style={brandStyle} className="flex items-center gap-2">
        <img src={logo} alt="RICR LMS" style={{ height: "24px" }} />{" "}
        <span className="text-2xl">RICR</span>
      </div>

      <div>
        <button aria-label="Open profile" title="Profile" style={profileBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            width="18"
            height="18"
            style={{ color: "#374151" }}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.458 20C3.732 16.943 6.61 14.5 10 14.5h4c3.39 0 6.268 2.443 7.542 5.5"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
