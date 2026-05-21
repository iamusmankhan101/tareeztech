import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'g5bfkjdx',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-05-14',
});

console.log('Testing Blog.jsx query...');
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
  console.log('SUCCESS! Blog.jsx query returned:', data.length, 'posts.');
  console.log('Data:', JSON.stringify(data, null, 2));
}).catch((err) => {
  console.error('ERROR running Blog.jsx query:', err);
});
