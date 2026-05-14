import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowLeft, Share2 } from 'lucide-react';
import { getPostBySlug, getRecentPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPostBySlug(slug);
  const recentPosts = getRecentPosts(3).filter(p => p.slug !== slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0d10d3] text-white rounded-full font-semibold hover:bg-[#0a0da8] transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[#0d10d3] font-semibold hover:gap-3 transition-all"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Category Badge */}
          <span className="inline-block px-4 py-1 bg-[#0d10d3] text-white text-sm font-semibold rounded-full mb-4">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <span className="flex items-center gap-2">
              <User size={18} />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={18} />
              {formatDate(post.date)}
            </span>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 ml-auto text-[#0d10d3] hover:text-[#0a0da8] transition-colors"
            >
              <Share2 size={18} />
              Share
            </button>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 bg-gradient-to-br from-[#0d10d3] to-[#00f2ff] rounded-2xl overflow-hidden mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-6xl font-bold opacity-20">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none mb-12"
            style={{
              color: '#1f2937',
              lineHeight: '1.8',
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-gray-200">
            <span className="flex items-center gap-2 text-gray-700 font-semibold mr-2">
              <Tag size={18} />
              Tags:
            </span>
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#0d10d3] to-[#00f2ff] rounded-2xl p-8 md:p-12 text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how our digital marketing and web development services can help you achieve your goals.
            </p>
            <Link
              to="/#contact"
              className="inline-block px-8 py-4 bg-white text-[#0d10d3] rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </motion.article>

        {/* Recent Posts */}
        {recentPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-black mb-8">Recent Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentPosts.map((recentPost) => (
                <Link
                  key={recentPost.id}
                  to={`/blog/${recentPost.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100">
                    <div className="h-40 bg-gradient-to-br from-[#0d10d3] to-[#00f2ff] flex items-center justify-center">
                      <span className="text-white text-xl font-bold opacity-20">
                        {recentPost.category}
                      </span>
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-gray-500">{formatDate(recentPost.date)}</span>
                      <h3 className="text-lg font-bold text-black mt-2 mb-2 group-hover:text-[#0d10d3] transition-colors line-clamp-2">
                        {recentPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {recentPost.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Custom Styles for Blog Content */}
      <style jsx>{`
        .prose h2 {
          font-size: 1.875rem;
          font-weight: 700;
          color: #000;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }
        .prose h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #000;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }
        .prose p {
          margin-bottom: 1.25rem;
          color: #4b5563;
        }
        .prose ul, .prose ol {
          margin-left: 1.5rem;
          margin-bottom: 1.25rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
          color: #4b5563;
        }
        .prose strong {
          color: #0d10d3;
          font-weight: 600;
        }
        .prose a {
          color: #0d10d3;
          text-decoration: underline;
        }
        .prose a:hover {
          color: #0a0da8;
        }
      `}</style>
    </div>
  );
};

export default BlogPost;
