import React from 'react';
import { motion } from 'framer-motion';

const AboutSummary = () => {
  const words = [
    { text: 'Tareez Tech', muted: false },
    { text: 'is the premier', muted: true },
    { text: 'Web Development Company in Lahore,', muted: false },
    { text: "bridging the gap between creativity and ROI. As a leading", muted: true },
    { text: 'Digital Marketing Expert in Pakistan,', muted: false },
    { text: "we provide tailored strategies that bring your brand to life. Whether you need", muted: true },
    { text: 'WordPress Web Development Services', muted: false },
    { text: 'or a full-scale digital transformation, our team of experts is here to', muted: true },
    { text: 'build your future.', muted: false },
  ];

  return (
    <section id="about" className="about-summary-section">
      <div className="container max-w-5xl">
        <div className="text-center">
          <motion.p
            className="about-heading text-2xl md:text-6xl lg:text-7xl font-normal leading-1-4 tracking-tighter max-w-5xl mx-auto"
            style={{ color: '#fff' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {words.map((w, i) => (
              <motion.span
                key={i}
                className={w.muted ? 'text-[#94a3b8]' : ''}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                {w.text}{' '}
              </motion.span>
            ))}
            <motion.span
              className="inline-flex items-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <span className="w-3 h-3 rounded-full mx-4 hidden md:inline-block" style={{ background: 'linear-gradient(135deg, #0d10d3, #00f2ff)' }}></span>
              <span className="text-[#94a3b8]">Dive into our world and discover the magic of</span>{' '}
              <span className="ml-2">collaboration and creativity.</span>
            </motion.span>
          </motion.p>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#about-full"
            style={{
              display: 'inline-block',
              padding: '1rem 2.5rem',
              borderRadius: '99px',
              border: '2px solid rgba(0, 242, 255, 0.4)',
              color: '#00f2ff',
              fontSize: '0.875rem',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'background 0.3s, color 0.3s, border-color 0.3s',
            }}
            onMouseEnter={e => { e.target.style.background = 'linear-gradient(135deg, #0d10d3, #00f2ff)'; e.target.style.color = '#fff'; e.target.style.borderColor = 'transparent'; }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#00f2ff'; e.target.style.borderColor = 'rgba(0, 242, 255, 0.4)'; }}
          >
            Discover more about us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSummary;
