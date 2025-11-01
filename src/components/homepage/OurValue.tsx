"use client";
import React from "react";
import { FaCertificate, FaChartLine, FaHandshake } from "react-icons/fa";
import * as motion from "framer-motion/client";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";

const OurValue = () => {
  const faqs = [
    {
      question: "What types of instruments do you offer?",
      answer:
        "We offer a wide range of surgical, dental, veterinary, and beauty instruments. Each instrument is designed to meet the highest standards of precision and reliability.",
    },
    {
      question: "Are your surgical instruments FDA approved?",
      answer:
        "Yes, many of our surgical instruments are FDA approved. Please contact us for specific documentation regarding compliance and certifications.",
    },
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
        "We accept major credit cards, bank transfers, and other secure payment options.",
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
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca"
  ];
  return (
    <section className="relative bg-[#020817] text-white py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.8),rgba(0,0,0,0.9))]" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20" />
      </div>

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
              className="relative w-[400px] h-[400px] md:w-[520px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl"
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
              <h2 className={cn("text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-to-br from-white via-green-200 to-green-400 bg-clip-text text-transparent mb-6", integralCF.className)}>
                Frequently Asked Questions
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                Find answers to common questions about our products, ordering process, and compliance.
              </p>
            </motion.div>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg overflow-hidden"
                >
                  <details className="group">
                    <summary className={cn("flex items-center justify-between cursor-pointer px-6 py-6 text-xl font-semibold text-white group-open:text-green-400 transition-colors duration-300", integralCF.className)}>
                      <span>{faq.question}</span>
                      <svg className="w-6 h-6 ml-4 transition-transform duration-300 group-open:rotate-90" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-lg text-gray-200">
                      {faq.answer}
                    </div>
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
              className="object-cover w-full h-full rounded-3xl"
            />
          </motion.div>
        ))}
      </div>
    );
  }
};

export default OurValue;