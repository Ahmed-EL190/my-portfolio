import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useState } from "react";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_1fl2udp",
        "template_tzq6gpo", 
        e.target,
        "rALXX06pZzS1Onlzb"
      )
      .then(() => {
        setSent(true);
        setLoading(false);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.text);
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#0b0f0e] text-white py-28 px-6 sm:px-10"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Get In <span className="text-lime-400">Touch</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Have a project idea or want to work together? Send me a message and I’ll respond as soon as possible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-[#0f1413] border border-lime-400/30 rounded-3xl p-10"
        >
          {/* ===== Left Info ===== */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-lime-400">
              Let’s work together
            </h3>

            <p className="text-gray-400 leading-relaxed">
              I’m open for freelance projects, full-time roles, or collaborations. Feel free to reach out anytime.
            </p>

            <div className="space-y-3 text-gray-300">
              <p>
                📧 <span className="text-lime-400">Email:</span>{" "}
                eldosoky190@gmail.com
              </p>
              <p>
                📍 <span className="text-lime-400">Location:</span> Egypt
              </p>
            </div>
          </div>

          {/* ===== Form ===== */}
          <form onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="name"   
              required
              placeholder="Your Name"
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400"
            />

            <input
              type="email"
              name="email"  
              required
              placeholder="Your Email"
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400"
            />

            <input
              type="text"
              name="title"  
              required
              placeholder="Subject"
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400"
            />

            <textarea
              name="message"  
              rows="5"
              required
              placeholder="Your Message"
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 resize-none focus:outline-none focus:border-lime-400"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-lime-400 text-black font-semibold py-3 rounded-lg hover:bg-lime-300 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {sent && (
              <p className="text-lime-400 text-center text-sm">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
