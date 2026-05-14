import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { client, urlFor } from '../lib/sanity';

const BlogSection = () => {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "post"] | order(publishedAt desc)[0...3]{
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      mainImage
    }`).then((data) => setRecentPosts(data)).catch(console.error);
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden font-sans">
      {/* Subtle Concentric Circles Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] pointer-events-none flex items-center justify-center opacity-[0.04] -translate-y-1/2">
        <div className="absolute w-[1200px] h-[1200px] rounded-full border border-black"></div>
        <div className="absolute w-[1000px] h-[1000px] rounded-full border border-black"></div>
        <div className="absolute w-[800px] h-[800px] rounded-full border border-black"></div>
        <div className="absolute w-[600px] h-[600px] rounded-full border border-black"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full border border-black"></div>
        <div className="absolute w-[200px] h-[200px] rounded-full border border-black"></div>
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
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#1c1f33] mb-6 tracking-tight">
            Blog Articles
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Stay informed and inspired with our blog, featuring insightful articles and updates on a variety of topics.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
              key={post._id}
              className="bg-white rounded-3xl p-4 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-shadow duration-300 flex flex-col"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link to={`/blog/${post.slug}`} className="flex-1 flex flex-col group">
                {/* Image */}
                <div className="relative h-[240px] w-full rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={post.mainImage ? urlFor(post.mainImage).url() : '/tech.jpg'} 
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="px-2 flex-1 flex flex-col">
                  {/* Date */}
                  <p className="text-[13px] font-medium text-gray-400 mb-3">
                    {formatDate(post.publishedAt)}
                  </p>

                  {/* Title */}
                  <h3 className="text-[22px] font-bold text-[#1c1f33] mb-4 leading-snug group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 leading-relaxed text-[15px] line-clamp-3 mb-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;

