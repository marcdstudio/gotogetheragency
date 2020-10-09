export default {
  title: 'Image',
  name: 'articleImage',
  type: 'object',
  options: {
    collapsible: false,
  },
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Alt Text',
      name: 'altText',
      type: 'string',
      description:
        'A short description of the image that is important for accessibility and SEO',
      validation: (Rule) => Rule.max(125).required(),
    },
    {
      title: 'Is image wide?',
      name: 'wideImg',
      type: 'boolean',
    },
  ],
}
