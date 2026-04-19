import { motion } from 'framer-motion';

const row1 = [
  {
    quote: 'Tareez Tech transformed our online presence completely. Their attention to detail and design sense is unmatched — our bookings increased significantly after the launch.',
    name: 'Bilal Chaudhry',
    role: 'Resort Owner',
  },
  {
    quote: 'Professional, fast, and creative. They built our entire website from scratch and delivered beyond expectations. The site looks world-class.',
    name: 'Asad Mehmood',
    role: 'Venue Manager',
  },
  {
    quote: 'Working with Tareez Tech was seamless. They understood our brand instantly and delivered a site that truly represents who we are in the Dubai real estate market.',
    name: 'Omar Farooq',
    role: 'Real Estate Director',
  },
];

const row2 = [
  {
    quote: 'Our dispatch business needed a strong digital identity. Tareez Tech nailed it — clean, fast, and professional. Client inquiries doubled within the first month.',
    name: 'James Carter',
    role: 'Logistics CEO',
  },
  {
    quote: 'Exceptional work ethic and communication throughout the project. They delivered on time and the final product exceeded everything we had envisioned.',
    name: 'Usman Tariq',
    role: 'Tech Founder',
  },
  {
    quote: 'Tareez Tech doesn\'t just build websites — they build experiences. Our customers constantly compliment how smooth and beautiful our site feels.',
    name: 'Sara Malik',
    role: 'Marketing Head',
  },
];

const TestimonialCard = ({ t }) => (
  <div className="testimonial-card">
    <p className="testimonial-quote">{t.quote}</p>
    <div className="testimonial-author">
      <div className="testimonial-initials">
        {t.name.split(' ').map(n => n[0]).join('')}
      </div>
      <div>
        <span className="testimonial-name">{t.name}</span>
        <span className="testimonial-role">{t.role}</span>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="testimonials-title">
            Words From Our<br />
            <span className="testimonials-title-italic">Partners</span>
          </h2>
          <p className="testimonials-subtitle">
            See what our clients have to say about their experience with Tareez Tech.
            Their stories speak volumes about the quality of our work.
          </p>
        </motion.div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="testimonials-marquee-wrapper">
        <div className="testimonials-marquee-track marquee-left">
          {[...row1, ...row1].map((t, i) => <TestimonialCard key={i} t={t} />)}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="testimonials-marquee-wrapper" style={{ marginTop: '1.5rem' }}>
        <div className="testimonials-marquee-track marquee-right">
          {[...row2, ...row2].map((t, i) => <TestimonialCard key={i} t={t} />)}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
