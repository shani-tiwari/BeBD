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
    // {
    //   name: "Dribbble",
    //   icon: Dribbble,
    //   url: "https://dribbble.com/shani-tiwari",
    //   label: "My Dribbble portfolio",
    // },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://Instagram.com/shani.develops",
      label: "Follow on Instagram",
    },
  ];

  return (
    <footer id="about" className="w-full bg-gray-900 border-t border-white/5 relative ">

      <div className="px-6 md:px-0 max-w-3xl md:ml-34 py-4">
        <p className="text-neutral-200 text-2xl font-semibold tracking-wide">About</p>
        <p className="h-[0.2px] w-full md:w-[87%] bg-neutral-600 rounded-full mt-4"></p>
      </div>

      {/* Upper Section */}
      <div className="max-w-7xl mx-auto px-4 pt-10 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-12 md:gap-8">
        {/* Brand Section */}
        {/* bebd */}
        <div className="lg:col-span-2 space-y-5">
          <div className="flex items-center gap-4 group cursor-default">
            <div
              className="w-10 h-10 rounded-xl bg-linear-to-b from-gray-700 to-gray-800  flex items-center justify-center text-white font-semibold text-xl group-hover:scale-110 transition-transform duration-300"
              aria-hidden="true"
            >
              ↁ
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-b from-white via-gray-300 to-gray-500 tracking-wide">
              BeBD
            </span>
          </div>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            <strong className="tracking-wider">Be Better Developer</strong> <br />
            Empowering developers to build better, faster, and more efficient
            modern web applications. Join our community and level up your
            development journey.
          </p>
          <div className="flex gap-4 justify-around">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-3 py-2 md:px-3 rounded-lg bg-gray-950/70 flex items-center justify-center text-gray-200 hover:-translate-y-1 border-2 border-white/20 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={22} />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max px-2 py-1 bg-gray-950/80 border border-white/30 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>
        {/* upcoming */}
        <div className="lg:col-span-2 space-y-5 md:ml-20">
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
          <p className="text-gray-400 max-w-sm leading-relaxed tracking-wide ml-2">
            → New Categories <br />
            → Interview Practice <br />
            → Weekly New Projects <br />
            → Personal Collection <br />
            → Video Recommandations <br />
          </p>
        </div>

        <span className="md:w-px md:h-[250px] h-px w-full bg-neutral-600 rounded-full "></span>

        {/* webtree */}
        <div className="lg:col-span-2 space-y-5 md:-ml-22">
          <div className="flex justify-between items-center">
            <a
              href="https://webtree.shaniweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group cursor-pointer"
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
              <span className="text-gray-300/70 mt-1">
                <CircleArrowOutUpRight style={{ font: "white" }} size={16} />
              </span>
            </a>
            <Link to={'https://github.com/shani-tiwari/webtree'} target="_blank" 
            className="text-neutral-300 md:mr-12 bg-gray-950/70 px-3 py-[6px] rounded-lg border-2 border-white/30 hover:-translate-y-1 transition-all duration-300"> 
              <Github size={22} /> 
            </Link >
          </div>
          <p className="text-gray-400 max-w-sm leading-relaxed tracking-wide">
            One-stop for frontend magic—curated collections 
            of 85+ websites, and essential tools.  <br />
            Whether you're hunting for Tailwind components, Framer prototypes, 
            or color palettes, discover everything to supercharge your projects in seconds.
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

    </footer>
  );
}
