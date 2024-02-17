"use client"

import { useEffect, useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { menuItems } from "../(helpers)/menuItems"

export default function Menu() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div>
			<nav
				className={`${
					isOpen ? "flex" : "hidden"
				} flex-col fixed top-0 left-0 right-0 h-screen justify-center items-center z-10 bg-black lg:h-auto lg:bg-transparent lg:relative lg:flex-row lg:flex gap-6`}
			>
				{menuItems.map((item) => (
					<a
						key={item.name}
						className='hover:underline'
						href={item.href}
						aria-label={item.name}
					>
						{item.name}
					</a>
				))}
			</nav>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className='relative flex items-center text-2xl lg:hidden text-white z-20'
				name="menu"
			>
				{isOpen ? <FiX /> : <FiMenu />}
			</button>
		</div>
	)
}
