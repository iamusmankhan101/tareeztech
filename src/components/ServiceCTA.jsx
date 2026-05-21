import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { ArrowUpRight } from 'lucide-react';
import DiscoveryPopup from './DiscoveryPopup';

const ServiceCTA = ({
  title = 'Ready to Get Started?',
  description = 'Partner with Tareez Tech to transform your digital presence. Get a free consultation today.',
  ctaText = 'Book a Discovery Call',
}) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
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
            <button onClick={() => setShowPopup(true)} className="sp-cta-btn">
              {ctaText} <ArrowUpRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {showPopup && createPortal(
        <AnimatePresence>
          <DiscoveryPopup onClose={() => setShowPopup(false)} />
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default ServiceCTA;
