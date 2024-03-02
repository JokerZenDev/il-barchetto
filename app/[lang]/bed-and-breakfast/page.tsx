import { getDictionary } from "@/app/(helpers)/dictionaries"
import Main from "@/app/(components)/Main"
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
				<div className='flex flex-col w-full md:max-w-[400px] mx-auto gap-4'>
					{dict.bedAndBreakfast.prices.map(
						(
							row: { room: string; price: number | string },
							key: number
						) => (
							<div
								key={key}
								className={`flex justify-between w-full ${
									key === 0 ? "font-bold" : ""
								}`}
							>
								<span>{row.room}</span>
								<span>
									{row.price}
									{typeof row.price === "number" && "€"}
								</span>
							</div>
						)
					)}
				</div>
				<div className='flex flex-col gap-4 text-justify'>
					{dict.bedAndBreakfast.footer.map(
						(row: string, key: number) => (
							<p key={key}>{row}</p>
						)
					)}
				</div>
			</Main>
		</Scaffold>
	)
}
