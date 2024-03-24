import { Agdasima } from "next/font/google"
import Image from "next/image"

const font = Agdasima({
	subsets: ["latin"],
	weight: "400",
})

export default function Hero({
	surtitle,
	title,
	img,
	subtitle,
	size,
}: {
	surtitle?: string
	title: string
	img?: string
	subtitle?: string
	size: "sm" | "lg"
}) {
	return (
		<div
			className={`relative flex m-0 ${
				size === "lg" ? "h-[100vh]" : "h-[50vh]"
			} items-center justify-center ${font.className}`}
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
			<div className='w-full h-full flex bg-black/40 justify-center items-center z-[1]'>
				<div className='text-white mx-4 lg:mx-44 w-full flex flex-col gap-1 lg:gap-2 z-[1]'>
					<div className='text-5xl lg:text-7xl text-center flex flex-col gap-1 tracking-wide uppercase'>
						<span>{surtitle}</span>
						<span>{title}</span>
						<span>{subtitle}</span>
					</div>
				</div>
			</div>
		</div>
	)
}
