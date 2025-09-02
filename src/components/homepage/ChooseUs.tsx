import React from "react";
import * as motion from "framer-motion/client";
import { FaMicroscope, FaAward, FaUserMd, FaGlobeAmericas } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-b from-blue-950 via-black to-blue-950 text-white py-20 px-5 md:px-10 lg:px-20">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Discover the Power of Precision and Innovation in Every Step
          </p>
          <hr className="mt-6 border-t-2 border-gray-700 mx-auto w-20" />
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-semibold mb-6">
              A Legacy of Trust and Quality
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              With over two decades of experience, Saluvia Industries is dedicated to delivering *high-quality surgical, dental, and electrosurgical instruments* that support healthcare professionals in providing exceptional care.

Our focus is on crafting tools that meet the *highest standards of accuracy, durability, and performance*—ensuring confidence in every procedure.
            </p>
            <a
              href="/contact"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative group"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70 z-10"></div>
            <img
              src="/images/surgical-instruments.jpg"
              alt="Surgical Instruments"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
            <div className="absolute bottom-5 left-5 z-20 text-white">
              <h4 className="text-xl font-bold">Engineered for Precision</h4>
              <p className="text-gray-300 text-sm">
                Designed with the future of surgery in mind.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Key Benefits Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            What Makes Us the Right Choice?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-300">
            <motion.div
              className="p-6 border border-gray-700 rounded-lg hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <FaMicroscope className="text-4xl mb-4 text-green-500" />
              <h4 className="text-2xl font-semibold mb-4">State-of-the-Art Technology</h4>
              <p>
                We apply the latest advancements in medical manufacturing to ensure precision, safety, and consistency across all our instruments.
              </p>
            </motion.div>
            <motion.div
              className="p-6 border border-gray-700 rounded-lg hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <FaAward className="text-4xl mb-4 text-green-500" />
              <h4 className="text-2xl font-semibold mb-4">Recognized Excellence</h4>
              <p>
                Our products have earned industry recognition for their design, quality, and performance in clinical settings.
              </p>
            </motion.div>
            <motion.div
              className="p-6 border border-gray-700 rounded-lg hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <FaUserMd className="text-4xl mb-4 text-green-500" />
              <h4 className="text-2xl font-semibold mb-4">Better Patient Outcomes</h4>
              <p>
                Designed with both the surgeon and the patient in mind, our tools support safer, more effective procedures.
              </p>
            </motion.div>
            <motion.div
              className="p-6 border border-gray-700 rounded-lg hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <FaGlobeAmericas className="text-4xl mb-4 text-green-500" />
              <h4 className="text-2xl font-semibold mb-4">Global Trust</h4>
              <p>
                Hospitals, clinics, and surgical teams across more than 50 countries rely on Saluvia for dependable instruments.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Our Impact in Numbers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["20+", "50+", "10,000+"].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <h3 className="text-5xl font-bold text-green-500">{stat}</h3>
                <p className="text-gray-300">
                  {index === 0
                    ? "Years of Manufacturing Expertise"
                    : index === 1
                    ? "Countries Supplied"
                    : "Healthcare Clients Served Globally"}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 bg-green-700 text-white py-10 px-5 md:px-10 lg:px-20 rounded-lg text-center shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Step Into Surgical Excellence
          </h3>
          <p className="text-lg mb-6">
            Looking for instruments that deliver accuracy, reliability, and long-term value?
            Contact Saluvia Industries today—trusted worldwide for quality medical tools.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-green-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            Contact Us Today
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;