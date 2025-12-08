import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-[90vh] flex flex-col justify-center items-center">
        <button className="border bg-green-200 m-4 p-2 rounded cursor-pointer"
        onClick={() => navigate("/student-dashboard")}>
          Student Dashboard
        </button>
        <button className="border bg-indigo-200 m-4 p-2 rounded cursor-pointer"
        onClick={() => navigate("/teacher-dashboard")}>
          Teacher Dashboard
        </button>
      </div>
    </>
  );
};

export default HomePage;
