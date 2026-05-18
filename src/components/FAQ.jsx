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
    <section id="faq" className="faq-section relative overflow-hidden py-32">
      {/* Background glowing orbs for extra premium feel */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0d10d3] rounded-full mix-blend-screen filter blur-[128px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00f2ff] rounded-full mix-blend-screen filter blur-[128px] opacity-10 pointer-events-none" />
      
      <div className="container max-w-4xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <span className="text-[#00f2ff] text-xs font-semibold tracking-widest uppercase">
              Got Questions?
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mt-4"
          >
            Frequently Asked <span className="serif-italic bg-clip-text text-transparent bg-gradient-to-r from-[#00f2ff] to-[#0d10d3]">Questions</span>
          </motion.h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ease-in-out ${
                  isActive 
                    ? 'bg-white/[0.04] shadow-[0_0_40px_rgba(0,242,255,0.05)] border border-[#00f2ff]/30' 
                    : 'bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-white/10'
                }`}
              >
                <button 
                  className="w-full text-left flex justify-between items-center py-6 px-6 md:px-8 bg-transparent border-none cursor-pointer focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                    {faq.question}
                  </span>
                  <div className={`relative ml-4 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive ? 'bg-[#00f2ff]/10 text-[#00f2ff]' : 'bg-white/5 text-white/50 group-hover:bg-white/10 group-hover:text-white'
                  }`}>
                    <svg 
                      width="14" 
                      height="14" 
                      viewBox="0 0 14 14" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transform transition-transform duration-500 ${isActive ? 'rotate-180' : ''}`}
                    >
                      <path 
                        d={isActive ? "M1 7H13" : "M7 1V13M1 7H13"} 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 px-6 md:px-8 text-[#94a3b8] leading-relaxed text-base md:text-lg">
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
