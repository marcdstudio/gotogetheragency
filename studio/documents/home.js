export default {
  title: 'Page',
  name: 'home',
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
      title: 'Hero Text Block',
      name: 'heroText',
      type: 'largeTextBlock',
    },
    {
      title: 'Featured Project',
      name: 'featuredProject',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'project' } }],
      validation: (Rule) => Rule.required().length(1),
    },
    {
      title: 'Projects Left Column',
      name: 'homeProjectsLeft',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'project' } }],
    },
    {
      title: 'Projects Right Column',
      name: 'homeProjectsRight',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'project' } }],
    },
    {
      title: 'About Text Block',
      name: 'aboutText',
      type: 'largeTextBlock',
    },
    {
      title: 'Final Text Block',
      name: 'finalText',
      type: 'largeTextBlock',
    },
    {
      title: 'Contact Block',
      name: 'contactText',
      type: 'largeTextBlock',
    },
  ],
}
