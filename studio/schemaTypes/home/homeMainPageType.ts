import {defineType, defineField} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export const homeMainPageType = defineType({
  name: 'homeMainPageType',
  title: 'Home (Main Page)',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'announcement',
      title: 'Announcement',
      type: 'string',
      description:
        'Displayed at the top of the homepage. Keep it short and clear (max 150 characters).',
      validation: (Rule) => Rule.max(150).warning('Announcement should be 150 characters or fewer'),
    }),
    defineField({
      name: 'announcementStart',
      title: 'Announcement Start Date',
      type: 'datetime',
    }),
    defineField({
      name: 'announcementEnd',
      title: 'Announcement End Date',
      type: 'datetime',
    }),
    defineField({
      name: 'featuredItems',
      title: 'Featured Items (Carousel)',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'aboutSubPageType'},
            {type: 'eventsSubPageType'},
            {type: 'updatesSubPageType'},
            {type: 'servicesSubPageType'},
          ],
        },
      ],
      validation: (Rule) =>
        Rule.min(3)
          .error('Must have at least 3 featured items.')
          .max(7)
          .error('Keep the number of featured items manageable — 7 or less.'),
    }),
  ],
})
