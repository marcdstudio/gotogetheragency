import toPlainText from '../toPlainText'

export default {
  title: 'Block Text',
  name: 'bodyText',
  type: 'object',
  fields: [
    {
      title: 'text',
      name: 'text',
      type: 'blockText',
    },
    {
      title: 'Is text wide',
      name: 'isWide',
      type: 'boolean',
    },
    {
      title: 'Is text quote',
      name: 'isQuote',
      type: 'boolean',
    },
    {
      title: 'Byline',
      description: 'Add byline if text is quote',
      name: 'byline',
      type: 'string',
    },
  ],
  preview: {
    select: {
      caption: 'caption',
      media: 'image.image',
    },
    prepare: ({ caption, ...selection }) => ({
      ...selection,
      title: 'Block Text',
      subtitle: caption && caption.content ? toPlainText(caption.content) : '',
    }),
  },
}
