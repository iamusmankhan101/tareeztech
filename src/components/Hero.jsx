import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[50vh] md:min-h-screen flex flex-col items-center justify-center pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-48" style={{ overflow: 'hidden', background: '#000' }}>
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(13,16,211,0.12) 50%, rgba(0,0,0,0.75) 100%)'
      }} />

      <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
        {/* Top Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#00f2ff] text-sm font-medium mb-12 mt-16 tracking-wide uppercase"
        >
          Your Gateway to Creative Excellence
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-1-1"
        >
          Your On-Demand <br />
          <span className="serif-italic">Creative</span> Agency
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We are a design and development studio dedicated to crafting <br className="hidden md:block" />
          innovative digital solutions that shape the future.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a href="#contact" className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all text-center no-underline">
            Book a discovery call
          </a>
          <a href="#pricing" className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all text-center no-underline">
            See pricing plans
          </a>
        </motion.div>

        {/* Social Proof */}

      </div>
    </section>
  );
};

export default Hero;
