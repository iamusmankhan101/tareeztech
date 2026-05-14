import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { client, urlFor } from '../lib/sanity';

const PLACEHOLDER_POSTS = [
  {
    _id: 'placeholder-1',
    title: 'Revolutionizing Team Collaboration: The CollabNex Way',
    slug: '',
    publishedAt: '2022-04-08',
    excerpt: 'Discover how CollabNex is changing the game in team collaboration, boosting productivity and sparking creativity.',
    mainImage: null,
  },
  {
    _id: 'placeholder-2',
    title: 'Unleashing Creativity: How CollabNex Inspires Innovation',
    slug: '',
    publishedAt: '2022-03-15',
    excerpt: 'Explore how CollabNex nurtures a culture of creativity, empowering teams to unleash their full innovative potential.',
    mainImage: null,
  },
  {
    _id: 'placeholder-3',
    title: 'Efficiency Redefined: The Power of CollabNex Task Management',
    slug: '',
    publishedAt: '2022-02-28',
    excerpt: "Learn how CollabNex's task management features streamline workflows, increase efficiency, and keep projects on track.",
    mainImage: null,
  },
];

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] | order(publishedAt desc)[0...3]{
          _id,
          title,
          "slug": slug.current,
          publishedAt,
          excerpt,
          mainImage
        }`
      )
      .then((data) => {
        // Always ensure exactly 3 cards
        const merged = [...data];
        let i = 0;
        while (merged.length < 3) {
          merged.push(PLACEHOLDER_POSTS[i]);
          i++;
        }
        setPosts(merged);
      })
      .catch(() => {
        setPosts(PLACEHOLDER_POSTS);
      })
      .finally(() => setLoading(false));
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
        <div style={{ textAlign: 'center', color: '#999' }}>Loading…</div>
      </section>
    );
  }

  return (
    <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: 56 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#1a202c',
              marginBottom: 12,
              letterSpacing: '-0.02em',
            }}
          >
            Blog Articles
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#718096',
              maxWidth: 520,
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Stay informed and inspired with our blog, featuring insightful
            articles and updates on a variety of topics.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 28,
            maxWidth: 960,
            margin: '0 auto',
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {posts.map((post) => (
            <motion.div
              key={post._id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <BlogCard post={post} formatDate={formatDate} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All */}
        <motion.div
          style={{ textAlign: 'center', marginTop: 48 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/blog"
            style={{
              display: 'inline-block',
              padding: '12px 32px',
              background: '#1a202c',
              color: '#fff',
              fontSize: 14,
              fontWeight: 600,
              borderRadius: 999,
              textDecoration: 'none',
              transition: 'background 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#2d3748')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#1a202c')}
          >
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

/* ── Individual Blog Card ────────────────────────────────── */
const BlogCard = ({ post, formatDate }) => {
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(600).height(400).url()
    : '/tech.jpg';

  const Wrapper = post.slug
    ? ({ children }) => (
        <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
          {children}
        </Link>
      )
    : ({ children }) => <div style={{ height: '100%' }}>{children}</div>;

  return (
    <Wrapper>
      <div
        style={{
          background: '#fff',
          borderRadius: 24,
          padding: 16,
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'box-shadow 0.3s, transform 0.3s',
          cursor: post.slug ? 'pointer' : 'default',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.12)';
          e.currentTarget.style.transform = 'translateY(-4px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        {/* Image */}
        <div
          style={{
            width: '100%',
            height: 200,
            borderRadius: 16,
            overflow: 'hidden',
            marginBottom: 20,
            background: '#f0f0f0',
          }}
        >
          <img
            src={imageUrl}
            alt={post.title}
            onError={(e) => {
              e.target.src = '/tech.jpg';
            }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.5s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
        </div>

        {/* Text Content */}
        <div style={{ padding: '0 4px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Date */}
          <p
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: '#a0aec0',
              marginBottom: 10,
              letterSpacing: '0.02em',
            }}
          >
            {formatDate(post.publishedAt)}
          </p>

          {/* Title */}
          <h3
            style={{
              fontSize: 19,
              fontWeight: 700,
              color: '#1a202c',
              marginBottom: 10,
              lineHeight: 1.35,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p
            style={{
              fontSize: 14,
              color: '#718096',
              lineHeight: 1.6,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              flex: 1,
            }}
          >
            {post.excerpt}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default BlogSection;
