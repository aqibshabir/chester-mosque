import {defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons'

export const servicesType = defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})
