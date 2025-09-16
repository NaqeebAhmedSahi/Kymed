'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaTimes, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Define types for our data
interface Brochure {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface Category {
  id: string;
  name: string;
}

const BrochuresGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedBrochure, setSelectedBrochure] = useState<Brochure | null>(null);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const router = useRouter();

  // Sample brochure data
  const brochures: Brochure[] = [
    {
      id: 1,
      title: "Dental Surgery Instruments",
      category: "dental",
      image: "/images/Dental Surgery Instruments_250902_161017.jpg",
      description: "Premium dental instruments for oral surgery procedures."
    },
    {
      id: 2,
      title: "Diagnostic Instruments",
      category: "surgical",
      image: "/images/Diagnsotic Instruments_250902_161137.jpg",
      description: "Precision tools for accurate clinical assessments and evaluations."
    },
    {
      id: 3,
      title: "Eye Surgery Instruments",
      category: "surgical",
      image: "/images/Eye Surgery Instruments_250902_161120.jpg",
      description: "Specialized micro-surgical tools for delicate ophthalmic procedures."
    },
    {
      id: 4,
      title: "Electro Surgery Instruments",
      category: "electrosurgical",
      image: "/images/Electro Surgery Instruments_250902_161038.jpg",
      description: "Advanced systems for cutting, coagulation, and tissue ablation."
    },
    {
      id: 5,
      title: "General Surgical Instruments",
      category: "surgical",
      image: "/images/General Surgical Instruments_250902_160935.jpg",
      description: "Essential instruments for various operative procedures."
    },
  ];

  const categories: Category[] = [
    { id: "all", name: "All Brochures" },
    { id: "surgical", name: "Surgical Instruments" },
    { id: "dental", name: "Dental Instruments" },
    { id: "electrosurgical", name: "Electrosurgical" },
    { id: "accessories", name: "Accessories" }
  ];

  // Filter brochures based on category and search term
  const filteredBrochures = brochures.filter(brochure => {
    const matchesCategory = selectedCategory === "all" || brochure.category === selectedCategory;
    const matchesSearch = brochure.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brochure.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle contact redirect
  const handleContactRedirect = () => {
    router.push("/contact");
  };

  // Handle brochure click
  const handleBrochureClick = (brochure: Brochure) => {
    setSelectedBrochure(brochure);
  };

  // PDF Icon component
  const PdfIcon = ({ className = "" }: { className?: string }) => (
    <svg className={`w-12 h-12 ${className}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Brochures</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive product brochures and catalogs
          </p>
          <p className="text-lg text-blue-600 mt-4">
            Contact us to request any brochure
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              {showSearch ? (
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search brochures..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-5 pr-10 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  <button
                    onClick={() => {
                      setShowSearch(false);
                      setSearchTerm("");
                    }}
                    className="ml-2 text-gray-500 hover:text-gray-700 transition-colors duration-300"
                  >
                    <FaTimes />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowSearch(true)}
                  className="p-2.5 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-all duration-300"
                >
                  <FaSearch size={20} />
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Brochures List - Alternating Layout */}
        {filteredBrochures.length > 0 ? (
          <div className="space-y-16">
            {filteredBrochures.map((brochure, index) => (
              <motion.div
                key={brochure.id}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Brochure Image - Adjusted for tall/narrow images */}
                <div
                  className="w-full md:w-1/2 cursor-pointer group relative overflow-hidden rounded-2xl shadow-lg"
                  onClick={() => handleBrochureClick(brochure)}
                >
                  <div className="h-96 overflow-hidden bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center p-4">
                    <div className="relative h-full w-full max-w-xs mx-auto">
                      <Image
                        src={brochure.image}
                        alt={brochure.title}
                        fill
                        style={{ objectFit: "contain" }}
                        className="transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <div className="bg-white rounded-full p-3 shadow-lg">
                        <PdfIcon className="text-blue-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Brochure Info */}
                <div className="w-full md:w-1/2">
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="font-bold text-2xl mb-4 text-gray-800">{brochure.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{brochure.description}</p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={() => handleBrochureClick(brochure)}
                        className="flex-1 text-center py-3 px-6 bg-transparent border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 font-medium"
                      >
                        View Details
                      </button>
                      <button
                        onClick={handleContactRedirect}
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors duration-300 font-medium shadow-md hover:shadow-lg"
                      >
                        <FaEnvelope />
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            className="text-center py-16 bg-white rounded-xl shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <PdfIcon className="text-gray-400 mx-auto mb-6 text-6xl" />
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">No brochures found</h3>
            <p className="text-gray-500 max-w-md mx-auto">Try adjusting your search or filter criteria to find what you're looking for.</p>
          </motion.div>
        )}

        {/* Brochure Detail Modal */}
        <AnimatePresence>
          {selectedBrochure && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedBrochure(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <h2 className="text-2xl font-bold">{selectedBrochure.title}</h2>
                  <button
                    onClick={() => setSelectedBrochure(null)}
                    className="text-white hover:text-gray-200 transition-colors duration-300"
                  >
                    <FaTimes size={24} />
                  </button>
                </div>

                <div className="p-8 flex-1 overflow-y-auto">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/5 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center p-6 h-96">
                      <div className="relative w-full h-full">
                        <Image
                          src={selectedBrochure.image}
                          alt={selectedBrochure.title}
                          fill
                          style={{ objectFit: "contain" }}
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="md:w-3/5">
                      <p className="text-gray-700 mb-6 text-lg leading-relaxed">{selectedBrochure.description}</p>
                      <div className="bg-gray-100 p-6 rounded-xl">
                        <h4 className="font-semibold text-gray-800 mb-4 text-xl">Brochure Details</h4>
                        <ul className="text-gray-600 space-y-3">
                          <li className="flex items-center">
                            <span className="font-medium w-32">Category:</span>
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                              {categories.find(c => c.id === selectedBrochure.category)?.name}
                            </span>
                          </li>
                          <li className="flex items-center">
                            <span className="font-medium w-32">File Type:</span>
                            <span className="text-gray-700">PDF</span>
                          </li>
                          <li className="flex items-center">
                            <span className="font-medium w-32">Availability:</span>
                            <span className="text-gray-700">Available on request</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-t border-gray-200 bg-gray-50 flex justify-end">
                  <button
                    onClick={handleContactRedirect}
                    className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg transition-colors duration-300 font-medium shadow-md hover:shadow-lg"
                  >
                    <FaEnvelope />
                    Contact Us for Brochure
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BrochuresGallery;