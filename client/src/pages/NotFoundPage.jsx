import React from "react";
import notFoundImage from "../assets/1.png";
import emptyImage from "../assets/2.png";

const NotFoundPage = ({ category, message }) => {
  return (
    <>
      <div className={`flex flex-col items-center justify-center ${category === "Page" ? "min-h-screen  bg-gray-100" : ""}`}>
        <img
          src={`${category === "Page" ? notFoundImage : emptyImage}`}
          alt={`${category} not found`}
          className={`h-100 w-100 ${category !== "Page" ? "grayscale-75 opacity-50" : ""}`}
        />

        <p className="text-gray-600">{message}</p>
      </div>
    </>
  );
};

export default NotFoundPage;
