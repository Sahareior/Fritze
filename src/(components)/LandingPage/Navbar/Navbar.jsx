import React from "react";

const navLinks = [
  "Experiences",
  "Private Groups",
  "How It Works",
  "About",
  "FAQ",
  "Gift Cards",
  "Press",
];

function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-200 px-6 py-3">
      <div className="max-w-8xl px-20 mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="logo"
            className="w-[120px] object-top -mt-6 object-contain"
          />
        
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-[18px] raleway font-medium text-[#8E98A8]">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className={`relative hover:text-gray-800 transition ${
                index === 0 ? "text-gray-800" : ""
              }`}
            >
              {link}

              {/* Active underline */}
              {index === 0 && (
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-orange-500 rounded"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Log In
          </a>

          <button className="bg-[#2f3e46] text-white px-5 py-2 rounded-md text-sm hover:opacity-90 transition">
            Sign up
          </button>

          {/* Profile Icon */}
          <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600">
            👤
          </div>

        </div>
      </div>
    </header>
  );
}

export default Navbar;