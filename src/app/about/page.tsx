"use client";
import React from "react";
import * as motion from "framer-motion/client";
import { useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { montserrat, openSans } from "@/styles/fonts";
import { useEffect, useRef } from "react";
import { FaCheckCircle, FaMedal, FaUsers, FaGlobeAmericas, FaCertificate, FaAward, FaMapMarkerAlt, FaIndustry } from "react-icons/fa";

const AboutUs = () => {
  // Color constants matching your theme
  const colors = {
    primary: "#008C99", // Deep Teal
    graphite: "#2F323A", // Graphite Gray
    silver: "#C4C7CA", // Surgical Silver
    background: "#F8F9FA", // White Smoke
    iceBlue: "#E5F5F7", // Ice Blue
  };

  // CountingNumber component with proper TypeScript handling
  const CountingNumber = ({ endValue }: { endValue: number }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [displayValue, setDisplayValue] = React.useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        const controls = animate(count, endValue, {
          duration: 2,
          ease: "easeOut",
        });
        return controls.stop;
      }
    }, [isInView, count, endValue]);

    useEffect(() => {
      const unsubscribe = rounded.on("change", (latest) => {
        setDisplayValue(latest);
      });
      return unsubscribe;
    }, [rounded]);

    return <motion.span ref={ref}>{displayValue}</motion.span>;
  };

  return (
    <section className="relative bg-[#F8F9FA] text-[#2F323A] py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,245,247,0.8),rgba(248,249,250,0.9))]" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
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
              className="h-1 bg-gradient-to-r from-[#008C99] to-[#006670] mb-6"
            />
            <h2 className={cn("text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-br from-[#2F323A] via-[#008C99] to-[#006670] bg-clip-text text-transparent mb-6", montserrat.className)}>
              KyMed Marketing Brochure 2026 Edition
            </h2>
            <h3 className={cn("text-3xl md:text-4xl font-bold tracking-tight text-[#2F323A] mb-6 mt-8", montserrat.className)}>
              About KyMed
            </h3>
            <p className="text-xl md:text-2xl text-[#5D6169] max-w-3xl mx-auto">
              Setting New Standards in Surgical Instrument Manufacturing
            </p>
          </div>
        </motion.div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className={cn("text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#2F323A] to-[#5D6169] bg-clip-text text-transparent", montserrat.className)}>
              About KyMed
            </h3>
            <div className="space-y-6">
              <motion.p 
                className="text-lg text-[#2F323A] leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                KyMed is a surgical and dental instruments manufacturer based in Pakistan, supplying OEM brands, private-label programs, and distributors globally.
              </motion.p>
              <motion.p 
                className="text-lg text-[#2F323A] leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Manufacturing operations are located in Sialkot, Pakistan, covering forging, machining, finishing, quality inspection, and packaging. Production operates under an <strong>ISO 13485–compliant quality management system</strong>, ensuring consistent quality, traceability, and regulatory alignment for international markets.
              </motion.p>
              <motion.p 
                className="text-lg text-[#2F323A] leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                KyMed manufactures surgical and dental instruments across single-use and reusable ranges, offering multiple grades including kit-grade single-use, premium single-use, and reusable stainless-steel instruments.
              </motion.p>
              <motion.p 
                className="text-lg text-[#2F323A] leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Founded by an award-recognized industry leader with proven experience in international exports and industry governance, KyMed operates as a structured manufacturer, not a trading intermediary.
              </motion.p>
              <motion.p 
                className="text-lg text-[#2F323A] leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                KyMed maintains an international business presence across Pakistan, the United Kingdom, and the United States, with a planned Dubai office by 2027 to support global supply operations.
              </motion.p>
              <motion.p 
                className="text-lg text-[#2F323A] leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                KyMed specializes in OEM surgical and dental instruments manufacturing, private-label production, and long-term supply programs for partners seeking dependable, scalable manufacturing.
              </motion.p>
            </div>
            <div className="pt-4">
              <a
                href="/contact"
                className={cn("inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-[#008C99] to-[#006670] rounded-xl hover:from-[#007783] hover:to-[#00555f] transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-[#008C99]/25", montserrat.className)}
              >
                Partner With Us
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Image Section with Greenish Glow */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#008C99]/30 to-[#006670]/40 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#008C99]/20 to-[#006670]/30 p-1 border border-[#008C99]/30">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="/images/about.jpg"
                  alt="KyMed Surgical Instruments"
                  className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Greenish gradient overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#008C99]/60 via-transparent to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#008C99]/80 to-transparent">
                  <div className="transform transition-all duration-500 group-hover:translate-y-[-8px]">
                    <h4 className={cn("text-2xl font-bold mb-2 text-white", montserrat.className)}>high quality stainless steel</h4>
                    <p className="text-white/90 text-lg">
                      Made in Pakistan, Trusted Worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission Section */}
        <motion.div
          className="mb-32 bg-gradient-to-br from-[#E5F5F7] to-white rounded-3xl p-12 border border-[#C4C7CA]/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className={cn("text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#2F323A] to-[#008C99] bg-clip-text text-transparent mb-6", montserrat.className)}>
              Our Mission
            </h3>
          </div>
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-2xl md:text-3xl leading-relaxed text-[#2F323A] italic">
              "To deliver <strong>high quality stainless steel</strong> backed by transparent production, ethical practices, and global consistency—making <strong>Made in Pakistan</strong> synonymous with medical precision and trust."
            </p>
          </motion.div>
        </motion.div>

        {/* Quality & Compliance Section */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h3 className={cn("text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#2F323A] to-[#008C99] bg-clip-text text-transparent mb-6", montserrat.className)}>
              Certified Precision. Proven Performance.
            </h3>
            <p className="text-xl text-[#5D6169] max-w-3xl mx-auto">
              KyMed's manufacturing and quality systems conform to the highest global standards
            </p>
          </div>
          
          {/* Certification Icons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[
              { icon: <FaCertificate className="w-16 h-16" />, label: "ISO 13485:2016" },
              { icon: <FaCertificate className="w-16 h-16" />, label: "ISO 9001:2015" },
              // { icon: <FaAward className="w-16 h-16" />, label: "CE Marking" },
              { icon: <FaMedal className="w-16 h-16" />, label: "ASTM F899" },
            ].map((cert, index) => (
              <motion.div
                key={cert.label}
                className="text-center flex-1 min-w-[150px] max-w-[200px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-[#008C99] mb-4 bg-[#E5F5F7] p-6 rounded-2xl shadow-sm">
                  {cert.icon}
                </div>
                <p className="text-[#2F323A] font-semibold text-sm md:text-base">{cert.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Quality Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white rounded-2xl p-8 border border-[#C4C7CA]/30 shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className={cn("text-2xl font-bold mb-6 text-[#2F323A]", montserrat.className)}>Quality Assurance</h4>
              <ul className="space-y-4">
                {[
                  "Every batch undergoes documented inspection for dimensional accuracy",
                  "Comprehensive functional testing protocols",
                  "Visual excellence verification before packing",
                  "Full traceability from raw material to finished product"
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <FaCheckCircle className="w-5 h-5 text-[#008C99] flex-shrink-0 mt-1" />
                    <span className="text-[#2F323A] text-sm md:text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 border border-[#C4C7CA]/30 shadow-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className={cn("text-2xl font-bold mb-6 text-[#2F323A]", montserrat.className)}>Documentation & Compliance</h4>
              <ul className="space-y-4">
                {[
                  "All instruments ship with traceable Material Test Reports (MTRs)",
                  "Quality Conformance Certificates (QCCs) with every shipment",
                  "ISO 7153-1 compliance verification",
                  "ASTM F899 material standards adherence"
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <FaCheckCircle className="w-5 h-5 text-[#008C99] flex-shrink-0 mt-1" />
                    <span className="text-[#2F323A] text-sm md:text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Global Presence Section */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h3 className={cn("text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#2F323A] to-[#008C99] bg-clip-text text-transparent mb-6", montserrat.className)}>
              Global Presence
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaIndustry className="w-12 h-12" />,
                title: "Manufacturing Facility & Pakistan Office",
                location: "Sialkot, Pakistan",
                color: "from-[#008C99] to-[#006670]"
              },
              {
                icon: <FaMapMarkerAlt className="w-12 h-12" />,
                title: "North America Distribution Office",
                location: "Wisconsin, USA, launching soon",
                color: "from-[#008C99] to-[#006670]"
              },
              {
                icon: <FaMapMarkerAlt className="w-12 h-12" />,
                title: "UK Office",
                location: (
                  <>
                    24 The New Broadway, Tarring Road<br />
                    West Worthing, Sussex, England, UK<br />
                    BN11 4HP<br />
                    <strong>Phone:</strong> +44 7947 533392
                  </>
                ),
                color: "from-[#008C99] to-[#006670]"
              },
              // {
              //   icon: <FaGlobeAmericas className="w-12 h-12" />,
              //   title: "Export Markets",
              //   location: "Germany, USA, UK, Australia, South Korea, GCC, and emerging regions",
              //   color: "from-[#008C99] to-[#006670]"
              // }
            ].map((location, index) => (
              <motion.div
                key={location.title}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={cn("absolute -inset-4 bg-gradient-to-br opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition-all duration-500", location.color)} />
                <div className="relative h-full p-8 rounded-2xl bg-white border border-[#C4C7CA]/30 backdrop-blur-sm group-hover:border-[#008C99]/50 transition-all duration-500 shadow-sm">
                  <div className={cn("inline-flex p-4 rounded-xl bg-gradient-to-br opacity-80 group-hover:opacity-100 transition-opacity duration-500", location.color)}>
                    <div className="text-white">
                      {location.icon}
                    </div>
                  </div>
                  <h3 className={cn("text-xl font-bold mt-6 mb-4 text-[#2F323A] group-hover:text-[#008C99] transition-colors duration-300", montserrat.className)}>
                    {location.title}
                  </h3>
                  <p className="text-[#5D6169] leading-relaxed text-sm md:text-base">
                    {location.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="py-20 bg-gradient-to-br from-[#008C99] to-[#006670] rounded-3xl backdrop-blur-sm border border-white/10 shadow-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
            {[
              { end: 20, label: "Years Experience", icon: <FaAward className="w-8 h-8" /> },
              { end: 50, label: "Countries Served", icon: <FaGlobeAmericas className="w-8 h-8" /> },
              { end: 1000, label: "Products", icon: <FaMedal className="w-8 h-8" /> },
              { end: 10000, label: "Happy Clients", icon: <FaUsers className="w-8 h-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="text-white mb-4 mx-auto"
                  initial={{ scale: 1 }}
                  whileInView={{ scale: [1, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.h4 
                  className={cn("text-5xl font-bold text-white mb-2", montserrat.className)}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <CountingNumber endValue={stat.end} />
                  {stat.end >= 1000 ? 'k+' : '+'}
                </motion.h4>
                <motion.p 
                  className="text-[#E5F5F7] text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-[#008C99] to-[#006670] text-white py-16 px-8 rounded-3xl text-center shadow-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className={cn("text-3xl md:text-4xl font-bold mb-6", montserrat.className)}>
            Ready to Experience high quality stainless steel?
          </h3>
          <p className="text-xl mb-8 text-[#E5F5F7] max-w-2xl mx-auto">
            Discover how KyMed's certified surgical instruments can enhance patient care in your practice with guaranteed quality and full traceability.
          </p>
          <a
            href="/contact"
            className={cn("inline-block bg-white text-[#008C99] font-semibold py-4 px-8 rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg", montserrat.className)}
          >
            Contact Us Today
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;