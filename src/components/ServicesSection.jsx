import { motion } from "framer-motion";

const services = [
  {
    title: "Frontend Development",
    desc: "Building fast, scalable, and maintainable user interfaces using React.js and modern JavaScript.",
  },
  {
    title: "UI Implementation",
    desc: "Transforming designs into clean, pixel-perfect, and responsive interfaces using Tailwind CSS.",
  },
  {
    title: "Responsive Web Design",
    desc: "Creating layouts that adapt seamlessly across desktops, tablets, and mobile devices.",
  },
  {
    title: "Performance Optimization",
    desc: "Improving loading speed, reducing re-renders, and enhancing overall user experience.",
  },
  {
    title: "API Integration",
    desc: "Integrating REST APIs and backend services with clean, scalable frontend architecture.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="w-full bg-[#0b0f0e] text-white overflow-hidden"
    >
      {/* ===== Container ===== */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-28">

        {/* ===== Title ===== */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold">
            Our <span className="text-lime-400">Services</span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            I provide modern frontend solutions focused on performance,
            usability, and clean user interfaces.
          </p>
        </motion.div>

        {/* ===== Grid ===== */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
            lg:gap-6
            xl:gap-8
          "
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="
                border border-lime-400/30
                rounded-2xl
                p-8
                flex flex-col
                bg-[#0b0f0e]
                hover:border-lime-400
                transition
                min-h-[320px]
              "
            >
              <h3 className="text-xl xl:text-2xl font-bold text-lime-400 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 text-base xl:text-lg leading-relaxed">
                {service.desc}
              </p>

              <button className="mt-auto text-lime-400 text-sm xl:text-base hover:underline">
                See More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== Divider ===== */}
      <div className="w-full flex justify-center pb-24">
        <span className="w-72 md:w-96 h-[1px] bg-lime-200/40"></span>
      </div>
    </section>
  );
};

export default ServicesSection;
