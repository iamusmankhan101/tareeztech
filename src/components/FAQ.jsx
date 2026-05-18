import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What services does Tareez Tech provide?",
    answer: "We offer a comprehensive suite of digital services including custom Web Development, WordPress solutions, E-commerce development, Search Engine Optimization (SEO), and full-scale Digital Marketing strategies tailored to boost your ROI."
  },
  {
    question: "How long does it take to build a custom website?",
    answer: "The timeline depends on the complexity and scope of the project. A standard business website typically takes 2-4 weeks, while complex e-commerce or custom web applications may take 6-12 weeks from design to deployment."
  },
  {
    question: "Do you offer ongoing website maintenance and support?",
    answer: "Yes, we provide continuous maintenance, security updates, and technical support packages to ensure your website remains fast, secure, and fully operational long after launch."
  },
  {
    question: "Do you work with international clients outside of Pakistan?",
    answer: "Absolutely. While we are a premier web development company in Lahore, we partner with brands and businesses globally, delivering world-class digital solutions across various time zones."
  },
  {
    question: "Will my website be mobile-friendly and optimized for SEO?",
    answer: "Yes, every website we build is fully responsive, ensuring a seamless experience across all devices. We also implement on-page SEO best practices from the ground up to help you rank higher on search engines."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#00f2ff] text-sm font-medium tracking-wide uppercase mb-4 block"
          >
            Got Questions?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Frequently Asked <span className="serif-italic text-[#94a3b8]">Questions</span>
          </motion.h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`faq-item ${isActive ? 'active' : ''}`}
              >
                <button 
                  className="faq-question w-full text-left flex justify-between items-center py-6 px-2 md:px-6 bg-transparent border-none cursor-pointer focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg md:text-xl font-medium text-white">{faq.question}</span>
                  <span className={`faq-icon ml-4 flex-shrink-0 text-[#00f2ff] transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="faq-answer overflow-hidden"
                    >
                      <div className="pb-6 px-2 md:px-6 text-[#94a3b8] leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
