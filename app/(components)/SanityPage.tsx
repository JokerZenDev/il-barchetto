import Main from "./Main"
import Slider from "./Slider/Slider"
import MyPortableText from "./MyPortableText"
import Scaffold from "./Scaffold"
import { Page } from "../page"
import { ContentBody } from "./Content"
import Image from "next/image"

export default function SanityPage({
	dict,
	lang,
	data,
	table,
	footnotes,
	theme = "light",
	img,
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
	theme?: "light" | "dark"
	img?: {
		imageUrl: string
		alt: string
	}
}) {
	return (
		<Scaffold
			lang={lang}
			dictHeader={dict.header}
			dictFooter={dict.footer}
			theme={theme}
		>
			<Main
				title={data.hero?.heading}
				surtitle={data.hero?.surtitle}
				subtitle={data.hero?.subtitle}
				img={data.hero?.image && data.hero.image.imageUrl}
				contentTitle={data.contentTitle}
				contentSubtitle={data.contentSubtitle}
				size={data.hero?.size || "lg"}
			>
				{data.blockContent && (
					<div className='flex flex-col my-4 gap-6 text-center text-xl'>
						<MyPortableText value={data.blockContent} />
					</div>
				)}
				{table && (
					<div className='w-full flex flex-col items-start gap-4'>
						<table className='w-full max-w-3xl mx-auto'>
							<thead>
								<tr className='border-b'>
									<th className='p-2'>{table.header[0]}</th>
									<th className='p-2'>{table.header[1]}</th>
								</tr>
							</thead>
							<tbody>
								{table.rows.map((item, key) => (
									<tr key={key} className='border-b'>
										<td className='p-2'>{item[0]}</td>
										<td className='p-2'>{item[1]}</td>
									</tr>
								))}
							</tbody>
						</table>
						<ul className='list-disc flex flex-col gap-1 ml-4'>
							{table.footer.map((item, key) => (
								<li key={key}>{item}</li>
							))}
						</ul>
					</div>
				)}
				{data.content && (
					<div className='flex flex-col text-left gap-4 mt-8'>
						{data.content.map((item, key) => (
							<div key={key}>
								<span className='text-xl'>
									{item.contentTitle}
								</span>
								<div className='flex flex-col gap-2 text-lg'>
									{item.body?.map((item, key) => (
										<span key={key}>{item}</span>
									))}
								</div>
							</div>
						))}
						{}
					</div>
				)}
				{data.gallery && data.gallery.length > 0 && (
					<div className='w-full'>
						<Slider slides={data.gallery} />
					</div>
				)}
				{img && (
					<Image
						src={img.imageUrl}
						alt={img.alt}
						width={1000}
						height={1000}
						className='w-full h-auto mt-6'
					/>
				)}
				{footnotes && (
					<span className='text-xs font-thin'>{footnotes}</span>
				)}
			</Main>
		</Scaffold>
	)
}
