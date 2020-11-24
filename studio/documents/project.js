export default {
  title: 'Project',
  name: 'project',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      description: 'Used in the URL for the project',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Thumbnail Image',
      description: 'Appears when hovering a project title on the homepage.',
      name: 'thumbnail',
      type: 'a11yImage',
    },
    {
      title: 'Poster Image',
      description: 'Appears when hovering a project title on the homepage.',
      name: 'poster',
      type: 'a11yImage',
    },
    {
      title: 'Is project live?',
      description: 'Turn this on if the project can be viewed',
      name: 'isLive',
      type: 'boolean',
    },
    {
      title: 'Intro Text',
      name: 'introText',
      type: 'shortText',
    },
    {
      title: 'Project Sections',
      name: 'projectSection',
      type: 'array',
      of: [{ type: 'projectSection' }, { type: 'fullBleedImage' }],
    },
    {
      title: 'Related Project Left',
      name: 'relatedProjectLeft',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'project' }],
        },
      ],
    },
    {
      title: 'Related Project Right',
      name: 'relatedProjectRight',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'project' }],
        },
      ],
    },
    {
      title: 'Contact Block',
      name: 'contactText',
      type: 'largeTextBlock',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail.image',
    },
  },
}
