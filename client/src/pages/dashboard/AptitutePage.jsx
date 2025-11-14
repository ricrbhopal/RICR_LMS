import React from 'react';
import { Link } from 'react-router-dom';
import Java3DCard from '../../components/Java3DCard';
const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "Java",
      instructor: "Pranay K Das",
      link: "/courses/java",
      color: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
      image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 2,
      title: "Java DSA",
      instructor: "Pranay K Das",
      link: "/courses/java-dsa",
      color: "bg-green-50",
      textColor: "text-green-600",
      borderColor: "border-green-200",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 3,
      title: "OOP",
      instructor: "Pranay K Das",
      link: "/courses/oop",
      color: "bg-purple-50",
      textColor: "text-purple-600",
      borderColor: "border-purple-200",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 4,
      title: "MERN stack",
      instructor: "Raj Vardhan",
      link: "/courses/mern-stack",
      color: "bg-orange-50",
      textColor: "text-orange-600",
      borderColor: "border-orange-200",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 5,
      title: "Appitute",
      instructor: "Ashish Mishra",
      link: "/courses/appitute",
      color: "bg-red-50",
      textColor: "text-red-600",
      borderColor: "border-red-200",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format"
    },
    {
      id: 6,
      title: "Photography",
      instructor: "S.J. Kabir",
      link: "/courses/photography",
      color: "bg-indigo-50",
      textColor: "text-indigo-600",
      borderColor: "border-indigo-200",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop&auto=format"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            All Courses
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Explore our comprehensive collection of courses designed to enhance your skills and advance your career
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

       

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          <div className="flex gap-2 flex-wrap justify-center">
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
              All Categories
            </button>
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
              Popular
            </button>
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
              Newest
            </button>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link
              to={course.link || `/courses/${course.id}`}
              key={course.id}
              className={`${course.color} ${course.borderColor} border-2 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group block`}
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden rounded-t-2xl bg-white">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 bg-white"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                
                {/* Course Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full ${course.color} ${course.borderColor} border backdrop-blur-sm bg-white/80`}>
                    <span className={`text-sm font-medium ${course.textColor}`}>
                      Course
                    </span>
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Course Title and Icon */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 flex-1">
                    {course.title}
                  </h3>
                  <div className={`w-12 h-12 ${course.color} rounded-xl flex items-center justify-center ${course.borderColor} border-2 ml-4 flex-shrink-0`}>
                    <span className="text-2xl">
                      {course.id === 1 && "⚡"}
                      {course.id === 2 && "📊"}
                      {course.id === 3 && "🔄"}
                      {course.id === 4 && "🌐"}
                      {course.id === 5 && "🧠"}
                      {course.id === 6 && "📸"}
                    </span>
                  </div>
                </div>

                {/* Course Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span>4.8</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>32h</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Advanced</span>
                  </div>
                </div>

                {/* Instructor and Action */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center mr-3">
                      <span className="text-xs font-bold text-white">
                        {course.instructor.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Instructor</p>
                      <p className="text-sm font-semibold text-gray-900">
                        {course.instructor}
                      </p>
                    </div>
                  </div>
                  
                  {/* View Button */}
                  <button className={`px-4 py-2 rounded-lg ${course.textColor} ${course.color} ${course.borderColor} border font-medium text-sm hover:shadow-md transition-all duration-200 hover:scale-105`}>
                    Enroll Now
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 mx-auto">
            <span>Load More Courses</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;