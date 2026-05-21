import { Helmet } from 'react-helmet-async';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  name: 'Tareez Tech',
  description: 'Top digital marketing agency and web development company in Lahore, Pakistan. We offer SEO, social media marketing, PPC, custom web development, and graphic design.',
  url: 'https://tareeztech.com',
  telephone: '+923082669945',
  email: 'hello@tareeztech.com',
  priceRange: 'PKR',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lahore',
    addressRegion: 'Punjab',
    addressCountry: 'PK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.5204,
    longitude: 74.3587,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  sameAs: [
    'https://www.instagram.com/tareez.tech/',
    'https://www.facebook.com/profile.php?id=61573214747241',
  ],
  areaServed: [
    { '@type': 'City', name: 'Lahore' },
    { '@type': 'City', name: 'Karachi' },
    { '@type': 'City', name: 'Islamabad' },
    { '@type': 'City', name: 'Peshawar' },
    { '@type': 'Country', name: 'Pakistan' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Marketing & Web Development Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Marketing Services Lahore', url: 'https://tareeztech.com/services/digital-marketing-lahore' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Services Lahore', url: 'https://tareeztech.com/services/seo-services-lahore' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Marketing Pakistan', url: 'https://tareeztech.com/services/social-media-marketing-pakistan' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development Lahore', url: 'https://tareeztech.com/services/web-development-lahore' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design Pakistan', url: 'https://tareeztech.com/services/web-design-pakistan' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'WordPress Development', url: 'https://tareeztech.com/services/wordpress-development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Graphic Design & Video Editing', url: 'https://tareeztech.com/services/graphic-design-video-editing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ecommerce & Digital Marketing', url: 'https://tareeztech.com/services/ecommerce-digital-marketing' } },
    ],
  },
};

const SEOHead = ({ title, description, canonicalUrl, ogImage = '/og-image.jpg' }) => {
  const siteName = 'Tareez Tech';
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Digital Marketing Agency & Web Development Lahore`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* LocalBusiness Schema */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
