import React, { useRef, useEffect, useState } from 'react';
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

  useEffect(() => {
    const measure = () => {
      if (carousel.current && trackRef.current) {
        const wrapperWidth = carousel.current.offsetWidth;
        const firstCard = trackRef.current.querySelector('.work-card');
        if (firstCard) setCardWidth(firstCard.offsetWidth);
        const totalDrag = trackRef.current.scrollWidth - wrapperWidth;
        setWidth(totalDrag);
      }
    };
    
    // Initial measure
    measure();
    
    // Extra measure after a small delay to ensure layout is final
    const timer = setTimeout(measure, 500);
    
    window.addEventListener('resize', measure);
    return () => {
      window.removeEventListener('resize', measure);
      clearTimeout(timer);
    };
  }, []);

  const goTo = (index) => {
    const clamped = Math.max(0, Math.min(projects.length - 1, index));
    const target = Math.max(-width, Math.min(0, -clamped * (cardWidth + GAP)));
    animate(x, target, { type: 'spring', stiffness: 300, damping: 30 });
    setCurrentIndex(clamped);
  };

  const handleDragStart = () => setIsDragging(true);

  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    const current = x.get();
    
    // Use velocity to help decide which card to snap to
    const velocity = info.velocity.x;
    let targetIndex = Math.round(-current / (cardWidth + GAP));
    
    if (Math.abs(velocity) > 500) {
      if (velocity < 0) targetIndex += 1;
      else targetIndex -= 1;
    }

    const clamped = Math.max(0, Math.min(projects.length - 1, targetIndex));
    const snapped = Math.max(-width, Math.min(0, -clamped * (cardWidth + GAP)));
    
    animate(x, snapped, { 
      type: 'spring', 
      stiffness: 300, 
      damping: 30,
      velocity: info.velocity.x // Pass current velocity for smoother transition
    });
    setCurrentIndex(clamped);
  };

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
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
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
