import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'Sanity Project',

  projectId: 'k2pxmhej',
  dataset: 'productions',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
