export default {
  title: 'Project Section',
  name: 'projectSection',
  type: 'object',
  fields: [
    {
      title: 'Section Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Is Title Visible',
      description: 'Turn this on if the section has a visible title',
      name: 'isVisible',
      type: 'boolean',
    },
    {
      title: 'Is Title Sticky',
      description: 'Turn this on if the section has a sticky title',
      name: 'isSticky',
      type: 'boolean',
    },
    {
      title: 'Section Color',
      description: 'Hex code including # if the section has a background color',
      name: 'color',
      type: 'string',
    },
    {
      title: 'Content Modules',
      name: 'content',
      type: 'contentModules',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    // prepare: ({ caption, ...selection }) => ({
    //   ...selection,
    //   title: 'Project Section',
    //   subtitle: caption && caption.content ? toPlainText(caption.content) : '',
    // }),
  },
}
