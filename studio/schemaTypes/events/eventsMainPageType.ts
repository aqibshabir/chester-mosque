import {defineType, defineField} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export const eventsMainPageType = defineType({
  name: 'eventsMainPageType',
  title: 'Events (Main Page)',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
    }),
    defineField({
      name: 'subPages',
      title: 'Related Sub Pages',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'eventsSubPageType'}]}],
    }),
  ],
})
