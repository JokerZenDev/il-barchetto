import { FaTripadvisor } from "react-icons/fa"
import { FiFacebook, FiInstagram } from "react-icons/fi"
import Image from "next/image"
import Socials from "./Socials"

export default function Footer({
	lang,
	dictFooter,
	dictHeader,
}: {
	lang: string
	dictFooter: any
	dictHeader: any
}) {
	const additionalItems = Object.keys(dictFooter.additionalLinks).map(
		(key: string) => ({
			name: dictFooter.additionalLinks[key],
			href: `/${lang}/${key}`,
		})
	)

	const menuItems = Object.keys(dictHeader).map((key: string) => ({
		name: dictHeader[key],
		href: `/${lang}/${key}`,
	}))

	const footerItems = [...menuItems, ...additionalItems]

	return (
		<footer className='mt-10 w-full bg-black text-white py-10 px-4 lg:px-44 flex flex-col gap-12'>
			<div className='flex flex-col gap-6 lg:grid lg:grid-cols-[1fr_1fr] lg:gap-16'>
				<ul className='grid grid-cols-2 gap-2'>
					{footerItems.map((item, key) => (
						<li key={key}>
							<a
								className='hover:underline text-nowrap'
								href={item.href}
								aria-label={item.name}
							>
								{item.name}
							</a>
						</li>
					))}
				</ul>
				<div className='relative w-full min-h-[200px]'>
					<Image
						src='/images/feasr.jpg'
						alt='FEASR'
						fill={true}
						objectFit='contain'
						objectPosition='center'
					/>
				</div>
			</div>
			<hr />
			<div className='w-full flex justify-between items-center flex-col-reverse gap-6 lg:flex-row'>
				<p className='text-xs'>
					Agriturismo Il Barchetto | &copy; {new Date().getFullYear()}{" "}
					{dictFooter.copyright}
				</p>
				<Socials dictFooter={dictFooter} />
			</div>
		</footer>
	)
}
