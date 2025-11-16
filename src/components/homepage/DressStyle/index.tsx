import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { montserrat, openSans } from "@/styles/fonts";
import React from "react";
import * as motion from "framer-motion/client";
import DressStyleCard from "./DressStyleCard";

const DressStyle = () => {
  return (
    <div className="px-4 xl:px-0">
      <section className="max-w-frame mx-auto bg-[#F8F9FA] px-6 pb-6 pt-10 md:p-[70px] rounded-[40px] text-center border border-[#C4C7CA] shadow-[0_6px_32px_0_rgba(47,50,58,0.10)]">
        <motion.h2
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn([
            montserrat.className,
            "text-[32px] leading-[36px] md:text-5xl mb-8 md:mb-14 capitalize text-[#008C99] font-bold",
          ])}
        >
          Browse by Product Category
        </motion.h2>
        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row md:h-[289px] space-y-4 sm:space-y-0 sm:space-x-5 mb-4 sm:mb-5"
        >
          <DressStyleCard
            title="General Surgery"
            url="/categories/general-surgery"
            className="md:max-w-[260px] lg:max-w-[360px] xl:max-w-[407px] h-[190px] bg-[url('/images/surgi-style-1.jpg')] bg-white border border-[#C4C7CA] shadow hover:shadow-[0_8px_40px_0_rgba(196,199,202,0.35)] hover:border-[#008C99] transition-all duration-300 hover:scale-[1.02]"
          />
          <DressStyleCard
            title="Laryngoscopes"
            url="/categories/laryngoscopes"
            className="md:max-w-[684px] h-[190px] bg-[url('/images/surgi-style-2.jpg')] bg-white border border-[#C4C7CA] shadow hover:shadow-[0_8px_40px_0_rgba(196,199,202,0.35)] hover:border-[#008C99] transition-all duration-300 hover:scale-[1.02]"
          />
        </motion.div>
        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row md:h-[289px] space-y-5 sm:space-y-0 sm:space-x-5"
        >
          <DressStyleCard
            title="Dental"
            url="/categories/dental"
            className="md:max-w-[684px] h-[190px] bg-[url('/images/surgi-style-3.jpg')] bg-white border border-[#C4C7CA] shadow hover:shadow-[0_8px_40px_0_rgba(196,199,202,0.35)] hover:border-[#008C99] transition-all duration-300 hover:scale-[1.02]"
          />
          <DressStyleCard
            title="Micro Surgery"
            url="/categories/micro-surgery"
            className="md:max-w-[260px] lg:max-w-[360px] xl:max-w-[407px] h-[190px] bg-[url('/images/surgi-style-4.jpg')] bg-white border border-[#C4C7CA] shadow hover:shadow-[0_8px_40px_0_rgba(196,199,202,0.35)] hover:border-[#008C99] transition-all duration-300 hover:scale-[1.02]"
          />
        </motion.div>

        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row md:h-[289px] mb-4 mt-4 sm:mb-5 sm:mt-5"
        >
          <DressStyleCard
            title="Ophthalmology"
            url="/categories/ophthalmology"
            className="w-full h-[190px] bg-[url('/images/surgi-style-6.jpg')] bg-white border border-[#C4C7CA] shadow hover:shadow-[0_8px_40px_0_rgba(196,199,202,0.35)] hover:border-[#008C99] transition-all duration-300 hover:scale-[1.02]"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default DressStyle;