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
      name: 'missionStatement',
      title: 'Mission Statement',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'missionItem',
          title: 'Mission Item',
          fields: [
            defineField({name: 'mission', type: 'string', title: 'Mission'}),
            defineField({name: 'description', type: 'text', title: 'Description'}),
          ],
        },
      ],
      validation: (Rule) => Rule.max(1),
    }),

    defineField({
      name: 'values',
      title: 'Our Values',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'valueItem',
          title: 'Value Item',
          fields: [
            defineField({name: 'title', type: 'string', title: 'Title'}),
            defineField({name: 'description', type: 'text', title: 'Description'}),
          ],
        },
      ],
    }),
    defineField({
      name: 'timeline',
      title: 'Timeline',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'timelineItem',
          title: 'Timeline Event',
          fields: [
            defineField({name: 'date', type: 'string', title: 'Date'}),
            defineField({name: 'title', type: 'string', title: 'Event Title'}),
            defineField({name: 'event', type: 'string', title: 'Event Description'}),
          ],
        },
      ],
    }),
    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          title: 'FAQ Item',
          fields: [
            defineField({name: 'question', type: 'string', title: 'Question'}),
            defineField({name: 'answer', type: 'text', title: 'Answer'}),
          ],
        },
      ],
    }),
    defineField({
      name: 'subPages',
      title: 'Featured Sub Pages',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'aboutSubPageType'}]}],
      validation: (Rule) => Rule.max(3),
    }),
  ],
})
