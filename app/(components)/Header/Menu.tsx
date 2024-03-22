"use client"

import Image from "next/image"
import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

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
	return (
		<div className='flex justify-between gap-4 lg:gap-6 w-full'>
			<nav
				className={`${
					isOpen ? "flex text-white" : "hidden"
				} fixed left-0 right-0 top-0 z-10 lg:flex lg:relative`}
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
				</div>
			</nav>
			<div className={`z-10 lg:block ${isOpen ? "block" : "hidden"}`}>
				{children}
			</div>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={`relative z-20 flex items-center text-2xl lg:hidden ${
          isOpen ? "text-white" : ""
        }`}
				name='menu'
			>
				{isOpen ? <FiX className='w-8 h-8' /> : <FiMenu className='w-8 h-8' />}
			</button>
		</div>
	)
}
