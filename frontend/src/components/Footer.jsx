import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  ArrowUpRight,
  Heart,
  Dribbble,
  Instagram,
  ChartSpline,
  CircleArrowOutUpRight,
} from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/shani-tiwari",
      label: "Visit my GitHub",
    },
    {
      name: "X / Twitter",
      icon: Twitter,
      url: "https://x.com/ShaniDevelops",
      label: "Follow on X",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/shani-tiwari-aspirational/",
      label: "Connect on LinkedIn",
    },
    {
      name: "Gmail",
      icon: Mail,
      url: "mailto:shanitiwarifl@gmail.com",
      label: "Send me an email",
    },
    {
      name: "Dribbble",
      icon: Dribbble,
      url: "https://dribbble.com/shani-tiwari",
      label: "My Dribbble portfolio",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://Instagram.com/shanidevelops",
      label: "Follow on Instagram",
    },
  ];

  return (
    <footer className="w-full bg-gray-900 border-t border-white/5 relative ">
      {/* Upper Section */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
        {/* Brand Section */}
        {/* bebd */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-4 group cursor-default">
            <div
              className="w-10 h-10 rounded-xl bg-linear-to-b from-gray-700 to-gray-800  flex items-center justify-center text-white font-semibold text-xl group-hover:scale-110 transition-transform duration-300"
              aria-hidden="true"
            >
              ↁ
            </div>
            <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-b from-white via-gray-300 to-gray-500">
              BeBD
            </span>
          </div>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            <strong>Be Better Developer</strong> <br />
            Empowering developers to build better, faster, and more efficient
            modern web applications. Join our community and level up your
            development journey.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-8 w-8 md:w-10 md:h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-200 hover:-translate-y-1 border-2 border-white/20 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max px-2 py-1 bg-gray-800 border border-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>
        {/* upcoming */}
        <div className="lg:col-span-2 space-y-6">
          <a
            href="https://webtree-iota.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group cursor-pointer"
            aria-label="Visit Webtree (opens in new tab)"
          >
            <span
              className="w-10 h-10 rounded-xl bg-linear-to-b from-gray-700 to-gray-800  flex items-center justify-center text-white font-semibold text-xl group-hover:scale-110 transition-transform duration-300"
              aria-hidden="true"
            >
              <ChartSpline size={16} />
            </span>
            <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-b from-white via-gray-300 to-gray-500">
              Upcoming
            </span>
          </a>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            - New Categories <br />
            - Interview Practice <br />
            - Weekly New Projects <br />
            - Create Personal Collection <br />
          </p>
        </div>
        {/* webtree */}
        <div className="lg:col-span-2 space-y-6">
          <a
            href="https://webtree-iota.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group cursor-pointer"
            aria-label="Visit Webtree (opens in new tab)"
          >
            <span
              className="w-10 h-10 rounded-xl bg-linear-to-b from-gray-700 to-gray-800  flex items-center justify-center text-white font-semibold text-xl group-hover:scale-110 transition-transform duration-300"
              aria-hidden="true"
            >
              ४
            </span>
            <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-b from-white via-gray-300 to-gray-500">
              Webtree
            </span>
            <span className="text-gray-300">
              <CircleArrowOutUpRight style={{ font: "white" }} size={16} />
            </span>
          </a>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            One-stop for frontend magic—curated collections 
            of design inspiration sites, free fonts, stock images, UI kits, icons, animations, 
            and essential tools.  <br />
            Whether you're hunting for Tailwind components, Framer prototypes, 
            or color palettes, discover everything to supercharge your React, Next.js, or vanilla 
            projects in seconds.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-8 border-t border-white/5 flex flex-row justify-between items-center gap-6">
        <p className="text-sm text-gray-500 flex items-center gap-1">
          © {currentYear} BeBD. Built with{" "}
          <Heart
            size={18}
            className="text-red-500 animate-pulse"
            aria-hidden="true"
          />
          <span className="sr-only">love</span> for the community.
        </p>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-primary-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-primary-700/5 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
}
