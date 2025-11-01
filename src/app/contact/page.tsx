'use client';
import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';
import Modal from 'react-modal';
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

// Modal styles
const modalStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    zIndex: 1000,
    backdropFilter: 'blur(12px)',
  },
  content: {
    backgroundColor: 'rgba(17, 24, 39, 0.95)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#fff',
    padding: '40px',
    maxWidth: '500px',
    margin: 'auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
  }
};

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState<string>("");  // "success" or "error"
  const [modalMessage, setModalMessage] = useState<string>("");

  const [isLoading, setIsLoading] = useState(false);  // New loading state

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);  // Show loading state when submission starts

    // EmailJS configuration (using env variables)
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

    const formDataToSend: Record<string, unknown> = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    // Send email via EmailJS
    emailjs
      .send(serviceId, templateId, formDataToSend, userId)
      .then(
        (response) => {
          setModalType("success");
          setModalMessage("Your message has been sent successfully!");
          setModalIsOpen(true);
          setIsLoading(false);  // Hide loading state after success
          setFormData({ name: "", email: "", message: "" });  // Clear form fields
        },
        (error) => {
          setModalType("error");
          setModalMessage("Something went wrong. Please try again.");
          setModalIsOpen(true);
          setIsLoading(false);  // Hide loading state after error
        }
      );
  };

  return (
    <section className="relative bg-[#020817] text-white py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.8),rgba(0,0,0,0.9))]" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20" />
      </div>

      {/* Main Wrapper */}
      <motion.div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="h-1 bg-gradient-to-r from-green-400 to-blue-500 mb-6"
            />
            <h2 className={cn("text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-br from-white via-green-200 to-green-400 bg-clip-text text-transparent mb-6", integralCF.className)}>
              Contact Us
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              We are here to assist you. Feel free to reach out with any inquiries.
            </p>
          </div>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { icon: <FaMapMarkerAlt />, title: "Visit Us", content: "Shakky, Daska, Sialkot, Pakistan", color: "from-green-500 to-emerald-600" },
            { icon: <FaPhone />, title: "Call Us", content: "+92 316 7827137", color: "from-blue-500 to-cyan-600" },
            { icon: <FaEnvelope />, title: "Email Us", content: "saluviaindustries@gmail.com", color: "from-purple-500 to-pink-600" },
            { icon: <FaClock />, title: "Working Hours", content: "Mon - Sat: 9AM - 6PM", color: "from-yellow-500 to-amber-600" }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={cn("absolute -inset-2 bg-gradient-to-br opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-all duration-500", item.color)} />
              <div className="relative p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm group-hover:border-green-500/50 transition-all duration-500">
                <div className={cn("inline-flex p-3 rounded-lg bg-gradient-to-br opacity-80 group-hover:opacity-100 transition-opacity duration-500 mb-4", item.color)}>
                  <div className="text-white text-xl">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Form Section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-green-500/20 rounded-3xl blur-3xl opacity-50" />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            {/* Left Section: Information */}
            <div className="space-y-6">
              <h3 className={cn("text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent", integralCF.className)}>
                Get In Touch
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                Have any questions or need further assistance? We're here to help! Reach out to us and we'll respond as soon as possible.
              </p>
              <div className="relative mt-8">
                <div className="absolute -inset-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-50" />
                <img
                  src="/images/contact-support.jpg"
                  alt="Customer Support"
                  className="relative rounded-xl w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Right Section: Contact Form */}
            <div className="space-y-8">
              <h3 className={cn("text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent", integralCF.className)}>
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 bg-white/5 text-white rounded-xl border border-white/10 focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-white/5 text-white rounded-xl border border-white/10 focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 bg-white/5 text-white rounded-xl border border-white/10 focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                    placeholder="Your Message"
                    rows={4}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 px-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium hover:from-green-600 hover:to-emerald-700 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  disabled={isLoading}
                >
                  <span>{isLoading ? "Sending..." : "Send Message"}</span>
                  {!isLoading && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Footer Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/10 via-transparent to-blue-500/10 rounded-full blur-3xl opacity-50" />
            <p className="relative text-gray-400 text-lg">
              © 2025 Kymed. All Rights Reserved.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Modal for success or error */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={modalStyles}
      >
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-50" />
          <div className="relative">
            <h2 className={cn(
              "text-3xl font-bold mb-4",
              modalType === "success" ? "bg-gradient-to-r from-green-400 to-emerald-500" : "bg-gradient-to-r from-red-400 to-rose-500",
              "bg-clip-text text-transparent",
              integralCF.className
            )}>
              {modalType === "success" ? "Success!" : "Error!"}
            </h2>
            <p className="text-lg text-gray-300 mb-8">{modalMessage}</p>
            <button
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium hover:from-green-600 hover:to-emerald-700 transform hover:scale-[1.02] transition-all duration-300"
              onClick={() => setModalIsOpen(false)}
            >
              Close
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default ContactPage;
