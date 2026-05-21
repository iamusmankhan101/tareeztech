import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ServiceCTA = ({ 
  title = 'Ready to Get Started?', 
  description = 'Partner with Tareez Tech to transform your digital presence. Get a free consultation today.',
  ctaText = 'Book a Discovery Call',
  ctaHref = '/#contact'
}) => {
  return (
    <section className="sp-cta-section">
      <div className="sp-container">
        <motion.div
          className="sp-cta-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="sp-cta-glow" />
          <h2 className="sp-cta-title">{title}</h2>
          <p className="sp-cta-desc">{description}</p>
          <a href={ctaHref} className="sp-cta-btn">
            {ctaText} <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCTA;
