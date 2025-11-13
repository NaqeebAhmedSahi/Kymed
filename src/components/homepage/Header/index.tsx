"use client";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const sliderContent = [
    {
      image: "/images/slider01.jpg",
      title: "General Surgical Instruments",
      description:
        "Precision-crafted general surgical instruments by KyMed — built for reliability, accuracy, and superior surgical performance.",
    },
    {
      image: "/images/slider02.jpg",
      title: "Dental Instruments",
      description:
        "Advanced dental instruments by KyMed — designed for precision, comfort, and lasting clinical confidence.",
    },
    {
      image: "/images/slider03.jpg",
      title: "TC (Tungsten Carbide) Instruments",
      description:
        "Durable tungsten carbide instruments by KyMed — unmatched sharpness and strength for demanding procedures.",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % sliderContent.length
      );
    }, 7000);
    return () => clearInterval(intervalId);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-[550px] overflow-hidden bg-gradient-to-br from-[#e0f7fa] via-[#f5f5f5] to-[#e0e0e0]">
      {/* Stainless steel texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "url('/images/stainless-texture.png')",
          opacity: 0.08,
        }}
      />

      <AnimatePresence mode="wait" custom={1} initial={false}>
        <motion.div
          key={currentImageIndex}
          custom={1}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="w-full h-full"
        >
          {/* Parallax Image */}
          <motion.div
            initial={{ scale: 1.08, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={sliderContent[currentImageIndex].image}
              alt="Slider Image"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-8">
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className={cn(
                "text-4xl md:text-5xl font-bold mb-4 drop-shadow-xl leading-tight",
                integralCF.className
              )}
            >
              {sliderContent[currentImageIndex].title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.7 }}
              className="text-lg md:text-xl max-w-3xl mb-8 text-gray-200 drop-shadow-lg leading-relaxed"
            >
              {sliderContent[currentImageIndex].description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.7 }}
              className="flex gap-4 justify-center"
            >
              <a
                href="/categories"
                className="px-8 py-4 rounded-full font-semibold text-lg bg-teal-500 text-white shadow-xl transition-all duration-300 hover:bg-teal-600 hover:scale-105"
              >
                Shop Now
              </a>
              <a
                href="/contact"
                className="px-8 py-4 rounded-full font-semibold text-lg bg-white text-teal-600 border border-teal-500 shadow-xl transition-all duration-300 hover:bg-teal-50 hover:scale-105"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {sliderContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentImageIndex === index
                ? "bg-teal-500 scale-125"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={() =>
          setCurrentImageIndex(
            (prevIndex) =>
              (prevIndex - 1 + sliderContent.length) % sliderContent.length
          )
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/60 p-2 rounded-full shadow-lg transition-colors duration-300 hover:bg-teal-500 hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={() =>
          setCurrentImageIndex(
            (prevIndex) => (prevIndex + 1) % sliderContent.length
          )
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/60 p-2 rounded-full shadow-lg transition-colors duration-300 hover:bg-teal-500 hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Header;
