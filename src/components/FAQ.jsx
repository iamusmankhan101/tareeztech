import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What does Tareez Tech, a digital marketing agency in Lahore, do?",
    answer: "Tareez Tech is a digital marketing agency in Lahore that helps businesses grow online through SEO, social media marketing, Meta ads, Google Ads, content creation, branding, graphic design, video editing, and website development. Our goal is to help businesses increase leads, sales, and online visibility."
  },
  {
    question: "What services does Tareez Tech offer as a web development company in Lahore?",
    answer: "As a web development company in Lahore, Tareez Tech offers custom web development, WordPress web development services, ecommerce solutions, web app development services, UI/UX design, and business websites designed for performance and conversions."
  },
  {
    question: "Why should I choose custom web development services from Tareez Tech?",
    answer: "Custom web development services from Tareez Tech are designed specifically for your business needs. Unlike template-based websites, custom web development provides better flexibility, improved SEO performance, faster loading speed, and a unique brand experience."
  },
  {
    question: "Does Tareez Tech offer both web and app development services?",
    answer: "Yes. Tareez Tech provides web and app development services, including custom websites, ecommerce platforms, and web app development services. Businesses searching for web development in Lahore can get complete digital solutions under one roof."
  },
  {
    question: "Does Tareez Tech provide graphic design and video editing services?",
    answer: "Yes, Tareez Tech provides graphic design, video editing, branding, digital marketing poster design, website design, and content creation services to help businesses establish a strong and professional online presence."
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
