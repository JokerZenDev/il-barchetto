import Image from "next/image";

export default function SliderImage({ image, alt }: { image: string, alt: string }) {
	return (
		<div className='relative shadow-bottom h-[30vh] lg:h-[50vh]'>
			<Image 
				src={image}
				alt={alt}
				fill
				objectFit='cover'
			/>
		</div>
	)
}
