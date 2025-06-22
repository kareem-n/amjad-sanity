export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
    },
    {
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
    },
    {
      name: 'sideImage',
      title: 'Side Image',
      type: 'image',
    },
    {
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
    },
    {
      name: 'textSections',
      title: 'Text Sections',
      type: 'array',
      of: [{ type: 'text' }],
      description: 'All paragraphs that make up the full description',
    },
  ],
};
