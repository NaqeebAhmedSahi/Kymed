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
        "areaServed": "PK",
        "availableLanguage": ["English", "Urdu"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+1-414-708-4400",
        "contactType": "customer service",
        "email": "info@kymed.co",
        "areaServed": "US",
        "availableLanguage": "English"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+44-7947-533392",
        "contactType": "customer service",
        "email": "info@kymed.co",
        "areaServed": "GB",
        "availableLanguage": "English"
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
