export default {
  title: 'Large Text Block',
  name: 'largeTextBlock',
  type: 'object',
  fields: [
    {
      title: 'Content',
      name: 'content',
      type: 'basicText',
    },
    {
      title: 'Is text large?',
      description: 'Turn this on to make text H1 (Default H2)',
      name: 'textLarge',
      type: 'boolean',
    },
    {
      title: 'Project Link',
      description: 'Add a link if this block includes one',
      name: 'linkUrl',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'project' },
            { type: 'contact' },
            { type: 'about' },
            { type: 'home' },
            { type: 'blog' },
          ],
        },
      ],
    },
    {
      title: 'Link Text',
      description: 'Add the link text',
      name: 'linkText',
      type: 'string',
    },
  ],
  preview: {
    select: {
      caption: 'heroButtonText',
      media: 'image.image.asset->url',
    },
    prepare: ({ caption, ...selection }) => ({
      ...selection,
      title: 'Large Text Block',
      subtitle: caption && caption.content ? toPlainText(caption.content) : '',
    }),
  },
}
