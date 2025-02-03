import React from "react";
import * as motion from "framer-motion/client";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-5 md:px-10 lg:px-20">
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
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            About Us
          </h2>
          <p className="mt-4 text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Excellence in Surgical Instruments for Over 20 Years
          </p>
          <hr className="mt-6 border-t-2 border-gray-700 mx-auto w-20" />
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-semibold mb-6">
              Precision, Experience, and Trust
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              For over two decades, we have been revolutionizing the surgical
              instruments industry with cutting-edge designs and top-notch
              quality. Our tools are engineered with precision to support
              healthcare professionals globally.
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>High-quality surgical tools for various medical disciplines</li>
              <li>Trusted by top surgeons and healthcare institutions</li>
              <li>Continuous innovation to meet modern healthcare needs</li>
            </ul>
            <a
              href="/contact"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
            >
              Learn More
            </a>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative group"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70 z-10"></div>
            <img
              src="/images/about.jpg"
              alt="Surgical Tools"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
            <div className="absolute bottom-5 left-5 z-20 text-white">
              <h4 className="text-xl font-bold">Excellence in Every Tool</h4>
              <p className="text-gray-300 text-sm">
                Built with precision, trusted by professionals.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
            <motion.div
              className="p-6 border border-gray-700 rounded-lg hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-2xl font-semibold mb-4">Quality</h4>
              <p>
                We ensure that every tool meets the highest industry standards,
                guaranteeing durability and precision.
              </p>
            </motion.div>
            <motion.div
              className="p-6 border border-gray-700 rounded-lg hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-2xl font-semibold mb-4">Innovation</h4>
              <p>
                Our research-driven approach allows us to deliver cutting-edge
                surgical tools for modern healthcare needs.
              </p>
            </motion.div>
            <motion.div
              className="p-6 border border-gray-700 rounded-lg hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-2xl font-semibold mb-4">Integrity</h4>
              <p>
                We are committed to ethical practices and building trust with
                every product we deliver.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 text-center">
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
                  ? "Years of Experience"
                  : index === 1
                  ? "Countries Served"
                  : "Happy Clients"}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 bg-green-700 text-white py-10 px-5 md:px-10 lg:px-20 rounded-lg text-center shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Elevate Surgical Precision?
          </h3>
          <p className="text-lg mb-6">
            Discover how our instruments can transform patient care in your
            practice.
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

export default AboutUs;
