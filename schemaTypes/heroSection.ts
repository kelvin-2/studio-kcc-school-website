export default {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'subtitle', title: 'Subtitle', type: 'text' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image'
    },
    prepare(selection: { title?: string; subtitle?: string; media?: any }) {
      const { title, subtitle, media } = selection
      return {
        title: title || 'Hero Section',
        subtitle: subtitle ? `${subtitle.substring(0, 60)}${subtitle.length > 60 ? '...' : ''}` : 'No subtitle',
        media: media
      }
    }
  }
};