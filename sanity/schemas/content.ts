export default {
	name: 'content',
	type: 'object',
	title: 'Contenuto',
	fields: [
		{
			name: 'blocks',
			type: 'array',
			title: 'Blocchi',
			of: [
				{
					name: 'image',
					type: 'image',
					title: 'Immagine',
					options: {
						hotspot: true,
					},
					fields: [
						{
							name: 'alt',
							type: 'string',
							title: 'Testo alternativo (se non si carica l\'immagine)',
						},
						{
							name: 'title',
							type: 'string',
							title: 'Titolo',
						},
						{
							name: 'blockContent',
							type: 'blockContent',
							title: 'Testo',
						},
					],
				},
			],
			options: {
				layout: 'grid',
			},
		},
	],
};