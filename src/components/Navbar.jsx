const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md">
      <div className="w-full px-6 md:px-16 py-4 gap-2 flex items-center justify-between">
        {/* ===== Logo ===== */}
        <svg
          className="hover:scale-110 transition cursor-pointer"
          width="46"
          height="24"
          viewBox="0 0 46 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="14"
            y="2"
            width="9"
            height="25"
            rx="4"
            transform="rotate(-20 14 2)"
            fill="#b6ff3b"
          />
          <rect
            x="30"
            y="2"
            width="9"
            height="25"
            rx="4"
            transform="rotate(-20 30 2)"
            fill="#b6ff3b"
          />
          <circle cx="6" cy="12" r="4" fill="#b6ff3b" />
        </svg>

        {/* ===== Nav Links (Desktop Only) ===== */}
        <nav className="hidden lg:flex items-center gap-12 text-base lg:text-lg text-gray-300">
          <a href="#home" className="hover:text-lime-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-lime-400 transition">
            About
          </a>
          <a href="#services" className="hover:text-lime-400 transition">
            Services
          </a>
          <a href="#gallery" className="hover:text-lime-400 transition">
            Gallery
          </a>
          <a href="#contact" className="hover:text-lime-400 transition">
            Contact
          </a>
        </nav>

        {/* ===== Hire Me Button (Always Visible) ===== */}
        <a
          href="#contact"
          className="relative overflow-hidden px-7 py-3 text-base md:text-lg 
             border border-lime-400 text-lime-400 rounded-full 
             group whitespace-nowrap"
        >
          <span
            className="absolute inset-0 bg-lime-400 translate-x-[-100%] 
                   group-hover:translate-x-0 transition-transform duration-300"
          ></span>
          <span className="relative z-10 group-hover:text-black transition-colors">
            Hire Me ↗
          </span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;

{
  /* <a
          href="#contact"
          className="relative overflow-hidden px-7 py-3 text-base md:text-lg border border-lime-400 text-lime-400 rounded-full transition group"
        >
          <span className="absolute inset-0 bg-lime-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          <span className="relative z-10 group-hover:text-black">
            Hire Me ↗
          </span>
        </a> */
}
