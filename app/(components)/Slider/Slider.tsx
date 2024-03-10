import SliderContainer from "./SliderContainer"
import SliderImage from "./SliderImage"

export default function Slider({
	slides,
}: {
	slides: { imageUrl: string; alt: string }[]
}) {
	if (slides.length === 1) {
		return <SliderImage image={slides[0].imageUrl} alt={slides[0].alt} />
	}

	return (
		<SliderContainer>
			{slides.map((slide, key) => {
				const { imageUrl, alt } = slide
				return <SliderImage image={imageUrl} alt={alt} key={key} />
			})}
		</SliderContainer>
	)
}
