import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {deskStructure} from './structure/deskStructure'

export default defineConfig({
  name: 'default',
  title: 'Chester Mosque CMS',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,
  plugins: [structureTool({structure: deskStructure})],
  schema: {
    types: schemaTypes,
  },
})
