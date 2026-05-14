import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { client, urlFor } from '../lib/sanity';

const BlogSection = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(`*[_type == "post"] | order(publishedAt desc)[0...3]{
          _id,
          title,
          "slug": slug.current,
          publishedAt,
          excerpt,
          mainImage
        }`);
        setRecentPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (loading) {
    return (
      <section className="py-20 bg-[#f8f9fa]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-500">Loading blog posts...</p>
          </div>
        </div>
      </section>
    );
  }

  if (recentPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-[#f8f9fa]">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[2.75rem] md:text-[3.25rem] font-bold text-[#2d3748] mb-4 tracking-tight">
            Blog Articles
          </h2>
          <p className="text-lg text-[#718096] max-w-2xl mx-auto leading-relaxed">
            Stay informed and inspired with our blog, featuring insightful<br />
            articles and updates on a variety of topics.
          </p>
        </motion.div>

        {/* Blog Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto"
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
              className="group"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <Link to={`/blog/${post.slug}`} className="block">
                {/* Card Container */}
                <div className="bg-white rounded-[1.25rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-[130px] w-full overflow-hidden bg-gray-100">
                    <img 
                      src={post.mainImage ? urlFor(post.mainImage).width(160).height(130).url() : '/tech.jpg'} 
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    {/* Date */}
                    <p className="text-xs font-medium text-[#a0aec0] mb-2 tracking-wide uppercase">
                      {formatDate(post.publishedAt)}
                    </p>

                    {/* Title */}
                    <h3 className="text-[1.25rem] font-bold text-[#2d3748] mb-2 leading-tight group-hover:text-[#4299e1] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#718096] leading-relaxed text-[0.875rem] line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link 
            to="/blog"
            className="inline-block px-8 py-3 bg-[#2d3748] text-white font-semibold rounded-full hover:bg-[#1a202c] transition-colors duration-300"
          >
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;

