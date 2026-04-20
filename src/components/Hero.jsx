import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import DiscoveryPopup from './DiscoveryPopup';

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);
  const btnRef = useRef(null);

  const portal = showPopup
    ? createPortal(
        <AnimatePresence>
          <DiscoveryPopup onClose={() => setShowPopup(false)} />
        </AnimatePresence>,
        document.body
      )
    : null;

  return (
    <>
      <section className="relative hero-section flex flex-col items-center justify-center pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-48" style={{ overflow: 'hidden', background: '#000' }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: 'url(/b3c1e4e7f4be94a1ce2d01d397afaa87.jpg)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          zIndex: 0,
        }} />
        {/* Dark overlay */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(13,16,211,0.12) 50%, rgba(0,0,0,0.75) 100%)'
        }} />

        <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#00f2ff] text-sm font-medium mb-12 mt-16 tracking-wide uppercase"
          >
            Your Gateway to Creative Excellence
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-heading text-4xl font-bold mb-8 tracking-tight leading-1-1"
          >
            Your On-Demand <br />
            <span className="serif-italic">Creative</span> Agency
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We are a design and development studio dedicated to crafting <br className="hidden md:block" />
            innovative digital solutions that shape the future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button
              ref={btnRef}
              onClick={() => setShowPopup(true)}
              className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all text-center cursor-pointer border-none"
            >
              Book a discovery call
            </button>
          </motion.div>
        </div>
      </section>

      {portal}
    </>
  );
};

export default Hero;
