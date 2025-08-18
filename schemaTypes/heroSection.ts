export default {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'subtitle', title: 'Subtitle', type: 'text' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
  ],
};
