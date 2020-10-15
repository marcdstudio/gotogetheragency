import toPlainText from '../toPlainText'

export default {
  title: 'Image 2 Up',
  name: 'image2Up',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'imageLeft',
      type: 'a11yImage',
    },
    {
      title: 'Image',
      name: 'imageRight',
      type: 'a11yImage',
    },
  ],
  preview: {
    select: {
      caption: 'caption',
      media: 'imageLeft.image',
    },
    prepare: ({ caption, ...selection }) => ({
      ...selection,
      title: 'Image 2 Up',
      subtitle: caption && caption.content ? toPlainText(caption.content) : '',
    }),
  },
}
