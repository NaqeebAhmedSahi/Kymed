import React from "react";
import * as motion from "framer-motion/client";
import { FaMicroscope, FaAward, FaUserMd, FaGlobeAmericas } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";

const WhyChooseUs = () => {
  return (
    <section className="relative bg-[#020817] text-white py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.8),rgba(0,0,0,0.9))]" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20" />
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-green-400 to-blue-500 mb-6"
            />
            <h2 className={cn("text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-br from-white via-green-200 to-green-400 bg-clip-text text-transparent", integralCF.className)}>
              Why Choose Us?
            </h2>
            <p className="mt-6 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
              Discover the Power of Precision and Innovation in Every Step
            </p>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className={cn("text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-green-300 to-blue-400 bg-clip-text text-transparent", integralCF.className)}>
              A Legacy of Trust and Quality
            </h3>
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                With over two decades of experience, Kymed is dedicated to delivering high-quality surgical, dental, and electrosurgical instruments that support healthcare professionals in providing exceptional care.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Our focus is on crafting tools that meet the highest standards of accuracy, durability, and performance—ensuring confidence in every procedure.
              </p>
            </div>
            <div className="pt-4">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl hover:from-green-600 hover:to-emerald-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-green-500/25"
              >
                Get In Touch
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative group"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-green-500/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-green-500/10 to-blue-500/10 p-1">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70 z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              <img
                src="/images/surgical-instruments.jpg"
                alt="Surgical Instruments"
                className="rounded-xl shadow-2xl w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-8 left-8 z-20 text-white max-w-md transform transition-all duration-500 group-hover:translate-y-[-8px]">
                <h4 className={cn("text-2xl font-bold mb-2", integralCF.className)}>Engineered for Precision</h4>
                <p className="text-gray-200 text-lg">
                  Designed with the future of surgery in mind.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Benefits Section */}
        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className={cn("text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-green-300 to-blue-400 bg-clip-text text-transparent mb-16", integralCF.className)}>
            What Makes Us the Right Choice?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaMicroscope className="w-12 h-12" />,
                title: "State-of-the-Art Technology",
                description: "We apply the latest advancements in medical manufacturing to ensure precision, safety, and consistency across all our instruments."
              },
              {
                icon: <FaAward className="w-12 h-12" />,
                title: "Recognized Excellence",
                description: "Our products have earned industry recognition for their design, quality, and performance in clinical settings."
              },
              {
                icon: <FaUserMd className="w-12 h-12" />,
                title: "Better Patient Outcomes",
                description: "Designed with both the surgeon and the patient in mind, our tools support safer, more effective procedures."
              },
              {
                icon: <FaGlobeAmericas className="w-12 h-12" />,
                title: "Global Trust",
                description: "Hospitals, clinics, and surgical teams across more than 50 countries rely on Saluvia for dependable instruments."
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="relative group"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-green-500/50 transition-colors duration-500">
                  <div className="mb-6 inline-block p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-blue-500/10">
                    <div className="text-green-400 group-hover:text-green-300 transition-colors duration-300">
                      {benefit.icon}
                    </div>
                  </div>
                  <h4 className={cn("text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors duration-300", integralCF.className)}>
                    {benefit.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-32 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-blue-500/10 blur-3xl" />
          <div className="relative">
            <h3 className={cn("text-4xl md:text-5xl font-bold text-center tracking-tight bg-gradient-to-r from-green-300 to-blue-400 bg-clip-text text-transparent mb-16", integralCF.className)}>
              Our Impact in Numbers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: "20+", label: "Years of Manufacturing Expertise" },
                { number: "50+", label: "Countries Supplied" },
                { number: "10,000+", label: "Healthcare Clients Served Globally" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <div className="absolute -inset-4 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-green-500/50 transition-all duration-500 text-center">
                    <h3 className={cn("text-6xl font-bold bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent mb-4", integralCF.className)}>
                      {stat.number}
                    </h3>
                    <p className="text-lg text-gray-300">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-32 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-green-500/20 blur-3xl opacity-50" />
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/90 to-emerald-700/90" />
            <div className="relative py-16 px-8 md:px-16 text-center">
              <h3 className={cn("text-4xl md:text-5xl font-bold mb-6 text-white", integralCF.className)}>
                Step Into Surgical Excellence
              </h3>
              <p className="text-xl text-gray-100 mb-10 max-w-3xl mx-auto">
                Looking for instruments that deliver accuracy, reliability, and long-term value?
                Contact Kymed today—trusted worldwide for quality medical tools.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-green-700 bg-white rounded-xl hover:bg-gray-50 transform hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-white/25"
              >
                Contact Us Today
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;