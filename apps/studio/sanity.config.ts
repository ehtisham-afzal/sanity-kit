import {defineConfig,} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {documentI18n, pages} from '@tinloof/sanity-studio'
import config from './config'

export default defineConfig({
  projectId: "jn9z9urn",
  dataset: "production",
  title: config.siteName,
  schema: {
    types: schemaTypes,
  },
  plugins: [
    pages({
      previewUrl: {
        previewMode: {
          enable: config.previewUrl + "/api/draft",
        },
      },
      creatablePages: ['page'],
      i18n: config.i18n,
    }),
    documentI18n({ ...config.i18n, schemas : schemaTypes, }),
    structureTool(),
    visionTool({ defaultApiVersion: "2025-05-07" }),
  ],
})
