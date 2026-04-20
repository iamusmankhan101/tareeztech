import React from 'react';
import { motion } from 'framer-motion';

const AboutSummary = () => {
  const words = [
    { text: 'Tareez Tech', muted: false },
    { text: 'is a hub of', muted: true },
    { text: 'creativity and innovation.', muted: false },
    { text: "We're dedicated to", muted: true },
    { text: 'bringing your brand to life through unique, impactful design solutions.', muted: false },
  ];

  return (
    <section id="about" className="py-40 bg-white">
      <div className="container max-w-5xl">
        <div className="text-center">
          <motion.p
            className="about-heading text-2xl md:text-6xl lg:text-7xl font-normal leading-1-4 tracking-tighter text-black max-w-5xl mx-auto"
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
              <span className="w-3 h-3 bg-black rounded-full mx-4 hidden md:inline-block"></span>
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
              border: '2px solid #0d10d3',
              color: '#0d10d3',
              fontSize: '0.875rem',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'background 0.3s, color 0.3s',
            }}
            onMouseEnter={e => { e.target.style.background = '#0d10d3'; e.target.style.color = '#fff'; }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#0d10d3'; }}
          >
            Discover more about us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSummary;
