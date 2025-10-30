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
              },
              {
                id: 2,
                user: "Dr. Michael Chen",
                rating: 4.5,
                date: "2025-10-10",
                comment: "Very comfortable during long procedures. Excellent grip even with gloves.",
                pros: ["Ergonomic design", "Durable construction"],
                cons: ["Could be slightly longer"]
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
            price: 49.99,
            image: "https://images.unsplash.com/photo-1579684453403-f84349ef60b0?q=80&w=1000&auto=format&fit=crop",
            features: ["Pre-sterilized", "Single-use", "Safety lock mechanism"],
            rating: 4.6,
            reviews: 89
          },
          {
            id: "s3",
            name: "Precision Microsurgery Scalpel",
            description: "Ultra-fine blade for delicate procedures",
            price: 199.99,
            image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=1000&auto=format&fit=crop",
            features: ["Ultra-sharp blade", "Balanced weight", "Precision tip"],
            rating: 4.9,
            reviews: 67
          },
          {
            id: "s4",
            name: "Carbon Steel Scalpel Set",
            description: "Professional-grade surgical scalpel set",
            price: 299.99,
            image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=1000&auto=format&fit=crop",
            features: ["Carbon steel blades", "Complete set", "Sterilization case included"],
            rating: 4.7,
            reviews: 156
          }
        ]
      },
      {
        id: 102,
        name: "Forceps",
        description: "Various types of surgical forceps for different procedures",
        image: "https://images.unsplash.com/photo-1583912267550-d776cba7c717?q=80&w=1000&auto=format&fit=crop",
        url: "/shop/general-surgery/forceps"
      },
      {
        id: 103,
        name: "Surgical Scissors",
        description: "Sharp and precise surgical scissors for clean cuts",
        image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1000&auto=format&fit=crop",
        url: "/shop/general-surgery/surgical-scissors"
      },
      {
        id: 104,
        name: "Retractors",
        description: "Essential retractors for improved surgical access",
        image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?q=80&w=1000&auto=format&fit=crop",
        url: "/shop/general-surgery/retractors"
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
            }
          }
        ]
      },
      {
        id: 202,
        name: "Video Laryngoscopes",
        description: "High-definition video laryngoscopes with digital display",
        image: "https://images.unsplash.com/photo-1583912267550-d776cba7c717?q=80&w=1000&auto=format&fit=crop",
        url: "/shop/laryngoscopes/video-laryngoscopes"
      },
      {
        id: 203,
        name: "Standard Laryngoscopes",
        description: "Traditional laryngoscopes for routine examinations",
        image: "https://images.unsplash.com/photo-1583912267550-d776cba7c717?q=80&w=1000&auto=format&fit=crop",
        url: "/shop/laryngoscopes/standard"
      }
    ]
  },
  {
    id: 3,
    name: "Dental",
    description: "Professional dental equipment and instruments",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1000&auto=format&fit=crop",
    url: "/shop/dental",
  },
  {
    id: 4,
    name: "Micro Surgery",
    description: "Precision instruments for microsurgical procedures",
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=1000&auto=format&fit=crop",
    url: "/shop/micro-surgery",
  },
  {
    id: 5,
    name: "Beauty",
    description: "Professional beauty and cosmetic equipment",
    image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=1000&auto=format&fit=crop",
    url: "/shop/beauty",
  },
  {
    id: 6,
    name: "Ophthalmology",
    description: "Specialized tools for eye care and surgery",
    image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=1000&auto=format&fit=crop",
    url: "/shop/ophthalmology",
  }
];