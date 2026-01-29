import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Coffee, Github, Twitter } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    {
      name: "Support my work",
      label: "Buy me a coffee",
      icon: <Coffee size={22} />,
      path: "https://buymeacoffee.com/shani_tiwari?new=1",
    },
    {
      name: "Follow on Twitter",
      label: "Follow on X",
      icon: <Twitter size={22} />,
      path: "https://x.com/ShaniDevelops",
    },
    {
      name: "GitHub Repository",
      label: "View source on GitHub",
      icon: <Github size={22} />,
      path: "https://github.com/shani-tiwari/BeBD-be_better_developer",
    },
  ];

  const activeClasses = "text-blue-400 font-bold";
  const inactiveClasses = "text-gray-300 hover:text-blue-400 font-medium";

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-4 left-1/2 max-w-4xl bg-white/10 backdrop-blur-md -translate-x-1/2 z-50 transition-all duration-300 w-[90%] mx-auto rounded-2xl py-2 shadow-xl`}
    >
      <div className="container mx-auto px-8 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          aria-label="BeBD Home"
          className="flex items-center justify-center gap-2 group"
        >
          <div
            className="flex items-center justify-center text-white text-3xl font-black transition-transform duration-300"
            aria-hidden="true"
          >
            ↁ
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={` transition-all duration-300 hover:scale-110 ${
                location.pathname === link.path
                  ? activeClasses
                  : inactiveClasses
              }`}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
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
        className={`md:hidden absolute w-fit top-full right-1 -translate-x-1/2 mt-2 glass rounded-2xl overflow-hidden backdrop-blur-2xl transition-all duration-300 shadow-2xl ${
          isMenuOpen
            ? "max-h-64 py-4 opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center px-6 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              aria-label={link.label}
              className={`text-lg transition-colors duration-200 flex items-center gap-3 ${
                location.pathname === link.path
                  ? "text-blue-600 font-bold"
                  : "text-gray-100"
              }`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
