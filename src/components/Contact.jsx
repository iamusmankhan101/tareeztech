import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello Tareez Tech! 👋\n\nName: ${form.name}\nEmail: ${form.email}\nInterested In: ${form.service}\n\nMessage:\n${form.message}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/923082669945?text=${encoded}`, '_blank');
    setSent(true);
  };

  return (
    <section id="contact" className="contact-section">
      {/* Glow */}
      <div className="contact-glow" />

      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="contact-label">Get In Touch</span>
          <h2 className="contact-title">
            Let's Build Something<br />
            <span className="serif-italic">Together</span>
          </h2>
          <p className="contact-subtitle">
            Have a project in mind? Drop us a message or reach out on WhatsApp — we typically respond within a few hours.
          </p>
        </motion.div>

        <div className="contact-body">
          {/* Form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {sent ? (
              <div className="contact-success">
                <span>✓</span>
                <p>Message sent! We'll get back to you soon.</p>
              </div>
            ) : (
              <>
                <div className="contact-row">
                  <div className="contact-field">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact-field">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="contact-field">
                  <label>Interested Service</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select a service...</option>
                    <option>Web Design & Development</option>
                    <option>SEO Optimization</option>
                    <option>Social Media Management</option>
                    <option>Branding & Identity</option>
                  </select>
                </div>
                <div className="contact-field">
                  <label>Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="contact-submit">
                  Send Message →
                </button>
              </>
            )}
          </motion.form>

          {/* Side info */}
          <motion.div
            className="contact-side"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
            }}
          >
            {[
              { label: 'Email', value: 'hello@tareeztech.com', href: 'mailto:hello@tareeztech.com' },
              { label: 'Based In', value: 'Pakistan · United Kingdom' },
              { label: 'Response Time', value: 'Within a few hours' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="contact-info-block"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
                }}
              >
                <span className="contact-info-label">{item.label}</span>
                {item.href
                  ? <a href={item.href} className="contact-info-value">{item.value}</a>
                  : <span className="contact-info-value">{item.value}</span>
                }
              </motion.div>
            ))}

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/923082669945"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
