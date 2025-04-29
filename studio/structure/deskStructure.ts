// /structure/deskStructure.ts
import {StructureResolver} from 'sanity/structure'
import {InfoOutlineIcon, CalendarIcon, CogIcon} from '@sanity/icons'

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('About')
        .icon(InfoOutlineIcon)
        .child(
          S.list()
            .title('About Pages')
            .items([
              S.documentTypeListItem('aboutMainPageType').title('Main Page'),
              S.documentTypeListItem('aboutSubPageType').title('Sub Pages'),
            ]),
        ),
      S.listItem()
        .title('Events')
        .icon(CalendarIcon)
        .child(
          S.list()
            .title('Events Pages')
            .items([
              S.documentTypeListItem('eventsMainPageType').title('Main Page'),
              S.documentTypeListItem('eventsSubPageType').title('Sub Pages'),
            ]),
        ),
      S.listItem()
        .title('Services')
        .icon(CogIcon)
        .child(
          S.list()
            .title('Services Pages')
            .items([
              S.documentTypeListItem('servicesMainPageType').title('Main Page'),
              S.documentTypeListItem('servicesSubPageType').title('Sub Pages'),
            ]),
        ),
    ])
