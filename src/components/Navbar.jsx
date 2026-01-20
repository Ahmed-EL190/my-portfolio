


const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <svg
          className="hover:scale-110 transition"
          width="40"
          height="22"
          viewBox="0 0 46 24"
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

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#home" className="hover:text-white transition">
            Home
          </a>
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#services" className="hover:text-white transition">
            Services
          </a>
          <a href="#gallery" className="hover:text-white transition">
            Gallery
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </nav>

        {/* Button */}
        <button className="animate-pulse items-center gap-2 px-6 py-2 border border-lime-400 text-lime-400 rounded-full hover:bg-lime-400 hover:text-black transition">
          Hire Me ↗
        </button>
      </div>
    </header>
  );
};

export default Navbar;
