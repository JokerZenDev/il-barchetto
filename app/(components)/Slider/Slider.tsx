import SliderContainer from "./SliderContainer"
import SliderImage from "./SliderImage"

export default function Slider({
	slides,
}: {
	slides: { image: string; alt: string }[]
}) {
	return (
		<SliderContainer>
			{slides.map((slide, key) => {
				const { image, alt } = slide
				return <SliderImage image={image} alt={alt} key={key} />
			})}
		</SliderContainer>
	)
}
