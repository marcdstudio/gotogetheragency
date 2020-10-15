export default {
  title: 'Text with Title',
  name: 'blockText',
  type: 'object',
  options: {
    collapsible: false,
  },
  fields: [
    {
      title: 'Title',
      name: 'blockTitle',
      type: 'string',
    },
    {
      title: 'Main Content',
      name: 'blockText',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Title', value: 'title' },
            { title: 'Title Centered', value: 'tcntr' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {},
        },
      ],
    },
  ],
}
