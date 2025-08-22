// schemas/programImages.js
export default {
  name: 'programImages',
  title: 'Academic Program Images',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', initialValue: 'Academic Program Images', readOnly: true },
    { 
      name: 'foundationPhase', 
      title: 'Foundation Phase Image (Grade RRR - 3)', 
      type: 'image', 
      options: { hotspot: true } 
    },
    { 
      name: 'intermediatePhase', 
      title: 'Intermediate Phase Image (Grade 4 - 6)', 
      type: 'image', 
      options: { hotspot: true } 
    },
    { 
      name: 'seniorPhase', 
      title: 'Senior Phase Image (Grade 7 - 12)', 
      type: 'image', 
      options: { hotspot: true } 
    }
  ],
  preview: {
    select: {
      title: 'title',
      foundationImage: 'foundationPhase',
      intermediateImage: 'intermediatePhase',
      seniorImage: 'seniorPhase'
    },
    prepare(selection: { title?: string; foundationImage?: any; intermediateImage?: any; seniorImage?: any }) {
      const { title, foundationImage, intermediateImage, seniorImage } = selection
      const imageCount = [foundationImage, intermediateImage, seniorImage].filter(Boolean).length
      return {
        title: title || 'Academic Program Images',
        subtitle: `${imageCount} of 3 program images uploaded`,
        media: foundationImage || intermediateImage || seniorImage
      }
    }
  }
}
