import { NavLink, Link } from "react-router-dom";

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
  return (
    <header className="w-full bg-white border-b border-gray-200 px-6 py-3 sticky top-0 z-[100]">
      <div className="max-w-8xl px-20 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="logo"
            className="w-[120px] object-top -mt-6 object-contain"
          />
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-[18px] raleway font-medium text-[#8E98A8]">
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

        {/* Right Side */}
        <div className="flex items-center gap-4">
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
      </div>
    </header>
  );
}

export default Navbar;