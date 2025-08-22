export default {
  name: 'teachingStuff',
  title: 'Teachers Picture',
  type: 'document',
  fields: [
    {
      name: 'teaching staff',
      title: 'Teaching  Staff Image',
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
      title: title || 'teaching stuff',
      subtitle: subtitle
        ? `${subtitle.substring(0, 60)}${subtitle.length > 60 ? '...' : ''}`
        : 'No subtitle',
      media,
    }
  },
}

};
