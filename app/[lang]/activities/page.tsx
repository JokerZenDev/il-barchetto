import Scaffold from "@/app/(components)/Scaffold"
import Main from "../../(components)/Main"
import { getDictionary } from "@/app/(helpers)/dictionaries"

export default async function Page({
	params: { lang },
}: {
	params: { lang: string }
}) {
	const dict = await getDictionary(lang)

	return (
		<Scaffold lang={lang} dictHeader={dict.header} dictFooter={dict.footer}>
			<Main title={dict.activities.title} img='/images/hero.jpg'>
				<div className='flex flex-col gap-4 text-justify'>
					{dict.activities.content.map((row: string, key: number) => (
						<p key={key}>{row}</p>
					))}
				</div>
			</Main>
		</Scaffold>
	)
}
