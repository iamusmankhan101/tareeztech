import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [onWhiteSection, setOnWhiteSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect when navbar is over a white/light section (desktop only)
  useEffect(() => {
    const whiteSections = document.querySelectorAll('#about, .bg-white, [data-theme="light"]');
    if (!whiteSections.length) return;

    const navHeight = 100; // approximate navbar height + offset

    const observer = new IntersectionObserver(
      (entries) => {
        // Only apply on desktop (md breakpoint = 768px)
        if (window.innerWidth < 768) return;
        let anyVisible = false;
        entries.forEach((entry) => {
          if (entry.isIntersecting) anyVisible = true;
        });
        setOnWhiteSection(anyVisible);
      },
      {
        rootMargin: `-${navHeight}px 0px -${typeof window !== 'undefined' ? window.innerHeight - navHeight - 1 : 600}px 0px`,
        threshold: 0,
      }
    );

    whiteSections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 md:top-8 left-0 w-full z-50 flex justify-center px-0 md:px-8 pointer-events-none">
      <div className={`pointer-events-auto flex items-center justify-between md:justify-center w-full md:w-auto md:gap-0 px-4 md:px-2 py-2 md:rounded-full transition-all duration-500 ${onWhiteSection ? 'md:scale-95 mobile-bg-scrolled md:bg-black/55 md:backdrop-blur-[14px] border-transparent md:border-black/10 md:shadow-2xl' : scrolled ? 'md:scale-95 mobile-bg-scrolled md:bg-[#0d0e1299] md:backdrop-blur-[10px] border-transparent md:border-white/10 md:shadow-2xl' : 'scale-100 bg-transparent border-transparent md:border-transparent md:shadow-none'}`}>

        {/* Logo Section */}
        <div className="flex items-center gap-2 pr-2 md:pl-4 md:pr-6 md:border-r border-white/10 py-1">
          <img src="/logo.png" alt="Tareez Tech Logo" className="h-20 md:h-16 lg:h-18 -my-2 md:my-0 w-auto object-contain transition-all" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 px-4 border-r border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium transition-colors ${onWhiteSection ? 'text-white/80 hover:text-white' : 'text-white/70 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center pl-4 pr-2">
          <a href="#contact" className="px-6 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors">
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 flex items-center justify-center transition-all active:scale-95"
          style={{ background: 'transparent', border: 'none', outline: 'none' }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-24 pointer-events-auto left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm glass bg-[#0d0e12cc] backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <div className="p-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-white/80 transition-colors no-underline py-3 px-4 rounded-2xl active:bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-white/10 my-2 mx-4" />
              <a href="#contact" className="px-6 py-4 mx-2 rounded-full bg-white text-black text-center text-base font-semibold active:scale-95 transition-all mb-2 no-underline" onClick={() => setIsOpen(false)}>
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
