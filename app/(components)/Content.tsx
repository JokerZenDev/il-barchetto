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
		<div
			className='relative bg-auto bg-repeat bg-opacity-10 px-4 py-12 md:px-6 md:py-14 lg:px-12 lg:py-20'
			style={{
				background:
					'linear-gradient(rgba(255,255,255,.65), rgba(255,255,255,.65)), url("/images/cement.jpg")',
			}}
		>
			<ContentBody title={title} subtitle={subtitle}>
				{children}
			</ContentBody>
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
			{title && (
				<span className='text-4xl w-full text-center'>{title}</span>
			)}
			{subtitle && (
				<span className='text-xl text-amber-900 uppercase w-full text-center'>
					{subtitle}
				</span>
			)}
			{children}
		</div>
	)
}
