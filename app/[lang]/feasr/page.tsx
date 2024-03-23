import SanityPage from "@/app/(components)/SanityPage"
import { getDictionary } from "@/app/(helpers)/dictionaries"

export default async function Page({
	params: { lang },
}: {
	params: { lang: string }
}) {
	const dict = await getDictionary(lang)

	const data = {
		_id: "feasr",
		contentTitle: dict.feasr.title,
	}

	return (
		<SanityPage
			dict={dict}
			lang={lang}
			data={data}
			theme='dark'
			img={{
				alt: dict.feasr.title,
				imageUrl: "/images/targa-progetto-feasr.jpg",
			}}
		/>
	)
}
