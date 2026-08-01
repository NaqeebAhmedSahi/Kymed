"use client";
import React from "react";
import * as motion from "framer-motion/client";
import { cn } from "@/lib/utils";
import { montserrat, openSans } from "@/styles/fonts";
import {
  FaMapMarkerAlt,
  FaIndustry,
  FaClock,
  FaUsers,
  FaHandshake,
  FaBalanceScale,
  FaAward,
} from "react-icons/fa";

const AboutUs = () => {
  const beliefs = [
    {
      title: "Trust first",
      text: "We treat our customers as partners, not just buyers.",
      icon: <FaHandshake className="w-6 h-6" />,
    },
    {
      title: "Long-term relationships",
      text: "We work together with our customers on shared goals.",
      icon: <FaUsers className="w-6 h-6" />,
    },
    {
      title: "Quality over cost",
      text: "We never lower quality to save money.",
      icon: <FaAward className="w-6 h-6" />,
    },
    {
      title: "Fair pay",
      text: "We believe our workers in Pakistan deserve fair compensation for their hard work.",
      icon: <FaBalanceScale className="w-6 h-6" />,
    },
  ];

  return (
    <section className="relative bg-[#F8F9FA] text-[#2F323A] py-24 overflow-hidden">
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
        {/* Header */}
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
            <h1
              className={cn(
                "text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-br from-[#2F323A] via-[#008C99] to-[#006670] bg-clip-text text-transparent mb-6",
                montserrat.className
              )}
            >
              About KyMed
            </h1>
            <p className="text-xl md:text-2xl text-[#5D6169] max-w-3xl mx-auto">
              Surgical & dental instruments manufacturer — Pakistan manufacturing, USA quality checks
            </p>
          </div>
        </motion.div>

        {/* Our Company */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2
              className={cn(
                "text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#2F323A] to-[#008C99] bg-clip-text text-transparent",
                montserrat.className
              )}
            >
              Our Company
            </h2>
            <p className={cn("text-lg text-[#2F323A] leading-relaxed", openSans.className)}>
              KyMed is a surgical and dental instruments manufacturer based in Sialkot, Pakistan.
            </p>
            <p className={cn("text-lg text-[#2F323A] leading-relaxed", openSans.className)}>
              We bring 30+ years of manufacturing excellence through our partner&apos;s three decades of hands-on production experience.
            </p>
            <p className={cn("text-lg text-[#2F323A] leading-relaxed", openSans.className)}>
              We have our own in-house manufacturing team, quality inspection team, and packaging team in Pakistan. We also have a registered team in the USA that handles distribution and quality checks for our American customers.
            </p>
            <div className="pt-2">
              <a
                href="/contact"
                className={cn(
                  "inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-[#008C99] to-[#006670] rounded-xl hover:from-[#007783] hover:to-[#00555f] transform hover:scale-[1.02] transition-all duration-300 shadow-lg",
                  montserrat.className
                )}
              >
                Partner With Us
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#008C99]/30 to-[#006670]/40 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-[#008C99]/30 p-1">
              <img
                src="/images/about.jpg"
                alt="KyMed manufacturing"
                className="w-full h-[460px] object-cover rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#008C99]/85 to-transparent">
                <h4 className={cn("text-2xl font-bold text-white mb-1", montserrat.className)}>
                  Made in Pakistan
                </h4>
                <p className="text-white/90 text-lg">Quality checked again in the USA</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Our Story */}
        <motion.div
          className="mb-28 rounded-3xl bg-gradient-to-br from-[#E5F5F7] to-white border border-[#C4C7CA]/40 p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#2F323A] to-[#008C99] bg-clip-text text-transparent",
              montserrat.className
            )}
          >
            Our Story
          </h2>
          <div className={cn("space-y-4 text-lg text-[#2F323A] leading-relaxed max-w-4xl", openSans.className)}>
            <p>
              KyMed was built on a simple idea: surgical instruments should be made with real craftsmanship, checked twice for quality, and delivered without the usual headaches of overseas sourcing.
            </p>
            <p>
              We&apos;re led by two people who bring different strengths to the same goal — one focused on manufacturing excellence in Pakistan, the other focused on making sure our US customers never feel far away.
            </p>
          </div>
        </motion.div>

        {/* Leadership */}
        <motion.div
          className="mb-28"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2
              className={cn(
                "text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#2F323A] to-[#008C99] bg-clip-text text-transparent mb-4",
                montserrat.className
              )}
            >
              Leadership
            </h2>
            <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-[#008C99] to-[#006670]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              className="rounded-3xl bg-white border border-[#C4C7CA]/40 p-8 md:p-10 shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className={cn("text-sm uppercase tracking-[0.2em] text-[#008C99] mb-2", openSans.className)}>
                Pakistan · Manufacturing
              </p>
              <h3 className={cn("text-2xl font-bold text-[#2F323A] mb-1", montserrat.className)}>
                Kinza Ijaz
              </h3>
              <p className={cn("text-base font-semibold text-[#008C99] mb-5", montserrat.className)}>
                Founder &amp; CEO, KyMed
              </p>
              <div className={cn("space-y-4 text-[#2F323A] leading-relaxed", openSans.className)}>
                <p>
                  Kinza leads KyMed&apos;s manufacturing, quality, and product strategy from Sialkot, Pakistan. She is also Managing Partner at Surgiscape, a surgical instruments company she built from the ground up.
                </p>
                <p>
                  A LUMS Economics graduate with prior experience at Nestlé and Reckitt Benckiser, she brings a research-first, detail-driven approach to every product KyMed makes.
                </p>
                <p>
                  She serves on the Executive Committee of the Sialkot Chamber of Commerce and chairs the Surgical Committee at the Women Chamber of Commerce &amp; Industry (WCCI).
                </p>
              </div>
            </motion.div>

            <motion.div
              className="rounded-3xl bg-white border border-[#C4C7CA]/40 p-8 md:p-10 shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className={cn("text-sm uppercase tracking-[0.2em] text-[#008C99] mb-2", openSans.className)}>
                United States · Distribution
              </p>
              <h3 className={cn("text-2xl font-bold text-[#2F323A] mb-1", montserrat.className)}>
                Jawaad Ahmad
              </h3>
              <p className={cn("text-base font-semibold text-[#008C99] mb-5", montserrat.className)}>
                CFO, KyMed &amp; CEO, KyMed USA
              </p>
              <div className={cn("space-y-4 text-[#2F323A] leading-relaxed", openSans.className)}>
                <p>
                  Jawaad leads KyMed&apos;s business in the United States. Born and raised in the US, he brings a background in finance — including experience with Fortune 500 companies — and 15 years of experience successfully running his own businesses in real estate and oil.
                </p>
                <p>
                  He&apos;s the direct point of contact for our US customers, making sure orders, communication, and delivery all run smoothly on this side of the world.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* What We Believe In */}
        <motion.div
          className="mb-28"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2
              className={cn(
                "text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#2F323A] to-[#008C99] bg-clip-text text-transparent mb-4",
                montserrat.className
              )}
            >
              What We Believe In
            </h2>
            <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-[#008C99] to-[#006670]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {beliefs.map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-2xl bg-white border border-[#C4C7CA]/40 p-7 shadow-sm hover:border-[#008C99]/40 transition-colors"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#008C99] to-[#006670] text-white mb-4">
                  {item.icon}
                </div>
                <h3 className={cn("text-xl font-bold text-[#2F323A] mb-2", montserrat.className)}>
                  {item.title}
                </h3>
                <p className={cn("text-[#5D6169] leading-relaxed", openSans.className)}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Global Presence */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h3
              className={cn(
                "text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#2F323A] to-[#008C99] bg-clip-text text-transparent mb-6",
                montserrat.className
              )}
            >
              Global Presence
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaIndustry className="w-12 h-12" />,
                title: "Manufacturing Facility & Pakistan Office",
                location: (
                  <>
                    Capt. Sher Ali Khan Road, Nishat Park<br />
                    Sialkot, Pakistan<br />
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+923299958000" className="hover:text-[#008C99] transition-colors">
                      +92 329 9958000
                    </a>
                  </>
                ),
                color: "from-[#008C99] to-[#006670]",
              },
              {
                icon: <FaMapMarkerAlt className="w-12 h-12" />,
                title: "North America Distribution Office",
                location: (
                  <>
                    11147 N. Port Washington Road<br />
                    Mequon, Wisconsin 53097<br />
                    USA<br />
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+14147084400" className="hover:text-[#008C99] transition-colors">
                      +1 (414) 708-4400
                    </a>
                  </>
                ),
                color: "from-[#008C99] to-[#006670]",
              },
              {
                icon: <FaMapMarkerAlt className="w-12 h-12" />,
                title: "UK Office",
                location: (
                  <>
                    24 The New Broadway, Tarring Road<br />
                    West Worthing, Sussex, England, UK<br />
                    BN11 4HP<br />
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+447947533392" className="hover:text-[#008C99] transition-colors">
                      +44 7947 533392
                    </a>
                  </>
                ),
                color: "from-[#008C99] to-[#006670]",
              },
            ].map((location, index) => (
              <motion.div
                key={location.title}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div
                  className={cn(
                    "absolute -inset-4 bg-gradient-to-br opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition-all duration-500",
                    location.color
                  )}
                />
                <div className="relative h-full p-8 rounded-2xl bg-white border border-[#C4C7CA]/30 backdrop-blur-sm group-hover:border-[#008C99]/50 transition-all duration-500 shadow-sm">
                  <div
                    className={cn(
                      "inline-flex p-4 rounded-xl bg-gradient-to-br opacity-80 group-hover:opacity-100 transition-opacity duration-500",
                      location.color
                    )}
                  >
                    <div className="text-white">{location.icon}</div>
                  </div>
                  <h3
                    className={cn(
                      "text-xl font-bold mt-6 mb-4 text-[#2F323A] group-hover:text-[#008C99] transition-colors duration-300",
                      montserrat.className
                    )}
                  >
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

        {/* Stats */}
        <motion.div
          className="py-20 bg-gradient-to-br from-[#008C99] to-[#006670] rounded-3xl backdrop-blur-sm border border-white/10 shadow-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
            {[
              { value: "6 Weeks", label: "Average Lead Time", icon: <FaClock className="w-8 h-8" /> },
              { value: "0.8M EA", label: "Monthly Capacity", icon: <FaIndustry className="w-8 h-8" /> },
              { value: "150+", label: "Qualified Employees", icon: <FaUsers className="w-8 h-8" /> },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-white mb-4 mx-auto w-fit">{stat.icon}</div>
                <h4 className={cn("text-5xl font-bold text-white mb-2", montserrat.className)}>
                  {stat.value}
                </h4>
                <p className="text-[#E5F5F7] text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-[#008C99] to-[#006670] text-white py-16 px-8 rounded-3xl text-center shadow-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className={cn("text-3xl md:text-4xl font-bold mb-6", montserrat.className)}>
            Ready to partner with KyMed?
          </h3>
          <p className="text-xl mb-8 text-[#E5F5F7] max-w-2xl mx-auto">
            Request a quote for OEM, private-label, or standard stock surgical and dental instruments.
          </p>
          <a
            href="/contact"
            className={cn(
              "inline-block bg-white text-[#008C99] font-semibold py-4 px-8 rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg",
              montserrat.className
            )}
          >
            Contact Us Today
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
