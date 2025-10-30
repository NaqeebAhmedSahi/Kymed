"use client";
import React from "react";
import * as motion from "framer-motion/client";
import { useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { useEffect, useRef } from "react";
import { FaCheckCircle, FaMedal, FaUsers, FaGlobeAmericas, FaStethoscope, FaCertificate } from "react-icons/fa";

const AboutUs = () => {
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
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-1 bg-gradient-to-r from-green-400 to-blue-500 mb-6"
            />
            <h2 className={cn("text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-br from-white via-green-200 to-green-400 bg-clip-text text-transparent mb-6", integralCF.className)}>
              About Us
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Excellence in Surgical Instruments for Over 20 Years
            </p>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className={cn("text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent", integralCF.className)}>
              Precision, Experience, and Trust
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              For over two decades, we have been revolutionizing the surgical
              instruments industry with cutting-edge designs and top-notch
              quality. Our tools are engineered with precision to support
              healthcare professionals globally.
            </p>
            <div className="space-y-4">
              {[
                "High-quality surgical tools for various medical disciplines",
                "Trusted by top surgeons and healthcare institutions",
                "Continuous innovation to meet modern healthcare needs"
              ].map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FaCheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-300">{item}</p>
                </motion.div>
              ))}
            </div>
            <div className="pt-4">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl hover:from-green-600 hover:to-emerald-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-green-500/25"
              >
                Learn More
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-green-500/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-green-500/10 to-blue-500/10 p-1">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70 z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              <img
                src="/images/about.jpg"
                alt="Surgical Tools"
                className="rounded-xl w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-8 left-8 z-20 transform transition-all duration-500 group-hover:translate-y-[-8px]">
                <h4 className={cn("text-2xl font-bold mb-2", integralCF.className)}>Excellence in Every Tool</h4>
                <p className="text-gray-200 text-lg">
                  Built with precision, trusted by professionals.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h3 className={cn("text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6", integralCF.className)}>
              Our Core Values
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaMedal className="w-12 h-12" />,
                title: "Quality",
                description: "We ensure that every tool meets the highest industry standards, guaranteeing durability and precision.",
                color: "from-green-500 to-emerald-600"
              },
              {
                icon: <FaStethoscope className="w-12 h-12" />,
                title: "Innovation",
                description: "Our research-driven approach allows us to deliver cutting-edge surgical tools for modern healthcare needs.",
                color: "from-blue-500 to-cyan-600"
              },
              {
                icon: <FaCertificate className="w-12 h-12" />,
                title: "Integrity",
                description: "We are committed to ethical practices and building trust with every product we deliver.",
                color: "from-purple-500 to-pink-600"
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
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="py-20 bg-gradient-to-br from-black/50 to-green-950/30 rounded-3xl backdrop-blur-sm border border-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
            {[
              { end: 20, label: "Years Experience", icon: <FaCheckCircle className="w-8 h-8" /> },
              { end: 50, label: "Countries Served", icon: <FaGlobeAmericas className="w-8 h-8" /> },
              { end: 1000, label: "Products", icon: <FaMedal className="w-8 h-8" /> },
              { end: 10000, label: "Happy Clients", icon: <FaUsers className="w-8 h-8" /> }
            ].map((stat, index) => {
              const CountingNumber = () => {
                const count = useMotionValue(0);
                const rounded = useTransform(count, (latest) => Math.round(latest));
                const ref = useRef(null);
                const isInView = useInView(ref);
              
                useEffect(() => {
                  if (isInView) {
                    const animation = animate(count, stat.end, {
                      duration: 2,
                      ease: "easeOut",
                    });
                    return animation.stop;
                  }
                }, [isInView]);
              
                return (
                  <motion.span ref={ref}>
                    {rounded.get()}
                  </motion.span>
                );
              };

              return (
                <motion.div
                  key={index}
                  className="text-center relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div 
                    className="text-green-400 mb-4 mx-auto"
                    initial={{ scale: 1 }}
                    whileInView={{ scale: [1, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.h4 
                    className={cn("text-5xl font-bold bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent mb-2", integralCF.className)}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <CountingNumber />
                    {stat.end >= 1000 ? 'k+' : '+'}
                  </motion.h4>
                  <motion.p 
                    className="text-gray-400 text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  >
                    {stat.label}
                  </motion.p>
                </motion.div>
              );
            })}
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
