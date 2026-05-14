import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { client, urlFor } from '../lib/sanity';

const BlogSection = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dummy posts to show when Sanity has no posts yet
  const dummyPosts = [
    {
      _id: 'dummy-1',
      title: 'Revolutionizing Team Collaboration: The CollabNex Way',
      slug: { current: '#' },
      publishedAt: '2022-04-08',
      excerpt: 'Discover how CollabNex is changing the game in team collaboration, boosting productivity and sparking creativity.',
      mainImage: null,
    },
    {
      _id: 'dummy-2',
      title: 'Unleashing Creativity: How CollabNex Inspires Innovation',
      slug: { current: '#' },
      publishedAt: '2022-03-15',
      excerpt: 'Explore how CollabNex nurtures a culture of creativity, empowering teams to unleash their full innovative potential.',
      mainImage: null,
    },
    {
      _id: 'dummy-3',
      title: 'Efficiency Redefined: The Power of CollabNex Task Management',
      slug: { current: '#' },
      publishedAt: '2022-02-28',
      excerpt: 'Learn how CollabNex\'s task management features streamline workflows, increase efficiency, and keep projects on track.',
      mainImage: null,
    },
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(`*[_type == "post"] | order(publishedAt desc)[0...3]{
          _id,
          title,
          "slug": slug.current,
          publishedAt,
          excerpt,
          mainImage {
            asset->{
              _id,
              url
            }
          }
        }`);
        
        console.log('Fetched posts:', data); // Debug log
        
        // Use dummy posts if no posts in Sanity
        setRecentPosts(data.length > 0 ? data : dummyPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
        // Use dummy posts on error
        setRecentPosts(dummyPosts);
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
      <section className="py-20 bg-black">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-400">Loading blog posts...</p>
          </div>
        </div>
      </section>
    );
  }

  if (recentPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-black">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[2.5rem] md:text-[3rem] font-bold text-white mb-3 tracking-tight">
            Blog Articles
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Stay informed and inspired with our blog, featuring insightful<br />
            articles and updates on a variety of topics.
          </p>
        </motion.div>

        {/* Blog Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[950px] mx-auto"
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
                <div className="bg-white rounded-[1rem] overflow-hidden shadow-[0_2px_15px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.12)] transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-[130px] w-full overflow-hidden bg-gray-100">
                    <img 
                      src={
                        post.mainImage?.asset?.url 
                          ? post.mainImage.asset.url 
                          : post.mainImage 
                            ? urlFor(post.mainImage).width(400).height(260).url() 
                            : '/tech.jpg'
                      } 
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = '/tech.jpg';
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 pt-6 flex-1 flex flex-col">
                    {/* Date */}
                    <p className="text-[0.7rem] font-medium text-gray-400 mb-2 tracking-wide uppercase">
                      {formatDate(post.publishedAt)}
                    </p>

                    {/* Title */}
                    <h3 className="text-[1.05rem] font-bold text-gray-900 mb-2 leading-snug group-hover:text-[#4299e1] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-[0.8rem] line-clamp-3 flex-1">
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
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link 
            to="/blog"
            className="inline-block px-7 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
          >
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;

