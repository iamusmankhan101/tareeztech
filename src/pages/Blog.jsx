import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowRight, Clock, TrendingUp, Search } from 'lucide-react';
import { blogPosts, getCategories } from '../data/blogPosts';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...getCategories()];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getReadTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d10d3]/10 border border-[#0d10d3]/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <TrendingUp size={16} className="text-[#00f2ff]" />
            <span className="text-[#00f2ff] text-sm font-semibold uppercase tracking-wider">
              Our Blog
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black mt-4 mb-6 tracking-tight">
            Digital Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d10d3] to-[#00f2ff]">Insights</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert tips, guides, and insights on digital marketing, web development, and growing your business online.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#0d10d3] to-[#00f2ff] text-white shadow-lg shadow-[#0d10d3]/30 scale-105'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-[#0d10d3]/50 hover:text-[#0d10d3] shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="group relative bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <Link to={`/blog/${post.slug}`}>
                <div className="relative h-72 overflow-hidden">
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

                  {/* Latest Badge */}
                  {index === 0 && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 bg-white text-[#0d10d3] text-xs font-bold rounded-full shadow-lg">
                        LATEST
                      </span>
                    </div>
                  )}
                </div>
              </Link>

              {/* Content */}
              <div className="p-8">
                {/* Date Label */}
                <div className="text-sm font-semibold text-gray-600 mb-6 uppercase tracking-wider">
                  BLOGS - {formatDate(post.date).toUpperCase()}
                </div>

                {/* Title */}
                <Link to={`/blog/${post.slug}`}>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 group-hover:text-[#0d10d3] transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h2>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-700 mb-8 line-clamp-2 leading-relaxed text-base">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-[#003d5c] font-bold text-lg group-hover:gap-3 transition-all hover:text-[#0d10d3]"
                >
                  Read More <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white border-2 border-gray-200 mb-6">
              <Search size={32} className="text-gray-400" />
            </div>
            <p className="text-gray-600 text-lg mb-4">No posts found in this category.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="text-[#0d10d3] hover:text-[#00f2ff] transition-colors font-semibold"
            >
              View all posts
            </button>
          </motion.div>
        )}
      </div>

      {/* Animations */}
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
    </div>
  );
};

export default Blog;
