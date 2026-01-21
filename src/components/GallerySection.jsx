import { motion } from "framer-motion";

import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";
import project5 from "../assets/projects/project5.jpg";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    image: project1,
    link: "https://my-portfolio-mauve-gamma-5uv75iynvw.vercel.app/",
  },
  {
    id: 2,
    title: "E-Commerce App",
    image: project2,
    link: "https://order-management-portal-7kjo.vercel.app/",
  },
  {
    id: 3,
    title: "Landing Page",
    image: project4,
    link: "https://express-indol-psi.vercel.app/",
  },
  
  {
    id: 5,
    title: "Landing Page",
    image: project5,
    link: "https://resturant-beige.vercel.app/",
  },
];

const GallerySection = () => {
  return (
    <section
      id="gallery"
      className="relative w-full bg-[#0b0f0e] text-white overflow-hidden"
    >
      <div className="px-6 sm:px-10 md:px-20 lg:px-28 xl:px-36 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-center mb-20"
        >
          Latest <span className="text-lime-400">Projects</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-lime-400/30"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover bg-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-all duration-500 flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-lime-400 mb-2">
                    {project.title}
                  </h3>
                  <span className="text-sm underline">
                    Visit Website →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center pb-24">
        <span className="w-80 md:w-[520px] h-[1px] bg-lime-200/40"></span>
      </div>
    </section>
  );
};

export default GallerySection;
