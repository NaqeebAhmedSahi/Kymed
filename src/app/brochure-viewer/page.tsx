"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { montserrat } from "@/styles/fonts";
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaDownload,
  FaTimes
} from "react-icons/fa";

const BrochureViewer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;
  const pdfUrl = "/brochures/KyMed Brochure.pdf";

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleDownload = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <section className="relative bg-[#F8F9FA] min-h-screen py-24 overflow-hidden">
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
          className="text-center mb-16"
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
            <h1 className={cn(
              "text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-br from-[#2F323A] via-[#008C99] to-[#006670] bg-clip-text text-transparent mb-6",
              montserrat.className
            )}>
              KyMed Marketing Brochure 2026 Edition
            </h1>
            <p className="text-xl md:text-2xl text-[#5D6169] max-w-3xl mx-auto">
              Surgical Precision Instruments Catalog
            </p>
          </div>
        </motion.div>

        {/* PDF Viewer */}
        <div className="max-w-6xl mx-auto">
          {/* Controls Bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl px-6 py-3 shadow-lg border border-[#008C99]/20">
              <h2 className={cn("text-xl font-bold text-[#2F323A]", montserrat.className)}>
                KyMed Brochure
              </h2>
            </div>
            <button
              onClick={handleDownload}
              className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-xl hover:bg-[#008C99] hover:text-white transition-all duration-200 shadow-lg border border-[#008C99]/20 flex items-center gap-2 font-semibold"
            >
              <FaDownload className="w-5 h-5" />
              Download PDF
            </button>
          </div>

          {/* PDF Display */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#C4C7CA]/30">
            <div className="relative" style={{ height: '85vh' }}>
              <iframe
                src={`${pdfUrl}#page=${currentPage}&toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                className="w-full h-full"
                title="KyMed Brochure"
              />
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="p-4 rounded-full bg-gradient-to-r from-[#008C99] to-[#006670] text-white hover:from-[#007080] hover:to-[#005560] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 shadow-lg disabled:shadow-none"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="bg-white/95 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-[#008C99]/20">
              <span className={cn("text-[#2F323A] font-bold text-xl", montserrat.className)}>
                Page {currentPage} of {totalPages}
              </span>
            </div>
            
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="p-4 rounded-full bg-gradient-to-r from-[#008C99] to-[#006670] text-white hover:from-[#007080] hover:to-[#005560] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 shadow-lg disabled:shadow-none"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BrochureViewer;
