"use client";
import React from "react";
import { FaCertificate, FaChartLine, FaHandshake } from "react-icons/fa";
import * as motion from "framer-motion/client";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";

const OurValue = () => {
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
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-green-400 to-blue-500 mb-6"
            />
            <h2 className={cn("text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-br from-white via-green-200 to-green-400 bg-clip-text text-transparent mb-6", integralCF.className)}>
              Our Core Values
            </h2>
            <div className="space-y-4">
              <p className={cn("text-2xl md:text-3xl text-green-400", integralCF.className)}>
                Excellence. Commitment. Trust.
              </p>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                At Saluvia Industries, our values are the foundation of everything we do—from product development to customer service. We're driven by a passion for precision and a promise to deliver dependable quality.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <FaCertificate className="w-12 h-12" />,
              title: "Quality",
              color: "from-green-500 to-emerald-600",
              description: "We are committed to manufacturing instruments that meet the highest standards of performance and reliability, ensuring consistent results in every procedure."
            },
            {
              icon: <FaChartLine className="w-12 h-12" />,
              title: "Progress",
              color: "from-blue-500 to-cyan-600",
              description: "We continually refine our processes, adopt advanced methods, and stay ahead of industry needs—striving to improve and adapt without compromising on quality or tradition."
            },
            {
              icon: <FaHandshake className="w-12 h-12" />,
              title: "Integrity",
              color: "from-yellow-500 to-amber-600",
              description: "We operate with honesty, accountability, and ethical responsibility, building lasting relationships based on transparency and respect."
            }
          ].map((value, index) => (
            <motion.div
              key={value.title}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={cn("absolute -inset-4 bg-gradient-to-br opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition-all duration-500", value.color)} />
              <div className="relative h-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group-hover:border-green-500/50 transition-all duration-500">
                <div className={cn("inline-flex p-4 rounded-xl bg-gradient-to-br opacity-80 group-hover:opacity-100 transition-opacity duration-500", value.color)}>
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className={cn("text-2xl font-bold mt-6 mb-4 text-white group-hover:text-green-400 transition-colors duration-300", integralCF.className)}>
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-green-500/20 blur-3xl opacity-50" />
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/90 to-emerald-700/90" />
            <div className="relative py-16 px-8 md:px-16 text-center">
              <h3 className={cn("text-4xl md:text-5xl font-bold mb-6 text-white", integralCF.className)}>
                Ready to Experience Our Core Values?
              </h3>
              <p className="text-xl text-gray-100 mb-10 max-w-3xl mx-auto">
                See how our commitment to quality, progress, and integrity shapes everything we do.
                Let's build better outcomes—together.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-green-700 bg-white rounded-xl hover:bg-gray-50 transform hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-white/25"
              >
                Get in Touch
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

export default OurValue;