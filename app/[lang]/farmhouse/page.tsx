import { client } from "@/sanity/lib/client"
import { getDictionary } from "../../(helpers)/dictionaries"
import { Page } from "../../page"
import SanityPage from "../../(components)/SanityPage"

export default async function Farmhouse({
	params: { lang },
}: {
	params: { lang: string }
}) {
	const homepageData =
		await client.fetch<Page>(`*[_type == "translation.metadata" && slug.current == "farmhouse"][0].translations[_key=="${lang}"][0].value->{
		_id,
		language,
		title,
		"hero": hero{
			surtitle,
			heading,
			subtitle,
			"image": image{
				"alt": alt,
				"imageUrl": asset->url
			}
		},
		contentTitle,
		blockContent,
		"gallery": gallery.images[]{
			"imageUrl": asset->url,
			"alt": alt,
		}
	}`)

	const dict = await getDictionary(lang)

	return <SanityPage dict={dict} lang={lang} data={homepageData} />
}
