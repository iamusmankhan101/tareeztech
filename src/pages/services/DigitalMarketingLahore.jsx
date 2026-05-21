import { motion } from 'framer-motion';
import { BarChart2, Search, Share2, ShoppingCart, Target, TrendingUp, CheckCircle, Globe, Palette } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import ServicePageHero from '../../components/ServicePageHero';
import ServiceFAQ from '../../components/ServiceFAQ';
import ServiceCTA from '../../components/ServiceCTA';
import RelatedServices from '../../components/RelatedServices';

const services = [
  { icon: Search, title: 'SEO Services Lahore', desc: 'Rank higher on Google with proven on-page, off-page, and technical SEO strategies tailored for Pakistani markets.' },
  { icon: Share2, title: 'Social Media Marketing', desc: 'Build brand authority and drive engagement across Facebook, Instagram, LinkedIn, and TikTok.' },
  { icon: Target, title: 'PPC & Paid Advertising', desc: 'ROI-focused Google Ads and Meta Ads campaigns that generate qualified leads and conversions.' },
  { icon: TrendingUp, title: 'Content Marketing', desc: 'Strategically crafted blogs, digital marketing posters, and copy that attracts and converts your target audience.' },
  { icon: BarChart2, title: 'Analytics & Reporting', desc: 'Clear, data-driven reports that show exactly how your digital marketing investment is performing.' },
  { icon: Globe, title: 'Email Marketing', desc: 'Automated email sequences and newsletters that nurture leads and retain customers at scale.' },
];

const stats = [
  { number: '150+', label: 'Campaigns Delivered' },
  { number: '3x', label: 'Avg. ROI Increase' },
  { number: '98%', label: 'Client Retention Rate' },
  { number: '5+', label: 'Years in Lahore' },
];

const process = [
  { title: 'Discovery & Audit', desc: 'We analyse your current digital presence, competitors, and target audience to identify the biggest growth opportunities.' },
  { title: 'Strategy & Planning', desc: 'A bespoke digital marketing services plan is built around your goals, budget, and market — no cookie-cutter templates.' },
  { title: 'Execution & Optimisation', desc: 'Campaigns go live and are continuously optimised using real-time data so every rupee works harder.' },
  { title: 'Reporting & Growth', desc: 'Monthly performance reports with clear KPIs, plus proactive recommendations to scale what is working.' },
];

const faqs = [
  { question: 'What makes Tareez Tech one of the top digital marketing agencies in Lahore?', answer: 'We combine local market expertise with global best practices. Our team of digital marketing experts in Pakistan has delivered measurable results for 150+ businesses across retail, real estate, healthcare, and ecommerce — focusing on ROI, not vanity metrics.' },
  { question: 'What is a digital marketing agency and what services do you offer?', answer: 'A digital marketing agency helps businesses grow their online presence through SEO, social media marketing, PPC advertising, content creation, and analytics. Our full digital marketing services list includes all of these plus email marketing, conversion rate optimisation, and ecommerce marketing.' },
  { question: 'How long before I see results from digital marketing in Lahore?', answer: 'Paid campaigns (PPC, Meta Ads) can generate leads within days. SEO typically shows meaningful organic ranking improvements within 3–6 months. We set realistic timelines upfront and track progress monthly.' },
  { question: 'Do you offer remote digital marketing services across Pakistan?', answer: 'Yes. While we are based in Lahore, we serve clients in Karachi, Islamabad, Peshawar, and internationally. All reporting and communication is handled remotely with complete transparency.' },
  { question: 'What is the scope of digital marketing in Pakistan?', answer: 'Pakistan\'s internet user base exceeds 130 million and is growing rapidly. Digital marketing now rivals traditional advertising for reach and far exceeds it for measurability and ROI — making it an essential investment for any business.' },
  { question: 'Can digital marketing work for builders and architects in Pakistan?', answer: 'Absolutely. We have niche experience running digital marketing for builders, architects, and real-estate developers — from lead generation to brand positioning in premium markets.' },
];

const relatedServices = [
  { icon: Search, title: 'SEO Services Lahore', description: 'Dominate organic search results with expert on-page and off-page SEO strategies.', href: '/services/seo-services-lahore' },
  { icon: Share2, title: 'Social Media Marketing Pakistan', description: 'Grow your brand and community across every major social platform in Pakistan.', href: '/services/social-media-marketing-pakistan' },
  { icon: ShoppingCart, title: 'Ecommerce & Digital Marketing', description: 'End-to-end ecommerce marketing that turns visitors into repeat customers.', href: '/services/ecommerce-digital-marketing' },
];

const DigitalMarketingLahore = () => (
  <>
    <SEOHead
      title="Digital Marketing Agency in Lahore"
      description="Lahore's top digital marketing agency. Tareez Tech offers SEO, PPC, social media & content marketing that drive real leads and measurable ROI for businesses across Pakistan."
      canonicalUrl="https://tareeztech.com/services/digital-marketing-lahore"
    />

    <ServicePageHero
      tagline="Top Digital Marketing Services Pakistan"
      title="Digital Marketing Agency in Lahore"
      titleHighlight="That Delivers Real ROI"
      description="As one of the top digital marketing agencies in Lahore, Tareez Tech delivers SEO, social media marketing, PPC, and content strategies that generate real leads and measurable ROI for businesses across Pakistan."
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/#services' },
        { label: 'Digital Marketing Lahore' },
      ]}
      ctaText="Get a Free Strategy Call"
    />

    {/* Services Grid */}
    <section className="sp-section-alt">
      <div className="sp-container">
        <motion.div className="sp-section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="sp-section-label">What We Offer</span>
          <h2 className="sp-section-title">Full Digital Marketing Services List</h2>
          <p className="sp-section-desc">Everything your business needs to dominate digital channels in Pakistan — from organic search to paid social.</p>
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

    {/* Stats */}
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

    {/* Why Choose Us */}
    <section className="sp-section-alt">
      <div className="sp-container">
        <div className="sp-two-col">
          <motion.div className="sp-two-col-text" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2>Why Businesses Choose Our Digital Marketing Agency in Lahore</h2>
            <p>There are dozens of digital marketing agencies in Lahore, but very few with a team of dedicated digital marketing experts in Pakistan who combine creative thinking with data rigour. We don't just run campaigns — we build long-term digital growth engines for your brand.</p>
            <p>Whether you are a startup exploring the advantages of digital marketing for the first time, or an established company looking to scale, we tailor every strategy to your market, audience, and budget.</p>
          </motion.div>
          <motion.ul className="sp-feature-list" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            {['Dedicated account manager for every client', 'ROI-first approach — we track revenue, not just clicks', 'Local Lahore expertise with global digital standards', 'Transparent monthly reporting with no hidden fees', 'Proven track record across 10+ industries in Pakistan', 'Full-funnel digital marketing: awareness to conversion'].map((f, i) => (
              <li key={i} className="sp-feature-item"><CheckCircle size={18} />{f}</li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="sp-section">
      <div className="sp-container">
        <motion.div className="sp-section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="sp-section-label">Our Process</span>
          <h2 className="sp-section-title">How We Deliver Digital Marketing Results</h2>
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

    {/* Content Block */}
    <section className="sp-section-alt">
      <div className="sp-container">
        <div className="sp-content-block">
          <h3>What Is a Digital Marketing Agency?</h3>
          <p>A digital marketing agency is a team of specialists that helps businesses grow their online presence, attract more customers, and increase revenue through digital channels. Unlike traditional advertising agencies, digital marketing agencies focus on measurable, data-driven strategies across search engines, social media, email, and paid advertising.</p>
          <h3>Digital Marketing Services in Lahore — What to Expect</h3>
          <p>When you partner with Tareez Tech, you get access to a full digital marketing services list under one roof. From <a href="/services/seo-services-lahore">SEO services in Lahore</a> that improve your organic rankings, to <a href="/services/social-media-marketing-pakistan">social media marketing in Pakistan</a> that builds your brand community, to <a href="/services/ecommerce-digital-marketing">ecommerce and digital marketing</a> solutions that grow your online store — we cover it all.</p>
          <h3>Digital Marketing for Builders, Architects &amp; Niche Industries</h3>
          <p>We have specific experience with digital marketing for builders, architects, healthcare providers, and charitable organisations. Each industry has unique buyer journeys and compliance considerations — our team understands the nuances that generic agencies miss.</p>
          <h3>Advantages of Digital Marketing for Pakistani Businesses</h3>
          <ul>
            <li>Reach millions of internet users across Pakistan at a fraction of traditional media costs</li>
            <li>Track every rupee of ad spend with precise analytics and attribution</li>
            <li>Target your exact audience by location, age, interests, and purchase behaviour</li>
            <li>Build long-term organic traffic through SEO that compounds over time</li>
            <li>Compete with larger brands through smart, targeted digital strategies</li>
          </ul>
        </div>
      </div>
    </section>

    <ServiceFAQ faqs={faqs} title="Digital Marketing Agency Lahore — FAQs" />

    <RelatedServices title="Related Digital Marketing Services" services={relatedServices} />

    <ServiceCTA
      title="Ready to Grow with Pakistan's Top Digital Marketing Agency?"
      description="Book a free discovery call with our Lahore-based digital marketing experts and get a custom strategy for your business."
      ctaText="Book a Free Strategy Call"
    />
  </>
);

export default DigitalMarketingLahore;
