import { getDictionary } from "@/app/(helpers)/dictionaries"
import Main from "../../(components)/Main"
import Scaffold from "@/app/(components)/Scaffold"

export default async function Page({
	params: { lang },
}: {
	params: { lang: string }
}) {
	const dict = await getDictionary(lang)
	return (
		<Scaffold lang={lang} dictHeader={dict.header} dictFooter={dict.footer}>
			<Main title={dict.bedAndBreakfast.title} img='/images/hero.jpg'>
				<div className='flex flex-col gap-4 text-justify'>
					{dict.bedAndBreakfast.content.map(
						(row: string, key: number) => (
							<p key={key}>{row}</p>
						)
					)}
				</div>
			</Main>
		</Scaffold>
	)
}
