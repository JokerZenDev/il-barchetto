import 'server-only'
 
const dictionaries: Record<string, () => Promise<any>> = {
  en: () => import('../../dictionaries/en.json').then((module) => module.default),
  it: () => import('../../dictionaries/it.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: string) => dictionaries[locale]()