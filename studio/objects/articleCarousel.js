export default {
  title: 'Carousel',
  name: 'articleCarousel',
  type: 'object',
  options: {
    collapsible: false,
  },
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'array',
      validation: (Rule) => Rule.min(3),
      of: [{ type: 'a11yImage' }],
    },
    {
      title: 'Is Carousel?',
      name: 'carouselImg',
      type: 'boolean',
    },
  ],
}
