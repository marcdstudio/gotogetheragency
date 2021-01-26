export default {
  title: 'Video',
  name: 'video',
  type: 'object',
  fields: [
    {
      title: 'Video',
      name: 'video',
      type: 'string',
      description:
        'Copy the video id number in the vimeo url. For example, if the url is https://vimeo.com/470323193, the id number would be 470323193. Video size ratio should be 1.778 e.g. 1920x1080px.',
    },
    {
      title: 'Has Controls?',
      description:
        'Turn this off to hide controls. If off, video will mute, loop, and autoplay.',
      name: 'hasControls',
      type: 'boolean',
    },
  ],
  preview: {
    select: {},
    prepare: () => ({
      title: 'Video',
    }),
  },
}
