import { FaTripadvisor } from "react-icons/fa"
import { FiInstagram, FiFacebook } from "react-icons/fi"

const socials = [
	{
		icon: <FaTripadvisor />,
		link: "https://www.tripadvisor.it/Restaurant_Review-g1549861-d4742445-Reviews-Agriturismo_Il_Barchetto-Madonna_del_Sasso_Province_of_Verbano_Cusio_Ossola_Pied.html",
		name: "Tripadvisor",
	},
	{
		icon: <FiInstagram />,
		link: "https://www.instagram.com/agriturismo_il_barchetto/",
		name: "Instagram",
	},
	{
		icon: <FiFacebook />,
		link: "https://www.facebook.com/p/Agriturismo-Barchetto-100054661980015/",
		name: "Facebook",
	},
]

export default function Socials({
	dictFooter,
	moreSpace = false,
	showText = true,
}: {
	dictFooter: any
	moreSpace?: boolean
	showText?: boolean
}) {
	return (
		<div className='flex items-center gap-2'>
			{showText && dictFooter.followUS}
			<ul className={`flex text-xl ${moreSpace ? "gap-6" : "gap-2"}`}>
				{socials.map((social, key) => (
					<li key={key}>
						<a
							href={social.link}
							target='_blank'
							rel='noreferrer'
							aria-label={social.name}
						>
							{social.icon}
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}
