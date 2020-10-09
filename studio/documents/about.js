export default {
  title: 'Page',
  name: 'about',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'You Module',
      name: 'youText',
      type: 'blockText',
    },
    {
      title: 'Us Module',
      name: 'usText',
      type: 'blockText',
    },
    {
      title: 'Icon Blocks',
      name: 'text3Up',
      type: 'array',
      of: [{ type: 'textBlockIcon' }],
      validation: (Rule) => Rule.min(3).required(),
    },
    {
      title: 'Large Text Block',
      name: 'largeTextBlock',
      type: 'largeTextBlock',
    },
    {
      title: 'Services Left Column',
      name: 'servicesLeft',
      type: 'array',
      of: [{ type: 'blockText' }],
    },
    {
      title: 'Services Right Column',
      name: 'servicesRight',
      type: 'array',
      of: [{ type: 'blockText' }],
    },
  ],
}
