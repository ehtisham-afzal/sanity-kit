import {definePathname} from '@tinloof/sanity-studio'
import {defineField, defineType} from 'sanity'
import { sections } from './sections'
import config from '../config'

export default defineType({
  type: 'document',
  name: 'page',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
    {
      type: 'image',
      name: 'image',
      options: {
        hotspot: true,
      },
    },
    defineField({
      name: 'sectionsBody',
      title: 'Sections',
      type: 'array',
      of: sections.map((section) => ({
        type: section.name,
      })),
      options: {
        insertMenu: {
          views: [
            {
              name: 'grid',
              previewImageUrl: (type) => `/sections/${type}.png`,
            },
          ],
        },
      },
    }),
    definePathname({
      name: 'pathname',
      options: {
        i18n: {
          enabled: true,
          defaultLocaleId: config.i18n.defaultLocaleId,
        },
      },
    }),
    {
      type: 'string',
      name: 'locale',
      hidden: true,
    },
  ],
})
