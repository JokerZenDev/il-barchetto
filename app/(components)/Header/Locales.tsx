import { headers } from "next/headers"

export default async function Locales({ lang }: { lang: string }) {
	const headersList = headers()

	const pathname = headersList.get("x-pathname")

	console.log(pathname)

	return (
		<div className='flex items-center gap-4 lg:gap-6'>
			{lang !== "it" && (
				<a href={`/it${pathname}`} className=''>
					IT
				</a>
			)}
			{lang !== "en" && (
				<a href={`/en${pathname}`} className=''>
					EN
				</a>
			)}
		</div>
	)
}
