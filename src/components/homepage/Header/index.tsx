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
    { image: "/images/slider01.jpg" },
    { image: "/images/slider02.jpg" },
    { image: "/images/slider03.jpg" },
    { image: "/images/slider04.jpg" },
    { image: "/images/slider05.jpg" },
    { image: "/images/slider06.jpg" },
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
    <div className="relative w-full h-[550px] overflow-hidden">
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
          <Image
            src={sliderContent[currentImageIndex].image}
            alt="Slider Image"
            fill
            className="object-cover"
          />

          {/* Optional: Slight light overlay for readability (remove if not needed) */}
          <div className="absolute inset-0 bg-white/5 flex flex-col justify-center items-center text-center text-white p-8">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className={cn("text-5xl font-bold mb-4", integralCF.className)}
            >
              {/* {sliderContent[currentImageIndex].title} */}
            </motion.h1>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-xl max-w-2xl"
            >
              {/* {sliderContent[currentImageIndex].description} */}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {sliderContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentImageIndex === index ? "bg-white" : "bg-gray-400"
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
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/80 transition-opacity"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={() =>
          setCurrentImageIndex(
            (prevIndex) => (prevIndex + 1) % sliderContent.length
          )
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/80 transition-opacity"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Header;
