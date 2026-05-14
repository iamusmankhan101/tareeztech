import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowLeft, Share2, Clock, Eye, Bookmark, Link2 } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { client, urlFor } from '../lib/sanity';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    client.fetch(`{
      "post": *[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        "author": author->name,
        "categories": categories[]->title,
        publishedAt,
        body,
        excerpt,
        mainImage
      },
      "recentPosts": *[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...3]{
        _id,
        title,
        "slug": slug.current,
        "category": categories[0]->title,
        publishedAt,
        excerpt,
        mainImage
      }
    }`, { slug }).then(data => {
      setPost(data.post);
      setRecentPosts(data.recentPosts || []);
      setLoading(false);
    }).catch(err => {
      console.error(err);
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen bg-white pt-32 pb-20 flex items-center justify-center text-gray-800 text-xl">Loading...</div>;
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 border border-gray-200 mb-6">
            <Tag size={32} className="text-gray-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0d10d3] to-[#00f2ff] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#0d10d3]/30 transition-all"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getReadTime = (blocks) => {
    if (!blocks || !Array.isArray(blocks)) return '1 min read';
    const text = blocks
      .filter(block => block._type === 'block' && block.children)
      .map(block => block.children.map(child => child.text).join(''))
      .join(' ');
    const wordsPerMinute = 200;
    const wordCount = text.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute) || 1;
    return `${minutes} min read`;
  };

  const handleShare = async (platform) => {
    const url = window.location.href;
    const text = post.title;

    if (platform === 'native' && navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: url,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d10d3] via-[#0d10d3] to-[#00f2ff]">
          {post.mainImage && (
            <img 
              src={urlFor(post.mainImage).url()} 
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
            />
          )}
          {/* Animated Pattern Overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}></div>
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-end pb-16 pt-32">
          <div className="container max-w-5xl mx-auto px-4">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold hover:gap-3 transition-all backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full border border-white/10"
              >
                <ArrowLeft size={20} />
                Back to Blog
              </Link>
            </motion.div>

            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md text-white text-sm font-bold rounded-full border border-white/20">
                {post.categories?.[0] || 'Blog'}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl"
            >
              {post.title}
            </motion.h1>

            {/* Meta Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 text-white/80"
            >
              <span className="flex items-center gap-2">
                <User size={18} />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={18} />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} />
                {getReadTime(post.body)}
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container max-w-4xl mx-auto px-4 py-16">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Floating Share Sidebar */}
          <div className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-50">
            <div className="flex flex-col gap-3 bg-white border border-gray-200 rounded-2xl p-3 shadow-xl">
              <button
                onClick={() => handleShare('facebook')}
                className="p-3 rounded-xl bg-gray-100 hover:bg-[#1877f2] text-gray-600 hover:text-white transition-all group"
                title="Share on Facebook"
              >
                <Share2 size={20} />
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="p-3 rounded-xl bg-gray-100 hover:bg-[#1da1f2] text-gray-600 hover:text-white transition-all"
                title="Share on Twitter"
              >
                <Share2 size={20} />
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="p-3 rounded-xl bg-gray-100 hover:bg-[#0077b5] text-gray-600 hover:text-white transition-all"
                title="Share on LinkedIn"
              >
                <Share2 size={20} />
              </button>
              <button
                onClick={() => handleShare('copy')}
                className="p-3 rounded-xl bg-gray-100 hover:bg-[#0d10d3] text-gray-600 hover:text-white transition-all"
                title="Copy Link"
              >
                <Link2 size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Share Buttons */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-12 pb-8 border-b border-gray-200">
            <span className="text-gray-600 text-sm font-semibold mr-2">Share:</span>
            <button
              onClick={() => handleShare('facebook')}
              className="p-2 rounded-lg bg-gray-100 hover:bg-[#1877f2] text-gray-600 hover:text-white transition-all"
            >
              <Share2 size={18} />
            </button>
            <button
              onClick={() => handleShare('twitter')}
              className="p-2 rounded-lg bg-gray-100 hover:bg-[#1da1f2] text-gray-600 hover:text-white transition-all"
            >
              <Share2 size={18} />
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="p-2 rounded-lg bg-gray-100 hover:bg-[#0077b5] text-gray-600 hover:text-white transition-all"
            >
              <Share2 size={18} />
            </button>
            <button
              onClick={() => handleShare('copy')}
              className="p-2 rounded-lg bg-gray-100 hover:bg-[#0d10d3] text-gray-600 hover:text-white transition-all"
            >
              <Link2 size={18} />
            </button>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            {post.body ? <PortableText value={post.body} /> : <p>No content available.</p>}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-3 mb-12 pb-12 border-b border-gray-200">
            <span className="flex items-center gap-2 text-gray-600 font-semibold mr-2">
              <Tag size={18} className="text-[#00f2ff]" />
              Categories:
            </span>
            {(post.categories || []).map((cat, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:border-[#0d10d3]/50 hover:text-gray-900 transition-all cursor-pointer"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Author Card */}
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0d10d3] to-[#00f2ff] flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 uppercase">
                {post.author ? post.author.charAt(0) : 'T'}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Written by {post.author || 'Tareez Tech Team'}</h3>
                <p className="text-gray-600 mb-4">
                  Expert team at Tareez Tech specializing in digital marketing and web development. 
                  Helping businesses grow through innovative digital solutions.
                </p>
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 text-[#00f2ff] hover:text-[#0d10d3] font-semibold text-sm transition-colors"
                >
                  Get in touch <ArrowLeft size={16} className="rotate-180" />
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative overflow-hidden bg-gradient-to-r from-[#0d10d3] to-[#00f2ff] rounded-3xl p-8 md:p-12 text-center text-white mb-12">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '32px 32px',
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Let's discuss how our digital marketing and web development services can help you achieve your goals.
              </p>
              <Link
                to="/#contact"
                className="inline-block px-10 py-4 bg-white text-[#0d10d3] rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </motion.article>

        {/* Recent Posts */}
        {recentPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentPosts.map((recentPost) => (
                <Link
                  key={recentPost.id}
                  to={`/blog/${recentPost.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100">
                    <div className="h-40 bg-gradient-to-br from-[#0d10d3] to-[#00f2ff] flex items-center justify-center relative overflow-hidden">
                      {recentPost.mainImage ? (
                        <img 
                          src={urlFor(recentPost.mainImage).url()} 
                          alt={recentPost.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-white text-xl font-bold opacity-20 relative z-10">
                          {recentPost.category || 'Blog'}
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-gray-500">{formatDate(recentPost.publishedAt)}</span>
                      <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2 group-hover:text-[#0d10d3] transition-colors line-clamp-2">
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
          color: #1f2937;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }
        .prose h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1f2937;
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
