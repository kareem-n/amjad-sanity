
export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Blog Title',
      type: 'string',
    }, 
    {
      name: 'bannerImg',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true
      },
    },
    {
      name: 'content',
      title: 'Blog Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'relatedBlogs',
      title: 'Related Blogs',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'blog' }] }],
    }
  ]
}
