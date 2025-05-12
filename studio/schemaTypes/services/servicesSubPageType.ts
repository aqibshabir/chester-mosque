import {defineType, defineField} from 'sanity'
import {DocumentsIcon} from '@sanity/icons'

export const servicesSubPageType = defineType({
  name: 'servicesSubPageType',
  title: 'Services (Sub Page)',
  type: 'document',
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'number',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'URL Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Page Content',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'showInNavbar',
      type: 'boolean',
      title: 'Show in Navbar',
    }),
    defineField({
      name: 'isUpdate',
      type: 'boolean',
      title: 'Is this an Update?',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
