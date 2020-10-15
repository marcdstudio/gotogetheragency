export default {
  title: 'Full Bleed Image',
  name: 'fullBleedImage',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Alt Text',
      name: 'alt',
      type: 'string',
      description:
        'A short description of the image that is important for accessibility and SEO',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      caption: 'caption',
      media: 'image',
    },
    prepare: ({ caption, ...selection }) => ({
      ...selection,
      title: 'Full Bleed',
      subtitle: caption && caption.content ? toPlainText(caption.content) : '',
    }),
  },
}
