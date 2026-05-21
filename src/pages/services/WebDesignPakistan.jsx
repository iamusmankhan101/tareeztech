import { motion } from 'framer-motion';
import { Palette, Monitor, Layers, Smartphone, Zap, CheckCircle, Code, Globe, Settings } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import ServicePageHero from '../../components/ServicePageHero';
import ServiceFAQ from '../../components/ServiceFAQ';
import ServiceCTA from '../../components/ServiceCTA';
import RelatedServices from '../../components/RelatedServices';

const services = [
  { icon: Palette, title: 'UI/UX Design', desc: 'User-centred interface design that guides visitors naturally toward conversion — beautiful and functional.' },
  { icon: Monitor, title: 'Corporate Website Design', desc: 'Professional web design that builds credibility and represents your Pakistani brand with pride on a global stage.' },
  { icon: Smartphone, title: 'Mobile-First Responsive Design', desc: 'Every design is built mobile-first — perfect on phones, tablets, and desktops, for Pakistan\'s mobile-heavy audience.' },
  { icon: Zap, title: 'Website Redesign Pakistan', desc: 'Modernise your outdated website with a fresh, conversion-focused design without losing your existing SEO value.' },
  { icon: Layers, title: 'Landing Page Design', desc: 'High-converting landing pages designed for campaigns, product launches, and lead generation funnels.' },
  { icon: Globe, title: 'Bilingual Website Design', desc: 'Urdu and English bilingual web design for Pakistani businesses that want to reach the full local market.' },
];

const stats = [
  { number: '100+', label: 'Websites Designed' },
  { number: '35%', label: 'Avg. Conversion Lift' },
  { number: '4.9★', label: 'Client Satisfaction' },
  { number: '48hr', label: 'First Mockup Turnaround' },
];

const process = [
  { title: 'Briefing & Research', desc: 'We study your brand, competitors, and target audience to establish a design direction that sets you apart.' },
  { title: 'Wireframes', desc: 'Low-fidelity wireframes map out page structure and user flows before a pixel of design is created.' },
  { title: 'Visual Design', desc: 'High-fidelity mockups in your brand colours, typography, and style — reviewed and refined with your feedback.' },
  { title: 'Handoff & Build', desc: 'Approved designs are handed to development for pixel-perfect implementation and browser testing.' },
];

const faqs = [
  { question: 'How much does website design cost in Pakistan?', answer: 'Affordable web design services in Pakistan start from PKR 50,000 for a simple business website. More complex designs with custom illustrations, animations, and multiple pages range higher. We offer transparent, itemised quotes after understanding your requirements — no hidden costs.' },
  { question: 'What makes a good web design company in Pakistan?', answer: 'A good web design company in Pakistan understands local aesthetics, cultural nuances, and technical requirements like Urdu support and local payment gateways. Tareez Tech combines international design standards with deep local market knowledge to create websites that resonate with Pakistani audiences.' },
  { question: 'Can you redesign my existing website without losing SEO rankings?', answer: 'Yes. Website redesign in Pakistan requires careful handling of existing URL structures, redirects, and on-page SEO elements. We audit your current site before redesigning and implement proper 301 redirects and technical SEO preservation so rankings are protected.' },
  { question: 'Do you offer website design near me in Lahore?', answer: 'Yes, our web design studio is based in Lahore. We work with clients in-person for local businesses, and remotely for clients across Pakistan — Karachi, Islamabad, Peshawar, and beyond.' },
  { question: 'What is the difference between web design and web development?', answer: 'Web design focuses on the visual appearance, layout, user experience, and brand representation of a website. Web development is the technical implementation — writing code to bring the design to life. Tareez Tech offers both, meaning you get a seamless, integrated result rather than a handover between two separate agencies.' },
];

const relatedServices = [
  { icon: Code, title: 'Web Development Lahore', description: 'Full-stack web development to turn your design into a fast, functional, SEO-ready website.', href: '/services/web-development-lahore' },
  { icon: Settings, title: 'WordPress Development', description: 'WordPress websites with custom design and easy content management for your team.', href: '/services/wordpress-development' },
  { icon: Palette, title: 'Graphic Design & Video Editing', description: 'Brand identity, social media graphics, and video content to complement your website.', href: '/services/graphic-design-video-editing' },
];

const WebDesignPakistan = () => (
  <>
    <SEOHead
      title="Website Design Company Pakistan"
      description="Affordable website design in Pakistan by Tareez Tech. Mobile-first, SEO-ready designs for businesses in Lahore, Karachi & Islamabad. Get a free design quote today."
      canonicalUrl="https://tareeztech.com/services/web-design-pakistan"
    />

    <ServicePageHero
      tagline="Affordable Web Design Services Pakistan"
      title="Website Design Company in Pakistan"
      titleHighlight="That Converts"
      description="Tareez Tech is a trusted web design company in Pakistan delivering beautiful, mobile-first, conversion-focused website designs for businesses in Lahore, Karachi, Islamabad, and across Pakistan — at affordable rates."
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Web Development', href: '/services/web-development-lahore' },
        { label: 'Web Design Pakistan' },
      ]}
      ctaText="Get a Free Design Quote"
    />

    <section className="sp-section-alt">
      <div className="sp-container">
        <motion.div className="sp-section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="sp-section-label">Design Services</span>
          <h2 className="sp-section-title">Web Design Services for Pakistani Businesses</h2>
          <p className="sp-section-desc">From corporate websites to ecommerce stores, we design digital experiences that look stunning and perform brilliantly.</p>
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
            <h2>Why Choose Our Web Design Company in Pakistan?</h2>
            <p>Pakistan website design has evolved dramatically — today's customers judge your credibility in 0.05 seconds based on how your website looks. Our web designers in Pakistan create sites that make that first impression count, while ensuring the experience keeps users engaged and guides them to enquire or buy.</p>
            <p>We specialise in affordable web design services in Pakistan without compromising on quality. Every project is unique — we do not use templates, ensuring your brand stands out from competitors.</p>
          </motion.div>
          <motion.ul className="sp-feature-list" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            {['Bespoke designs — no Wix or template-based shortcuts', 'Pakistani design sensibility with international quality standards', 'Full Urdu/English bilingual support if required', 'Conversion rate optimisation built into every layout', 'Responsive on every screen size from mobile to 4K desktop', 'Dedicated revision rounds until you love the design'].map((f, i) => (
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
          <h2 className="sp-section-title">Our Web Design Process in Pakistan</h2>
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

    <ServiceFAQ faqs={faqs} title="Web Design Pakistan — FAQs" />

    <RelatedServices title="Complete the Picture" services={relatedServices} />

    <ServiceCTA
      title="Let's Design Your Perfect Website"
      description="Get a free design consultation and see how Tareez Tech can transform your online presence across Pakistan."
      ctaText="Request a Free Design Consult"
    />
  </>
);

export default WebDesignPakistan;
