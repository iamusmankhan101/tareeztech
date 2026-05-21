import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import DigitalMarketingLahore from './pages/services/DigitalMarketingLahore';
import SeoServicesLahore from './pages/services/SeoServicesLahore';
import SocialMediaMarketing from './pages/services/SocialMediaMarketing';
import WebDevelopmentLahore from './pages/services/WebDevelopmentLahore';
import WebDesignPakistan from './pages/services/WebDesignPakistan';
import WebAppDevelopment from './pages/services/WebAppDevelopment';
import WordPressDevelopment from './pages/services/WordPressDevelopment';
import GraphicDesignVideoEditing from './pages/services/GraphicDesignVideoEditing';
import EcommerceDigitalMarketing from './pages/services/EcommerceDigitalMarketing';
import './App.css';
import './service-pages.css';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname, hash]);

  return null;
};

function AppContent() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Make lenis available globally for manual scrolling if needed
    window.lenis = lenis;

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <div className="app-container overflow-hidden">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/services/digital-marketing-lahore" element={<DigitalMarketingLahore />} />
          <Route path="/services/seo-services-lahore" element={<SeoServicesLahore />} />
          <Route path="/services/social-media-marketing-pakistan" element={<SocialMediaMarketing />} />
          <Route path="/services/web-development-lahore" element={<WebDevelopmentLahore />} />
          <Route path="/services/web-design-pakistan" element={<WebDesignPakistan />} />
          <Route path="/services/web-app-development" element={<WebAppDevelopment />} />
          <Route path="/services/wordpress-development" element={<WordPressDevelopment />} />
          <Route path="/services/graphic-design-video-editing" element={<GraphicDesignVideoEditing />} />
          <Route path="/services/ecommerce-digital-marketing" element={<EcommerceDigitalMarketing />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
