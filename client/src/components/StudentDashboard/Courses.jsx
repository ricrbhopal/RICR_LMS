import React, { useState } from "react";
import { Link } from "react-router-dom";
import CourseDetails from "./CourseDetails";
import Attendence from "./Attendence";

const Course = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showCourseDetails, setShowCourseDetails] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Java",
      instructor: "Pranay K Das",
      link: "/courses/java",
      color: "bg-blue-50",
      progressbar: "bg-blue-600",
      progress: "45%",
      attendence: "92%",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
      image: "./courseImages/JavaIcon.png",
    },
    {
      id: 2,
      title: "Java DSA",
      instructor: "Pranay K Das",
      link: "/courses/java-dsa",
      color: "bg-green-50",
      progressbar: "bg-blue-600",
      progress: "30%",
      attendence: "88%",
      textColor: "text-green-600",
      borderColor: "border-green-200",
      image: "./courseImages/javaDsa.png",
    },
    {
      id: 3,
      title: "OOP",
      instructor: "Pranay K Das",
      link: "/courses/oop",
      color: "bg-purple-50",
      progressbar: "bg-blue-600",
      progress: "40%",
      attendence: "85%",
      textColor: "text-purple-600",
      borderColor: "border-purple-200",
      image: "./courseImages/oops.png",
    },
    {
      id: 4,
      title: "MERN stack",
      instructor: "Raj Vardhan",
      link: "/courses/mern",
      color: "bg-orange-50",
      progressbar: "bg-blue-600",
      progress: "50%",
      attendence: "90%",
      textColor: "text-orange-600",
      borderColor: "border-orange-200",
      image: "./courseImages/mernStack.png",
    },
    {
      id: 5,
      title: "Appitute",
      instructor: "Ashish Mishra",
      link: "/courses/aptitute",
      color: "bg-red-50",
      progressbar: "bg-blue-600",
      progress: "35%",
      attendence: "87%",
      textColor: "text-red-600",
      borderColor: "border-red-200",
      image: "./courseImages/aptitute.png",
    },
    {
      id: 6,
      title: "Data Science",
      instructor: "Mohit Payashi",
      link: "/courses/data-science",
      color: "bg-indigo-50",
      progressbar: "bg-blue-600",
      progress: "25%",
      attendence: "80%",
      textColor: "text-indigo-600",
      borderColor: "border-indigo-200",
      image: "./courseImages/dataScience.png",
    },
  ];

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setShowCourseDetails(true);
  };

  const handleCloseDetails = () => {
    setShowCourseDetails(false);
    setSelectedCourse(null);
  };

  return (
    <div className="bg-[#caeaff] rounded-2xl mt-5 shadow px-6 w-[95%] mx-auto">
      {!showCourseDetails ? (
        // Course List View
        <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                My Courses
              </h1>

              <div className="w-50 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {courses.map((course) => (
                <div
                  key={course.id}
                  onClick={() => handleCourseClick(course)}
                  className={`${course.color} ${course.borderColor} border-2 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group`}
                >
                  {/* Course Image */}
                  <div className="relative h-48 overflow-hidden rounded-t-2xl bg-white">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 bg-white"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-blue-300/20 to-transparent pointer-events-none"></div>
                  </div>

                  {/* Course Content */}
                  <div className="py-4 px-6">
                    <div className="flex items-center justify-between mb-4 gap-4">
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className={`h-2.5 rounded-full ${course.progressbar}`}
                          style={{ width: course.progress }}
                        ></div>
                      </div>
                      <span>{course.progress}</span>
                    </div>
                    {/* Instructor and Action */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center">
                        <div>
                          <p className="text-xs text-gray-500">Instructor</p>
                          <p className="text-sm font-semibold text-gray-900">
                            {course.instructor}
                          </p>
                        </div>
                      </div>

                      {/* View Button */}
                      <button
                        className={`px-4 py-2 rounded-lg ${course.textColor} ${course.color} ${course.borderColor} border font-medium text-xs hover:shadow-md transition-all duration-200 hover:scale-105`}
                      >
                        Attendence: {course.attendence}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-linear-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 mx-auto">
                <span>Load More Courses</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <CourseDetails course={selectedCourse} close={handleCloseDetails} />
      )}
    </div>
  );
};

export default Course;
