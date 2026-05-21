import { motion } from 'framer-motion';
import { Share2, Users, Heart, Camera, BarChart2, MessageSquare, CheckCircle, TrendingUp, Globe } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import ServicePageHero from '../../components/ServicePageHero';
import ServiceFAQ from '../../components/ServiceFAQ';
import ServiceCTA from '../../components/ServiceCTA';
import RelatedServices from '../../components/RelatedServices';

const services = [
  { icon: Share2, title: 'Social Media Strategy', desc: 'Platform-specific content strategies for Facebook, Instagram, LinkedIn, TikTok, and Twitter — aligned to your brand and business goals.' },
  { icon: Camera, title: 'Content Creation & Design', desc: 'Scroll-stopping visuals, reels, stories, and digital marketing posters crafted by our in-house creative team.' },
  { icon: Users, title: 'Community Management', desc: '24/7 monitoring of comments, DMs, and mentions to keep your audience engaged and your brand reputation intact.' },
  { icon: Heart, title: 'Influencer Marketing', desc: 'Partnerships with relevant Pakistani micro and macro influencers to expand your brand reach authentically.' },
  { icon: BarChart2, title: 'Paid Social Advertising', desc: 'Hyper-targeted Facebook and Instagram ad campaigns with precision audience targeting for maximum ROAS.' },
  { icon: MessageSquare, title: 'Social Media Reporting', desc: 'Detailed monthly reports tracking follower growth, engagement rate, reach, and conversion from social channels.' },
];

const stats = [
  { number: '2M+', label: 'Social Impressions Delivered' },
  { number: '40%', label: 'Avg. Engagement Increase' },
  { number: '80+', label: 'Brands Managed' },
  { number: '5★', label: 'Average Client Rating' },
];

const process = [
  { title: 'Brand Discovery', desc: 'We deep-dive into your brand voice, target audience, and competitors to build a social identity that stands out.' },
  { title: 'Content Calendar', desc: 'A 30-day content calendar is created with platform-specific posts, stories, and reels planned in advance.' },
  { title: 'Publish & Engage', desc: 'Content goes live at optimal times. Our team engages with your audience in real time to build genuine community.' },
  { title: 'Analyse & Refine', desc: 'Monthly analytics reviews identify top-performing content. We double down on what works and refine what doesn\'t.' },
];

const faqs = [
  { question: 'Which social media platforms should my business be on in Pakistan?', answer: 'Facebook and Instagram dominate in Pakistan for B2C brands. LinkedIn is essential for B2B. TikTok is rapidly growing for younger audiences. We recommend a platform mix based on your audience demographics and business goals — not just what is trendy.' },
  { question: 'How is Tareez Tech different from other social media agencies in Pakistan?', answer: 'We are a full social media marketing agency in Pakistan that combines strategy, creative production, community management, and paid advertising under one roof. Most agencies offer only one or two of these. We also integrate social media with your broader digital marketing strategy for compounded results.' },
  { question: 'Do you create the social media content or do we provide it?', answer: 'We handle everything — copywriting, graphic design, video editing, and scheduling. You simply review and approve the content calendar each month. If you prefer to supply your own photos or videos, we can work with those too.' },
  { question: 'Can social media marketing work for small businesses in Lahore?', answer: 'Absolutely. Social media is one of the most cost-effective channels for small businesses. With smart targeting, even a modest budget on Facebook or Instagram can reach thousands of potential customers in Lahore or across Pakistan.' },
  { question: 'Do you run paid social media ads as well as organic content?', answer: 'Yes. We offer both organic social media management and paid social advertising. For fastest results, we recommend a combination: organic content builds brand trust while paid ads drive immediate traffic and conversions.' },
];

const relatedServices = [
  { icon: TrendingUp, title: 'Digital Marketing Lahore', description: 'Complete digital marketing services including SEO, PPC, and content strategy.', href: '/services/digital-marketing-lahore' },
  { icon: Globe, title: 'SEO Services Lahore', description: 'Rank higher on Google with expert SEO strategies tailored for Pakistani markets.', href: '/services/seo-services-lahore' },
  { icon: Camera, title: 'Graphic Design & Video Editing', description: 'Professional visual content and video production for your brand and social channels.', href: '/services/graphic-design-video-editing' },
];

const SocialMediaMarketing = () => (
  <>
    <SEOHead
      title="Social Media Marketing Agency Pakistan"
      description="Pakistan's leading social media marketing agency. Tareez Tech manages Facebook, Instagram & TikTok to grow your brand, drive real engagement and turn followers into customers."
      canonicalUrl="https://tareeztech.com/services/social-media-marketing-pakistan"
    />

    <ServicePageHero
      tagline="Social Media Agency in Pakistan"
      title="Social Media Marketing Agency"
      titleHighlight="in Pakistan"
      description="Tareez Tech is a results-driven social media agency in Pakistan. We create compelling content, manage your communities, and run targeted paid campaigns to turn followers into loyal customers."
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Digital Marketing', href: '/services/digital-marketing-lahore' },
        { label: 'Social Media Marketing Pakistan' },
      ]}
      ctaText="Get a Free Social Audit"
    />

    <section className="sp-section-alt">
      <div className="sp-container">
        <motion.div className="sp-section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="sp-section-label">Our Services</span>
          <h2 className="sp-section-title">Social Media Marketing Services in Pakistan</h2>
          <p className="sp-section-desc">Everything you need to build a powerful social presence — from strategy and creative to ads and analytics.</p>
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
            <h2>Pakistan's Social Media Agency That Delivers Real Results</h2>
            <p>With over 50 million social media users in Pakistan, your audience is already on these platforms. The question is whether your brand is showing up for them. Our social media marketing agency in Pakistan specialises in creating content that resonates with Pakistani audiences while maintaining global quality standards.</p>
            <p>We do not just post content — we build genuine brand communities that convert to loyal customers and brand advocates.</p>
          </motion.div>
          <motion.ul className="sp-feature-list" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            {['Platform-native content — not the same post on every channel', 'In-house designers who understand Pakistani aesthetics and trends', 'Dedicated community manager for real-time engagement', 'Audience targeting based on detailed demographic research', 'Integration with SEO and email marketing for unified strategy', 'Crisis management and reputation monitoring included'].map((f, i) => (
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
          <h2 className="sp-section-title">How We Manage Your Social Media</h2>
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

    <ServiceFAQ faqs={faqs} title="Social Media Marketing Pakistan — FAQs" />

    <RelatedServices title="Related Digital Services" services={relatedServices} />

    <ServiceCTA
      title="Ready to Grow Your Brand on Social Media?"
      description="Get a free social media audit and custom strategy from Pakistan's leading social media marketing agency."
      ctaText="Get Your Free Social Audit"
    />
  </>
);

export default SocialMediaMarketing;
