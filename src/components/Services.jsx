import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Code, Cpu, Globe, Zap } from 'lucide-react';

const services = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: 'Web Development',
    desc: 'High-performance websites built with modern frameworks like React and Next.js.',
    color: '#00f2ff'
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile Apps',
    desc: 'Native and cross-platform mobile solutions designed for scale and usability.',
    color: '#7000ff'
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Software Dev',
    desc: 'Custom enterprise software tailored to solve your unique business challenges.',
    color: '#00f2ff'
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: 'AI Integration',
    desc: 'Leveraging cutting-edge AI and Machine Learning to automate and optimize.',
    color: '#7000ff'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Cloud Solutions',
    desc: 'Scalable cloud infrastructure and devops for modern digital ecosystems.',
    color: '#00f2ff'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'UI/UX Design',
    desc: 'Intuitive and engaging user experiences that convert and delight.',
    color: '#7000ff'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-[#050608]">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Our <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="muted max-w-2xl mx-auto"
          >
            We provide a comprehensive suite of digital services to help your 
            business thrive in the modern technological landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl border-white/5 transition-all duration-300 group"
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${service.color}15`, color: service.color }}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="muted leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
