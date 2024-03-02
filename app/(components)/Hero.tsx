import { Satisfy } from "next/font/google"
import Image from "next/image"

const satisfy = Satisfy({
	subsets: ["latin"],
	weight: "400",
})

export default function Hero({
	surtitle,
	title,
	img,
	subtitle,
	size
}: {
	surtitle?: string
	title: string
	img?: string
	subtitle?: string
	size: "sm" | "lg"
}) {
	return (
		<div
			className={`relative flex m-0 ${size === "lg" ? "h-[90vh]" : "h-[50vh]"} max-h-[1000px] items-center justify-center ${satisfy.className}`}
		>
			{img && (
				<Image
					src={img}
					alt={title}
					fill={true}
					objectFit='cover'
					priority
					className='z-0'
				/>
			)}
			<div className='text-white mx-4 lg:mx-44 w-full flex flex-col gap-1 lg:gap-2 z-[1]'>
				{surtitle && (
					<span className='text-3xl lg:text-4xl font-thin'>
						{surtitle}
					</span>
				)}
				<h1 className='text-5xl lg:text-7xl'>{title}</h1>
				{subtitle && (
					<span className='text-3xl lg:text-4xl'>{subtitle}</span>
				)}
			</div>
		</div>
	)
}
