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
    select: {},
    prepare: () => ({
      title: 'Image 2 Up',
    }),
  },
}
