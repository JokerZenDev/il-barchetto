import { type SchemaTypeDefinition } from 'sanity'
import blockContent from './schemas/blockContent'
import page from './schemas/page'
import hero from './schemas/hero'
import gallery from './schemas/gallery'
import menu from './schemas/menu'
import content from './schemas/content'
import newPage from './schemas/newPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, hero, gallery, blockContent, content, menu],
}
