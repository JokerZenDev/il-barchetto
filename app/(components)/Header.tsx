"use client"

import { Satisfy } from "next/font/google"
import Menu from "./Menu"
import { useEffect, useState } from "react"

const satisfy = Satisfy({
	subsets: ["latin"],
	weight: "400",
})

export default function Header({
	lang,
	dictHeader,
}: {
	lang: string
	dictHeader: any
}) {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		addEventListener("scroll", (e) => {
			console.log(window.scrollY > 100)
			setIsScrolled(window.scrollY > 100)
		})
	}, [setIsScrolled])

	return (
		<header
			className={`fixed top-0 left-0 right-0 text-white flex justify-between items-center px-4 py-6 z-10 transition-colors duration-300 ${
				isScrolled ? "bg-black" : "bg-transparent"
			}`}
		>
			<a
				href='/'
				className={`${satisfy.className} text-2xl z-20`}
				aria-label='homepage'
			>
				Agriturismo Il Barchetto
			</a>
			<Menu lang={lang} dictHeader={dictHeader} />
		</header>
	)
}
