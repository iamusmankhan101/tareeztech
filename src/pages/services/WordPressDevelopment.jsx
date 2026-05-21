import { motion } from 'framer-motion';
import { FileCode, Settings, Shield, Zap, Palette, Globe, CheckCircle, Code, Smartphone } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import ServicePageHero from '../../components/ServicePageHero';
import ServiceFAQ from '../../components/ServiceFAQ';
import ServiceCTA from '../../components/ServiceCTA';
import RelatedServices from '../../components/RelatedServices';

const services = [
  { icon: Palette, title: 'Custom WordPress Themes', desc: 'Pixel-perfect custom themes built to your brand — no generic templates, no bloated page builders.' },
  { icon: FileCode, title: 'Custom Plugin Development', desc: 'Bespoke WordPress plugins that add exactly the functionality your site needs without unnecessary overhead.' },
  { icon: Settings, title: 'WooCommerce Development', desc: 'Full ecommerce stores on WooCommerce with local payment gateways, inventory management, and custom checkout flows.' },
  { icon: Globe, title: 'WordPress Migration', desc: 'Safe, zero-downtime migration from any platform (Wix, Joomla, Drupal) to WordPress without losing SEO rankings.' },
  { icon: Shield, title: 'WordPress Security & Maintenance', desc: 'Regular core, theme, and plugin updates, security scanning, backups, and firewall configuration.' },
  { icon: Zap, title: 'WordPress Speed Optimisation', desc: 'Caching, image optimisation, CDN setup, and database tuning to make your WordPress site blazing fast.' },
];

const stats = [
  { number: '60+', label: 'WordPress Sites Built' },
  { number: '2s', label: 'Avg. Load Time Achieved' },
  { number: '100%', label: 'Mobile-Responsive' },
  { number: '5yr+', label: 'WordPress Expertise' },
];

const process = [
  { title: 'Requirements Gathering', desc: 'We understand your content needs, design preferences, and required functionality to plan the perfect WordPress build.' },
  { title: 'Custom Theme Design', desc: 'A bespoke theme is designed and approved before development — your brand, your way, not a template.' },
  { title: 'Development & Plugin Setup', desc: 'Theme is built, plugins configured, and the CMS set up so your team can easily manage content without needing a developer.' },
  { title: 'Launch & Training', desc: 'Site launches with a full handover session — we train your team to update content, add posts, and manage the site confidently.' },
];

const faqs = [
  { question: 'Why should I choose WordPress for my website?', answer: 'WordPress powers over 43% of the web for good reason. It is flexible, scalable, and gives non-technical users full control over content via a simple CMS. When professionally developed (not built on a template), WordPress sites are fast, secure, and highly SEO-friendly.' },
  { question: 'Do you build custom WordPress themes or use pre-built themes?', answer: 'We build fully custom WordPress themes from scratch. Pre-built themes like Avada or Divi are loaded with unused code that slows your site and limits your brand expression. Our custom themes are lean, fast, and designed exclusively to represent your business.' },
  { question: 'Can I update my WordPress website myself after it is built?', answer: 'Yes — that is one of WordPress\'s greatest strengths. We configure an intuitive admin panel and provide a training session so your team can add blog posts, update services, change images, and manage all content without touching code or needing a developer.' },
  { question: 'Do you offer WordPress web development services for ecommerce?', answer: 'Yes. WooCommerce (WordPress\'s ecommerce extension) is one of the most powerful ecommerce platforms available. We build fully customised WooCommerce stores with local Pakistani payment gateways, product management, and conversion-optimised checkout.' },
  { question: 'How do you keep my WordPress site secure?', answer: 'Security is built in from the start: hardened wp-config settings, SSL, limited login attempts, two-factor authentication for admins, a web application firewall, and regular automated backups. Our maintenance packages include weekly security scans and prompt patching of any vulnerabilities.' },
];

const relatedServices = [
  { icon: Globe, title: 'Web Development Lahore', description: 'Full custom web development services for businesses across Pakistan.', href: '/services/web-development-lahore' },
  { icon: Code, title: 'Web App Development', description: 'Complex web applications and portals beyond standard WordPress functionality.', href: '/services/web-app-development' },
  { icon: Smartphone, title: 'Web Design Pakistan', description: 'Bespoke website design that makes your WordPress site look unique and professional.', href: '/services/web-design-pakistan' },
];

const WordPressDevelopment = () => (
  <>
    <SEOHead
      title="WordPress Development Services Lahore"
      description="Expert WordPress development in Lahore. Custom themes, WooCommerce, plugin dev & security for Pakistan businesses. No templates — built from scratch."
      canonicalUrl="https://tareeztech.com/services/wordpress-development"
    />

    <ServicePageHero
      tagline="Custom WordPress Web Development Pakistan"
      title="WordPress Web Development Services"
      titleHighlight="in Lahore & Pakistan"
      description="Tareez Tech delivers custom WordPress web development services in Pakistan — bespoke themes, WooCommerce stores, plugin development, and ongoing maintenance for businesses in Lahore and beyond."
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Web Development', href: '/services/web-development-lahore' },
        { label: 'WordPress Development' },
      ]}
      ctaText="Get a WordPress Quote"
    />

    <section className="sp-section-alt">
      <div className="sp-container">
        <motion.div className="sp-section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="sp-section-label">WordPress Services</span>
          <h2 className="sp-section-title">WordPress Web Development Services We Offer</h2>
          <p className="sp-section-desc">From custom theme development to WooCommerce stores, security hardening, and performance optimisation — we handle every aspect of WordPress.</p>
        </motion.div>
        <div className="sp-grid-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={i} className="sp-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <div className="sp-card-icon"><Icon size={20} /></div>
                <h3 className="sp-card-title">{s.title}</h3>
                <p className="sp-card-desc">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    <section className="sp-section">
      <div className="sp-container">
        <div className="sp-stats-grid">
          {stats.map((stat, i) => (
            <motion.div key={i} className="sp-stat-item" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
              <div className="sp-stat-number">{stat.number}</div>
              <div className="sp-stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="sp-section-alt">
      <div className="sp-container">
        <div className="sp-two-col">
          <motion.div className="sp-two-col-text" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2>Why Choose Tareez Tech for WordPress Development in Pakistan?</h2>
            <p>Most WordPress agencies in Pakistan use pre-built themes and page builders that produce slow, generic websites. Tareez Tech builds every WordPress site with a custom theme written from scratch — meaning faster load times, cleaner code, and a unique brand identity that page-builder sites can never achieve.</p>
            <p>Our WordPress developers have 5+ years of experience with complex custom post types, ACF, REST API integrations, and WooCommerce — covering every WordPress requirement a growing Pakistani business may have.</p>
          </motion.div>
          <motion.ul className="sp-feature-list" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            {['Custom themes — never generic templates or Elementor bloat', 'SEO-optimised from day one with Yoast or RankMath configuration', 'WooCommerce with JazzCash, EasyPaisa, and Stripe integration', 'Comprehensive admin training so your team manages content easily', 'Monthly maintenance plans for security, backups, and updates', 'GDPR-compliant cookie and privacy management setup'].map((f, i) => (
              <li key={i} className="sp-feature-item"><CheckCircle size={18} />{f}</li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>

    <section className="sp-section">
      <div className="sp-container">
        <motion.div className="sp-section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="sp-section-label">Our Process</span>
          <h2 className="sp-section-title">How We Build Your WordPress Website</h2>
        </motion.div>
        <div className="sp-process-grid">
          {process.map((step, i) => (
            <motion.div key={i} className="sp-process-step" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className="sp-process-number">0{i + 1}</div>
              <h3 className="sp-process-title">{step.title}</h3>
              <p className="sp-process-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <ServiceFAQ faqs={faqs} title="WordPress Development — FAQs" />

    <RelatedServices title="Other Web Services" services={relatedServices} />

    <ServiceCTA
      title="Ready for a Professional WordPress Website?"
      description="Get a custom WordPress development quote from Lahore's WordPress experts. Fast, secure, and built to reflect your brand."
      ctaText="Get a WordPress Quote"
    />
  </>
);

export default WordPressDevelopment;
