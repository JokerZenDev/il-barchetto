import SanityPage from "@/app/(components)/SanityPage"
import { getDictionary } from "@/app/(helpers)/dictionaries"

export default async function Page({
	params: { lang },
}: {
	params: { lang: string }
}) {
	const dict = await getDictionary(lang)

	const data = {
		_id: "cookie-policy",
		contentTitle: dict.cookiePolicy.title,
		content: dict.cookiePolicy.content,
	}

	return <SanityPage dict={dict} lang={lang} data={data} theme='dark' />
}
