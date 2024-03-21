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
	table,
	footnotes,
}: {
	dict: { [key: string]: { [key: string]: string | string[] } }
	lang: string
	data: Page
	table?: {
		header: string[]
		rows: string[][]
		footer: string[]
	}
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
				size={data.hero.size || "sm"}
			>
				{data.blockContent && (
					<div className='flex flex-col gap-4 text-justify'>
						<MyPortableText value={data.blockContent} />
					</div>
				)}
				{table && (
					<div className='w-full flex flex-col items-start gap-4'>
						<table className='w-full max-w-3xl mx-auto'>
							<thead>
								<tr className="border-b">
									<th className="p-2">{table.header[0]}</th>
									<th className="p-2">{table.header[1]}</th>
								</tr>
							</thead>
							<tbody>
								{table.rows.map((item, key) => (
									<tr key={key} className="border-b">
										<td className="p-2">{item[0]}</td>
										<td className="p-2">{item[1]}</td>
									</tr>
								))}
							</tbody>
						</table>
						<ul className="list-disc flex flex-col gap-1 ml-4">
							{table.footer.map((item, key) => (
								<li key={key}>{item}</li>
							))}
						</ul>
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
