import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { motion, useMotionValue, animate, useSpring } from 'framer-motion';

const projects = [
  {
    title: 'Tareez Fashion',
    desc: 'A high-end e-commerce destination for premium traditional and contemporary fashion.',
    category: ['Web Design & Development', 'E-commerce', 'Fashion'],
    image: '/Screenshot 2026-04-27 at 11.53.29 PM.png',
    link: 'https://tareezfashion.com',
  },
  {
    title: 'Restaurant 47',
    desc: 'An authentic culinary experience showcasing exquisite flavors and a refined dining atmosphere.',
    category: ['Web Design & Development', 'Hospitality', 'Restaurant'],
    image: '/Screenshot 2026-04-27 at 11.54.58 PM.png',
    link: 'https://www.47wigston.co.uk/',
  },
  {
    title: 'The Optimus',
    desc: 'Premium real estate platform showcasing luxury properties and developments across Dubai, UAE.',
    category: ['Web Design & Development', 'Real Estate'],
    image: '/theoptimus.png',
    link: 'https://theoptimus.ae',
  },
  {
    title: 'Hawk Dispatch Inc.',
    desc: 'Reliable truck dispatch services for owner-operators and fleets — maximizing profits and minimizing stress.',
    category: ['Web Design & Development', 'Logistics'],
    image: '/hawk-dispatch.png',
    link: 'https://hawkdispatchinc.com',
  },
  {
    title: 'Highway Dream Resort',
    desc: 'A luxury resort experience in Karachi — private pools, BBQ lawns, and fully furnished stays.',
    category: ['Web Design & Development', 'Hospitality'],
    image: '/highway-dream.png',
    link: 'https://highwaydreamresort.com',
  },
  {
    title: 'Golf Club Marquee',
    desc: 'Premium event venue in Jhelum for weddings, conferences and celebrations.',
    category: ['Web Design & Development', 'Events'],
    image: '/Screenshot 2026-04-19 at 4.13.23 PM.png',
    link: 'https://golfclubmarquee.pk',
  },
];

const GAP = 24;

const Work = () => {
  const carousel = useRef();
  const trackRef = useRef();
  const [width, setWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const x = useMotionValue(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Smooth springs for cursor
  const springConfig = { stiffness: 500, damping: 40, mass: 0.5 };
  const smoothCursorX = useSpring(cursorX, springConfig);
  const smoothCursorY = useSpring(cursorY, springConfig);

  const measure = () => {
    if (carousel.current && trackRef.current) {
      const wrapperWidth = carousel.current.offsetWidth;
      const firstCard = trackRef.current.querySelector('.work-card');
      if (firstCard) {
        const cw = firstCard.offsetWidth;
        setCardWidth(cw);
      }
      // Use getBoundingClientRect for more precision with sub-pixel layouts
      const trackWidth = trackRef.current.scrollWidth;
      const totalDrag = Math.max(0, trackWidth - wrapperWidth);
      setWidth(totalDrag);
    }
  };

  useLayoutEffect(() => {
    measure();
    
    // Resize observer to catch any container or track size changes
    const resizeObserver = new ResizeObserver(() => {
      measure();
    });

    if (carousel.current) resizeObserver.observe(carousel.current);
    if (trackRef.current) resizeObserver.observe(trackRef.current);

    // Also measure when images finish loading
    const images = trackRef.current?.querySelectorAll('img');
    images?.forEach(img => {
      if (img.complete) measure();
      else img.addEventListener('load', measure);
    });

    // Final fallback measurement
    const timer = setTimeout(measure, 1000);

    return () => {
      resizeObserver.disconnect();
      clearTimeout(timer);
      images?.forEach(img => img.removeEventListener('load', measure));
    };
  }, []);

  const goTo = (index) => {
    const clamped = Math.max(0, Math.min(projects.length - 1, index));
    // Calculate target based on the card's position relative to the track start
    const target = Math.max(-width, Math.min(0, -clamped * (cardWidth + GAP)));
    
    animate(x, target, { 
      type: 'spring', 
      stiffness: 250, 
      damping: 30,
      restDelta: 0.01
    });
    setCurrentIndex(clamped);
  };

  const handleDragStart = () => setIsDragging(true);

  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    const currentX = x.get();
    const velocity = info.velocity.x;
    
    // Determine the closest index based on current position
    let targetIndex = Math.round(-currentX / (cardWidth + GAP));
    
    // Factor in velocity for better "flick" feel
    if (Math.abs(velocity) > 400) {
      targetIndex = velocity < 0 ? targetIndex + 1 : targetIndex - 1;
    }

    const clamped = Math.max(0, Math.min(projects.length - 1, targetIndex));
    const snapped = Math.max(-width, Math.min(0, -clamped * (cardWidth + GAP)));
    
    animate(x, snapped, { 
      type: 'spring', 
      stiffness: 250, 
      damping: 30,
      velocity: velocity,
      restDelta: 0.01
    });
    setCurrentIndex(clamped);
  };

  // Sync currentIndex based on X position during drag or animation
  useEffect(() => {
    const unsubscribe = x.on('change', (latest) => {
      const idx = Math.round(-latest / (cardWidth + GAP));
      const clamped = Math.max(0, Math.min(projects.length - 1, idx));
      if (clamped !== currentIndex) {
        setCurrentIndex(clamped);
      }
    });
    return () => unsubscribe();
  }, [cardWidth, currentIndex, x]);

  const handleMouseMove = (e) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };

  const handleProjectClick = (link) => {
    if (!isDragging) {
      window.open(link, '_blank');
    }
  };

  return (
    <section id="work" className="work-section">
      {/* Custom cursor */}
      <motion.div
        className="work-cursor"
        style={{ 
          x: smoothCursorX, 
          y: smoothCursorY, 
          opacity: cursorVisible ? 1 : 0, 
          scale: cursorVisible ? 1 : 0.3,
          rotate: isDragging ? 15 : 0
        }}
      >
        <span>View</span>
        <span className="serif-italic">Project</span>
      </motion.div>

      <div className="container">
        <div className="work-header">
          <div className="work-header-left">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="work-label"
            >
              Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="work-title"
            >
              Featured <span className="serif-italic">Work</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="work-description"
          >
            Dive into a world of creativity and inspiration with our portfolio.
            Explore our work and imagine the possibilities for your brand.
          </motion.p>
        </div>
      </div>

      {/* Draggable Carousel */}
      <div
        ref={carousel}
        className="work-carousel-wrapper"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setCursorVisible(true)}
        onMouseLeave={() => setCursorVisible(false)}
        style={{ cursor: 'none' }}
      >
        <motion.div
          ref={trackRef}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={0.15}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          style={{ x }}
          className="work-carousel-track"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="work-card"
              onClick={() => handleProjectClick(project.link)}
              whileHover={{ y: -10 }}
              style={{ cursor: 'none' }}
            >
              <div className="work-card-image-wrap">
                <img src={project.image} alt={project.title} className="work-card-image" draggable="false" />
                <div className="work-card-overlay" />
              </div>
              <div className="work-card-badges">
                {project.category.map((cat, i) => (
                  <span key={i} className="work-badge">{cat}</span>
                ))}
              </div>
              <div className="work-card-info">
                <span className="work-card-number">0{index + 1}</span>
                <h3 className="work-card-title">{project.title}</h3>
                <p className="work-card-desc">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Progress + Arrows */}
      <div className="container">
        <motion.div
          className="work-scroll-progress"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="work-progress-bar">
            <div className="work-progress-fill" style={{ width: `${(currentIndex / (projects.length - 1)) * 100}%` }} />
          </div>
          <div className="work-scroll-arrows">
            <button className="work-arrow-btn" onClick={() => goTo(currentIndex - 1)} disabled={currentIndex === 0} aria-label="Previous">←</button>
            <button className="work-arrow-btn" onClick={() => goTo(currentIndex + 1)} disabled={currentIndex === projects.length - 1} aria-label="Next">→</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
