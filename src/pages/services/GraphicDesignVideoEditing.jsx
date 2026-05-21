import { motion } from 'framer-motion';
import { Palette, Film, Image, Layers, Monitor, Camera, CheckCircle, Share2, TrendingUp } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import ServicePageHero from '../../components/ServicePageHero';
import ServiceFAQ from '../../components/ServiceFAQ';
import ServiceCTA from '../../components/ServiceCTA';
import RelatedServices from '../../components/RelatedServices';

const services = [
  { icon: Palette, title: 'Brand Identity Design', desc: 'Logo, colour palette, typography, and brand guidelines that give your business a consistent, professional identity.' },
  { icon: Image, title: 'Digital Marketing Poster Design', desc: 'Eye-catching social media graphics, digital marketing posters, and promotional banners that stop the scroll.' },
  { icon: Film, title: 'Video Editing & Production', desc: 'Professional video editing for social media reels, YouTube content, product demos, and corporate videos.' },
  { icon: Monitor, title: 'Presentation Design', desc: 'Polished pitch decks, investor presentations, and corporate slide decks that communicate your message with impact.' },
  { icon: Layers, title: 'Infographic Design', desc: 'Data visualisation and infographics that make complex information easy to understand and shareable.' },
  { icon: Camera, title: 'Social Media Content Packs', desc: 'Monthly packs of ready-to-post graphics, stories, reels, and banners tailored to your brand and calendar.' },
];

const stats = [
  { number: '500+', label: 'Creative Assets Delivered' },
  { number: '100+', label: 'Brands Designed For' },
  { number: '48hr', label: 'Standard Turnaround' },
  { number: '5★', label: 'Creative Satisfaction Rating' },
];

const process = [
  { title: 'Creative Brief', desc: 'We capture your brand personality, target audience, visual preferences, and campaign goals before touching any design tool.' },
  { title: 'Concept Development', desc: 'Two or three distinct creative directions are developed for you to review — different styles, not just colour variations.' },
  { title: 'Design & Revisions', desc: 'Chosen concept is refined with your feedback in up to three revision rounds until it perfectly represents your brand.' },
  { title: 'Delivery', desc: 'Final files delivered in all required formats — social-ready JPGs, editable source files, and print-ready PDFs.' },
];

const faqs = [
  { question: 'What graphic design services do you offer for digital marketing in Pakistan?', answer: 'We offer end-to-end creative services: brand identity design, social media graphics, digital marketing poster design, video editing, infographics, presentation design, and monthly content packs. Everything is created in-house by our team — no outsourcing.' },
  { question: 'Do you offer video editing services for social media in Lahore?', answer: 'Yes. We produce and edit short-form videos for Instagram Reels, TikTok, and YouTube Shorts, as well as long-form YouTube content and corporate videos. Our video team understands the pacing, subtitles, and hooks that perform well on Pakistani social media.' },
  { question: 'Can you create a digital marketing poster pack for my monthly campaigns?', answer: 'Absolutely. Our monthly content packs include a set number of social media posts, stories, and digital marketing posters tailored to your brand calendar and promotional schedule. This is one of our most popular services for businesses running active social media accounts.' },
  { question: 'How long does graphic design take?', answer: 'Logo and brand identity design takes 5–7 business days. Individual social media graphics are typically delivered within 48 hours. Monthly content packs are delivered 5 business days before the start of each month so you are always prepared in advance.' },
  { question: 'Do I own the design files after the project?', answer: 'Yes — you receive full ownership of all final design files, including editable source files (AI, PSD, Figma) and production-ready exports. We do not hold files hostage or charge licensing fees for your own brand assets.' },
];

const relatedServices = [
  { icon: Share2, title: 'Social Media Marketing Pakistan', description: 'Put your creative content to work with strategic social media management and paid ads.', href: '/services/social-media-marketing-pakistan' },
  { icon: TrendingUp, title: 'Digital Marketing Lahore', description: 'Amplify your creative assets with a full digital marketing strategy that drives real results.', href: '/services/digital-marketing-lahore' },
  { icon: Monitor, title: 'Web Design Pakistan', description: 'Extend your brand identity to a beautiful, conversion-focused website design.', href: '/services/web-design-pakistan' },
];

const GraphicDesignVideoEditing = () => (
  <>
    <SEOHead
      title="Graphic Design & Video Editing Lahore"
      description="Professional graphic design & video editing in Lahore. Social media graphics, digital marketing posters, brand identity & reels for businesses across Pakistan."
      canonicalUrl="https://tareeztech.com/services/graphic-design-video-editing"
    />

    <ServicePageHero
      tagline="Creative Agency in Lahore, Pakistan"
      title="Graphic Design & Video Editing"
      titleHighlight="Services in Lahore"
      description="Tareez Tech's creative team delivers professional graphic design and video editing services in Lahore — from brand identity and digital marketing posters to social media reels and corporate videos."
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/#services' },
        { label: 'Graphic Design & Video Editing' },
      ]}
      ctaText="Get a Creative Quote"
    />

    <section className="sp-section-alt">
      <div className="sp-container">
        <motion.div className="sp-section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="sp-section-label">Creative Services</span>
          <h2 className="sp-section-title">Graphic Design & Video Editing Services</h2>
          <p className="sp-section-desc">Every creative asset you need to build brand recognition and engage your audience — all produced in-house by our Lahore-based creative team.</p>
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
            <h2>Why Creative Matters in Digital Marketing</h2>
            <p>In Pakistan's crowded digital space, brands that invest in professional graphic design and video editing consistently outperform those that use amateur visuals. High-quality creative assets drive higher engagement rates, stronger brand recall, and better conversion rates across every digital channel.</p>
            <p>Our Lahore-based creative team combines artistic skill with marketing knowledge — every design is made not just to look good, but to achieve a specific business objective, whether that is driving followers, generating leads, or communicating your brand values.</p>
          </motion.div>
          <motion.ul className="sp-feature-list" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            {['In-house creative team — all work done locally, no outsourcing', 'Adobe Creative Suite: Photoshop, Illustrator, Premiere, After Effects', 'Marketing-informed design — every asset has a purpose and CTA', 'Brand consistency across every touchpoint and platform', 'Source files included — you own and can edit everything', 'Fast turnaround: most graphics delivered within 48 hours'].map((f, i) => (
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
          <h2 className="sp-section-title">Our Creative Process</h2>
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
          <h2 className="sp-section-title">Graphic Design & Video Editing in Pakistan — Key Considerations</h2>
        </motion.div>
        <div className="sp-content-block">
          <h3>Professional Graphic Design Services for Digital Marketing in Pakistan</h3>
          <p>In Pakistan's increasingly crowded digital marketplace, professional graphic design is no longer optional — it is a competitive necessity. Brands with consistent, high-quality visual identities generate significantly higher engagement rates and stronger customer trust than those with inconsistent amateur visuals. Our graphic design services in Lahore ensure every customer touchpoint communicates the same level of professionalism — from social media posts and digital marketing posters to email newsletters and printed materials.</p>
          <h3>Video Editing for Social Media — What Performs in Pakistan</h3>
          <p>Short-form video content dominates Pakistani social media feeds. Instagram Reels, TikTok videos, and YouTube Shorts consistently outperform static image posts by 2–3x in organic reach. The key elements of high-performing video in Pakistan: a compelling hook in the first 2 seconds, on-screen subtitles (most viewers watch without sound), culturally relevant visuals, and a clear call to action in the final frame. Our Lahore-based video editing team understands these platform-specific requirements and builds them into every video we produce.</p>
          <h3>Brand Identity Design — More Than Just a Logo</h3>
          <p>A brand identity is the complete visual language of your business — logo, colour palette, typography, icon style, imagery direction, and usage guidelines across all media. A professionally designed brand identity ensures consistency across your website, social channels, packaging, signage, and printed collateral. When every touchpoint looks consistent and professional, customers trust you more — and trust is the foundation of every conversion. We deliver complete brand identity packages including all editable source files, so you own every asset permanently.</p>
          <h3>Digital Marketing Poster Design — Stopping the Scroll</h3>
          <p>A social media post or digital marketing poster has under two seconds to capture attention in a moving feed. Effective poster design is not about decoration — it is about visual hierarchy: what the eye sees first, second, and third. Strong contrast, minimal text, one clear message, and a brand-consistent visual style are the hallmarks of high-performing digital content. Pair great design with a <a href="/services/social-media-marketing-pakistan">social media marketing strategy in Pakistan</a> and your content becomes a lead generation engine rather than just wall decoration.</p>
        </div>
      </div>
    </section>

    <ServiceFAQ faqs={faqs} title="Graphic Design & Video Editing — FAQs" />

    <RelatedServices title="Complete Your Digital Presence" services={relatedServices} />

    <ServiceCTA
      title="Ready to Elevate Your Brand Visuals?"
      description="Get a free creative consultation and see how professional graphic design and video editing can transform your brand presence across Pakistan."
      ctaText="Get a Free Creative Quote"
    />
  </>
);

export default GraphicDesignVideoEditing;
