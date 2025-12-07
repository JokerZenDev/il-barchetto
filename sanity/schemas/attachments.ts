const attachments = {
	name: 'attachments',
	type: 'object',
	title: 'Allegati',
	fields: [
		{
			name: 'label',
			type: 'string',
			title: 'Nome sezione',
		},
		{
			name: 'files',
			type: 'array',
			title: 'File',
			of: [
				{
					name: 'attachment',
					type: 'object',
					title: 'Allegato',
					fields: [
						{
							name: 'title',
							type: 'string',
							title: 'Titolo',
						},
						{
							name: 'file',
							type: 'file',
							title: 'File',
						},
					],
				}
			],
		},
	],
}

export default attachments;