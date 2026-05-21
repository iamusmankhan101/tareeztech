import { motion } from 'framer-motion';
import { ShoppingCart, TrendingUp, Target, Search, Share2, BarChart2, CheckCircle, Globe, Palette } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import ServicePageHero from '../../components/ServicePageHero';
import ServiceFAQ from '../../components/ServiceFAQ';
import ServiceCTA from '../../components/ServiceCTA';
import RelatedServices from '../../components/RelatedServices';

const services = [
  { icon: ShoppingCart, title: 'Ecommerce Website Development', desc: 'High-converting online stores on WooCommerce, Shopify, or custom platforms with local payment gateway integration.' },
  { icon: Search, title: 'Ecommerce SEO', desc: 'Product page optimisation, category structure, schema markup, and content strategies that drive organic buyers to your store.' },
  { icon: Target, title: 'Google Shopping & PPC', desc: 'Product listing ads and Google Shopping campaigns that put your products in front of buyers at the moment of purchase intent.' },
  { icon: Share2, title: 'Social Commerce', desc: 'Facebook and Instagram shop setup, shoppable posts, and social ad campaigns that turn social browsers into buyers.' },
  { icon: TrendingUp, title: 'Conversion Rate Optimisation', desc: 'Cart abandonment reduction, checkout UX improvements, and A/B testing to maximise revenue from existing traffic.' },
  { icon: BarChart2, title: 'Ecommerce Analytics', desc: 'GA4 ecommerce tracking, revenue attribution, and monthly performance reporting to guide every decision with data.' },
];

const stats = [
  { number: '35+', label: 'Ecommerce Stores Launched' },
  { number: '4x', label: 'Avg. ROAS on Ad Campaigns' },
  { number: '28%', label: 'Avg. Conversion Rate Lift' },
  { number: 'PKR50M+', label: 'Online Revenue Generated' },
];

const process = [
  { title: 'Store Audit & Strategy', desc: 'We audit your existing store (or plan a new one) and build an ecommerce marketing strategy covering SEO, paid, and social.' },
  { title: 'Store Build & Optimise', desc: 'The store is built or optimised with fast loading, mobile-first design, and conversion-focused product pages.' },
  { title: 'Launch Campaigns', desc: 'SEO, Google Shopping, and social campaigns go live with precise audience targeting and daily budget monitoring.' },
  { title: 'Scale What Works', desc: 'Monthly reporting identifies top-performing products and channels. Budget is shifted to scale what drives the best ROAS.' },
];

const faqs = [
  { question: 'What ecommerce platforms do you work with in Pakistan?', answer: 'We primarily work with WooCommerce (WordPress), Shopify, and fully custom ecommerce solutions built with React/Next.js. For most Pakistani businesses, WooCommerce with local payment gateways offers the best balance of flexibility and cost. We advise on the right platform based on your product catalogue, budget, and growth plans.' },
  { question: 'Which payment gateways can you integrate for ecommerce in Pakistan?', answer: 'We integrate JazzCash, EasyPaisa, Meezan Bank, HBL Pay, Bank Alfalah, and international gateways like Stripe and PayPal. We also handle the merchant account application and technical API integration for each gateway.' },
  { question: 'How do you market an ecommerce store in Pakistan?', answer: 'Effective ecommerce and digital marketing in Pakistan combines SEO for organic traffic, Google Shopping ads for purchase-intent buyers, social media ads on Facebook and Instagram for brand awareness, and email marketing for repeat purchases. We build an integrated strategy across all channels to maximise your store\'s revenue.' },
  { question: 'Can you help an existing ecommerce store that is not getting sales?', answer: 'Yes — this is one of our most common engagements. We start with a conversion rate and traffic audit to identify the bottlenecks, then fix them systematically: technical SEO issues, poor product photography, slow load times, unclear calls-to-action, or underperforming ad campaigns.' },
  { question: 'Do you offer dropshipping setup and digital marketing in Pakistan?', answer: 'We help set up dropshipping stores with local and international suppliers, product sourcing strategies, and the full digital marketing stack to drive traffic and sales. We can advise on viable niches for the Pakistani market and set up everything from supplier agreements to Facebook ad funnels.' },
];

const relatedServices = [
  { icon: TrendingUp, title: 'Digital Marketing Lahore', description: 'Full-funnel digital marketing services to grow your brand and online sales across Pakistan.', href: '/services/digital-marketing-lahore' },
  { icon: Search, title: 'SEO Services Lahore', description: 'Organic search strategies that bring buyers to your ecommerce store without ad spend.', href: '/services/seo-services-lahore' },
  { icon: Globe, title: 'Web Development Lahore', description: 'Fast, conversion-optimised ecommerce website development for Pakistani online stores.', href: '/services/web-development-lahore' },
];

const EcommerceDigitalMarketing = () => (
  <>
    <SEOHead
      title="Ecommerce & Digital Marketing Services Pakistan | Online Store Growth Lahore"
      description="Grow your online store with Tareez Tech's ecommerce and digital marketing services in Pakistan. WooCommerce development, SEO, Google Shopping, social commerce, and conversion optimisation."
      canonicalUrl="https://tareeztech.com/services/ecommerce-digital-marketing"
    />

    <ServicePageHero
      tagline="Ecommerce & Digital Marketing"
      title="Grow Your Online Store with"
      titleHighlight="Integrated Ecommerce Marketing"
      description="Tareez Tech combines ecommerce development and digital marketing to help Pakistani online stores attract more buyers, convert more orders, and build lasting customer loyalty — all through one integrated strategy."
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Digital Marketing', href: '/services/digital-marketing-lahore' },
        { label: 'Ecommerce & Digital Marketing' },
      ]}
      ctaText="Grow My Ecommerce Store"
    />

    <section className="sp-section-alt">
      <div className="sp-container">
        <motion.div className="sp-section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="sp-section-label">Ecommerce Services</span>
          <h2 className="sp-section-title">Ecommerce & Digital Marketing Services</h2>
          <p className="sp-section-desc">Everything an online store needs to attract, convert, and retain customers in Pakistan's growing ecommerce market.</p>
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
            <h2>Why Ecommerce and Digital Marketing Must Work Together</h2>
            <p>Many Pakistani businesses make the mistake of launching an ecommerce store without a marketing plan — or running digital marketing without a conversion-optimised store. Either approach wastes money. True growth comes from combining both: a store built to convert, and marketing that sends the right buyers to it.</p>
            <p>Our integrated ecommerce and digital marketing approach means our development team and marketing team collaborate from day one, ensuring every element — from page load speed to ad targeting — works together to maximise your revenue.</p>
          </motion.div>
          <motion.ul className="sp-feature-list" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            {['End-to-end: store build AND traffic AND conversion optimisation', 'Local payment gateways (JazzCash, EasyPaisa) fully integrated', 'Google Shopping campaigns with smart bidding strategies', 'Retargeting ads that recover abandoned carts', 'Email sequences for post-purchase upsells and repeat orders', 'Monthly ROAS and revenue reporting with clear attribution'].map((f, i) => (
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
          <h2 className="sp-section-title">Our Ecommerce Growth Process</h2>
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

    <ServiceFAQ faqs={faqs} title="Ecommerce & Digital Marketing — FAQs" />

    <RelatedServices title="Related Services" services={relatedServices} />

    <ServiceCTA
      title="Ready to Grow Your Ecommerce Business in Pakistan?"
      description="Get a free ecommerce audit and find out exactly how to increase your online store's traffic, conversions, and revenue."
      ctaText="Get a Free Ecommerce Audit"
    />
  </>
);

export default EcommerceDigitalMarketing;
