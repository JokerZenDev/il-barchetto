import Main from "./Main"
import Slider from "./Slider/Slider"
import MyPortableText from "./MyPortableText"
import Scaffold from "./Scaffold"
import { Page } from "../page"
import { ContentBody } from "./Content"
import Image from "next/image"
import { FaExternalLinkAlt } from "react-icons/fa"

export default function SanityPage({
	dict,
	lang,
	data,
	table,
	footnotes,
	theme = "light",
	img,
	attachmentsAreBeforeContent = false,
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
	attachmentsAreBeforeContent?: boolean
}) {
	return (
		<Scaffold
			lang={lang}
			dictHeader={dict.header}
			dictFooter={dict.footer}
			dictCookie={dict.cookie}
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
				{data.blocksContent &&
					data.blocksContent.map((block, key) => (
						<div
							className='grid grid-cols-1 md:grid-cols-2 gap-8 text-xl items-center relative my-8 lg:my-12'
							key={key}
						>
							<div className='w-full flex flex-col gap-4'>
								{block.title && (
									<span className='text-5xl 2xl:text-7xl'>
										{block.title}
									</span>
								)}
								<MyPortableText value={block.blockContent} />
								{block.buttonText && block.buttonLink && (
									<a
										href={block.buttonLink}
										target='_blank'
										rel='noreferrer'
										className="w-fit px-4 py-2 border-2 border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white transition-colors text-2xl"
									>
										{block.buttonText}
									</a>
								)}
							</div>
							{block.image && (
								<div
									className={`w-full h-[50vh] md:h-[70vh] 2xl:h-[800px] relative -order-1 ${
										key % 2 === 0
											? "md:order-2"
											: "md:-order-1"
									}`}
								>
									<Image
										src={block.image.imageUrl}
										alt={block.image.alt}
										fill
										objectFit='cover'
										className='w-full h-auto'
									/>
								</div>
							)}
						</div>
					))}
				{data.attachments && data.attachments.files.length > 0 && attachmentsAreBeforeContent && (
					<div className='w-full flex flex-col gap-4 text-xl mb-12'>
						<span className='text-5xl 2xl:text-7xl'>{data.attachments.label}</span>
						<div className='flex flex-col gap-4'>
							{data.attachments.files.map((item, key) => (
								<div key={key}>
									<a href={item.file.url} target='_blank' rel='noreferrer' className='flex items-center gap-2'>
										{item.title} <FaExternalLinkAlt className='text-2xl' />
									</a>
								</div>
							))}
						</div>
					</div>
				)}
				{data.menuContent && (
					<div className='w-full flex flex-col gap-4 text-center text-xl lg:text-2xl'>
						{data.menuContent.title && (
							<span className='text-5xl 2xl:text-7xl mb-8'>
								{data.menuContent.title}
							</span>
						)}
						<MyPortableText value={data.menuContent.blockContent} />
					</div>
				)}
				{table && (
					<div className='w-full flex flex-col items-start gap-4 text-xl mb-12'>
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
				{data.attachments && data.attachments.files.length > 0 && !attachmentsAreBeforeContent && (
					<div className='w-full flex flex-col gap-4 text-xl mb-12'>
						<span className='text-5xl 2xl:text-7xl'>{data.attachments.label}</span>
						<div className='flex flex-col gap-4'>
							{data.attachments.files.map((item, key) => (
								<div key={key}>
									<a href={item.file.url} target='_blank' rel='noreferrer' className='flex items-center gap-2'>
										{item.title} <FaExternalLinkAlt className='text-2xl' />
									</a>
								</div>
							))}
						</div>
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
					<span className='text-base font-thin'>{footnotes}</span>
				)}
			</Main>
		</Scaffold>
	)
}
