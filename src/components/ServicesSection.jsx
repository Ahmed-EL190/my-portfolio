
const ServicesSection = () => {
  return (
    <section id="services" className="bg-[#0b0f0e] text-white">
  <div className="max-w-7xl mx-auto px-6 ">

    {/* Section Title */}
    <h2 className="text-4xl font-bold text-center mb-4">
      Our <span className="text-lime-400">Services</span>
    </h2>

    <p className="text-gray-400 text-center max-w-xl mx-auto mb-20">
      I provide modern frontend solutions focused on performance, usability,
      and clean user interfaces.
    </p>

    {/* Services Cards */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* Card 1 */}
      <div className="border border-lime-400/40 rounded-2xl p-8 hover:border-lime-400 transition">
        <h3 className="text-xl font-semibold mb-4 text-lime-400">
          Frontend Development
        </h3>

        <p className="text-gray-400 mb-6">
          Building fast, scalable, and maintainable user interfaces using
          React.js and modern JavaScript to deliver smooth user experiences.
        </p>

        <button className="text-lime-400 text-sm hover:underline">
          See More
        </button>
      </div>

      {/* Card 2 */}
      <div className="border border-lime-400/40 rounded-2xl p-8 hover:border-lime-400 transition">
        <h3 className="text-xl font-semibold mb-4 text-lime-400">
          UI Implementation
        </h3>

        <p className="text-gray-400 mb-6">
          Transforming designs into clean, pixel-perfect, and responsive web
          interfaces using HTML, CSS, and Tailwind CSS.
        </p>

        <button className="text-lime-400 text-sm hover:underline">
          See More
        </button>
      </div>

      {/* Card 3 */}
      <div className="border border-lime-400/40 rounded-2xl p-8 hover:border-lime-400 transition">
        <h3 className="text-xl font-semibold mb-4 text-lime-400">
          Responsive Web Design
        </h3>

        <p className="text-gray-400 mb-6">
          Creating fully responsive layouts that adapt seamlessly across
          desktops, tablets, and mobile devices.
        </p>

        <button className="text-lime-400 text-sm hover:underline">
          See More
        </button>
      </div>

      {/* Card 4 */}
      <div className="border border-lime-400/40 rounded-2xl p-8 hover:border-lime-400 transition">
        <h3 className="text-xl font-semibold mb-4 text-lime-400">
          Performance Optimization
        </h3>

        <p className="text-gray-400 mb-6">
          Optimizing frontend performance by improving loading speed, reducing
          re-renders, and enhancing overall usability.
        </p>

        <button className="text-lime-400 text-sm hover:underline">
          See More
        </button>
      </div>

      {/* Card 5 */}
      <div className="border border-lime-400/40 rounded-2xl p-8 hover:border-lime-400 transition">
        <h3 className="text-xl font-semibold mb-4 text-lime-400">
          API Integration
        </h3>

        <p className="text-gray-400 mb-6">
          Integrating REST APIs and backend services into frontend applications
          with clean, organized, and scalable code.
        </p>

        <button className="text-lime-400 text-sm hover:underline">
          See More
        </button>
      </div>

    </div>
  </div>
  <div className="w-full flex justify-center mt-24">
        <span className="w-48 md:w-96 h-px bg-lime-200"></span>
      </div>
</section>

  )
}

export default ServicesSection