import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#0b0f0e] text-white overflow-hidden"
    >
      {/* ===== Background Effect ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1f1f1f,transparent_60%)]" />

      {/* ===== Content Wrapper ===== */}
      <div
        className="
          relative z-10
          w-full
          px-6
          sm:px-10
          md:px-16
          lg:px-24
          xl:px-32
          pt-28
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-40
          items-center
        "
      >
        {/* ===== Image (Mobile First) ===== */}
        <motion.div
          initial={{ y: -60, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end order-1 lg:order-2"
        >
          {/* Glow */}
          <div
            className="
              absolute
              w-80 h-80
              sm:w-96 sm:h-96
              md:w-[420px] md:h-[420px]
              lg:w-[520px] lg:h-[520px]
              xl:w-[600px] xl:h-[600px]
              rounded-full
              bg-lime-400
              blur-3xl
              opacity-20
            "
          ></div>

          {/* Image */}
          <img
            src={profile}
            alt="Ahmed"
            className="
              relative z-10
              w-64 h-64
              sm:w-72 sm:h-72
              md:w-80 md:h-80
              lg:w-[460px] lg:h-[460px]
              xl:w-[520px] xl:h-[520px]
              object-cover
              rounded-full
              border-4
              border-lime-400
            "
          />
        </motion.div>

        {/* ===== Text Content ===== */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <span className="inline-flex justify-center lg:justify-start items-center gap-2 text-base md:text-lg text-lime-400 mb-6">
            ✨ Hey There!
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold leading-tight">
            I'm <span className="text-white/90">Ahmed El Dosoky</span>
            <span className="block text-lime-400 mt-3">
              Frontend Developer
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Fresh Frontend Developer | React.js | JavaScript (ES6+) | HTML,
            CSS, Tailwind | Building Responsive Modern Web Apps
          </p>
        </motion.div>
      </div>

      {/* ===== Divider ===== */}
      <div className="w-full flex justify-center my-16">
        <span className="w-72 md:w-96 h-[1px] bg-lime-200/40"></span>
      </div>
    </section>
  );
};

export default Hero;
