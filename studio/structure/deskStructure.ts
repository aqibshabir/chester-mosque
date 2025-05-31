import {StructureResolver} from 'sanity/structure'
import {
  InfoOutlineIcon,
  CalendarIcon,
  EarthGlobeIcon,
  DocumentTextIcon,
  HomeIcon,
} from '@sanity/icons'

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home')
        .icon(HomeIcon)
        .child(
          S.list()
            .title('Home')
            .items([
              S.listItem()
                .title('Main Page')
                .icon(DocumentTextIcon)
                .child(S.document().schemaType('homeMainPageType').documentId('homeMainPage')),
            ]),
        ),
      S.listItem()
        .title('About')
        .icon(InfoOutlineIcon)
        .child(
          S.list()
            .title('About Pages')
            .items([
              S.listItem()
                .title('Main Page')
                .icon(DocumentTextIcon)
                .child(S.document().schemaType('aboutMainPageType').documentId('aboutMainPage')),
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
              S.listItem()
                .title('Main Page')
                .icon(DocumentTextIcon)
                .child(
                  S.document().schemaType('eventsMainPageType').documentId('eventsMainPageType'),
                ),
              S.documentTypeListItem('eventsSubPageType').title('Sub Pages'),
            ]),
        ),
      S.listItem()
        .title('Services')
        .icon(EarthGlobeIcon)
        .child(
          S.list()
            .title('Services Pages')
            .items([
              S.listItem()
                .title('Main Page')
                .icon(DocumentTextIcon)
                .child(
                  S.document()
                    .schemaType('servicesMainPageType')
                    .documentId('servicesMainPageType'),
                ),
              S.documentTypeListItem('servicesSubPageType').title('Sub Pages'),
            ]),
        ),
    ])
