import Footer from "../(components)/Footer"
import Main from "../(components)/Main"
import Scaffold from "../(components)/Scaffold"
import { getDictionary } from "../(helpers)/dictionaries"

export default async function Home({
	params: { lang },
}: {
	params: { lang: string }
}) {
	const dict = await getDictionary(lang)

	return (
		<Scaffold lang={lang} dictHeader={dict.header} dictFooter={dict.footer}>
			<Main
				surtitle={dict.homepage.surtitle}
				title={dict.homepage.title}
				img='/images/hero.jpg'
				subtitle={dict.homepage.subtitle}
			>
				<div className='flex flex-col gap-4 text-justify'>
					{dict.homepage.content.map((row: string, key: number) => (
						<p key={key}>{row}</p>
					))}
				</div>
			</Main>
		</Scaffold>
	)
}
