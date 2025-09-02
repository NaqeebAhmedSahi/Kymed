"use client";
import React, { useEffect, useState } from "react";
import { FaCertificate, FaChartLine, FaHandshake } from "react-icons/fa";
import * as motion from "framer-motion/client";

const OurValue = () => {
  // State to check if the component is in view
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Handle scroll events to detect if the component is in view
    const handleScroll = () => {
      const component = document.getElementById("our-value-section");
      if (component) {
        const rect = component.getBoundingClientRect();
        // If the element is at least 50% visible in the viewport
        if (rect.top <= window.innerHeight * 0.5) {
          setIsInView(true);
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="our-value-section"
      className="bg-gradient-to-b from-blue-950 via-black to-blue-950 text-white py-20 px-5 md:px-10 lg:px-20"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: isInView ? 0 : -50, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Our Core Values</h2>
          <p className="mt-4 text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Excellence. Commitment. Trust.
          </p>
          <p className="mt-4 text-gray-300 text-md max-w-4xl mx-auto">
            At Saluvia Industries, our values are the foundation of everything we do—from product development to customer service. We're driven by a passion for precision and a promise to deliver dependable quality.
          </p>
          <hr className="mt-6 border-t-2 border-gray-700 mx-auto w-20" />
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Quality */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaCertificate className="text-4xl text-green-500 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Quality</h3>
            <p className="text-gray-300">
              We are committed to manufacturing instruments that meet the highest standards of performance and reliability, ensuring consistent results in every procedure.
            </p>
          </motion.div>

          {/* Progress */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaChartLine className="text-4xl text-blue-400 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Progress</h3>
            <p className="text-gray-300">
              We continually refine our processes, adopt advanced methods, and stay ahead of industry needs—striving to improve and adapt without compromising on quality or tradition.
            </p>
          </motion.div>

          {/* Integrity */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaHandshake className="text-4xl text-yellow-400 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Integrity</h3>
            <p className="text-gray-300">
              We operate with honesty, accountability, and ethical responsibility, building lasting relationships based on transparency and respect.
            </p>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20 bg-gray-800 py-10 px-5 md:px-10 lg:px-20 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-green-500 mb-4">
            Ready to Experience Our Core Values?
          </h3>
          <p className="text-lg mb-6 text-gray-300">
            See how our commitment to quality, progress, and integrity shapes everything we do.
            Let's build better outcomes—together.
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-green-700 transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurValue;