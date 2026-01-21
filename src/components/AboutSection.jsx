import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-[#0b0f0e] text-white overflow-hidden"
    >
      {/* ===== Content Wrapper ===== */}
      <div
        className="
          relative z-10
          w-full
          px-6
          sm:px-10
          md:px-20
          lg:px-28
          xl:px-36
          py-28
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-32
          items-center
        "
      >
        {/* ===== Image ===== */}
        <motion.div
          initial={{ x: -100, opacity: 0, scale: 0.9 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          {/* Glow */}
          <div className="absolute w-96 h-96 md:w-[450px] md:h-[450px] lg:w-[520px] lg:h-[520px] rounded-full bg-lime-400 blur-3xl opacity-20"></div>

          {/* Image */}
          <img
            src={profile}
            alt="Ahmed"
            className="
              relative z-10
              w-72 h-72
              sm:w-80 sm:h-80
              md:w-96 md:h-96
              lg:w-[460px] lg:h-[460px]
              xl:w-[520px] xl:h-[520px]
              object-cover
              rounded-full
              border-4
              border-lime-400
            "
          />
        </motion.div>

        {/* ===== Content ===== */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-white/90 text-4xl md:text-5xl xl:text-6xl font-extrabold">
            About Me
          </h2>

          <p className="text-lime-400 text-3xl md:text-4xl xl:text-5xl font-extrabold mt-3">
            Frontend Developer
          </p>

          <p
            className="
              mt-8
              text-white/80
              text-lg
              md:text-xl
              xl:text-2xl
              leading-relaxed
              max-w-3xl
              mx-auto
              lg:mx-0
            "
          >
            I’m a Fresh Frontend Developer specializing in building responsive
            and modern web applications using React.js, JavaScript (ES6+), HTML,
            CSS, and Tailwind CSS. I focus on writing clean, reusable code and
            creating user-friendly interfaces that look good and work smoothly
            on all devices. I have hands-on experience using React Hooks, React
            Router, Context API, and API integration with Axios/Fetch.
            <span className="block mt-4">
              <button className="text-lime-400 text-lg hover:underline">
                See More
              </button>
            </span>
          </p>
        </motion.div>
      </div>

      {/* ===== Divider ===== */}
      <div className="w-full flex justify-center pb-24">
        <span className="w-80 md:w-[520px] h-[1px] bg-lime-200/40"></span>
      </div>
    </section>
  );
};

export default AboutSection;
