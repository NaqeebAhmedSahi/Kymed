export const categories = [
  {
    id: 1,
    name: "General Surgery",
    description: "High-quality surgical instruments for general procedures",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000&auto=format&fit=crop",
    url: "/shop/general-surgery",
    bannerImage: "https://images.unsplash.com/photo-1631815589072-dc13cd157786?q=80&w=2072&auto=format&fit=crop",
    longDescription: "Our comprehensive range of general surgery instruments combines precision engineering with ergonomic design, ensuring optimal performance in the operating room. Each instrument is crafted to meet the exacting standards of modern surgical procedures.",
    subcategories: [
      {
        id: 101,
        name: "Scalpels",
        description: "Precision-crafted surgical scalpels for accurate incisions",
        image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=1000&auto=format&fit=crop",
        url: "/shop/general-surgery/scalpels",
        bannerImage: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=2000&auto=format&fit=crop",
        longDescription: "Our premium range of surgical scalpels combines precision engineering with superior ergonomics. Each scalpel is crafted from high-grade materials to ensure optimal performance and durability in critical surgical procedures.",
        products: [
          {
            id: "s1",
            name: "Premium Surgical Scalpel Handle",
            description: "Ergonomic design with precision grip",
            longDescription: "The Premium Surgical Scalpel Handle represents the pinnacle of surgical instrument design. Crafted from premium-grade stainless steel, this handle offers unparalleled precision and control during procedures. Its ergonomic design reduces hand fatigue during extended use, while the precision-balanced weight distribution ensures optimal handling.",
            price: 129.99,
            originalPrice: 159.99,
            image: "https://images.unsplash.com/photo-1579684453377-8f8717ec3754?q=80&w=1000&auto=format&fit=crop",
            galleryImages: [
              "https://images.unsplash.com/photo-1579684453377-8f8717ec3754?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1579684453403-f84349ef60b0?q=80&w=1000&auto=format&fit=crop"
            ],
            newArrival: true,
            topSelling: false,
            features: [
              {
                title: "Stainless Steel Construction",
                description: "Made from high-grade surgical stainless steel for durability and corrosion resistance"
              },
              {
                title: "Ergonomic Grip",
                description: "Carefully designed handle reduces fatigue during long procedures"
              },
              {
                title: "Autoclavable",
                description: "Withstands repeated sterilization cycles without degradation"
              },
              {
                title: "Precision Balanced",
                description: "Optimal weight distribution for enhanced control and accuracy"
              }
            ],
            specifications: {
              "Material": "Surgical Grade Stainless Steel",
              "Length": "140mm",
              "Weight": "22g",
              "Compatibility": "Standard #3 Scalpel Blades",
              "Sterilization": "Autoclave Compatible",
              "Surface Finish": "Satin/Matte",
              "Country of Origin": "Germany",
              "Warranty": "Lifetime against manufacturing defects"
            },
            rating: 4.8,
            reviews: [
              {
                id: 1,
                user: "Dr. Sarah Johnson",
                rating: 5,
                date: "2025-10-15",
                comment: "Exceptional quality and perfect balance. Makes precise incisions effortless.",
                pros: ["Perfect weight balance", "Comfortable grip", "High-quality finish"],
                cons: ["Premium price point"]
              }
            ],
            stockStatus: "In Stock",
            sku: "SSH-P100",
            certifications: ["CE Marked", "FDA Approved", "ISO 13485"],
            warranty: "Lifetime Warranty",
            shipping: {
              estimated: "2-3 business days",
              free: true,
              threshold: 100
            },
            relatedProducts: ["s2", "s3", "s4"]
          },
          {
            id: "s2",
            name: "Disposable Surgical Scalpel",
            description: "Single-use sterile scalpels for precise incisions",
            longDescription: "High-quality disposable scalpels designed for single-use applications. Pre-sterilized and individually packaged for maximum safety and convenience.",
            price: 49.99,
            originalPrice: 59.99,
            image: "https://images.unsplash.com/photo-1579684453403-f84349ef60b0?q=80&w=1000&auto=format&fit=crop",
            galleryImages: [
              "https://images.unsplash.com/photo-1579684453403-f84349ef60b0?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=1000&auto=format&fit=crop"
            ],
            features: [
              {
                title: "Pre-sterilized",
                description: "Individually packaged and ready for immediate use"
              },
              {
                title: "Single-use",
                description: "Eliminates cross-contamination risks"
              },
              {
                title: "Safety Lock Mechanism",
                description: "Secure blade locking for user safety"
              }
            ],
            specifications: {
              "Material": "Medical Grade Plastic & Stainless Steel",
              "Sterility": "Sterile EO",
              "Packaging": "Individual Peel Pouch",
              "Blade Type": "#10, #11, #15, #20, #22",
              "Country of Origin": "USA",
              "Shelf Life": "5 years"
            },
            rating: 4.6,
            reviews: [
              {
                id: 1,
                user: "Dr. Michael Chen",
                rating: 4,
                date: "2025-09-20",
                comment: "Reliable and consistent quality. Great for outpatient procedures.",
                pros: ["Consistent sharpness", "Easy to use", "Good value"],
                cons: ["Environmental concerns with disposables"]
              }
            ],
            stockStatus: "In Stock",
            sku: "DSS-50PK",
            certifications: ["CE Marked", "FDA Approved"],
            warranty: "1 Year Warranty",
            newArrival: true,
            topSelling: true
          },
          {
            id: "s3",
            name: "Precision Microsurgery Scalpel",
            description: "Ultra-fine blade for delicate procedures",
            longDescription: "Specialized microsurgery scalpel designed for ophthalmic, plastic, and neurosurgical procedures requiring extreme precision and control.",
            price: 199.99,
            originalPrice: 229.99,
            image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=1000&auto=format&fit=crop",
            galleryImages: [
              "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=1000&auto=format&fit=crop"
            ],
            features: [
              {
                title: "Ultra-sharp Blade",
                description: "Surgical-grade steel with micro-fine edge"
              },
              {
                title: "Balanced Weight",
                description: "Precision engineering for optimal control"
              },
              {
                title: "Precision Tip",
                description: "Fine tip for delicate tissue manipulation"
              }
            ],
            specifications: {
              "Material": "High-Carbon Stainless Steel",
              "Blade Size": "Micro #67, #69, #70",
              "Handle Length": "120mm",
              "Weight": "15g",
              "Sterilization": "Autoclave Compatible",
              "Country of Origin": "Switzerland"
            },
            rating: 4.9,
            reviews: [
              {
                id: 1,
                user: "Dr. Emily Rodriguez",
                rating: 5,
                date: "2025-08-15",
                comment: "Perfect for delicate ophthalmic surgeries. Exceptional precision.",
                pros: ["Extremely precise", "Comfortable grip", "Durable blades"],
                cons: ["Requires careful handling"]
              }
            ],
            stockStatus: "In Stock",
            sku: "PMS-100",
            certifications: ["CE Marked", "FDA Approved", "ISO 13485"],
            warranty: "3 Year Warranty",
            newArrival: true,
            topSelling: true
          },
          {
            id: "s4",
            name: "Carbon Steel Scalpel Set",
            description: "Professional-grade surgical scalpel set",
            longDescription: "Comprehensive scalpel set featuring carbon steel blades known for superior sharpness and edge retention. Ideal for surgical training and professional use.",
            price: 299.99,
            originalPrice: 349.99,
            image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=1000&auto=format&fit=crop",
            galleryImages: [
              "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=1000&auto=format&fit=crop"
            ],
            features: [
              {
                title: "Carbon Steel Blades",
                description: "Superior sharpness and edge retention"
              },
              {
                title: "Complete Set",
                description: "Multiple handle and blade combinations"
              },
              {
                title: "Sterilization Case Included",
                description: "Durable case for storage and sterilization"
              }
            ],
            specifications: {
              "Material": "Carbon Steel & Stainless Steel",
              "Set Includes": "3 Handles, 24 Blades (Various Sizes)",
              "Case Material": "Autoclavable Plastic",
              "Blade Types": "#3, #4, #7 Handles with #10, #11, #12, #15 Blades",
              "Country of Origin": "Germany",
              "Warranty": "Lifetime on Handles"
            },
            rating: 4.7,
            reviews: [
              {
                id: 1,
                user: "Dr. Robert Kim",
                rating: 5,
                date: "2025-07-22",
                comment: "Excellent set for surgical training. Blades maintain sharpness well.",
                pros: ["Comprehensive set", "Sharp blades", "Good storage case"],
                cons: ["Carbon steel requires careful maintenance"]
              }
            ],
            stockStatus: "In Stock",
            sku: "CSS-PRO",
            certifications: ["CE Marked", "FDA Approved", "ISO 13485"],
            warranty: "Lifetime Warranty",
            newArrival: true,
            topSelling: true
          }
        ]
      },
      {
        id: 102,
        name: "Forceps",
        description: "Various types of surgical forceps for different procedures",
        image: "https://images.unsplash.com/photo-1583912267550-d776cba7c717?q=80&w=1000&auto=format&fit=crop",
        url: "/shop/general-surgery/forceps",
        products: []
      },
      {
        id: 103,
        name: "Retractors",
        description: "Essential retractors for improved surgical access",
        image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?q=80&w=1000&auto=format&fit=crop",
        url: "/shop/general-surgery/retractors",
        products: []
      }
    ]
  },
  {
    id: 2,
    name: "Laryngoscopes",
    description: "Advanced laryngoscopes for precise examinations",
    image: "https://images.unsplash.com/photo-1583912267550-d776cba7c717?q=80&w=1000&auto=format&fit=crop",
    url: "/shop/laryngoscopes",
    bannerImage: "https://images.unsplash.com/photo-1583912267550-d776cba7c717?q=80&w=2000&auto=format&fit=crop",
    longDescription: "Our comprehensive range of laryngoscopes combines cutting-edge technology with ergonomic design for optimal visualization of the larynx and surrounding structures. Each device is engineered for precision and patient comfort.",
    subcategories: [
      {
        id: 201,
        name: "Fiber Optic Laryngoscopes",
        description: "Advanced fiber optic laryngoscopes for clear visualization",
        image: "https://images.unsplash.com/photo-1583912267550-d776cba7c717?q=80&w=1000&auto=format&fit=crop",
        url: "/shop/laryngoscopes/fiber-optic",
        bannerImage: "https://images.unsplash.com/photo-1583912267550-d776cba7c717?q=80&w=2000&auto=format&fit=crop",
        longDescription: "Our fiber optic laryngoscopes deliver superior illumination and clarity for precise examination and procedures. Built with premium materials and advanced optical technology.",
        products: [
          {
            id: "l1",
            name: "Premium Fiber Optic Laryngoscope Set",
            description: "Complete set with multiple blade sizes",
            longDescription: "Professional-grade fiber optic laryngoscope set featuring interchangeable blades and LED illumination. Includes adult and pediatric sizes for comprehensive practice needs.",
            price: 899.99,
            originalPrice: 999.99,
            image: "https://images.unsplash.com/photo-1583912267550-d776cba7c717?q=80&w=1000&auto=format&fit=crop",
            galleryImages: [
              "https://images.unsplash.com/photo-1583912267550-d776cba7c717?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1583912267550-d776cba7c717?q=80&w=1000&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1583912267550-d776cba7c717?q=80&w=1000&auto=format&fit=crop"
            ],
            features: [
              {
                title: "LED Illumination",
                description: "Bright, cool LED light for optimal visualization"
              },
              {
                title: "Multiple Blade Sizes",
                description: "Complete set of adult and pediatric blades"
              },
              {
                title: "Fiber Optic Technology",
                description: "Advanced fiber optics for clear view"
              },
              {
                title: "Ergonomic Handle",
                description: "Comfortable grip for extended use"
              }
            ],
            specifications: {
              "Light Source": "LED",
              "Power Source": "Rechargeable Li-ion Battery",
              "Handle Material": "Medical Grade Stainless Steel",
              "Blade Sizes": "2, 3, 4 (Adult), 0, 1 (Pediatric)",
              "Battery Life": "4 hours continuous use",
              "Warranty": "5 years"
            },
            rating: 4.9,
            reviews: [
              {
                id: 1,
                user: "Dr. James Wilson",
                rating: 5,
                date: "2025-09-15",
                comment: "Excellent illumination and build quality. The fiber optic system provides crystal clear views.",
                pros: ["Bright illumination", "Multiple blade sizes", "Long battery life"],
                cons: ["Premium price point"]
              }
            ],
            stockStatus: "In Stock",
            sku: "LAR-F100",
            certifications: ["CE Marked", "FDA Approved", "ISO 13485"],
            warranty: "5 Year Limited Warranty",
            shipping: {
              estimated: "3-5 business days",
              free: true,
              threshold: 500
            },
            newArrival: true,
            topSelling: true
          }
        ]
      },
      {
        id: 202,
        name: "Video Laryngoscopes",
        description: "High-definition video laryngoscopes with digital display",
        image: "https://images.unsplash.com/photo-1583912267550-d776cba7c717?q=80&w=1000&auto=format&fit=crop",
        url: "/shop/laryngoscopes/video-laryngoscopes",
        products: []
      },
      {
        id: 203,
        name: "Standard Laryngoscopes",
        description: "Traditional laryngoscopes for routine examinations",
        image: "https://images.unsplash.com/photo-1583912267550-d776cba7c717?q=80&w=1000&auto=format&fit=crop",
        url: "/shop/laryngoscopes/standard",
        products: []
      }
    ]
  },
  {
    id: 3,
    name: "Dental",
    description: "Professional dental equipment and instruments",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1000&auto=format&fit=crop",
    url: "/shop/dental",
    subcategories: []
  },
  {
    id: 4,
    name: "Veterinary",
    description: "Specialized instruments for veterinary medicine",
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1000&auto=format&fit=crop",
    url: "/shop/veterinary",
    subcategories: []
  },
  {
    id: 5,
    name: "Beauty & Cosmetics",
    description: "Professional beauty and cosmetic equipment",
    image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=1000&auto=format&fit=crop",
    url: "/shop/beauty",
    subcategories: []
  },
  {
    id: 6,
    name: "Ophthalmology",
    description: "Specialized tools for eye care and surgery",
    image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=1000&auto=format&fit=crop",
    url: "/shop/ophthalmology",
    subcategories: []
  }
];