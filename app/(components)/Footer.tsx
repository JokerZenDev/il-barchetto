import { FaTripadvisor } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { menuItems } from "../(helpers)/menuItems"

const socials = [
	{
		icon: <FaTripadvisor />,
		link: "https://www.tripadvisor.it/Hotel_Review-g187514-d117249-Reviews-Agrituriso_Il_Barchetto-Brescia_Lombardy.html",
	},
	{
		icon: <FiInstagram />,
		link: "https://www.instagram.com/agriturismobarchetto/",
	},
]

const additionalItems = [
	{
		name: "Progetto FEASR",
		href: "/",
	},
	{
		name: "Cookie Policy",
		href: "/",
	},
]

export default function Footer() {
	const footerItems = [...menuItems, ...additionalItems]

	return (
		<footer className='mt-10 w-full bg-black text-white py-10 px-4 lg:px-44 flex flex-col gap-12'>
			<div className="grid grid-cols-[1fr_1fr] gap-16">
				<ul className="flex flex-col gap-2">
					{footerItems.map((item, key) => (
						<li key={key}>
							<a className='hover:underline text-nowrap' href={item.href}>
								{item.name}
							</a>
						</li>
					))}
				</ul>
				<img
					src='/feasr.jpg'
					alt='FEASR'
				/>
			</div>
			<hr />
			<div className='w-full flex justify-between'>
				<p>
					Agriturismo Il Barchetto | &copy; {new Date().getFullYear()}{" "}
					Tutti i diritti riservati.
				</p>
				<div className='flex items-center gap-2'>
					Seguici su:{" "}
					<ul className='flex gap-2 text-xl'>
						{socials.map((social, key) => (
							<li key={key}>
								<a
									href={social.link}
									target='_blank'
									rel='noreferrer'
								>
									{social.icon}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	)
}
