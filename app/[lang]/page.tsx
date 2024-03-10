import { client } from "@/sanity/lib/client"
import Main from "../(components)/Main"
import Scaffold from "../(components)/Scaffold"
import Slider from "../(components)/Slider/Slider"
import { getDictionary } from "../(helpers)/dictionaries"
import { TypedObject } from "sanity"
import MyPortableText from "../(components)/MyPortableText"

type Page = {
	_id: string
	language: string
	title: string
	hero: {
		surtitle: string
		heading: string
		subtitle: string
		image: {
			alt: string
			imageUrl: string
		}
	}
	contentTitle: string
	blockContent: TypedObject[]
	gallery: {
		alt: string
		imageUrl: string
	}[]
}

export default async function Home({
	params: { lang },
}: {
	params: { lang: string }
}) {
	const homepageData =
		await client.fetch<Page>(`*[_type == "translation.metadata" && slug.current == "homepage"][0].translations[_key=="${lang}"][0].value->{
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

	return (
		<Scaffold lang={lang} dictHeader={dict.header} dictFooter={dict.footer}>
			<Main
				title={homepageData.hero.heading}
				surtitle={homepageData.hero.surtitle}
				subtitle={homepageData.hero.subtitle}
				img={
					homepageData.hero.image && homepageData.hero.image.imageUrl
				}
				contentTitle={homepageData.contentTitle}
			>
				<div className='flex flex-col gap-4 text-justify'>
					<MyPortableText value={homepageData.blockContent} />
				</div>
				{homepageData.gallery && homepageData.gallery.length > 0 && (
					<div className='w-full'>
						<Slider slides={homepageData.gallery} />
					</div>
				)}
			</Main>
		</Scaffold>
	)
}
