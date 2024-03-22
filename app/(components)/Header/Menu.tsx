"use client"

import Image from "next/image"
import { FiMenu, FiX } from "react-icons/fi"
import Socials from "../Socials"
import { useEffect, useState } from "react"

export default function Menu({
	lang,
	dictHeader,
	isOpen,
	setIsOpen,
	children,
}: {
	lang: string
	dictHeader: any
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	children: React.ReactNode
}) {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		if (isOpen) {
			setIsVisible(true)
		}
	}, [isOpen])

	useEffect(() => {
		if (!isVisible) {
			setTimeout(() => setIsOpen(false), 300)
		}
	}, [isVisible])

	return (
		<div className='flex justify-between gap-4 lg:gap-6 w-full'>
			<nav
				className={`${
					isOpen ? "flex text-white" : "hidden"
				} fixed top-0 z-10 lg:flex lg:opacity-100 lg:left-0 lg:right-0 lg:relative ${isVisible ? "left-0 right-0 opacity-100" : "left-[100%] right-[-100%] opacity-5"} transition-all duration-300 lg:transition-none`}
			>
				<Image
					src={"/images/menu.jpeg"}
					alt={"Menu background"}
					fill={true}
					objectFit='cover'
					priority
					className='z-0 lg:hidden'
				/>
				<div className='z-10 h-screen w-full flex-col items-center justify-center gap-2 lg:gap-6 bg-[#181818]/80 flex lg:h-auto lg:flex-row lg:bg-transparent'>
					{Object.keys(dictHeader).map((key: string) => (
						<a
							key={key}
							className='hover:underline whitespace-nowrap'
							href={`/${lang}/${key}`}
							aria-label={dictHeader[key]}
						>
							{dictHeader[key]}
						</a>
					))}
					<div className='mt-6 p-4 flex gap-6 lg:hidden'>
						<Socials dictFooter={dictHeader} moreSpace={true} />
					</div>
					<div className='border-t border-white p-4 text-sm flex flex-col items-center lg:hidden'>
						<span>{dictHeader.contacts}</span>
						<span>Via per Boleto, 28894 Madonna del Sasso (VB)</span>
						<span>T. +39 347 9475771</span>
						<span>alpebarchetto@gmail.com</span>
					</div>
				</div>
			</nav>
			<div className={`z-10 lg:block ${isOpen ? "block" : "hidden"}`}>
				{children}
			</div>
			<button
				onClick={() => isOpen ? setIsVisible(false) : setIsOpen(true)}
				className={`relative z-20 flex items-center text-2xl lg:hidden ${
					isOpen ? "text-white" : ""
				}`}
				name='menu'
			>
				{isOpen ? (
					<FiX className='w-8 h-8' />
				) : (
					<FiMenu className='w-8 h-8' />
				)}
			</button>
		</div>
	)
}
