import Main from "./Main"
import Slider from "./Slider/Slider"
import MyPortableText from "./MyPortableText"
import Scaffold from "./Scaffold"
import { Page } from "../page"
import { ContentBody } from "./Content"

export default function SanityPage({
	dict,
	lang,
	data,
	footnotes,
}: {
	dict: { [key: string]: { [key: string]: string | string[] } }
	lang: string
	data: Page
	footnotes?: string
}) {
	return (
		<Scaffold lang={lang} dictHeader={dict.header} dictFooter={dict.footer}>
			<Main
				title={data.hero.heading}
				surtitle={data.hero.surtitle}
				subtitle={data.hero.subtitle}
				img={data.hero.image && data.hero.image.imageUrl}
				contentTitle={data.contentTitle}
				size={data.hero.size || "lg"}
			>
				{data.blockContent && (
					<div className='flex flex-col gap-4 text-justify'>
						<MyPortableText value={data.blockContent} />
					</div>
				)}
				{data.content && (
					<div className='flex flex-col gap-20 text-center'>
						{data.content.map((item, key) => (
							<ContentBody title={item.contentTitle} key={key}>
								<MyPortableText value={item.blockContent} />
							</ContentBody>
						))}
						{}
					</div>
				)}
				{data.gallery && data.gallery.length > 0 && (
					<div className='w-full'>
						<Slider slides={data.gallery} />
					</div>
				)}
				{footnotes && (
					<span className='text-xs font-thin'>{footnotes}</span>
				)}
			</Main>
		</Scaffold>
	)
}
