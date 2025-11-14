import React from 'react'
import Navbar from '../components/navbar.jsx'
import MyCourse from "./MyCoursesPage.jsx"
import StudentDashboardPage from './StudentDashboardPage.jsx'

const HomePage = () => {
  return (
    <>
        <Navbar />
        <StudentDashboardPage />

    </>
  )
}

export default HomePage 