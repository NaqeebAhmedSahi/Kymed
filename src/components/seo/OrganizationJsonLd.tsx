const OrganizationJsonLd = () => {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KyMed",
    "url": "https://kymed.co",
    "logo": "https://kymed.co/images/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/kymed"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+92-329-9958000",
        "contactType": "customer service",
        "email": "info@kymed.co",
        "areaServed": ["US", "GB", "AE", "PK"],
        "availableLanguage": ["English", "Urdu"]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
    />
  );
};

export default OrganizationJsonLd;
