"use client";
import React from "react";
import { motion } from "framer-motion";

const Brands = () => {
  return (
    <div className="bg-gradient-to-b from-blue-950 via-black to-blue-950 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-0 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center md:text-left md:w-1/2 px-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-green-400">
            Saluvia Industries – Precision You Can Trust
          </h2>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed mb-6 md:mr-20">
            At <span className="text-green-500 font-semibold">Saluvia Industries</span>, we manufacture a *comprehensive range of surgical, dental, and electrosurgical instruments, engineered for **accuracy, durability, and performance*.
          </p>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed mb-6 md:mr-20">
            With a commitment to *innovation and quality, our instruments are relied upon by **healthcare professionals globally* to deliver *exceptional results* in every procedure.
          </p>
           <p className="text-sm md:text-lg text-gray-300 leading-relaxed md:mr-20">
            From *core surgical tools* to *specialized dental and electrosurgical devices, Saluvia Industries upholds the **highest manufacturing standards* to support *optimal patient care and clinical excellence*.
          </p>
        </motion.div>

        {/* Image Container */}
        <div className="relative mt-10 md:mt-0 md:w-1/2">
          {/* First Image (Slides from the right with shadow effect) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative z-0"
          >
            <img
              src="/images/picture01.jpg" // Replace with actual image path
              alt="Saluvia Industries Surgical Instruments"
              className="w-full h-[280px] md:h-[350px] rounded-lg shadow-2xl object-cover filter brightness-75"
            />
          </motion.div>

          {/* Second Image (Slides from the left with staggered delay) */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: -10 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="absolute z-10 -bottom-12 -left-12 w-3/4 md:w-2/3"
          >
            <img
              src="/images/picture02.jpg" // Replace with actual image path
              alt="Saluvia Industries Precision Instruments"
              className="w-full h-[220px] md:h-[280px] rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
