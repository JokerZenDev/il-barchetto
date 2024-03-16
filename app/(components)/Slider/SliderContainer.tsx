"use client"

import SlickSlider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useRef } from "react"
export default function SliderContainer({
	children,
}: {
	children: React.ReactNode
}) {
	const settings = {
		dots: true,
		infinite: true,
		autoplay: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	}

	return (
		<div className='slider-container relative w-full max-w-[100vh] lg:max-h-[50vh] mx-auto mb-4 text-black'>
			<SlickSlider {...settings}>{children}</SlickSlider>
		</div>
	)
}
