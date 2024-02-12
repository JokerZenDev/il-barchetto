import { Satisfy } from "next/font/google"

const satisfy = Satisfy({
	subsets: ["latin"],
	weight: "400",
})

export default function Hero({
	surtitle,
	title,
	subtitle,
}: {
	surtitle?: string
	title: string
	subtitle?: string
}) {
	return (
		<div
			className={`flex m-0 h-[90vh] max-h-[1000px] items-center justify-center bg-cover bg-center ${satisfy.className}`}
			style={{ backgroundImage: 'url("/hero.jpg")' }}
		>
			<div className='text-white mx-4 md:mx-44 w-full flex flex-col gap-1 md:gap-2'>
				{surtitle && (
					<span className='text-3xl md:text-4xl font-thin'>{surtitle}</span>
				)}
				<h1 className='text-5xl md:text-7xl'>{title}</h1>
				{subtitle && (
					<span className='text-3xl md:text-4xl'>{subtitle}</span>
				)}
			</div>
		</div>
	)
}
