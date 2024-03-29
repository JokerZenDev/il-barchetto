export default {
	name: 'page',
	type: 'document',
	title: 'Page',
	fields: [
		{
			// should match 'languageField' plugin configuration setting, if customized
			name: 'language',
			type: 'string',
			readOnly: true,
			hidden: true,
		},
		{
			name: 'title',
			type: 'string',
			title: 'Nome pagina',
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'hero',
			type: 'hero',
			title: 'Testata',
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'contentTitle',
			type: 'string',
			title: 'Titolo contenuto',
		},
		{
			name: 'contentSubtitle',
			type: 'string',
			title: 'Sottotitolo contenuto',
		},
		{
			name: 'blocksContent',
			type: 'content',
			title: 'Contenuto',
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'gallery',
			type: 'gallery',
			title: 'Galleria',
		},
	],
}