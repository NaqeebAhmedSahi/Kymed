"use client";
import React from "react";
import { FaCertificate, FaChartLine, FaHandshake } from "react-icons/fa";
import * as motion from "framer-motion/client";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { montserrat, openSans } from "@/styles/fonts";

const OurValue = () => {
  const faqs = [
    {
      question: "What types of instruments do you offer?",
      answer:
        "We offer a wide range of surgical, dental, veterinary, and beauty instruments. Each instrument is designed to meet the highest standards of precision and reliability.",
    },
    // {
    //   question: "Are your surgical instruments FDA approved?",
    //   answer:
    //     "Yes, many of our surgical instruments are FDA approved. Please contact us for specific documentation regarding compliance and certifications.",
    // },
    {
      question: "How can I place an order?",
      answer:
        "You can place an order directly through our website or by contacting our sales team via phone or email.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship internationally. Shipping rates and delivery times vary depending on the destination.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept bank transfers.",
    },
    {
      question: "Can I get a sample before placing a bulk order?",
      answer:
        "Yes, samples are available for select products. Please reach out to our team to discuss your requirements.",
    },
    {
      question: "Do you provide documentation for compliance purposes?",
      answer:
        "Absolutely. We provide all necessary documentation for regulatory and compliance needs upon request.",
    },
  ];

  const images = [
    "/images/faq-image-1.jpg",
    "/images/faq-image-2.jpg",
    "/images/faq-image-3.jpg",
    "/images/faq-image-4.jpg",
    "/images/faq-image-5.jpg"
  ];
  return (
    <section className="relative bg-[#F8F9FA] text-[#2F323A] py-24 overflow-hidden font-sans">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E5F5F7] via-[#F8F9FA] to-[#C4C7CA]" />

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
  <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Carousel Images Left */}
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div
              className="relative w-[400px] h-[400px] md:w-[520px] md:h-[520px] rounded-3xl overflow-hidden shadow-[0_8px_32px_0_rgba(47,50,58,0.10)] border border-[#C4C7CA] bg-white"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Simple carousel logic */}
              <Carousel images={images} />
            </motion.div>
          </div>
          {/* FAQ Right */}
          <div className="w-full md:w-1/2">
            <motion.div
              className="text-left mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={cn("text-5xl md:text-6xl font-bold tracking-tighter text-[#008C99] mb-6 font-montserrat")}>Frequently Asked Questions</h2>
              <p className={cn("text-lg md:text-xl text-[#2F323A] max-w-2xl leading-relaxed font-openSans")}>Find answers to common questions about our products, ordering process, and compliance.</p>
            </motion.div>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-2xl bg-white border border-[#C4C7CA] shadow-[0_4px_16px_0_rgba(47,50,58,0.08)] overflow-hidden"
                >
                  <details className="group">
                    <summary className={cn("flex items-center justify-between cursor-pointer px-6 py-6 text-xl font-semibold text-[#2F323A] group-open:text-[#008C99] transition-colors duration-300 font-montserrat")}> <span>{faq.question}</span>
                      <svg className="w-6 h-6 ml-4 transition-transform duration-300 group-open:rotate-90" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </summary>
                    <div className={cn("px-6 pb-6 pt-2 text-lg text-[#2F323A] font-openSans")}>{faq.answer}</div>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );

  // Carousel component
  function Carousel({ images }: { images: string[] }) {
    const [active, setActive] = React.useState(0);
    React.useEffect(() => {
      const timer = setInterval(() => {
        setActive((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(timer);
    }, [images.length]);
    return (
      <div className="relative w-full h-full">
        {images.map((img, idx) => (
          <motion.div
            key={img}
            initial={false}
            animate={{ opacity: active === idx ? 1 : 0, scale: active === idx ? 1 : 0.98 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: active === idx ? 2 : 1 }}
          >
            <img
              src={img}
              alt={`FAQ Image ${idx + 1}`}
              className="object-cover w-full h-full rounded-3xl border border-[#C4C7CA] shadow-[0_4px_16px_0_rgba(47,50,58,0.08)]"
            />
          </motion.div>
        ))}
      </div>
    );
  }
};

export default OurValue;