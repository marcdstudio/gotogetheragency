import toPlainText from '../toPlainText'
// import { MdGrade } from 'react-icons/md'

export default {
  title: 'Colophon',
  name: 'colophon',
  type: 'object',
  // icon: MdGrade,
  fields: [
    {
      title: 'Project Name',
      name: 'projectName',
      type: 'string',
    },
    {
      title: 'Body Text',
      name: 'bodyText',
      type: 'blockText',
    },
    {
      title: 'Project Link',
      description: 'Add a link to the project site',
      name: 'link',
      type: 'string',
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
  ],
  preview: {
    select: {
      caption: 'caption',
      media: 'image.image',
    },
    prepare: ({ caption, ...selection }) => ({
      ...selection,
      title: 'Colophon',
      subtitle: caption && caption.content ? toPlainText(caption.content) : '',
    }),
  },
}
