"use client";
import React, { useEffect, useState } from "react";
import { FaCertificate, FaRegLightbulb, FaHandshake } from "react-icons/fa";
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
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-5 md:px-10 lg:px-20"
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
            We believe in delivering excellence, pushing boundaries, and fostering trust.
          </p>
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
              We ensure that every product we create meets the highest standards of excellence, delivering outstanding results every time.
            </p>
          </motion.div>

          {/* Innovation */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaRegLightbulb className="text-4xl text-yellow-400 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
            <p className="text-gray-300">
              We embrace cutting-edge technology to constantly evolve, improve, and meet the challenges of tomorrow with creative solutions.
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
            <FaHandshake className="text-4xl text-blue-500 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Integrity</h3>
            <p className="text-gray-300">
              We believe in transparency, honesty, and maintaining the highest ethical standards in everything we do.
            </p>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-green-500 mb-4">
            Ready to Experience Our Core Values?
          </h3>
          <p className="text-lg mb-6 text-gray-300">
            Discover how these values drive our products and services to exceed expectations.
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
