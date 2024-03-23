import SanityPage from "@/app/(components)/SanityPage"
import { getDictionary } from "@/app/(helpers)/dictionaries"

export default async function Page({
	params: { lang },
}: {
	params: { lang: string }
}) {
	const dict = await getDictionary(lang)
	return (
		<SanityPage
			dict={dict}
			lang={lang}
			data={dict.cookiePolicy}
			theme='dark'
		/>
	)
}
