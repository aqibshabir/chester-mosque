import {defineType, defineField} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export const updateMainPageType = defineType({
  name: 'updateMainPageType',
  title: 'Updates (Main Page)',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
    }),
    defineField({
      name: 'introText',
      title: 'Intro Text',
      type: 'text',
    }),
    defineField({
      name: 'subPages',
      title: 'Related Sub Pages',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'updatesSubPageType'}]}],
    }),
  ],
})
