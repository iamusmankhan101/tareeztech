import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Clock, TrendingUp } from 'lucide-react';
import { getRecentPosts } from '../data/blogPosts';

const BlogSection = () => {
  const recentPosts = getRecentPosts(3);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getReadTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };

  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #0d10d3 0.5px, transparent 0)',
          backgroundSize: '48px 48px',
        }}></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d10d3]/10 border border-[#0d10d3]/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <TrendingUp size={16} className="text-[#00f2ff]" />
            <span className="text-[#00f2ff] text-sm font-semibold uppercase tracking-wider">
              Latest Insights
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mt-4 mb-6 tracking-tight">
            Expert Tips & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d10d3] to-[#00f2ff]">Insights</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Master digital marketing, web development, and business growth strategies from industry experts.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {recentPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <Link to={`/blog/${post.slug}`}>
                <div className="relative h-64 overflow-hidden">
                  {/* Placeholder Image with Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0d10d3] via-purple-500 to-[#00f2ff]">
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '32px 32px',
                      }}></div>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6">
                {/* Date Label */}
                <div className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">
                  {post.category} - {formatDate(post.date)}
                </div>

                {/* Title */}
                <Link to={`/blog/${post.slug}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0d10d3] transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-[#0d10d3] font-bold text-base group-hover:gap-3 transition-all"
                >
                  Read More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/blog"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#0d10d3] to-[#0d10d3] hover:from-[#00f2ff] hover:to-[#0d10d3] text-white rounded-full font-bold text-base shadow-lg shadow-[#0d10d3]/30 hover:shadow-[#00f2ff]/40 transition-all duration-500 hover:scale-105"
          >
            View All Articles
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }
        .animate-blob {
          animation: blob 20s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default BlogSection;
