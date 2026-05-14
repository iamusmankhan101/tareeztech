import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Tag } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { client, urlFor } from '../lib/sanity';

const BlogPost = () => {
  const { slug } = useParams();
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
        "author": author->{name, image},
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
    return (
      <div style={{ minHeight: '100vh', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 120 }}>
        <p style={{ color: '#999', fontSize: 18 }}>Loading…</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div style={{ minHeight: '100vh', background: '#fff', paddingTop: 140, textAlign: 'center' }}>
        <Tag size={32} style={{ color: '#ccc', marginBottom: 16 }} />
        <h1 style={{ fontSize: 32, fontWeight: 700, color: '#1a202c', marginBottom: 12 }}>Post Not Found</h1>
        <p style={{ color: '#718096', marginBottom: 24 }}>The blog post you're looking for doesn't exist.</p>
        <Link to="/blog" style={{ color: '#0d10d3', fontWeight: 600, textDecoration: 'none' }}>
          ← Back to Blog
        </Link>
      </div>
    );
  }

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const authorName = post.author?.name || 'Tareez Tech Team';
  const authorInitial = authorName.charAt(0).toUpperCase();

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      {/* Article Container */}
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '140px 24px 60px' }}>

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          style={{ marginBottom: 32 }}
        >
          <Link
            to="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              color: '#718096',
              fontSize: 14,
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#1a202c')}
            onMouseLeave={e => (e.currentTarget.style.color = '#718096')}
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2rem, 5vw, 2.75rem)',
            fontWeight: 700,
            color: '#1a202c',
            lineHeight: 1.25,
            marginBottom: 32,
            letterSpacing: '-0.02em',
          }}
        >
          {post.title}
        </motion.h1>

        {/* Hero area: Image + Meta side by side */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: post.mainImage ? '1fr 200px' : '1fr',
            gap: 32,
            marginBottom: 40,
            alignItems: 'start',
          }}
        >
          {/* Featured Image */}
          {post.mainImage && (
            <div
              style={{
                width: '100%',
                aspectRatio: '16/10',
                borderRadius: 12,
                overflow: 'hidden',
                background: '#f5f5f5',
              }}
            >
              <img
                src={urlFor(post.mainImage).width(800).height(500).url()}
                alt={post.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          )}

          {/* Meta Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div>
                <p style={{ fontSize: 12, fontWeight: 600, color: '#a0aec0', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
                  Category
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {post.categories.map((cat, i) => (
                    <span
                      key={i}
                      style={{
                        display: 'inline-block',
                        padding: '5px 12px',
                        fontSize: 12,
                        fontWeight: 600,
                        color: '#4a5568',
                        background: '#f7fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: 6,
                      }}
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author */}
            <div>
              <p style={{ fontSize: 12, fontWeight: 600, color: '#a0aec0', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
                Written by
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                {/* Author Avatar */}
                {post.author?.image ? (
                  <img
                    src={urlFor(post.author.image).width(80).height(80).url()}
                    alt={authorName}
                    style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }}
                  />
                ) : (
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #0d10d3, #00f2ff)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: 16,
                      fontWeight: 700,
                    }}
                  >
                    {authorInitial}
                  </div>
                )}
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#1a202c', marginBottom: 2 }}>{authorName}</p>
                  <p style={{ fontSize: 12, color: '#a0aec0' }}>{formatDate(post.publishedAt)}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <hr style={{ border: 'none', borderTop: '1px solid #edf2f7', marginBottom: 36 }} />

        {/* Article Body */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="blog-article-body"
        >
          {post.body ? <PortableText value={post.body} /> : <p style={{ color: '#718096' }}>No content available.</p>}
        </motion.article>

        {/* Tags Footer */}
        {post.categories && post.categories.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, marginTop: 48, paddingTop: 24, borderTop: '1px solid #edf2f7' }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#a0aec0', marginRight: 4 }}>Tags:</span>
            {post.categories.map((cat, i) => (
              <span
                key={i}
                style={{
                  padding: '4px 12px',
                  fontSize: 12,
                  fontWeight: 500,
                  color: '#4a5568',
                  background: '#f7fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: 999,
                }}
              >
                {cat}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div
          style={{
            marginTop: 48,
            padding: '40px 32px',
            background: 'linear-gradient(135deg, #0d10d3, #00f2ff)',
            borderRadius: 20,
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 10 }}>Ready to Transform Your Business?</h2>
          <p style={{ fontSize: 15, opacity: 0.9, marginBottom: 20, maxWidth: 480, margin: '0 auto 20px' }}>
            Let's discuss how our digital marketing and web development services can help you achieve your goals.
          </p>
          <Link
            to="/#contact"
            style={{
              display: 'inline-block',
              padding: '12px 32px',
              background: '#fff',
              color: '#0d10d3',
              fontSize: 14,
              fontWeight: 700,
              borderRadius: 999,
              textDecoration: 'none',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px 80px' }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#1a202c', marginBottom: 24 }}>Recent Posts</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
            {recentPosts.map((rp) => (
              <Link
                key={rp._id}
                to={`/blog/${rp.slug}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div
                  style={{
                    background: '#fff',
                    borderRadius: 12,
                    overflow: 'hidden',
                    border: '1px solid #edf2f7',
                    transition: 'box-shadow 0.3s, transform 0.3s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ height: 120, background: '#f0f0f0', overflow: 'hidden' }}>
                    {rp.mainImage ? (
                      <img
                        src={urlFor(rp.mainImage).width(400).height(250).url()}
                        alt={rp.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                    ) : (
                      <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #0d10d3, #00f2ff)', opacity: 0.6 }} />
                    )}
                  </div>
                  <div style={{ padding: 14 }}>
                    <p style={{ fontSize: 11, color: '#a0aec0', marginBottom: 6 }}>{formatDate(rp.publishedAt)}</p>
                    <h3 style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: '#1a202c',
                      lineHeight: 1.35,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}>
                      {rp.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Article Styles */}
      <style>{`
        .blog-article-body p {
          font-size: 16px;
          line-height: 1.8;
          color: #4a5568;
          margin-bottom: 1.5em;
        }
        .blog-article-body h2 {
          font-size: 1.6rem;
          font-weight: 700;
          color: #1a202c;
          margin-top: 2.5em;
          margin-bottom: 0.75em;
          line-height: 1.3;
        }
        .blog-article-body h3 {
          font-size: 1.3rem;
          font-weight: 700;
          color: #1a202c;
          margin-top: 2em;
          margin-bottom: 0.6em;
          line-height: 1.35;
        }
        .blog-article-body ul,
        .blog-article-body ol {
          padding-left: 1.5em;
          margin-bottom: 1.5em;
        }
        .blog-article-body li {
          font-size: 16px;
          line-height: 1.8;
          color: #4a5568;
          margin-bottom: 0.5em;
        }
        .blog-article-body strong {
          color: #1a202c;
          font-weight: 700;
        }
        .blog-article-body em {
          color: #4a5568;
        }
        .blog-article-body a {
          color: #0d10d3;
          text-decoration: underline;
        }
        .blog-article-body a:hover {
          color: #0a0da8;
        }
        .blog-article-body blockquote {
          border-left: 3px solid #0d10d3;
          padding-left: 1em;
          margin: 1.5em 0;
          color: #4a5568;
          font-style: italic;
        }
        .blog-article-body img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 1.5em 0;
        }
        @media (max-width: 640px) {
          .blog-article-body h2 { font-size: 1.35rem; }
          .blog-article-body h3 { font-size: 1.15rem; }
        }
      `}</style>
    </div>
  );
};

export default BlogPost;
