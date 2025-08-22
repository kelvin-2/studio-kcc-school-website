export default {
  name: 'boardingTransport',
  title: 'Boarding & Transport',
  type: 'document',
  fields: [
    {
      name: 'boardingImage',
      title: 'Boarding House Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'transportImage',
      title: 'Transport Image',
      type: 'image',
      options: { hotspot: true },
    }
  ],
 preview: {
  select: {
    title: 'title',
    subtitle: 'subtitle',
    media: 'image',
  },
  prepare(selection: { title?: string; subtitle?: string; media?: unknown }) {
    const { title, subtitle, media } = selection
    return {
      title: title || 'Boarding & Transport',
      subtitle: subtitle
        ? `${subtitle.substring(0, 60)}${subtitle.length > 60 ? '...' : ''}`
        : 'No subtitle',
      media,
    }
  },
}

};
