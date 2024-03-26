"use client"

import Menu from "./Menu"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Header({
	lang,
	dictHeader,
	theme,
	children,
}: {
	lang: string
	dictHeader: any
	theme: "light" | "dark"
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
			className={`fixed left-0 right-0 top-0 z-20 flex items-center justify-between p-4 lg:p-6 transition-colors duration-300 uppercase font-light text-3xl lg:text-xl ${
				isScrolled || theme === "dark"
					? `bg-white ${isOpen && "text-white"} text-black`
					: "bg-transparent text-white"
			}`}
		>
			<a
				href={`/${lang}`}
				className={`z-10 text-2xl lg:block ${
					isOpen ? "hidden" : "block"
				}`}
				aria-label='homepage'
			>
				<Image
					src='/images/logo.png'
					alt='logo'
					width={150}
					height={100}
					priority
					className={`${
						!(isScrolled || theme === "dark") && "hidden"
					}`}
				/>
				<Image
					src='/images/logo_white.png'
					alt='logo'
					width={150}
					height={100}
					priority
					className={`${
						!(!isScrolled && theme === "light") && "hidden"
					}`}
				/>
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
