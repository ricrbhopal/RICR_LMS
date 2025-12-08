import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import StudentHeader from "./StudentHeader";
import TeacherHeader from "./TeacherHeader";

const Header = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-9999">
      <div className="h-14 flex items-center justify-between w-full px-10">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="RICR LMS" className="h-6 w-auto" />
          <span className="text-xl font-bold leading-none">RICR</span>
        </Link>
        {location === "/student-dashboard" ? (
          <StudentHeader />
        ) : location === "/teacher-dashboard" ? (
          <TeacherHeader />
        ) : (
          <div className="flex items-center gap-4">
            <button
              className="border bg-[#caeaff] py-2 px-4 text-blue-700 rounded cursor-pointer hover:bg-blue-600 hover:text-white transition"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
