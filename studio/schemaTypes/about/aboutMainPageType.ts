import {defineType, defineField} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export const aboutMainPageType = defineType({
  name: 'aboutMainPageType',
  title: 'About (Main Page)',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content Blocks',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'subPages',
      title: 'Related Sub Pages',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'aboutSubPageType'}]}],
    }),
  ],
})
