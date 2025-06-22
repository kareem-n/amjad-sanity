// schemas/portfolioCategory.ts
export default {
  name: 'portfolioCategory',
  title: 'Portfolio Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule:any) => Rule.required(),
    }
  ]
};
