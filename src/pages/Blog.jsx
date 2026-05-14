import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { client, urlFor } from '../lib/sanity';

const Blog = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

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
    return new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
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
      <div style={{ minHeight: '100vh', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#999', fontSize: 18 }}>Loading posts…</p>
      </div>
    );
  }

  const featuredPost = allPosts[0];
  const latestSidebar = allPosts.slice(1, 5);
  const gridPosts = allPosts.slice(1);

  // Pagination
  const totalPages = Math.ceil(gridPosts.length / postsPerPage);
  const paginatedPosts = gridPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '140px 24px 80px' }}>

        {/* ── Hero Section: Featured + Latest Sidebar ── */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'grid',
              gridTemplateColumns: '1.4fr 1fr',
              gap: 32,
              marginBottom: 64,
            }}
          >
            {/* Featured Post */}
            <Link to={`/blog/${featuredPost.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: 16,
                  overflow: 'hidden',
                  height: '100%',
                  minHeight: 380,
                  background: '#111',
                  cursor: 'pointer',
                }}
              >
                {featuredPost.mainImage && (
                  <img
                    src={urlFor(featuredPost.mainImage).width(900).height(500).url()}
                    alt={featuredPost.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.7 }}
                  />
                )}
                {/* Overlay gradient */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
                }} />
                {/* Content */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 28 }}>
                  {featuredPost.category && (
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
                      padding: '5px 14px', borderRadius: 999, fontSize: 12, fontWeight: 600,
                      color: '#fff', marginBottom: 12,
                    }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#0d10d3' }} />
                      {featuredPost.category}
                    </span>
                  )}
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: 700, color: '#fff',
                    lineHeight: 1.3, marginBottom: 10, maxWidth: 500,
                  }}>
                    {featuredPost.title}
                  </h2>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>
                    {formatDate(featuredPost.publishedAt)} &nbsp;•&nbsp; {getReadTime(featuredPost.body)}
                  </p>
                </div>
              </div>
            </Link>

            {/* Latest Posts Sidebar */}
            <div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: '#1a202c', marginBottom: 20 }}>
                Latest post
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {latestSidebar.map((p) => (
                  <Link
                    key={p._id}
                    to={`/blog/${p.slug}`}
                    style={{ textDecoration: 'none', color: 'inherit', display: 'flex', gap: 14, alignItems: 'flex-start' }}
                  >
                    {/* Thumbnail */}
                    <div style={{
                      width: 80, height: 80, minWidth: 80, borderRadius: 10, overflow: 'hidden',
                      background: '#f0f0f0',
                    }}>
                      {p.mainImage ? (
                        <img
                          src={urlFor(p.mainImage).width(160).height(160).url()}
                          alt={p.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                      ) : (
                        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #0d10d3, #00f2ff)', opacity: 0.3 }} />
                      )}
                    </div>
                    {/* Info */}
                    <div style={{ flex: 1 }}>
                      <h4 style={{
                        fontSize: 14, fontWeight: 700, color: '#1a202c', lineHeight: 1.4, marginBottom: 6,
                        display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                      }}>
                        {p.title}
                      </h4>
                      <p style={{ fontSize: 12, color: '#a0aec0' }}>
                        {formatDate(p.publishedAt)} &nbsp;•&nbsp; {getReadTime(p.body)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* ── All Posts Grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 style={{ fontSize: 22, fontWeight: 700, color: '#1a202c', marginBottom: 24 }}>
            All articles
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 28,
          }}>
            {paginatedPosts.map((post) => (
              <Link
                key={post._id}
                to={`/blog/${post.slug}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div
                  style={{
                    background: '#fff',
                    borderRadius: 14,
                    overflow: 'hidden',
                    border: '1px solid #edf2f7',
                    transition: 'box-shadow 0.3s, transform 0.3s',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Image */}
                  <div style={{ height: 200, overflow: 'hidden', background: '#f5f5f5' }}>
                    {post.mainImage ? (
                      <img
                        src={urlFor(post.mainImage).width(600).height(400).url()}
                        alt={post.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s' }}
                        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                      />
                    ) : (
                      <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #0d10d3, #00f2ff)', opacity: 0.15 }} />
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ padding: 20, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Category */}
                    {post.category && (
                      <div style={{ marginBottom: 10 }}>
                        <span style={{
                          display: 'inline-flex', alignItems: 'center', gap: 6,
                          fontSize: 11, fontWeight: 600, color: '#0d10d3',
                          background: '#f0f0ff', padding: '4px 10px', borderRadius: 999,
                        }}>
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0d10d3' }} />
                          {post.category}
                        </span>
                      </div>
                    )}

                    {/* Title */}
                    <h3 style={{
                      fontSize: 17, fontWeight: 700, color: '#1a202c', lineHeight: 1.4, marginBottom: 8,
                      display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                    }}>
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p style={{
                      fontSize: 13, color: '#718096', lineHeight: 1.6, flex: 1,
                      display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                    }}>
                      {post.excerpt}
                    </p>

                    {/* Date + Read Time */}
                    <p style={{ fontSize: 12, color: '#a0aec0', marginTop: 14 }}>
                      {formatDate(post.publishedAt)} &nbsp;•&nbsp; {getReadTime(post.body)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            marginTop: 56, paddingTop: 32, borderTop: '1px solid #edf2f7',
          }}>
            {/* Prev */}
            <button
              onClick={() => { setCurrentPage(p => Math.max(1, p - 1)); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
              disabled={currentPage === 1}
              style={{
                width: 40, height: 40, borderRadius: '50%', border: '1px solid #e2e8f0',
                background: '#fff', cursor: currentPage === 1 ? 'default' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                opacity: currentPage === 1 ? 0.4 : 1,
                fontSize: 18, color: '#1a202c',
              }}
            >
              ←
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => { setCurrentPage(page); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
                style={{
                  width: 40, height: 40, borderRadius: '50%',
                  border: page === currentPage ? 'none' : '1px solid #e2e8f0',
                  background: page === currentPage ? '#1a202c' : '#fff',
                  color: page === currentPage ? '#fff' : '#4a5568',
                  fontSize: 14, fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                {page}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() => { setCurrentPage(p => Math.min(totalPages, p + 1)); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
              disabled={currentPage === totalPages}
              style={{
                width: 40, height: 40, borderRadius: '50%', border: '1px solid #e2e8f0',
                background: '#fff', cursor: currentPage === totalPages ? 'default' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                opacity: currentPage === totalPages ? 0.4 : 1,
                fontSize: 18, color: '#1a202c',
              }}
            >
              →
            </button>
          </div>
        )}

      </div>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 768px) {
          [style*="gridTemplateColumns: 1.4fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;
