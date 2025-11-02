import React from "react";
import * as motion from "framer-motion/client";
import { FaMicroscope, FaAward, FaUserMd, FaGlobeAmericas } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { montserrat, openSans } from "@/styles/fonts";

const WhyChooseUs = () => {
  return (
    <section className="relative bg-[#F8F9FA] text-[#2F323A] py-24 overflow-hidden font-sans">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E5F5F7] via-[#F8F9FA] to-[#C4C7CA]" />

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
              className="h-1 bg-[#E5F5F7] mb-6"
            />
            <h2 className={cn("text-5xl md:text-7xl font-bold tracking-tighter text-[#008C99] mb-4 font-montserrat")}>Why Choose Us?</h2>
            <p className={cn("mt-6 text-xl md:text-2xl text-[#2F323A] max-w-3xl mx-auto font-openSans font-normal")}>Discover the Power of Precision, Traceability, and Global Professionalism</p>
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
            className={cn("space-y-8 text-left", openSans.className)}
          >
            <h3 className={cn("text-4xl md:text-5xl font-bold tracking-tight text-[#008C99] mb-4 font-montserrat")}>A Legacy of Trust and Quality</h3>
            <div className="space-y-6">
              <p className="text-xl text-[#2F323A] leading-relaxed font-openSans">
                With over two decades of experience, Kymed is dedicated to delivering high-quality surgical, dental, and electrosurgical instruments that support healthcare professionals in providing exceptional care.
              </p>
              <p className="text-xl text-[#2F323A] leading-relaxed font-openSans">
                Our focus is on crafting tools that meet the highest standards of accuracy, durability, and performance—ensuring confidence in every procedure.
              </p>
            </div>
            <div className="pt-4">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold font-montserrat text-white bg-[#008C99] rounded-xl hover:bg-[#006d73] transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-[#008C99]/25"
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
            <div className="absolute -inset-4 bg-[#C4C7CA] rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden bg-white p-1 border border-[#C4C7CA]">
              <img
                src="/images/surgical-instruments.jpg"
                alt="Surgical Instruments"
                className="rounded-xl shadow-2xl w-full h-[420px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-8 left-8 z-20 text-[#008C99] max-w-md transform transition-all duration-500 group-hover:translate-y-[-8px]">
                <h4 className={cn("text-2xl font-bold mb-2 font-montserrat")}>Engineered for Precision</h4>
                <p className="text-lg font-openSans text-[#2F323A]">Designed with the future of surgery in mind.</p>
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
          <h3 className={cn("text-4xl md:text-5xl font-bold tracking-tight text-[#008C99] mb-16 font-montserrat")}>What Makes Us the Right Choice?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaMicroscope className="w-12 h-12 text-[#008C99]" />,
                title: "State-of-the-Art Technology",
                description: "We apply the latest advancements in medical manufacturing to ensure precision, safety, and consistency across all our instruments."
              },
              {
                icon: <FaAward className="w-12 h-12 text-[#008C99]" />,
                title: "Recognized Excellence",
                description: "Our products have earned industry recognition for their design, quality, and performance in clinical settings."
              },
              {
                icon: <FaUserMd className="w-12 h-12 text-[#008C99]" />,
                title: "Better Patient Outcomes",
                description: "Designed with both the surgeon and the patient in mind, our tools support safer, more effective procedures."
              },
              {
                icon: <FaGlobeAmericas className="w-12 h-12 text-[#008C99]" />,
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
                <div className="absolute -inset-4 bg-[#E5F5F7] rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full p-8 rounded-2xl bg-white border border-[#C4C7CA] hover:border-[#008C99] transition-colors duration-500">
                  <div className="mb-6 inline-block p-4 rounded-xl bg-[#F8F9FA]">
                    <div className="transition-colors duration-300">
                      {benefit.icon}
                    </div>
                  </div>
                  <h4 className={cn("text-2xl font-bold mb-4 text-[#2F323A] font-montserrat")}>{benefit.title}</h4>
                  <p className="text-[#2F323A] leading-relaxed font-openSans">{benefit.description}</p>
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
          <div className="absolute inset-0 bg-[#E5F5F7] blur-3xl" />
          <div className="relative">
            <h3 className={cn("text-4xl md:text-5xl font-bold text-center tracking-tight text-[#008C99] mb-16 font-montserrat")}>Our Impact in Numbers</h3>
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
                  <div className="absolute -inset-4 bg-[#C4C7CA] rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8 rounded-xl bg-white border border-[#C4C7CA] hover:border-[#008C99] transition-all duration-500 text-center">
                    <h3 className={cn("text-6xl font-bold text-[#008C99] mb-4 font-montserrat")}>{stat.number}</h3>
                    <p className="text-lg text-[#2F323A] font-openSans">{stat.label}</p>
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
          <div className="absolute inset-0 bg-[#E5F5F7] blur-3xl opacity-50" />
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-[#008C99]/90" />
            <div className="relative py-16 px-8 md:px-16 text-center">
              <h3 className={cn("text-4xl md:text-5xl font-bold mb-6 text-white font-montserrat")}>Step Into Surgical Excellence</h3>
              <p className="text-xl text-[#F8F9FA] mb-10 max-w-3xl mx-auto font-openSans">
                Looking for instruments that deliver accuracy, reliability, and long-term value?
                Contact Kymed today—trusted worldwide for quality medical tools.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold font-montserrat text-[#008C99] bg-[#F8F9FA] rounded-xl hover:bg-[#E5F5F7] transform hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-[#008C99]/25"
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