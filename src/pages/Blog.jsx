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
    <div className="min-h-screen bg-black pt-32 pb-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#0d10d3] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-[#00f2ff] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
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
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mt-4 mb-6 tracking-tight">
            Digital Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#0d10d3]">Insights</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
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
                  : 'bg-gray-900 text-gray-400 border border-gray-800 hover:border-[#0d10d3]/50 hover:text-white'
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
              className="group relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border border-gray-800 hover:border-[#0d10d3]/50 transition-all duration-500"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0d10d3]/0 to-[#00f2ff]/0 group-hover:from-[#0d10d3]/10 group-hover:to-[#00f2ff]/5 transition-all duration-500 z-0"></div>

              {/* Featured Badge */}
              {index === 0 && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-gradient-to-r from-[#00f2ff] to-[#0d10d3] text-white text-xs font-bold rounded-full shadow-lg">
                    LATEST
                  </span>
                </div>
              )}

              {/* Image */}
              <Link to={`/blog/${post.slug}`}>
                <div className="relative h-56 bg-gradient-to-br from-[#0d10d3] via-[#0d10d3] to-[#00f2ff] overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                      backgroundSize: '32px 32px',
                    }}></div>
                  </div>
                  
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-4 py-2 bg-black/50 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/20">
                      {post.category}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                    <ArrowRight className="text-white opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500" size={32} />
                  </div>
                </div>
              </Link>

              {/* Content */}
              <div className="relative p-6 z-10">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-[#00f2ff]" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-[#00f2ff]" />
                    {getReadTime(post.content)}
                  </span>
                </div>

                {/* Title */}
                <Link to={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#00f2ff] transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h2>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Author & Read More */}
                <div className="flex items-center justify-between mb-6">
                  <span className="flex items-center gap-2 text-sm text-gray-500">
                    <User size={14} className="text-[#00f2ff]" />
                    {post.author}
                  </span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="flex items-center gap-1 text-[#00f2ff] font-semibold text-sm group-hover:gap-2 transition-all"
                  >
                    Read <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-800">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-gray-800/50 text-gray-300 px-3 py-1.5 rounded-full border border-gray-700/50 hover:border-[#0d10d3]/50 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0d10d3]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-900 border border-gray-800 mb-6">
              <Search size={32} className="text-gray-600" />
            </div>
            <p className="text-gray-400 text-lg mb-4">No posts found in this category.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="text-[#00f2ff] hover:text-white transition-colors font-semibold"
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
