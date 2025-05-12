import {defineType, defineField} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export const servicesMainPageType = defineType({
  name: 'servicesMainPageType',
  title: 'Services (Main Page)',
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
      of: [{type: 'reference', to: [{type: 'servicesSubPageType'}]}],
    }),
  ],
})
