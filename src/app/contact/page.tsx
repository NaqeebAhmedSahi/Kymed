"use client";

import React, { useState, ChangeEvent, FormEvent, useRef, useEffect } from "react";
import * as motion from "framer-motion/client";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { montserrat, openSans } from "@/styles/fonts";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, margin: "-100px" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
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
              Contact Us
            </h2>
            <p className="text-xl md:text-2xl text-[#5D6169] max-w-3xl mx-auto">
              Have a question, quote request, or partnership inquiry? We're here to assist you with precision and professionalism.
            </p>
          </div>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { 
              icon: <FaMapMarkerAlt className="w-8 h-8" />, 
              title: "Manufacturing Facility", 
              text: "Sialkot, Pakistan",
              color: "from-[#008C99] to-[#006670]"
            },
            { 
              icon: <FaMapMarkerAlt className="w-8 h-8" />, 
              title: "U.S. Office", 
              text: "Milwaukee, Wisconsin (Launching 2026)",
              color: "from-[#008C99] to-[#006670]"
            },
            { 
              icon: <FaPhone className="w-8 h-8" />, 
              title: "Phone", 
              text: "+92 300 0915553",
              color: "from-[#008C99] to-[#006670]"
            },
            { 
              icon: <FaEnvelope className="w-8 h-8" />, 
              title: "Email", 
              text: "info@kymed.co",
              color: "from-[#008C99] to-[#006670]"
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="relative group"
              variants={itemVariants}
            >
              <div className={cn("absolute -inset-4 bg-gradient-to-br opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition-all duration-500", item.color)} />
              <div className="relative h-full p-8 rounded-2xl bg-white border border-[#C4C7CA]/30 backdrop-blur-sm group-hover:border-[#008C99]/50 transition-all duration-500 shadow-sm text-center">
                <div className={cn("inline-flex p-4 rounded-xl bg-gradient-to-br opacity-80 group-hover:opacity-100 transition-opacity duration-500 mb-6", item.color)}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className={cn("text-xl font-bold mb-4 text-[#2F323A] group-hover:text-[#008C99] transition-colors duration-300", montserrat.className)}>
                  {item.title}
                </h3>
                <p className={cn("text-[#5D6169] leading-relaxed", openSans.className)}>
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form & Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Image Section */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#008C99]/20 via-[#006670]/20 to-[#008C99]/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#008C99]/10 to-[#006670]/10 p-1">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2F323A]/10 to-[#2F323A]/40 z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              <img
                src="/images/wallpaper03.jpg"
                alt="Contact KyMed Support"
                className="rounded-xl w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-8 left-8 z-20 transform transition-all duration-500 group-hover:translate-y-[-8px]">
                <h4 className={cn("text-2xl font-bold mb-2 text-white", montserrat.className)}>Global Support</h4>
                <p className="text-gray-200 text-lg">
                  Ready to assist you worldwide
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            ref={formRef}
            className="relative group"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#008C99]/10 to-[#006670]/10 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.form
              onSubmit={handleSubmit}
              className="relative bg-white p-8 rounded-2xl border border-[#C4C7CA]/30 shadow-sm backdrop-blur-sm"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.h2
                className={cn("text-3xl font-bold bg-gradient-to-r from-[#2F323A] to-[#008C99] bg-clip-text text-transparent mb-2", montserrat.className)}
                variants={itemVariants}
              >
                Send Us a Message
              </motion.h2>
              <motion.p
                className="text-[#5D6169] mb-8"
                variants={itemVariants}
              >
                We'll get back to you within 24 hours
              </motion.p>

              <div className="space-y-6">
                <motion.div variants={inputVariants}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full p-4 border border-[#C4C7CA] rounded-xl text-[#2F323A] focus:outline-none focus:ring-2 focus:ring-[#008C99]/40 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  />
                </motion.div>

                <motion.div variants={inputVariants}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    className="w-full p-4 border border-[#C4C7CA] rounded-xl text-[#2F323A] focus:outline-none focus:ring-2 focus:ring-[#008C99]/40 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  />
                </motion.div>

                <motion.div variants={inputVariants}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your Message"
                    rows={5}
                    className="w-full p-4 border border-[#C4C7CA] rounded-xl text-[#2F323A] focus:outline-none focus:ring-2 focus:ring-[#008C99]/40 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
                  ></textarea>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full bg-gradient-to-r from-[#008C99] to-[#006670] text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-[#008C99]/25 hover:shadow-xl",
                      montserrat.className
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.div>
              </div>
            </motion.form>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="py-16 bg-gradient-to-br from-[#008C99] to-[#006670] rounded-3xl backdrop-blur-sm border border-white/10 shadow-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className={cn("text-3xl md:text-4xl font-bold text-white mb-6", montserrat.className)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to Partner with KyMed?
          </motion.h3>
          <motion.p
            className="text-xl mb-8 text-[#E5F5F7] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Let's discuss how our precision surgical instruments can enhance your medical practice.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="tel:+923000915553"
              className={cn(
                "inline-block bg-white text-[#008C99] font-semibold py-4 px-8 rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg mx-2 mb-2",
                montserrat.className
              )}
            >
              Call Us Now
            </a>
            <a
              href="mailto:info@kymed.co"
              className={cn(
                "inline-block bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-[#008C99] transform hover:scale-105 transition-all duration-300 mx-2 mb-2",
                montserrat.className
              )}
            >
              Email Us
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactPage;