export default {
	name: 'hero',
	type: 'object',
	title: 'Hero',
	fields: [
		{
			name: 'surtitle',
			type: 'string',
			title: 'Sopratitolo',
		},
		{
			name: 'heading',
			type: 'string',
			title: 'Titolo',
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'subtitle',
			type: 'string',
			title: 'Sottotitolo',
		},
		{
			name: 'image',
			type: 'image',
			title: 'Immagine',
			options: { hotspot: true },
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Testo Alternativo',
				},
			],
		},
	],
}