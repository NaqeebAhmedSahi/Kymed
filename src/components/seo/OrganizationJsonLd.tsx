const OrganizationJsonLd = () => {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KyMed",
    "url": "https://kymed.co",
    "logo": "https://kymed.co/images/logo.png",
    "sameAs": [
      "https://www.facebook.com/yourpage",
      "https://www.linkedin.com/company/yourcompany",
      "https://twitter.com/yourhandle"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+92-000-0000000",
        "contactType": "customer service",
        "areaServed": "PK"
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
