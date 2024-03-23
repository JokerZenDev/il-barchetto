export default function Content({
	children,
	title,
	subtitle,
}: {
	children: React.ReactNode
	title?: string
	subtitle?: string
}) {
	return (
		<div className='relative bg-white p-4 md:p-6 lg:p-12 my-8'>
			<ContentBody title={title} subtitle={subtitle}>{children}</ContentBody>
		</div>
	)
}

export const ContentBody = ({
	title,
	subtitle,
	children,
}: {
	title?: string
	subtitle?: string
	children: React.ReactNode
}) => {
	return (
		<div className='w-full flex flex-col'>
			{title && <span className='text-4xl w-full text-center'>{title}</span>}
			{subtitle && (
				<span className='text-xl text-amber-900 uppercase w-full text-center'>
					{subtitle}
				</span>
			)}
			{children}
		</div>
	)
}
