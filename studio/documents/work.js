export default {
  title: 'Work',
  name: 'work',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Case Studies',
      name: 'allProjects',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'project' } }],
    },
  ],
}
