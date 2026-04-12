import React from "react";
import * as motion from "framer-motion/client";
import { FaMicroscope, FaAward, FaUserMd, FaGlobeAmericas } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { montserrat, openSans } from "@/styles/fonts";

const WhyChooseUs = () => {
  return (
    <section className="relative bg-[#F8F9FA] text-[#2F323A] py-24 overflow-hidden font-sans">
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
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#008C99] mb-4 font-montserrat">
              Why Choose Us?
            </h2>
            <p className="mt-6 text-xl md:text-2xl text-[#2F323A] max-w-3xl mx-auto font-openSans font-normal">
              Discover the Power of Precision, Traceability, and Global Professionalism
            </p>
          </div>
        </motion.div>

        {/* Text & Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Text Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-left font-openSans"
          >
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-[#008C99] mb-4 font-montserrat">
              A Legacy of Trust and Quality
            </h3>

            <div className="space-y-6 text-xl leading-relaxed">
              <p>
                KyMed is a premium medical device company that designs, manufactures, and exports a complete range of{" "}
                <strong>surgical and dental instruments</strong>.
              </p>
              <p>
                Our commitment to <strong>precision, consistency, and transparency</strong> defines every product we make.
                Each instrument is produced under <strong>ISO 13485-certified systems</strong>, ensuring full traceability
                and adherence to global healthcare standards.
              </p>
              <p>
                Every shipment includes a <strong>Material Test Report (MTR)</strong> issued by an accredited laboratory
                verifying the steel composition and confirming compliance with{" "}
                <strong>ISO 7153-1</strong> and <strong>ASTM F899</strong>.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold font-montserrat text-white bg-[#008C99] rounded-xl hover:bg-[#006d73] transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-[#008C99]/25"
            >
              Get In Touch
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="relative group"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#008C99]/30 to-[#006670]/40 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#008C99]/20 to-[#006670]/30 p-1 border border-[#008C99]/30">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="/images/about.jpg"
                  alt="Surgical Instruments"
                  className="w-full h-[420px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#008C99]/60 via-transparent to-transparent opacity-70"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h4 className="text-2xl font-bold text-white font-montserrat">Engineered for Precision</h4>
                  <p className="text-lg text-white/90 font-openSans">Designed with the future of surgery in mind.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Equal Cards Section */}
        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-[#008C99] mb-16 font-montserrat">
            What Makes Us the Right Choice?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaMicroscope className="w-12 h-12 text-[#008C99]" />,
                title: "Advanced Manufacturing",
                description:
                  "We use modern production processes and strict quality control to ensure precision, safety, and reliability in every surgical instrument.",
              },
              {
                icon: <FaAward className="w-12 h-12 text-[#008C99]" />,
                title: "Certified Quality",
                description:
                  "KyMed instruments meet international standards ISO, material integrity, and performance in surgical applications.",
              },
              {
                icon: <FaUserMd className="w-12 h-12 text-[#008C99]" />,
                title: "Reliable Performance",
                description:
                  "Developed for professional use, our instruments provide accurate handling and consistent results in every surgical procedure.",
              },
              {
                icon: <FaGlobeAmericas className="w-12 h-12 text-[#008C99]" />,
                title: "Global Presence",
                description:
                  "Healthcare professionals in more than 10 countries trust KyMed for dependable and long-lasting surgical instruments.",
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-[#E5F5F7] rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative h-full flex flex-col p-8 rounded-2xl bg-white border border-[#C4C7CA] hover:border-[#008C99] transition-all duration-500">
                  <div className="mb-6 mx-auto p-4 rounded-xl bg-[#F8F9FA]">
                    {card.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-[#2F323A] font-montserrat">
                    {card.title}
                  </h4>

                  {/* Makes text stretch equally */}
                  <p className="text-[#2F323A] font-openSans leading-relaxed flex-grow">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
