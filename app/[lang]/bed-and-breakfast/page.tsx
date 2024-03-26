import { client } from "@/sanity/lib/client"
import { getDictionary } from "../../(helpers)/dictionaries"
import { Page } from "../../page"
import SanityPage from "../../(components)/SanityPage"

export default async function BedAndBreakfast({
	params: { lang },
}: {
	params: { lang: string }
}) {
	const pageData = await client.fetch<Page>(
		`*[_type == "translation.metadata" && slug.current == "bed-and-breakfast"][0].translations[_key=="${lang}"][0].value->{
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
		contentSubtitle,
		"blocksContent": blocksContent.blocks[]{
			"title": title,
			"blockContent": blockContent,
			"buttonText": buttonText,
			"buttonLink": buttonLink,
			"image": {
				"alt": alt,
				"imageUrl": asset->url
			}
		},
		"gallery": gallery.images[]{
			"imageUrl": asset->url,
			"alt": alt,
		}
	}`,
		{},
		{
			next: { tags: ["page"] },
		}
	)

	const dict = await getDictionary(lang)

	const prices = dict["b&b"]

	return (
		<SanityPage
			dict={dict}
			lang={lang}
			data={pageData}
			table={prices}
		/>
	)
}
