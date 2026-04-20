import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const DiscoveryPopup = ({ onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello Tareez Tech! 👋\n\nDiscovery Call Request\n\nName: ${form.name}\nEmail: ${form.email}\nInterested In: ${form.service}\n\nMessage:\n${form.message}`;
    window.open(`https://wa.me/923212669945?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
  };

  return (
    <motion.div
      className="discovery-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="discovery-popup"
        initial={{ opacity: 0, scale: 0.6, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.6, y: 60 }}
        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="discovery-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        <div className="discovery-header">
          <span className="discovery-label">Free Consultation</span>
          <h2 className="discovery-title">
            Book a Discovery <span className="serif-italic">Call</span>
          </h2>
          <p className="discovery-subtitle">
            Tell us about your project and we'll get back to you within a few hours.
          </p>
        </div>

        {sent ? (
          <div className="discovery-success">
            <div className="discovery-success-icon">✓</div>
            <p>We received your request! Expect a message from us on WhatsApp shortly.</p>
            <button className="discovery-submit" onClick={onClose}>Close</button>
          </div>
        ) : (
          <form className="discovery-form" onSubmit={handleSubmit}>
            <div className="discovery-row">
              <div className="discovery-field">
                <label>Name</label>
                <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="discovery-field">
                <label>Email</label>
                <input type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="discovery-field">
              <label>Interested Service</label>
              <select name="service" value={form.service} onChange={handleChange} required>
                <option value="" disabled>Select a service...</option>
                <option>Web Design & Development</option>
                <option>SEO Optimization</option>
                <option>Social Media Management</option>
                <option>Branding & Identity</option>
              </select>
            </div>
            <div className="discovery-field">
              <label>Message</label>
              <textarea name="message" placeholder="Tell us about your project..." rows={4} value={form.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="discovery-submit">
              Send via WhatsApp →
            </button>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
};

export default DiscoveryPopup;
