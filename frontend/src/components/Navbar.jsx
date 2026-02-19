import { useState } from "react";
import { Link, useLocation } from "react-router";
import {
  Coffee,
  Github,
  MessageCircleQuestionMark,
  Twitter,
  CircleArrowOutUpRight,
} from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    {
      name: "Support my work",
      label: "🍵coffee for me",
      icon: <Coffee size={22} />,
      path: "https://buymeacoffee.com/shani_tiwari?new=1",
    },
    // {
    //   name: "Follow on Twitter",
    //   label: "📢Follow on X",
    //   icon: <Twitter size={22} />,
    //   path: "https://x.com/ShaniDevelops",
    // },
    {
      name: "GitHub Repository",
      label: "Star me  ⭐⭐",
      icon: <Github size={22} />,
      path: "https://github.com/shani-tiwari/BeBD-be_better_developer",
    },
    {
      name: "Share your thought",
      label: "What's the feedback⁉️",
      icon: <MessageCircleQuestionMark size={22} />,
      path: "https://x.com/messages/compose?recipient_id=2016695951449284609&text=Hey%20Shani,%20here%20is%20my%20thought%20about%20BeBD",
    },
  ];

  const activeClasses = "text-blue-400 font-bold";
  const inactiveClasses = "text-gray-300 hover:text-blue-400 font-medium";

  return (
    <nav
      aria-label="Main navigation"
      className={`h-fit w-full flex justify-center relative`}
    >
      <div
        className=" md:max-w-4xl fixed left-1/2 -translate-x-1/2 top-4 w-[90%] bg-white/10 mx-auto z-50 
      flex justify-between items-center  backdrop-blur-sm py-1 md:py-[8px] px-4 md:px-6 rounded-xl
      shadow-sm shadow-white/20 ring-2 ring-white/20 "
      >
        {/* Logo */}
        <Link
          to="/"
          aria-label="BeBD Home"
          className="flex items-center justify-center gap-2 group"
        >
          <div
            className="flex items-center justify-center text-white text-xl md:text-2xl  transition-transform duration-300"
            aria-hidden="true"
          >
            ↁ BeBD
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center justify-center gap-8">
          <a
            href="#about"
            className="text-xl text-gray-300 hover:text-blue-400 hover:scale-105 transition-all duration-200"
          >
            About
          </a>
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`group relative transition-all duration-200 hover:scale-110 ${
                location.pathname === link.path
                  ? activeClasses
                  : inactiveClasses
              }`}
            >
              {link.icon}
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-max px-2 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 text-gray-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-5 h-5"
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
        className={`md:hidden z-999 fixed w-fit top-16 right-6 mt-2 rounded-2xl bg-black/20 backdrop-blur-xl border border-white/10 
          overflow-hidden transition-all duration-300 ${
            isMenuOpen
              ? "max-h-66 py-4 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
      >
        <div className="flex flex-col mx-6 gap-4 ">
          {/* About Link */}
          <div className="flex ">
            <a
              href="#about"
              className="text-zinc-300 text-xl "
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          </div>

          <span className="h-[0.3px] w-full bg-white/20 rounded-full my-1"></span>

          {/*socials  */}
          <p className="text-zinc-400 text-xs tracking-wider ">Socials</p>
          <div className="flex justify-between items-center gap-3 text-gray-300/80">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                aria-label={link.label}
                className={`text-lg flex items-center gap-3  border-2 border-white/20 bg-gray-950/90 px-[10px] py-[6px] rounded-lg `}
              >
                {link.icon}
              </a>
            ))}
            <a
              href="https://x.com/shanidevelops"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 text-gray-300/80 border-white/20 bg-gray-950/90 px-[10px] py-[6px] rounded-lg"
            >
              <Twitter size={22} />
            </a>
          </div>

          <span className="h-[0.3px] w-full bg-white/20 rounded-full my-1"></span>

          {/* Other Products */}
          <div>
            <p className="text-zinc-400 text-xs tracking-wide mb-1">
              Other Products
            </p>
            <div className="flex justify-between items-center">
              <a
                href="https://webtree-v1.vercel.app"
                target="_blank"
                className="text-zinc-300 text-xl tracking-wider flex items-center gap-3 "
              >
                <span>४ Webtree </span>
                <span className="text-gray-300/80 mt-1">
                  <CircleArrowOutUpRight size={14} />
                </span>
              </a>
              <a
                href="https://github.com/shani-tiwari/webtree"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 text-gray-300/80 border-white/20 bg-gray-950/90 px-2 py-1 rounded-lg "
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
