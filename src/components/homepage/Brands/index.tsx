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
                Kymed
              </h2>
              <h3 className={cn("text-2xl lg:text-3xl mt-3 text-gray-400", integralCF.className)}>
                Precision You Can Trust
              </h3>
            </div>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-lg lg:text-xl leading-relaxed">
                At <span className="text-green-400 font-semibold">Kymed</span>, we manufacture a comprehensive range of surgical, dental, and electrosurgical instruments, engineered for accuracy, durability, and performance.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8" />
              <p className="text-lg lg:text-xl leading-relaxed">
                With a commitment to innovation and quality, our instruments are relied upon by healthcare professionals globally to deliver exceptional results in every procedure.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed">
                From core surgical tools to specialized dental and electrosurgical devices, Kymed upholds the highest manufacturing standards to support optimal patient care and clinical excellence.
              </p>
            </div>
          </motion.div>

          {/* Enhanced Image Container */}
          <div className="relative">
            {/* Main Image Stack */}
            <div className="relative h-[600px] lg:h-[700px]">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/5 to-green-500/10 rounded-3xl blur-3xl" />
              
              {/* Primary Image - Large and Centered */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="absolute top-0 left-0 right-0 h-[400px] lg:h-[500px]"
              >
                <div className="relative h-full w-full group">
                  {/* Image Border Glow */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Image Container */}
                  <div className="relative h-full bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl p-2 backdrop-blur-sm border border-white/10">
                    <img
                      src="/images/picture01.jpg"
                      alt="Kymed Surgical Instruments"
                      className="w-full h-full rounded-2xl object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  </div>
                </div>
              </motion.div>

              {/* Secondary Image - Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="absolute bottom-0 right-0 w-[280px] lg:w-[320px]"
              >
                <div className="relative group">
                  {/* Floating Effect */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    {/* Card Shadow */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                    
                    {/* Card Container */}
                    <div className="relative bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-2xl p-2 backdrop-blur-sm border border-white/10 shadow-2xl">
                      <img
                        src="/images/picture02.jpg"
                        alt="Kymed Precision Instruments"
                        className="w-full h-[200px] lg:h-[240px] rounded-xl object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Card Content */}
                      <div className="p-4 text-center">
                        <h4 className={cn("text-lg font-semibold text-white mb-2", integralCF.className)}>
                          Premium Quality
                        </h4>
                        <p className="text-sm text-gray-300">
                          Surgical-grade precision instruments
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Third Image - Small Floating Element */}
              <motion.div
                initial={{ opacity: 0, x: -40, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="absolute bottom-20 left-4 w-[120px] lg:w-[140px]"
              >
                <div className="relative group">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="relative"
                  >
                    {/* Mini Card Glow */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                    
                    {/* Mini Card */}
                    <div className="relative bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl p-1.5 backdrop-blur-sm border border-white/10 shadow-lg">
                      <img
                        src="/images/picture01.jpg" // You can use a third image here
                        alt="Saluvia Quality"
                        className="w-full h-[80px] lg:h-[100px] rounded-lg object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full blur-xl opacity-50" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-400 rounded-full blur-xl opacity-30" />
              <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-green-300 rounded-full blur-lg opacity-40" />
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-8 grid grid-cols-3 gap-4 text-center"
            >
              <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                <div className={cn("text-2xl font-bold text-green-400 mb-1", integralCF.className)}>50+</div>
                <div className="text-xs text-gray-400">Countries</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                <div className={cn("text-2xl font-bold text-blue-400 mb-1", integralCF.className)}>1000+</div>
                <div className="text-xs text-gray-400">Products</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                <div className={cn("text-2xl font-bold text-green-400 mb-1", integralCF.className)}>20+</div>
                <div className="text-xs text-gray-400">Years</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;