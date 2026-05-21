import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Palette, Megaphone, BarChart } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Design & Development',
    subtitle: 'Custom Web Development',
    desc: 'Specializing in custom web development and web app development services. We build fast, responsive, and high-converting websites.',
    href: '/services/web-development-lahore',
  },
  {
    icon: BarChart,
    title: 'SEO & Digital Marketing',
    subtitle: 'Top Digital Marketing Agency',
    desc: 'As a top digital marketing agency in Lahore, we offer a full digital marketing services list including SEO, PPC, and content strategy.',
    featured: true,
    href: '/services/digital-marketing-lahore',
  },
  {
    icon: Palette,
    title: 'Creative & Design',
    subtitle: 'Graphic Design & Video Editing',
    desc: 'Expert graphic design and video editing to fuel your social media. We create the perfect digital marketing poster and visual identity for your brand.',
    href: '/services/graphic-design-video-editing',
  },
  {
    icon: Megaphone,
    title: 'Ecommerce Solutions',
    subtitle: 'Ecommerce & Digital Marketing',
    desc: 'Seamlessly integrating ecommerce and digital marketing to turn your visitors into loyal customers.',
    href: '/services/ecommerce-digital-marketing',
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
                <Link to={s.href} className="service-card-btn">Learn More</Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
