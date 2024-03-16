export default {
	name: 'menu',
	type: 'document',
	title: 'Menu',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Nome Menu',
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'blockContent',
			type: 'blockContent',
			title: 'Contenuto',
			validation: (Rule: any) => Rule.required(),
		},
	],
}