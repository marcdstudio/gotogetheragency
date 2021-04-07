export default {
  title: 'Article',
  name: 'article',
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
      title: 'Author',
      name: 'author',
      type: 'string',
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'text',
    },
    {
      title: 'Share Description',
      name: 'sharing',
      type: 'text',
    },
    {
      name: 'allTags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
    },
    {
      title: 'Date',
      name: 'date',
      type: 'datetime',
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      title: 'Poster Image',
      name: 'poster',
      type: 'a11yImage',
    },
    {
      title: 'Main Content',
      name: 'aboutContent',
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
            { title: '', value: 'blockquote' },
          ],
          marks: {
            annotations: [
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal link',
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    title: 'Reference',
                    to: [{ type: 'article' }, { type: 'project' }],
                  },
                ],
              },
              {
                name: 'link',
                type: 'object',
                title: 'External link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                  {
                    title: 'Open in new tab',
                    name: 'blank',
                    description:
                      'Read https://css-tricks.com/use-target_blank/',
                    type: 'boolean',
                  },
                ],
              },
            ],
          },
        },
        { type: 'articleImage' },
        { type: 'spacer' },
        { type: 'video' },
      ],
    },
    {
      title: 'Related Article Left',
      name: 'relatedArticleLeft',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'article' }],
        },
      ],
    },
    {
      title: 'Related Article Right',
      name: 'relatedArticleRight',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'article' }],
        },
      ],
    },
  ],
}
