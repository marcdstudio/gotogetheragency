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
    // {
    //   title: 'Theme Color',
    //   name: 'themeColor',
    //   type: 'color',
    //   options: {
    //     disableAlpha: true,
    //   },
    // },
    {
      title: 'Thumbnail Image',
      description: 'Appears when hovering a project title on the homepage.',
      name: 'thumbnail',
      type: 'a11yImage',
    },
    {
      title: 'Is thumb vertical',
      name: 'thumbOr',
      type: 'boolean',
    },
    {
      title: 'Intro Text',
      name: 'introText',
      type: 'shortText',
    },
    {
      title: 'Roles',
      name: 'roles',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Press enter after each role to create a tag',
      options: {
        layout: 'tags',
      },
    },
    {
      title: 'Year',
      name: 'year',
      type: 'string',
    },
    {
      title: 'Management',
      name: 'management',
      type: 'shortText',
    },
    {
      title: 'Team',
      name: 'team',
      type: 'shortText',
    },
    {
      title: 'Content Modules',
      name: 'contentModules',
      type: 'contentModules',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail.image',
    },
  },
}
