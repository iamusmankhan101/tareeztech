import { motion } from 'framer-motion';
import { Code, Globe, Smartphone, Zap, Shield, Settings, CheckCircle, Palette, ShoppingCart } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import ServicePageHero from '../../components/ServicePageHero';
import ServiceFAQ from '../../components/ServiceFAQ';
import ServiceCTA from '../../components/ServiceCTA';
import RelatedServices from '../../components/RelatedServices';

const services = [
  { icon: Code, title: 'Custom Web Development', desc: 'Bespoke websites built from scratch using React, Next.js, and modern frameworks — no templates, no limitations.' },
  { icon: Globe, title: 'Business Websites', desc: 'Professional corporate websites that establish credibility, showcase your services, and convert visitors into leads.' },
  { icon: Smartphone, title: 'Web App Development', desc: 'Complex web applications with custom dashboards, portals, and functionality tailored to your business processes.' },
  { icon: ShoppingCart, title: 'Ecommerce Development', desc: 'High-converting online stores built on WooCommerce, Shopify, or custom stacks — ready to scale from day one.' },
  { icon: Settings, title: 'WordPress Development', desc: 'Powerful WordPress websites with custom themes, plugins, and easy-to-manage content management systems.' },
  { icon: Zap, title: 'Website Redesign', desc: 'Transform your outdated website into a modern, fast, and conversion-optimised digital asset.' },
];

const stats = [
  { number: '120+', label: 'Websites Delivered' },
  { number: '98%', label: 'On-Time Delivery' },
  { number: '99.9%', label: 'Average Uptime' },
  { number: '3s', label: 'Avg. Page Load Time' },
];

const process = [
  { title: 'Discovery & Scoping', desc: 'We understand your business goals, target audience, and technical requirements before writing a single line of code.' },
  { title: 'Design & Prototyping', desc: 'Wireframes and high-fidelity mockups are created and approved before development begins — no surprises.' },
  { title: 'Development & Testing', desc: 'Clean, scalable code is written and thoroughly tested across devices, browsers, and screen sizes.' },
  { title: 'Launch & Support', desc: 'We handle deployment, DNS, SSL, and provide ongoing maintenance so your website stays fast and secure.' },
];

const faqs = [
  { question: 'What is the cost of web development in Lahore?', answer: 'Web development costs in Lahore vary by project scope. A professional business website typically starts from PKR 80,000. Custom web applications and ecommerce stores range higher based on features. We provide detailed, transparent quotes with no hidden costs after our discovery call.' },
  { question: 'How long does it take to build a website?', answer: 'A standard business website takes 3–6 weeks from briefing to launch. More complex custom web applications take 8–16 weeks. We provide a detailed project timeline upfront and keep you updated at every milestone.' },
  { question: 'Do you offer web development services near me if I am outside Lahore?', answer: 'Yes. While we are based in Lahore, we serve clients across Pakistan — Karachi, Islamabad, Peshawar — and internationally. All project management, communication, and delivery is handled seamlessly online.' },
  { question: 'What makes Tareez Tech the best web development company in Lahore?', answer: 'We combine strong technical expertise with a deep understanding of digital marketing and SEO. Every website we build is optimised for search engines, fast loading, and conversion — not just visually appealing. Our post-launch support also sets us apart from many web development companies in Lahore.' },
  { question: 'Do you build SEO-friendly websites?', answer: 'Yes — every website we build follows SEO best practices from the ground up: clean URL structures, optimised metadata, fast loading, semantic HTML, schema markup, and mobile-first responsive design. This ensures your site ranks well from day one.' },
  { question: 'Can you redesign my existing website?', answer: 'Absolutely. Website redesign is one of our most popular services. We audit your existing site, preserve any SEO value, and rebuild it with a modern design, improved performance, and better conversion rate optimisation.' },
];

const relatedServices = [
  { icon: Palette, title: 'Web Design Pakistan', description: 'Beautiful, conversion-focused web designs that represent your brand perfectly online.', href: '/services/web-design-pakistan' },
  { icon: Smartphone, title: 'Web App Development', description: 'Custom web applications and portals built for performance and scalability.', href: '/services/web-app-development' },
  { icon: Settings, title: 'WordPress Development', description: 'Powerful WordPress websites with custom themes and seamless CMS management.', href: '/services/wordpress-development' },
];

const WebDevelopmentLahore = () => (
  <>
    <SEOHead
      title="Web Development Company in Lahore | Best Web Development Services Pakistan"
      description="Tareez Tech is the best web development company in Lahore. We offer custom web development, web app development, WordPress, and ecommerce solutions across Pakistan. Fast, SEO-ready, conversion-focused."
      canonicalUrl="https://tareeztech.com/services/web-development-lahore"
    />

    <ServicePageHero
      tagline="Web Development Company in Lahore"
      title="Build Your Digital Presence with"
      titleHighlight="Expert Web Developers"
      description="Tareez Tech is the best web development company in Lahore, delivering custom web development services, web app development, and ecommerce solutions that are fast, SEO-ready, and built to convert visitors into customers."
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/#services' },
        { label: 'Web Development Lahore' },
      ]}
      ctaText="Get a Free Quote"
    />

    <section className="sp-section-alt">
      <div className="sp-container">
        <motion.div className="sp-section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="sp-section-label">Web Development Services</span>
          <h2 className="sp-section-title">Custom Web Development Services in Lahore</h2>
          <p className="sp-section-desc">From simple business websites to complex web applications, we build digital products that drive real business outcomes.</p>
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
            <h2>Advantages of Web Development with Tareez Tech</h2>
            <p>A professionally developed website is your most valuable digital asset. It works for your business 24/7, reaching customers across Pakistan and globally. Our web development in Lahore combines technical excellence with marketing expertise — so every website we deliver is not just functional, but a powerful lead generation machine.</p>
            <p>We build with modern frameworks (React, Next.js, WordPress) and follow every SEO and performance best practice so your site ranks well from launch day.</p>
          </motion.div>
          <motion.ul className="sp-feature-list" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            {['Mobile-first, responsive design across all devices', 'SEO-optimised code structure for strong Google rankings', 'Fast load times with Core Web Vitals optimisation', 'SSL security, regular backups, and ongoing maintenance', 'CMS integration for easy content updates without a developer', 'Post-launch support included for 30 days on all projects'].map((f, i) => (
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
          <h2 className="sp-section-title">How We Build Websites in Lahore</h2>
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

    <section className="sp-section-alt">
      <div className="sp-container">
        <div className="sp-content-block">
          <h3>Web Development in Lahore — Why Local Expertise Matters</h3>
          <p>Pakistani businesses have unique needs: Urdu language support, local payment gateways (JazzCash, EasyPaisa, HBL Pay), and an understanding of the local competitive landscape. Our web developers in Lahore bring this local knowledge to every project alongside international technical standards.</p>
          <h3>Custom Web Development vs. Website Builders</h3>
          <p>Website builders like Wix or Squarespace are fine for basic personal sites, but businesses that want to rank on Google, handle high traffic, integrate with local payment systems, or build custom functionality need <a href="/services/custom-web-development">custom web development services</a>. We build on React, Next.js, and WordPress — technologies that scale as your business grows.</p>
          <h3>Web and App Development Services for Every Budget</h3>
          <ul>
            <li>Starter Business Website — ideal for new businesses and startups in Lahore</li>
            <li>Professional Corporate Site — multi-page site with CMS and contact forms</li>
            <li>Ecommerce Store — full product catalogue, cart, checkout, and payment integration</li>
            <li><a href="/services/web-app-development">Web app development services</a> — custom portals, dashboards, and SaaS applications</li>
          </ul>
        </div>
      </div>
    </section>

    <ServiceFAQ faqs={faqs} title="Web Development Lahore — FAQs" />

    <RelatedServices title="Related Web Services" services={relatedServices} />

    <ServiceCTA
      title="Ready to Build Your Website in Lahore?"
      description="Get a free project consultation with our web development team. We will scope your project and give you a transparent, detailed quote."
      ctaText="Get a Free Web Quote"
    />
  </>
);

export default WebDevelopmentLahore;
