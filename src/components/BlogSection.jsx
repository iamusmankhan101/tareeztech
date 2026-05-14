import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { getRecentPosts } from '../data/blogPosts';

const BlogSection = () => {
  const recentPosts = getRecentPosts(3);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-[#0d10d3] text-sm font-semibold uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Latest Insights
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-4 mb-4">
            From Our Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert tips and insights on digital marketing, web development, and growing your business online.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
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
          {recentPosts.map((post) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <Link to={`/blog/${post.slug}`}>
                <div className="relative h-48 bg-gradient-to-br from-[#0d10d3] to-[#00f2ff] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold opacity-20">
                      {post.category}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6">
                {/* Category & Date */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span className="px-3 py-1 bg-[#0d10d3]/10 text-[#0d10d3] rounded-full font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {formatDate(post.date)}
                  </span>
                </div>

                {/* Title */}
                <Link to={`/blog/${post.slug}`}>
                  <h3 className="text-xl font-bold text-black mb-3 hover:text-[#0d10d3] transition-colors line-clamp-2 group-hover:text-[#0d10d3]">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-[#0d10d3] font-semibold text-sm hover:gap-2 transition-all"
                >
                  Read More <ArrowRight size={16} />
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0d10d3] text-white rounded-full font-semibold hover:bg-[#0a0da8] transition-all hover:gap-3"
          >
            View All Posts <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
