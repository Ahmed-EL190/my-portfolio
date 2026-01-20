
import mainImg from "../assets/mainImg.jpg";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative bg-[#0b0f0e] text-white overflow-hidden py-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* ===== Image ===== */}
        <div className="relative flex justify-center">
          <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-lime-400 blur-3xl opacity-20"></div>

          <img
            src={mainImg}
            alt="Ahmed"
            className="relative z-10 w-52 h-52 md:w-72 md:h-72 
                   object-cover rounded-full border-4 border-lime-400"
          />
        </div>

        {/* ===== Content ===== */}
        <div className="text-center md:text-left">
          <h1 className="text-white/85 text-2xl md:text-4xl font-extrabold">
            About Me
          </h1>

          <p className="text-lime-400 text-xl md:text-3xl font-extrabold mt-2">
            Frontend Developer
          </p>

          <p className="mt-6 text-white/75 max-w-xl mx-auto md:mx-0 text-sm md:text-base leading-relaxed">
            I’m a Fresh Frontend Developer specializing in building responsive
            and modern web applications using React.js, JavaScript (ES6+), HTML,
            CSS, and Tailwind CSS. I focus on writing clean, reusable code and
            creating user-friendly interfaces that look good and work smoothly
            on all devices. I have hands-on experience using React Hooks, React
            Router, Context API, and API integration with Axios/Fetch.{" "}
            <span>
              {" "}
              <button className="text-lime-400 text-sm hover:underline">
                See More
              </button>
            </span>
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full flex justify-center mt-24">
        <span className="w-48 md:w-96 h-px bg-lime-200"></span>
      </div>
    </section>
  );
};

export default AboutSection;
