"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";

const Brands = () => {
  return (
    <div className="relative min-h-screen bg-[#020817] text-white py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.8),rgba(0,0,0,0.9))]" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center lg:text-left space-y-8"
          >
            <div className="inline-block">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                className="h-1 bg-gradient-to-r from-green-400 to-blue-500 mb-6"
              />
              <h2 className={cn("text-5xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-r from-green-300 via-green-400 to-blue-400 bg-clip-text text-transparent", integralCF.className)}>
                Saluvia Industries
              </h2>
              <h3 className={cn("text-2xl lg:text-3xl mt-3 text-gray-400", integralCF.className)}>
                Precision You Can Trust
              </h3>
            </div>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-lg lg:text-xl leading-relaxed">
                At <span className="text-green-400 font-semibold">Saluvia Industries</span>, we manufacture a comprehensive range of surgical, dental, and electrosurgical instruments, engineered for accuracy, durability, and performance.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8" />
              <p className="text-lg lg:text-xl leading-relaxed">
                With a commitment to innovation and quality, our instruments are relied upon by healthcare professionals globally to deliver exceptional results in every procedure.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed">
                From core surgical tools to specialized dental and electrosurgical devices, Saluvia Industries upholds the highest manufacturing standards to support optimal patient care and clinical excellence.
              </p>
            </div>
          </motion.div>

          {/* Image Container */}
          <div className="relative lg:ml-12">
            {/* Floating Elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-green-500/10 blur-3xl" />
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-[2rem]" />
            
            {/* Main Image Group */}
            <div className="relative grid grid-cols-12 gap-4">
              {/* First Image */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="col-span-8 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-[2rem] blur-xl transform -rotate-3" />
                <div className="relative bg-gradient-to-br from-green-500/10 to-blue-500/10 p-1 rounded-[2rem] backdrop-blur-sm">
                  <img
                    src="/images/picture01.jpg"
                    alt="Saluvia Industries Surgical Instruments"
                    className="w-full h-[400px] lg:h-[500px] rounded-[1.8rem] object-cover shadow-2xl transform hover:scale-[1.02] hover:-rotate-2 transition-all duration-700"
                  />
                </div>
              </motion.div>

              {/* Second Image */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="col-span-6 col-start-6 row-start-1 relative z-10 mt-32"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-[2rem] blur-xl transform rotate-3" />
                <div className="relative bg-gradient-to-br from-blue-500/10 to-green-500/10 p-1 rounded-[2rem] backdrop-blur-sm">
                  <img
                    src="/images/picture02.jpg"
                    alt="Saluvia Industries Precision Instruments"
                    className="w-full h-[300px] lg:h-[400px] rounded-[1.8rem] object-cover shadow-2xl transform hover:scale-[1.02] hover:rotate-2 transition-all duration-700"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
