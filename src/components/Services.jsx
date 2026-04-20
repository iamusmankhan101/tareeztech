import { motion } from 'framer-motion';
import { useState } from 'react';
import { Globe, Palette, Megaphone, BarChart } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Design & Development',
    subtitle: 'Fast & Beautiful',
    desc: 'Custom websites built for performance, conversion, and stunning visual impact.',
  },
  {
    icon: BarChart,
    title: 'SEO Optimization',
    subtitle: 'Rank Higher',
    desc: 'Data-driven SEO strategies to boost your visibility and drive organic traffic.',
    featured: true,
  },
  {
    icon: Megaphone,
    title: 'Social Media Management',
    subtitle: 'Grow Your Audience',
    desc: 'Engaging content, consistent posting, and community management across all platforms.',
  },
  {
    icon: Palette,
    title: 'Branding & Identity',
    subtitle: 'Stand Out',
    desc: 'Logos, brand systems, and visual identities that leave a lasting impression.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 260, damping: 22 },
  },
};

const Services = () => {
  const [hovered, setHovered] = useState(1);

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        {/* Header */}
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="services-label"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What We Do
          </motion.span>
          <motion.p
            className="services-intro"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            We are pioneers in{' '}
            <span className="services-intro-highlight">digital craftsmanship</span>,
            dedicated to helping businesses build powerful online presences that drive
            innovation, efficiency, and growth.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((s, i) => {
            const Icon = s.icon;
            const isActive = hovered === i;
            return (
              <motion.div
                key={i}
                className={`service-card ${isActive ? 'service-card--active' : ''}`}
                variants={cardVariants}
                onMouseEnter={() => setHovered(i)}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              >
                <div className="service-card-top">
                  <div className="service-card-icon">
                    <Icon size={20} />
                  </div>
                </div>
                <div className="service-card-body">
                  <p className="service-card-subtitle">{s.subtitle}</p>
                  <h3 className="service-card-title">{s.title}</h3>
                  {isActive && (
                    <motion.p
                      className="service-card-desc"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {s.desc}
                    </motion.p>
                  )}
                </div>
                <a href="#contact" className="service-card-btn">Talk With Us</a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
