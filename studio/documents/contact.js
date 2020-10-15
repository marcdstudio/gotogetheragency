export default {
  title: 'Contact',
  name: 'contact',
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
      title: 'Main Title',
      name: 'mainTitle',
      type: 'string',
    },
    {
      title: 'Thank You Message',
      name: 'message',
      type: 'blockText',
    },
  ],
}
