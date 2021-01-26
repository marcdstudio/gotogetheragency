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
      description:
        'Thumbnail image that appears on the home page selected work section.',
      name: 'thumbnail',
      type: 'a11yImage',
    },
    {
      title: 'Poster Image',
      description:
        'Prmary image that appears in the following places: Home page featured project thumbnail image, Work page thumbnail image, Project page header image and related project thumbnail image.',
      name: 'poster',
      type: 'a11yImage',
    },
    {
      title: 'Poster Video',
      description:
        'If a video is added, it will show in place of the Poster Image on the home page if this project is the featured project.',
      name: 'projectVideo',
      type: 'video',
    },
    {
      title: 'Is project live?',
      description: 'Turn this on if the project should be visible to visitors',
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
