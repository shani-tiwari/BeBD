import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Connect", path: "/connect" },
  ];

  const activeClasses = "text-blue-600 dark:text-blue-400 font-bold";
  const inactiveClasses =
    "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium";

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[90%] max-w-5xl rounded-2xl glass ${
        isScrolled ? "py-3 shadow-xl" : "py-4 shadow-lg"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl font-black shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
            B
          </div>
          <span className="text-xl font-bold bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            BeBetter
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors duration-200 ${
                location.pathname === link.path
                  ? activeClasses
                  : inactiveClasses
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/connect"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/25 transition-all active:scale-95"
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-600 dark:text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 mt-2 glass rounded-2xl overflow-hidden transition-all duration-300 shadow-2xl ${
          isMenuOpen ? "max-h-64 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg transition-colors duration-200 ${
                location.pathname === link.path
                  ? activeClasses
                  : inactiveClasses
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/connect"
            onClick={() => setIsMenuOpen(false)}
            className="w-full text-center py-3 bg-blue-600 text-white rounded-xl font-semibold mt-2"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
