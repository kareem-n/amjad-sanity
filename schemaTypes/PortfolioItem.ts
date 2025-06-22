// schemas/portfolioItem.ts
export default {
  name: 'portfolioItem',
  title: 'Portfolio Item',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'portfolioCategory' }],
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'url',
      title: 'Project URL',
      type: 'url',
    }
  ]
};
