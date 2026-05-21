import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const companyLinks = [
  { label: 'About Us', href: '/#about' },
  { label: 'Our Work & Portfolio', href: '/#work' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
];

const digitalMarketingLinks = [
  { label: 'Digital Marketing Lahore', href: '/services/digital-marketing-lahore' },
  { label: 'SEO Services Lahore', href: '/services/seo-services-lahore' },
  { label: 'Social Media Marketing', href: '/services/social-media-marketing-pakistan' },
  { label: 'Ecommerce & Digital Marketing', href: '/services/ecommerce-digital-marketing' },
];

const webLinks = [
  { label: 'Web Development Lahore', href: '/services/web-development-lahore' },
  { label: 'Web Design Pakistan', href: '/services/web-design-pakistan' },
  { label: 'Web App Development', href: '/services/web-app-development' },
  { label: 'WordPress Development', href: '/services/wordpress-development' },
  { label: 'Graphic Design & Video Editing', href: '/services/graphic-design-video-editing' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-and-conditions' },
];

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/tareez.tech/' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61573214747241' },
];

const Footer = () => {
  return (
    <footer className="footer-root">
      {/* Top CTA Banner */}
      <motion.div
        className="footer-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="footer-cta-inner">
          <div>
            <h2 className="footer-cta-title">Ready to start your project?</h2>
            <p className="footer-cta-sub">Partner with the best web development company in Lahore and top digital marketing agency to transform your business.</p>
          </div>
          <a href="/#contact" className="footer-cta-btn">
            Get Started <ArrowUpRight size={18} />
          </a>
        </div>
      </motion.div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-container">
          <motion.div
            className="footer-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* Brand col */}
            <motion.div
              className="footer-brand"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            >
              <a href="/" className="footer-logo">
                <img src="/logo.png" alt="Tareez Tech" />
              </a>
              <p className="footer-tagline">
                Leading digital marketing agency in Lahore and web development company offering custom web development services, web design and development, and comprehensive digital marketing solutions across Pakistan.
              </p>

              <div className="footer-contact-list">
                <a href="tel:+923082669945" className="footer-contact-item">
                  <Phone size={14} /> 0308 2669945
                </a>
                <a href="mailto:hello@tareeztech.com" className="footer-contact-item">
                  <Mail size={14} /> hello@tareeztech.com
                </a>
                <span className="footer-contact-item">
                  <MapPin size={14} /> Looking for web development near me? Visit our office in Lahore or connect with us for remote digital marketing services worldwide.
                </span>
              </div>

              <div className="footer-socials">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="footer-social-link">
                    {s.label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Company col */}
            <motion.div className="footer-link-col" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
              <h4 className="footer-col-title">Company</h4>
              <ul>
                {companyLinks.map((item) => (
                  <li key={item.label}><a href={item.href} className="footer-link">{item.label}</a></li>
                ))}
                {legalLinks.map((item) => (
                  <li key={item.label}><Link to={item.href} className="footer-link">{item.label}</Link></li>
                ))}
              </ul>
            </motion.div>

            {/* Digital Marketing col */}
            <motion.div className="footer-link-col" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
              <h4 className="footer-col-title">Digital Marketing</h4>
              <ul>
                {digitalMarketingLinks.map((item) => (
                  <li key={item.label}><Link to={item.href} className="footer-link">{item.label}</Link></li>
                ))}
              </ul>
            </motion.div>

            {/* Web Services col */}
            <motion.div className="footer-link-col" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
              <h4 className="footer-col-title">Web Services</h4>
              <ul>
                {webLinks.map((item) => (
                  <li key={item.label}><Link to={item.href} className="footer-link">{item.label}</Link></li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Bottom bar */}
          <motion.div
            className="footer-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p>© {new Date().getFullYear()} Tareez Tech. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
