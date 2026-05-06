import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto min-h-screen text-white/80">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Terms & Conditions</h1>
        </div>
        
        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
            <p className="leading-relaxed">These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Tareez Tech ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Intellectual Property Rights</h2>
            <p className="leading-relaxed">Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. User Representations</h2>
            <p className="leading-relaxed">By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms and Conditions; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise; (4) you will not use the Site for any illegal or unauthorized purpose.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Prohibited Activities</h2>
            <p className="leading-relaxed">You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Modifications and Interruptions</h2>
            <p className="leading-relaxed">We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Governing Law</h2>
            <p className="leading-relaxed">These conditions are governed by and interpreted following the laws of Pakistan & the United Kingdom, and the use of the United Nations Convention of Contracts for the International Sale of Goods is expressly excluded.</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsAndConditions;
