import mainImg from "../assets/mainImg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#0b0f0e] text-white overflow-hidden"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1f1f1f,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 grid md:grid-cols-2 gap-16 items-center">
        {/* ===== Left Content ===== */}
        <div>
          <span className="inline-flex items-center gap-2 text-sm text-lime-400 mb-6">
            ✨ Hey There!
          </span>

          <h1 className="text-3xl md:text-7xl font-extrabold leading-tight">
            I'm <span className="text-white/85">Ahmed El Dosoky</span>
            <span className="block text-lime-400 mt-2">
              <span className="text-lime-400">Frontend</span> Developer
            </span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-xl">
            I’m Fresh Frontend Developer | React.js | JavaScript (ES6+) | HTML,
            CSS, Tailwind | Building Responsive Modern Web Apps
          </p>
        </div>

        {/* ===== Right Image ===== */}
        <div className="relative flex justify-center md:justify-end">
          <div className="absolute w-80 h-80 rounded-full bg-lime-400 blur-3xl opacity-20"></div>

          <img
            src={mainImg}
            alt="Ahmed"
            className="relative z-10 w-72 h-72 object-cover rounded-full border-4 border-lime-400"
          />
        </div>
      </div>
      <div className="w-full flex justify-center my-20">
        <span className="w-96 h-[.5px] bg-lime-200"></span>
      </div>
    </section>
  );
};

export default Hero;
