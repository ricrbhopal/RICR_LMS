import logo from "../assets/logo.png";
import StudentHeader from "./StudentHeader";

const Navbar = ({ setActive }) => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-9999">
        <div className="h-14 flex items-center justify-between w-full px-10">
          <div className="flex items-center">
            <img src={logo} alt="RICR LMS" className="h-6 w-auto" />
            <span className="text-xl font-bold leading-none">RICR</span>
          </div>
          <StudentHeader setActive={setActive} />
        </div>
    </nav>
  );
};

export default Navbar;
