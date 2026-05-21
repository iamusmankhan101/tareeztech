import { motion } from 'framer-motion';
import Breadcrumbs from './Breadcrumbs';

const ServicePageHero = ({ tagline, title, titleHighlight, description, breadcrumbs, ctaText = 'Get a Free Quote', ctaHref = '#contact' }) => {
  return (
    <section className="sp-hero">
      <div className="sp-hero-bg">
        <div className="sp-hero-gradient" />
        <div className="sp-hero-grid-pattern" />
      </div>
      
      <div className="sp-hero-content">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        
        <motion.span
          className="sp-hero-tagline"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {tagline}
        </motion.span>
        
        <motion.h1
          className="sp-hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {title}{' '}
          {titleHighlight && <span className="sp-hero-highlight">{titleHighlight}</span>}
        </motion.h1>
        
        <motion.p
          className="sp-hero-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {description}
        </motion.p>
        
        <motion.div
          className="sp-hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <a href={ctaHref} className="sp-hero-btn-primary">{ctaText}</a>
          <a href="/#work" className="sp-hero-btn-secondary">View Our Work</a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePageHero;
