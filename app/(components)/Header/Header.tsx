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
	children,
}: {
	lang: string
	dictHeader: any
	children: React.ReactNode
}) {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		addEventListener("scroll", (e) => {
			setIsScrolled(window.scrollY > 100)
		})
	}, [setIsScrolled])

	return (
		<header
			className={`fixed left-0 right-0 top-0 z-10 flex items-center justify-between px-4 py-6 text-white transition-colors duration-300 ${
				isScrolled ? "bg-black" : "bg-transparent"
			}`}
		>
			<a
				href={`/${lang}`}
				className={`${
					satisfy.className
				} z-10 text-2xl lg:block w-full ${isOpen ? "hidden" : "block"}`}
				aria-label='homepage'
			>
				Agriturismo Il Barchetto
			</a>
			<div
				className={`flex items-center justify-end gap-6 lg:justify-start ${
					isOpen ? "w-full" : "w-auto"
				}`}
			>
				<Menu
					lang={lang}
					dictHeader={dictHeader}
					isOpen={isOpen}
					setIsOpen={setIsOpen}
				>
					{children}
				</Menu>
			</div>
		</header>
	)
}
