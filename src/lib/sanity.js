import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Replace 'YOUR_PROJECT_ID' with your actual Sanity Project ID once created
export const client = createClient({
  projectId: 'g5bfkjdx',
  dataset: 'production',
  useCdn: false, // set to `false` to bypass the edge cache and get fresh data
  apiVersion: '2024-05-14', // use current date (YYYY-MM-DD) to target the latest API version
});

// Helper to easily get image URLs
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
