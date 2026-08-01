"use client";

import React from "react";
import * as motion from "framer-motion/client";
import { cn } from "@/lib/utils";
import { montserrat, openSans } from "@/styles/fonts";
import { FaIndustry, FaSearch, FaCheckCircle, FaTruck } from "react-icons/fa";

const steps = [
  {
    step: "01",
    title: "Manufactured in Pakistan",
    description:
      "Made by our own skilled team in Sialkot, Pakistan",
    icon: <FaIndustry className="w-7 h-7" />,
  },
  {
    step: "02",
    title: "Quality Checked in Pakistan",
    description:
      "Every instrument inspected before it leaves our factory",
    icon: <FaSearch className="w-7 h-7" />,
  },
  {
    step: "03",
    title: "Quality Checked Again in USA",
    description:
      "Our USA team checks quality again before it reaches you",
    icon: <FaCheckCircle className="w-7 h-7" />,
  },
  {
    step: "04",
    title: "Delivered in the USA",
    description:
      "Fast, local delivery — no import delay for US customers",
    icon: <FaTruck className="w-7 h-7" />,
  },
];

const HowWeWork = () => {
  return (
    <section className="relative bg-[#F8F9FA] py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className={cn(
              openSans.className,
              "text-xs md:text-sm uppercase tracking-[0.25em] text-[#008C99] mb-3"
            )}
          >
            From factory to your door
          </p>
          <h2
            className={cn(
              montserrat.className,
              "text-3xl md:text-5xl font-bold text-[#2F323A]"
            )}
          >
            How We Work
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#008C99] to-[#006670]" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              className="relative group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-full rounded-2xl bg-white border border-[#C4C7CA]/40 p-7 shadow-sm hover:border-[#008C99]/40 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#008C99] to-[#006670] text-white">
                    {item.icon}
                  </div>
                  <span
                    className={cn(
                      montserrat.className,
                      "text-3xl font-bold text-[#E5F5F7] group-hover:text-[#008C99]/25 transition-colors"
                    )}
                  >
                    {item.step}
                  </span>
                </div>
                <h3
                  className={cn(
                    montserrat.className,
                    "text-lg font-bold text-[#2F323A] mb-3 leading-snug"
                  )}
                >
                  {item.title}
                </h3>
                <p
                  className={cn(
                    openSans.className,
                    "text-sm text-[#5D6169] leading-relaxed"
                  )}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
