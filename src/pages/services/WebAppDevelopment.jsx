import { motion } from 'framer-motion';
import { Cpu, Database, Shield, Zap, Code, Smartphone, CheckCircle, Globe, Settings } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import ServicePageHero from '../../components/ServicePageHero';
import ServiceFAQ from '../../components/ServiceFAQ';
import ServiceCTA from '../../components/ServiceCTA';
import RelatedServices from '../../components/RelatedServices';

const services = [
  { icon: Cpu, title: 'Custom Web Applications', desc: 'Purpose-built web apps that automate business processes, manage data, and provide powerful user experiences.' },
  { icon: Database, title: 'SaaS Application Development', desc: 'Scalable SaaS platforms with subscription management, multi-tenancy, and API integrations.' },
  { icon: Shield, title: 'Business Portals & Dashboards', desc: 'Admin panels, client portals, and analytics dashboards that give your team real-time visibility and control.' },
  { icon: Code, title: 'API Development & Integration', desc: 'RESTful APIs and third-party integrations connecting your web app to payment gateways, CRMs, and more.' },
  { icon: Smartphone, title: 'Progressive Web Apps (PWA)', desc: 'App-like experiences delivered through the browser — installable, offline-capable, and blazing fast.' },
  { icon: Zap, title: 'Performance Optimisation', desc: 'Audit and refactor existing web apps for speed, reliability, and scalability under growing traffic.' },
];

const stats = [
  { number: '40+', label: 'Web Apps Launched' },
  { number: '99.9%', label: 'Uptime Guaranteed' },
  { number: '10x', label: 'Faster than Average Apps' },
  { number: '24/7', label: 'Monitoring & Support' },
];

const process = [
  { title: 'Requirements Mapping', desc: 'We document every feature, user role, and integration requirement into a detailed technical specification before coding begins.' },
  { title: 'Architecture Design', desc: 'The right technology stack is selected — frontend, backend, database, and hosting — for your app\'s specific performance and scalability needs.' },
  { title: 'Agile Development', desc: 'Sprints of 2 weeks deliver working features incrementally. You review and provide feedback throughout, not just at the end.' },
  { title: 'QA, Launch & Maintain', desc: 'Rigorous testing across all use cases before launch, followed by ongoing monitoring and feature updates as your business grows.' },
];

const faqs = [
  { question: 'What is the difference between web app development and website development?', answer: 'A website is primarily informational — it presents content about your business. A web application is interactive software that users log into, perform actions with (submit data, manage records, process transactions), and relies on a backend database. Examples include booking systems, inventory managers, and client portals.' },
  { question: 'What technologies do you use for web app development services?', answer: 'We use React and Next.js for frontends, Node.js or Python (Django/FastAPI) for backends, and PostgreSQL or MongoDB for databases. For hosting, we use AWS, Vercel, or DigitalOcean depending on requirements. The stack is always chosen based on your app\'s specific needs, not our convenience.' },
  { question: 'How much do web and app development services cost in Pakistan?', answer: 'Web app development costs depend significantly on complexity. Simple CRUD applications start from PKR 300,000. Complex SaaS platforms with multi-user roles, third-party integrations, and custom reporting can range much higher. We provide detailed cost breakdowns after a free discovery call.' },
  { question: 'Can you integrate my web app with local Pakistani payment gateways?', answer: 'Yes. We have experience integrating JazzCash, EasyPaisa, HBL Pay, Meezan Bank, and international gateways like Stripe. We also handle the technical compliance requirements for each provider.' },
  { question: 'Do you provide support after launching the web app?', answer: 'Yes. Every web app we launch is covered by a 30-day bug-fix warranty. We also offer ongoing monthly maintenance and support packages including security patches, performance monitoring, and feature additions.' },
];

const relatedServices = [
  { icon: Globe, title: 'Web Development Lahore', description: 'Custom websites built with modern frameworks for businesses across Pakistan.', href: '/services/web-development-lahore' },
  { icon: Settings, title: 'WordPress Development', description: 'Powerful WordPress websites and custom plugins for easy content management.', href: '/services/wordpress-development' },
  { icon: Code, title: 'Custom Web Development', description: 'Fully bespoke websites and digital solutions tailored to your exact requirements.', href: '/services/web-development-lahore' },
];

const WebAppDevelopment = () => (
  <>
    <SEOHead
      title="Web App Development Services Lahore"
      description="Custom web app development in Pakistan by Tareez Tech. SaaS platforms, business portals & web apps — scalable, secure, built to spec."
      canonicalUrl="https://tareeztech.com/services/web-app-development"
    />

    <ServicePageHero
      tagline="Web & App Development Services Pakistan"
      title="Web App Development Services"
      titleHighlight="in Pakistan"
      description="From simple business portals to complex SaaS platforms, Tareez Tech delivers web and app development services in Pakistan that are fast, secure, and built around your exact business requirements."
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Web Development', href: '/services/web-development-lahore' },
        { label: 'Web App Development' },
      ]}
      ctaText="Discuss Your App Project"
    />

    <section className="sp-section-alt">
      <div className="sp-container">
        <motion.div className="sp-section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="sp-section-label">What We Build</span>
          <h2 className="sp-section-title">Web App Development Services We Offer</h2>
          <p className="sp-section-desc">Complex, custom digital products built with the right technology for your business needs.</p>
        </motion.div>
        <div className="sp-grid-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={i} className="sp-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <div className="sp-card-icon"><Icon size={20} /></div>
                <h3 className="sp-card-title">{s.title}</h3>
                <p className="sp-card-desc">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    <section className="sp-section">
      <div className="sp-container">
        <div className="sp-stats-grid">
          {stats.map((stat, i) => (
            <motion.div key={i} className="sp-stat-item" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
              <div className="sp-stat-number">{stat.number}</div>
              <div className="sp-stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="sp-section-alt">
      <div className="sp-container">
        <div className="sp-two-col">
          <motion.div className="sp-two-col-text" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2>Why Choose Tareez Tech for Web App Development Services?</h2>
            <p>Building a web application is a significant investment — the wrong technology choices or a poor architecture can cost far more to fix later than to get right from the start. Our team uses battle-tested frameworks and engineering practices that ensure your app remains maintainable, secure, and scalable for years.</p>
            <p>We have built apps for logistics companies, healthcare providers, educational platforms, and retail businesses across Pakistan. We understand both the technical and business sides of application development.</p>
          </motion.div>
          <motion.ul className="sp-feature-list" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            {['Modern tech stack: React, Node.js, Next.js, and PostgreSQL', 'Detailed technical specification before any development starts', 'Agile sprints with fortnightly demos — you stay in control', 'Security-first: authentication, data encryption, and OWASP compliance', 'Local payment gateway integrations (JazzCash, EasyPaisa, Stripe)', 'Post-launch monitoring, support, and iterative improvements'].map((f, i) => (
              <li key={i} className="sp-feature-item"><CheckCircle size={18} />{f}</li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>

    <section className="sp-section">
      <div className="sp-container">
        <motion.div className="sp-section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="sp-section-label">Our Process</span>
          <h2 className="sp-section-title">How We Build Web Applications</h2>
        </motion.div>
        <div className="sp-process-grid">
          {process.map((step, i) => (
            <motion.div key={i} className="sp-process-step" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className="sp-process-number">0{i + 1}</div>
              <h3 className="sp-process-title">{step.title}</h3>
              <p className="sp-process-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="sp-section-alt">
      <div className="sp-container">
        <motion.div className="sp-section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="sp-section-label">In Depth</span>
          <h2 className="sp-section-title">Web App Development in Pakistan — What to Expect</h2>
        </motion.div>
        <div className="sp-content-block">
          <h3>What Is a Web Application and When Does Your Business Need One?</h3>
          <p>A web application is interactive software that runs in the browser and allows users to log in, manage data, and perform business-critical operations. Unlike a standard website, a web app is built around workflows — booking systems, inventory managers, CRM portals, employee dashboards, and SaaS platforms are all web applications. If your business has repetitive manual processes or needs to manage structured data at scale, a custom web app can save significant time and reduce costly human errors.</p>
          <h3>Web App Development Technologies We Use in Pakistan</h3>
          <p>We build web applications using modern, battle-tested technologies: React or Next.js for fast, interactive frontends; Node.js or Python (Django/FastAPI) for secure, scalable backends; and PostgreSQL or MongoDB for data storage. Hosting is deployed on AWS, Vercel, or DigitalOcean with autoscaling configured to handle traffic spikes without downtime. Every technology decision is justified by your app's specific performance, security, and scalability requirements — never by what is trendy.</p>
          <h3>SaaS Application Development for Pakistani Startups and Enterprises</h3>
          <p>Software-as-a-Service is a growing market in Pakistan. We build multi-tenant SaaS platforms with subscription billing, role-based access control, white-labelling capability, and the REST API architecture needed to integrate with third-party tools. Our agile development sprints give startups the speed to market they need, while the engineering rigour we apply ensures the codebase scales cleanly as users and features grow over time.</p>
          <h3>Web and App Development Services — Starting the Right Way</h3>
          <p>The single biggest mistake Pakistani businesses make when commissioning a web app is starting development before requirements are fully documented. We invest the first phase of every project in a detailed technical specification — covering every user role, feature, integration, and edge case. This document becomes the source of truth for development and protects both parties from scope creep. <a href="/services/web-development-lahore">Explore our web development services</a> if you are not yet sure whether you need a web app or a standard marketing website.</p>
        </div>
      </div>
    </section>

    <ServiceFAQ faqs={faqs} title="Web App Development — FAQs" />

    <RelatedServices title="Related Development Services" services={relatedServices} />

    <ServiceCTA
      title="Have a Web App Idea? Let's Build It."
      description="Book a free technical discovery call. We will scope your project, advise on the right technology stack, and give you a clear development roadmap."
      ctaText="Book a Free Discovery Call"
    />
  </>
);

export default WebAppDevelopment;
