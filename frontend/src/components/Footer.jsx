import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  ArrowUpRight,
  Heart,
  Dribbble,
  Instagram,
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
    <footer className="w-full  border-t border-white/10 dark:border-white/5 relative bg-transparent">
      {/* Upper Section */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Brand Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-4 group cursor-default">
            <div
              className="w-10 h-10 rounded-xl bg-linear-to-b from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300"
              aria-hidden="true"
            >
              ↁ
            </div>
            <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-b from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-300 dark:to-gray-500">
              BeBD
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-sm leading-relaxed">
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
                className="h-8 w-8 md:w-10 md:h-10 rounded-lg glass flex items-center justify-center text-gray-600 dark:text-gray-800 hover:-translate-y-1 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <a
            href="https://webtree-iota.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group cursor-pointer"
            aria-label="Visit Webtree (opens in new tab)"
          >
            <div
              className="w-10 h-10 rounded-xl bg-linear-to-b from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300"
              aria-hidden="true"
            >
              ४
            </div>
            <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-b from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-300 dark:to-gray-500">
              Webtree{" "}
              <span className="text-pretty rotate-25" aria-hidden="true">
                ↗
              </span>
            </span>
          </a>
          <p className="text-gray-600 dark:text-gray-400 max-w-sm leading-relaxed">
            An Center space for developers where they can find websites for
            frontend resources. Empowering developers to build better, faster,
            and more efficient modern web applications. Join our community and
            level up your development journey.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-8 border-t border-white/10 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center gap-1">
          © {currentYear} BeBD. Built with{" "}
          <Heart
            size={14}
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
