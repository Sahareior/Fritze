import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  "Experiences",
  "Private Groups",
  "How It Works",
  "About",
  "FAQ",
  "Gift Cards",
  "Press",
];

const links = [
  "/exprience",
  "/private-groups",
  "/how-its-work",
  "/about",
  "/fnq",
  "/gift-cards",
  "/press",
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 md:px-6 px-2 py-3 sticky top-0 z-[100]">
      <div className="max-w-8xl md:px-20  mx-auto flex items-center justify-between relative">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="logo"
            className="w-[80px] h-[70px] md:w-[120px] md:h-[100px] object-top -mt-3 md:-mt-6 object-contain z-[110]"
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-6 text-[18px] raleway font-medium text-[#8E98A8]">
          {navLinks.map((name, index) => (
            <NavLink
              key={index}
              to={links[index]}
              className={({ isActive }) =>
                `relative hover:text-gray-800 transition ${
                  isActive ? "text-gray-800" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {name}
                  {/* Active underline */}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-orange-500 rounded animate-fadeIn"></span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="text-sm text-blue-600 hover:underline">
            Log In
          </Link>

          <Link
            to="/signup"
            className="bg-[#2f3e46] text-white px-5 py-2 rounded-md text-sm hover:opacity-90 transition"
          >
            Sign up
          </Link>

          {/* Profile Icon */}
          <Link
            to="/profile"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 transition"
          >
            👤
          </Link>
        </div>

        {/* Hamburger Menu Toggle (Mobile) */}
        <div className="md:hidden flex items-center z-[110]">
          <button 
            onClick={toggleMobileMenu} 
            className="text-gray-600 text-2xl focus:outline-none hover:text-orange-500 transition-colors"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        
        {/* Mobile Menu Dropdown */}
        <div 
          className={`absolute top-[100%] left-0 w-full bg-white shadow-xl flex flex-col md:hidden z-[100] transition-all duration-300 ease-in-out origin-top border-t border-gray-100 ${
            isMobileMenuOpen ? "opacity-100 scale-y-100 mt-3" : "opacity-0 scale-y-0 h-0 pointer-events-none mt-3"
          }`}
        >
          <div className="flex flex-col py-6 px-6 max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col gap-6 text-[18px] raleway font-medium text-[#8E98A8]">
              {navLinks.map((name, index) => (
                <NavLink
                  key={index}
                  to={links[index]}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `hover:text-gray-800 transition ${
                      isActive ? "text-orange-500 font-semibold" : ""
                    }`
                  }
                >
                  {name}
                </NavLink>
              ))}
            </nav>
            
            <div className="flex flex-col gap-4 mt-8 border-t border-gray-100 pt-8 w-full">
              <Link 
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-center py-2 text-blue-600 font-medium hover:underline"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-[#2f3e46] text-white text-center py-3 rounded-md font-medium hover:opacity-90 transition"
              >
                Sign up
              </Link>
              <Link
                to="/profile"
                onClick={() => setIsMobileMenuOpen(false)}
                className="border border-gray-300 text-gray-700 text-center py-3 rounded-md font-medium hover:bg-gray-50 transition flex items-center justify-center gap-2"
              >
                <span>👤</span> My Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;