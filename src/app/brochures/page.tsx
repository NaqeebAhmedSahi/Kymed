'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaSearch, FaTimes } from "react-icons/fa";

const BrochuresGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrochure, setSelectedBrochure] = useState(null);
  const [showSearch, setShowSearch] = useState(false);

  // Sample brochure data
  const brochures = [
    {
      id: 1,
      title: "Dental Surgery Instruments",
      category: "dental",
      image: "/images/Dental Surgery Instruments_250902_161017.jpg",
      downloadUrl: "/brochures/Dental Surgery Instruments.pdf",
      description: "Complete catalog of our surgical instruments with specifications and usage guidelines."
    },
    {
      id: 2,
      title: "Diagnsotic Instruments",
      category: "surgical",
      image: "/images/Diagnsotic Instruments_250902_161137.jpg",
      downloadUrl: "/brochures/Diagnsotic Instruments.pdf",
      description: "Overview of our dental equipment range with technical specifications."
    },
    {
      id: 3,
      title: "Eye Surgery Instruments",
      category: "surgical",
      image: "/images/Eye Surgery Instruments_250902_161120.jpg",
      downloadUrl: "/brochures/Eye Surgery Instruments.pdf",
      description: "Detailed guide to our electrosurgical products and their applications."
    },
    {
      id: 4,
      title: "Electro Surgery Instruments",
      category: "electrosurgical",
      image: "/images/Electro Surgery Instruments_250902_161038.jpg",
      downloadUrl: "/brochures/Electro Surgery Instruments.pdf",
      description: "Specialized orthopedic instruments and equipment for various procedures."
    },
    {
      id: 5,
      title: "General Surgical Instruments",
      category: "surgical",
      image: "/images/General Surgical Instruments_250902_160935.jpg",
      downloadUrl: "/brochures/General Surgical Instruments.pdf",
      description: "Comprehensive overview of our dental implant systems and accessories."
    },

  ];

  const categories = [
    { id: "all", name: "All Brochures" },
    { id: "surgical", name: "Surgical Instruments" },
    { id: "dental", name: "Dental Equipment" },
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

  // Handle download
  const handleDownload = (brochure:any) => {
    // In a real application, this would trigger the actual download
    console.log(`Downloading ${brochure.title}`);
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = brochure.downloadUrl;
    link.download = brochure.title + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle brochure click
  const handleBrochureClick = (brochure) => {
    setSelectedBrochure(brochure);
  };

  // PDF Icon component
  const PdfIcon = () => (
    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Brochures</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore and download our comprehensive product brochures and catalogs
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-md p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
                    className="pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button 
                    onClick={() => setShowSearch(false)}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    <FaTimes />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setShowSearch(true)}
                  className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
                >
                  <FaSearch size={20} />
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Brochures Grid */}
        {filteredBrochures.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {filteredBrochures.map(brochure => (
              <motion.div
                key={brochure.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                whileHover={{ y: -5 }}
                layout
              >
                <div 
                  className="relative cursor-pointer group"
                  onClick={() => handleBrochureClick(brochure)}
                >
                  {/* Brochure Image */}
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={brochure.image} 
                      alt={brochure.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <PdfIcon />
                    </div>
                  </div>
                </div>

                {/* Brochure Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{brochure.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{brochure.description}</p>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(brochure);
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
                  >
                    <FaDownload />
                    Download PDF
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className="text-center py-12 bg-white rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <PdfIcon className="text-gray-400 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No brochures found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
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
                className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-screen overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-800">{selectedBrochure.title}</h2>
                  <button
                    onClick={() => setSelectedBrochure(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaTimes size={24} />
                  </button>
                </div>

                <div className="p-6 flex-1 overflow-y-auto">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <img 
                        src={selectedBrochure.image} 
                        alt={selectedBrochure.title}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-gray-700 mb-6">{selectedBrochure.description}</p>
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Brochure Details</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li><span className="font-medium">Category:</span> {categories.find(c => c.id === selectedBrochure.category)?.name}</li>
                          <li><span className="font-medium">File Type:</span> PDF</li>
                          {/* <li><span className="font-medium">File Size:</span> Approximately 5.2 MB</li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-t border-gray-200 bg-gray-50 flex justify-end">
                  <button
                    onClick={() => handleDownload(selectedBrochure)}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors"
                  >
                    <FaDownload />
                    Download Brochure
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