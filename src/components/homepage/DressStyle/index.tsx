import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { montserrat, openSans } from "@/styles/fonts";
import React from "react";
import * as motion from "framer-motion/client";
import DressStyleCard from "./DressStyleCard";

interface DressStyleProps {
  subcategories?: {
    title: string;
    url: string;
    image: string;
  }[];
}

const DressStyle = ({ subcategories = [] }: DressStyleProps) => {
  const defaultCats = [
    // { title: "Stille Instruments", url: "/shop/9/145", image: "/images/categories/Scissor2.jpeg" },
    { title: "Scissors", url: "/shop/9/146", image: "/images/categories/Scissor2.jpeg" },
    { title: "Forceps & Hemostats", url: "/shop/9/147", image: "/images/categories/Forceps.jpeg" },
    { title: "Scalpels & Blades", url: "/shop/9/150", image: "/images/categories/Scalpel.jpeg" },
    { title: "Bone Instruments", url: "/shop/9/149", image: "/images/categories/Bone.jpeg" }
  ];

  const cats = defaultCats;

  const cardBaseClass = "relative bg-white border border-[#C4C7CA] shadow-[0_4px_20px_0_rgba(0,0,0,0.2)] hover:shadow-[0_8px_40px_0_rgba(0,0,0,0.3)] hover:border-[#008C99] transition-all duration-300 hover:scale-[1.02] h-[250px] md:h-full";

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
            title={cats[0].title}
            url={cats[0].url}
            className={cn(cardBaseClass, "md:max-w-[260px] lg:max-w-[360px] xl:max-w-[407px]")}
            style={{ backgroundImage: `url(${cats[0].image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
          />
          <DressStyleCard
            title={cats[1].title}
            url={cats[1].url}
            className={cn(cardBaseClass, "md:max-w-[684px]")}
            style={{ backgroundImage: `url(${cats[1].image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
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
            title={cats[2].title}
            url={cats[2].url}
            className={cn(cardBaseClass, "md:max-w-[684px]")}
            style={{ backgroundImage: `url(${cats[2].image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
          />
          <DressStyleCard
            title={cats[3].title}
            url={cats[3].url}
            className={cn(cardBaseClass, "md:max-w-[260px] lg:max-w-[360px] xl:max-w-[407px]")}
            style={{ backgroundImage: `url(${cats[3].image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
          />
        </motion.div>

        {cats.length > 4 && (
          <motion.div
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row md:h-[289px] mb-4 mt-4 sm:mb-5 sm:mt-5"
          >
            <DressStyleCard
              title={cats[4].title}
              url={cats[4].url}
              className={cn(cardBaseClass, "w-full")}
              style={{ backgroundImage: `url(${cats[4].image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
            />
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default DressStyle;