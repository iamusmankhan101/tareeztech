import { motion } from 'framer-motion';
import { Search, TrendingUp, FileText, Link2, BarChart2, CheckCircle, Globe, Share2 } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import ServicePageHero from '../../components/ServicePageHero';
import ServiceFAQ from '../../components/ServiceFAQ';
import ServiceCTA from '../../components/ServiceCTA';
import RelatedServices from '../../components/RelatedServices';

const services = [
  { icon: Search, title: 'Technical SEO Audit', desc: 'Full crawl analysis, Core Web Vitals, site speed, structured data, and mobile-first indexing fixes.' },
  { icon: FileText, title: 'On-Page SEO Optimisation', desc: 'Keyword-optimised titles, meta descriptions, heading structure, content depth, and internal linking.' },
  { icon: Link2, title: 'Link Building & Off-Page SEO', desc: 'High-authority backlinks from relevant Pakistani and international domains to build domain authority.' },
  { icon: TrendingUp, title: 'Local SEO Lahore', desc: 'Google Business Profile optimisation, local citations, and maps ranking so customers find you first.' },
  { icon: BarChart2, title: 'Keyword Research & Strategy', desc: 'In-depth research to find the exact terms your customers search — including low-competition, high-intent keywords.' },
  { icon: Globe, title: 'E-commerce SEO', desc: 'Product page optimisation, category structure, schema markup, and conversion-focused SEO for online stores.' },
];

const stats = [
  { number: '1st', label: 'Page Rankings Achieved' },
  { number: '200%', label: 'Avg. Organic Traffic Growth' },
  { number: '50+', label: 'SEO Projects Completed' },
  { number: '6mo', label: 'Avg. Time to Page 1' },
];

const process = [
  { title: 'SEO Audit', desc: 'A comprehensive technical, on-page, and off-page audit identifies exactly what is holding your rankings back.' },
  { title: 'Keyword Mapping', desc: 'We map target keywords to each page based on search intent, competition, and commercial value.' },
  { title: 'Optimisation Sprint', desc: 'Technical fixes, content improvements, and link acquisition campaigns are executed in prioritised sprints.' },
  { title: 'Monitor & Scale', desc: 'Rankings, traffic, and conversions are tracked weekly. Winning tactics are scaled; underperformers are replaced.' },
];

const faqs = [
  { question: 'How do I choose the best SEO company in Lahore?', answer: 'Look for an agency that shows you real ranking data and case studies — not just promises. Tareez Tech provides full transparency: monthly reports with keyword positions, organic traffic, and business impact metrics so you always know where your investment stands.' },
  { question: 'How long does SEO take to show results?', answer: 'Most clients see noticeable improvements in rankings within 3 months and significant organic traffic growth by month 6. Highly competitive keywords in Lahore can take 6–12 months to reach page 1, but the compound long-term value far exceeds paid advertising.' },
  { question: 'Do you offer local SEO services for Lahore businesses?', answer: 'Yes. Local SEO is one of our core specialities. We optimise your Google Business Profile, build consistent local citations, and target geo-specific keywords to capture customers searching near your location.' },
  { question: 'What is included in your SEO services in Lahore?', answer: 'Our SEO packages include a full technical audit, on-page optimisation, keyword research, content recommendations, link building, local SEO, and monthly performance reporting. We offer flexible packages to suit startups and large enterprises alike.' },
  { question: 'Can SEO work alongside digital marketing in Lahore?', answer: 'Absolutely — and it works even better together. SEO builds sustainable long-term traffic while PPC and social media marketing deliver immediate results. Our integrated approach ensures both channels reinforce each other.' },
];

const relatedServices = [
  { icon: TrendingUp, title: 'Digital Marketing Lahore', description: 'Full-service digital marketing to grow your brand across all online channels.', href: '/services/digital-marketing-lahore' },
  { icon: Share2, title: 'Social Media Marketing Pakistan', description: 'Build your audience and generate leads through strategic social media campaigns.', href: '/services/social-media-marketing-pakistan' },
  { icon: Globe, title: 'Web Development Lahore', description: 'A fast, SEO-ready website is the foundation of every successful digital strategy.', href: '/services/web-development-lahore' },
];

const SeoServicesLahore = () => (
  <>
    <SEOHead
      title="SEO Services Lahore | Best SEO Company"
      description="Rank on page 1 with Tareez Tech's SEO services in Lahore. Expert on-page, off-page & local SEO by Pakistan's top SEO company. Free audit available."
      canonicalUrl="https://tareeztech.com/services/seo-services-lahore"
    />

    <ServicePageHero
      tagline="Best SEO Company in Lahore, Pakistan"
      title="SEO Services in Lahore"
      titleHighlight="That Get You to Page 1"
      description="Tareez Tech is one of the best SEO companies in Lahore. Our dedicated SEO experts in Pakistan use proven technical, on-page, and off-page strategies to drive sustainable organic growth for your business."
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Digital Marketing', href: '/services/digital-marketing-lahore' },
        { label: 'SEO Services Lahore' },
      ]}
      ctaText="Get a Free SEO Audit"
    />

    <section className="sp-section-alt">
      <div className="sp-container">
        <motion.div className="sp-section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="sp-section-label">SEO Services</span>
          <h2 className="sp-section-title">Complete SEO Solutions for Lahore Businesses</h2>
          <p className="sp-section-desc">From technical fixes to content strategy, our SEO services in Lahore cover every factor that Google uses to rank websites.</p>
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
            <h2>Why Choose Tareez Tech as Your SEO Expert in Lahore?</h2>
            <p>SEO is not guesswork — it is a science. Our SEO experts in Pakistan stay ahead of every algorithm update and apply only white-hat techniques that build lasting authority for your website. We have helped businesses in retail, healthcare, real estate, and ecommerce reach page 1 on Google Pakistan.</p>
            <p>Unlike agencies that lock you into black-box contracts, we provide complete transparency: you see every backlink built, every keyword tracked, and every ranking gained.</p>
          </motion.div>
          <motion.ul className="sp-feature-list" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            {['White-hat SEO — no shortcuts that get your site penalised', 'Google Analytics 4 & Search Console integrated tracking', 'Competitor gap analysis to find your fastest ranking opportunities', 'Content strategy aligned with search intent, not just keywords', 'Local SEO for Lahore, Karachi, Islamabad, and beyond', 'Monthly ranking & traffic reports with plain-English insights'].map((f, i) => (
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
          <h2 className="sp-section-title">How We Deliver SEO Results in Lahore</h2>
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
        <motion.div className="sp-section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="sp-section-label">In Depth</span>
          <h2 className="sp-section-title">SEO Services in Lahore — What You Need to Know</h2>
        </motion.div>
        <div className="sp-content-block">
          <h3>What Is SEO and Why Does It Matter for Pakistani Businesses?</h3>
          <p>Search Engine Optimisation (SEO) is the process of improving your website so it appears at the top of Google when potential customers search for your products or services. With over 130 million internet users in Pakistan, ranking on page 1 can transform your business — delivering a steady stream of targeted, free traffic without ongoing ad spend. Unlike paid ads that stop the moment your budget runs out, SEO builds lasting authority that compounds over time.</p>
          <h3>Local SEO in Lahore — Getting Found by Nearby Customers</h3>
          <p>Local SEO targets customers searching for businesses in a specific city or area. For businesses in Lahore, this means appearing when someone types "web design company Lahore" or "best digital marketing agency near me." We optimise your Google Business Profile, build consistent local citations across Pakistani directories, and target geo-specific keywords that drive foot traffic and qualified local leads directly to your business.</p>
          <h3>Technical SEO vs On-Page SEO — What Your Website Needs</h3>
          <p>Technical SEO fixes the issues that prevent Google from crawling and indexing your site correctly — slow load times, broken links, duplicate content, and mobile usability problems. On-page SEO improves the content and structure of each individual page — headings, keywords, internal links, and meta data. Both layers work together: a technically perfect site with weak content will not rank, and great content on a broken site will not either. Effective <a href="/services/digital-marketing-lahore">digital marketing in Lahore</a> always begins with solid technical and on-page SEO foundations.</p>
          <h3>How Much Do SEO Services Cost in Pakistan?</h3>
          <p>SEO pricing in Pakistan varies by scope and competition level. Basic local SEO packages start from PKR 35,000 per month, covering Google Business Profile optimisation, on-page fixes, and local citation building. Competitive national or ecommerce SEO campaigns with active link building and content production range from PKR 60,000–150,000 per month. We provide transparent, itemised proposals after a free audit — no lock-in contracts, no hidden fees.</p>
        </div>
      </div>
    </section>

    <ServiceFAQ faqs={faqs} title="SEO Services Lahore — FAQs" />

    <RelatedServices title="Explore Our Other Digital Services" services={relatedServices} />

    <ServiceCTA
      title="Get a Free SEO Audit for Your Website"
      description="Find out exactly why your competitors outrank you — and what it will take to overtake them. Free, no-obligation SEO audit from Lahore's top SEO experts."
      ctaText="Claim Your Free SEO Audit"
    />
  </>
);

export default SeoServicesLahore;
