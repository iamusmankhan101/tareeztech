import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { client, urlFor } from '../lib/sanity';

const Blog = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    client.fetch(`*[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      "category": categories[0]->title,
      publishedAt,
      excerpt,
      body,
      mainImage
    }`).then((data) => {
      setAllPosts(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return 'Recently';
    return new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getReadTime = (body) => {
    if (!body || !Array.isArray(body)) return '5 min read';
    const text = body
      .filter(b => b._type === 'block' && b.children)
      .map(b => b.children.map(c => c.text).join('')).join(' ');
    const mins = Math.ceil(text.split(/\s+/).length / 200) || 1;
    return `${mins} min read`;
  };

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.spinner} />
        <p style={{ color: '#a0aec0', fontSize: 16, marginTop: 16 }}>Loading posts…</p>
      </div>
    );
  }

  // Decide layout based on post count
  const hasEnoughForHero = allPosts.length >= 4;
  const featuredPost = hasEnoughForHero ? allPosts[0] : null;
  const sidebarPosts = hasEnoughForHero ? allPosts.slice(1, 5) : [];
  const gridPosts = hasEnoughForHero ? allPosts.slice(1) : allPosts;

  return (
    <div style={{ minHeight: '100vh', background: '#fafafa' }}>

      {/* Page Header */}
      <div style={{ background: '#fff', borderBottom: '1px solid #edf2f7' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '140px 24px 40px' }}>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, color: '#1a202c', marginBottom: 8 }}
          >
            Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 16, color: '#718096', maxWidth: 480 }}
          >
            Insights on digital marketing, web development, and growing your business online.
          </motion.p>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px 80px' }}>

        {/* ── Hero Section (only if 4+ posts) ── */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 28, marginBottom: 56 }}
          >
            {/* Featured */}
            <Link to={`/blog/${featuredPost.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={styles.heroCard}>
                {featuredPost.mainImage && (
                  <img
                    src={urlFor(featuredPost.mainImage).width(900).height(500).url()}
                    alt={featuredPost.title}
                    style={styles.heroImage}
                  />
                )}
                <div style={styles.heroOverlay} />
                <div style={styles.heroContent}>
                  {featuredPost.category && (
                    <span style={styles.heroBadge}>
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#0d10d3' }} />
                      {featuredPost.category}
                    </span>
                  )}
                  <h2 style={styles.heroTitle}>{featuredPost.title}</h2>
                  <p style={styles.heroMeta}>
                    {formatDate(featuredPost.publishedAt)} &nbsp;•&nbsp; {getReadTime(featuredPost.body)}
                  </p>
                </div>
              </div>
            </Link>

            {/* Sidebar */}
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#1a202c', marginBottom: 18 }}>Latest posts</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {sidebarPosts.map((p) => (
                  <Link key={p._id} to={`/blog/${p.slug}`} style={styles.sidebarLink}>
                    <div style={styles.sidebarThumb}>
                      {p.mainImage ? (
                        <img src={urlFor(p.mainImage).width(160).height(160).url()} alt={p.title} style={styles.sidebarImg} />
                      ) : (
                        <div style={{ width: '100%', height: '100%', background: '#e2e8f0' }} />
                      )}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h4 style={styles.sidebarTitle}>{p.title}</h4>
                      <p style={styles.sidebarMeta}>{formatDate(p.publishedAt)} &nbsp;•&nbsp; {getReadTime(p.body)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* ── All Articles Grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: hasEnoughForHero ? 0.2 : 0 }}
        >
          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#1a202c', marginBottom: 24 }}>
            {hasEnoughForHero ? 'All articles' : 'Articles'}
          </h3>

          {gridPosts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <p style={{ fontSize: 16, color: '#a0aec0', marginBottom: 8 }}>No blog posts yet.</p>
              <p style={{ fontSize: 14, color: '#cbd5e0' }}>Check back soon for new content!</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
              {gridPosts.map((post) => (
                <PostCard key={post._id} post={post} formatDate={formatDate} getReadTime={getReadTime} />
              ))}
            </div>
          )}
        </motion.div>

      </div>
    </div>
  );
};

/* ── Post Card Component ── */
const PostCard = ({ post, formatDate, getReadTime }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div
        style={{
          ...styles.card,
          boxShadow: hovered ? '0 8px 30px rgba(0,0,0,0.08)' : '0 1px 3px rgba(0,0,0,0.04)',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image */}
        <div style={styles.cardImageWrap}>
          {post.mainImage ? (
            <img
              src={urlFor(post.mainImage).width(600).height(400).url()}
              alt={post.title}
              style={{
                ...styles.cardImage,
                transform: hovered ? 'scale(1.05)' : 'scale(1)',
              }}
            />
          ) : (
            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #edf2f7, #e2e8f0)' }} />
          )}
        </div>

        {/* Content */}
        <div style={styles.cardContent}>
          {post.category && (
            <span style={styles.cardBadge}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0d10d3' }} />
              {post.category}
            </span>
          )}
          <h3 style={styles.cardTitle}>{post.title}</h3>
          {post.excerpt && <p style={styles.cardExcerpt}>{post.excerpt}</p>}
          <p style={styles.cardMeta}>
            {formatDate(post.publishedAt)} &nbsp;•&nbsp; {getReadTime(post.body)}
          </p>
        </div>
      </div>
    </Link>
  );
};

/* ── Styles ── */
const styles = {
  loadingContainer: {
    minHeight: '100vh', background: '#fff', display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
  },
  spinner: {
    width: 32, height: 32, border: '3px solid #edf2f7', borderTopColor: '#0d10d3',
    borderRadius: '50%', animation: 'spin 0.8s linear infinite',
  },

  // Hero
  heroCard: {
    position: 'relative', borderRadius: 16, overflow: 'hidden',
    height: '100%', minHeight: 360, background: '#1a202c', cursor: 'pointer',
  },
  heroImage: { width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.75 },
  heroOverlay: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)',
  },
  heroContent: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 28 },
  heroBadge: {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
    padding: '5px 14px', borderRadius: 999, fontSize: 12, fontWeight: 600, color: '#fff', marginBottom: 12,
  },
  heroTitle: {
    fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)', fontWeight: 700, color: '#fff',
    lineHeight: 1.3, marginBottom: 10, maxWidth: 480,
  },
  heroMeta: { fontSize: 13, color: 'rgba(255,255,255,0.6)' },

  // Sidebar
  sidebarLink: {
    textDecoration: 'none', color: 'inherit', display: 'flex', gap: 12,
    alignItems: 'flex-start', padding: '10px 0', borderBottom: '1px solid #f0f0f0',
  },
  sidebarThumb: {
    width: 72, height: 72, minWidth: 72, borderRadius: 10, overflow: 'hidden', background: '#f5f5f5',
  },
  sidebarImg: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  sidebarTitle: {
    fontSize: 14, fontWeight: 700, color: '#1a202c', lineHeight: 1.4, marginBottom: 4,
    display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
  },
  sidebarMeta: { fontSize: 12, color: '#a0aec0' },

  // Card
  card: {
    background: '#fff', borderRadius: 14, overflow: 'hidden',
    border: '1px solid #edf2f7', transition: 'all 0.3s ease',
    height: '100%', display: 'flex', flexDirection: 'column',
  },
  cardImageWrap: { height: 200, overflow: 'hidden', background: '#f7fafc' },
  cardImage: { width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s' },
  cardContent: { padding: 20, flex: 1, display: 'flex', flexDirection: 'column' },
  cardBadge: {
    display: 'inline-flex', alignItems: 'center', gap: 6, width: 'fit-content',
    fontSize: 11, fontWeight: 600, color: '#0d10d3',
    background: '#f0f0ff', padding: '4px 10px', borderRadius: 999, marginBottom: 10,
  },
  cardTitle: {
    fontSize: 17, fontWeight: 700, color: '#1a202c', lineHeight: 1.4, marginBottom: 8,
    display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
  },
  cardExcerpt: {
    fontSize: 13, color: '#718096', lineHeight: 1.6, flex: 1,
    display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
  },
  cardMeta: { fontSize: 12, color: '#a0aec0', marginTop: 14 },
};

export default Blog;
