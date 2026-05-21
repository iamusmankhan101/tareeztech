import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const RelatedServices = ({ services, title = 'Related Services' }) => {
  return (
    <section className="sp-section">
      <div className="sp-container">
        <motion.div
          className="sp-section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="sp-section-label">Explore More</span>
          <h2 className="sp-section-title">{title}</h2>
        </motion.div>
        
        <div className="sp-grid-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={service.href} className="sp-related-card">
                  <div className="sp-related-card-icon">
                    <Icon size={22} />
                  </div>
                  <h3 className="sp-related-card-title">{service.title}</h3>
                  <p className="sp-related-card-desc">{service.description}</p>
                  <span className="sp-related-card-link">
                    Learn More <ArrowUpRight size={16} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
