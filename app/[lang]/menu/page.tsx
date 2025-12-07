import { client } from "@/sanity/lib/client"
import { getDictionary } from "../../(helpers)/dictionaries"
import { Menu as MenuType, Page } from "../../page"
import SanityPage from "../../(components)/SanityPage"

export default async function Menu({
	params: { lang },
}: {
	params: { lang: string }
}) {
	const menuData = await client.fetch<MenuType>(
		`*[_type == "menu"][0]{
		_id,
		title,
		blockContent,
		"attachments": attachments{
			"label": label,
			"files": files[]{
				"title": title,
				"file": file{
					"url": asset->url,
					"mimeType": mimeType,
				},
			},
		}
	}`,
		{},
		{
			next: { tags: ["menu"] },
		}
	)

	const dict = await getDictionary(lang)

	const data: Page = {
		_id: "menu",
		title: dict.menu.title,
		hero: {
			heading: "Menu",
			image: {
				alt: "Menu hero",
				imageUrl: "/images/hero.jpg",
			},
			size: "sm",
		},
		menuContent: menuData,
	}

	return (
		<SanityPage
			dict={dict}
			lang={lang}
			data={data}
			footnotes={dict.menu.footnotes}
			attachmentsAreBeforeContent={true}
		/>
	)
}
