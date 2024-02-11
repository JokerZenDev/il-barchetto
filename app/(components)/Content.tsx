export default function Content({
	children,
	title,
}: {
	children: React.ReactNode
	title: string
}) {
	return (
		<div
			className='z-3 relative mt-[-5rem] bg-white mx-2.5 md:mx-4 p-6 md:p-12 rounded'
			style={{
				boxShadow:
					"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
			}}
		>
			<div className='w-full flex flex-col gap-6'>
				<h2 className='text-3xl font-bold'>{title}</h2>
				{children}
			</div>
		</div>
	)
}
