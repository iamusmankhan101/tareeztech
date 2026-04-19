import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const links = {
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ],
  Services: [
    { label: 'Web Design & Development', href: '#' },
    { label: 'UI/UX Design', href: '#' },
    { label: 'Branding', href: '#' },
    { label: 'SEO & Marketing', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/tareez.tech/' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61573214747241' },
];

const Footer = () => {
  return (
    <footer className="footer-root">
      {/* Top CTA Banner */}
      <motion.div
        className="footer-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="footer-cta-inner">
          <div>
            <h2 className="footer-cta-title">Ready to start your project?</h2>
            <p className="footer-cta-sub">Let's turn your vision into a world-class digital product.</p>
          </div>
          <a href="#contact" className="footer-cta-btn">
            Get Started <ArrowUpRight size={18} />
          </a>
        </div>
      </motion.div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-container">
          <motion.div
            className="footer-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* Brand col */}
            <motion.div
              className="footer-brand"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            >
              <a href="/" className="footer-logo">
                <img src="/logo.png" alt="Tareez Tech" />
              </a>
              <p className="footer-tagline">
                We craft digital experiences that drive growth — from sleek websites to powerful web apps.
              </p>

              <div className="footer-contact-list">
                <a href="tel:+923212669945" className="footer-contact-item">
                  <Phone size={14} /> +92 321 266 9945
                </a>
                <a href="mailto:hello@tareeztech.com" className="footer-contact-item">
                  <Mail size={14} /> hello@tareeztech.com
                </a>
                <span className="footer-contact-item">
                  <MapPin size={14} /> Pakistan · United Kingdom
                </span>
              </div>

              <div className="footer-socials">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="footer-social-link">
                    {s.label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Link cols */}
            {Object.entries(links).map(([group, items]) => (
              <motion.div
                key={group}
                className="footer-link-col"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              >
                <h4 className="footer-col-title">{group}</h4>
                <ul>
                  {items.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="footer-link">{item.label}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom bar */}
          <motion.div
            className="footer-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p>© {new Date().getFullYear()} Tareez Tech. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
