import Content from "./Content"
import Hero from "./Hero"

export default function Main({
	children,
	surtitle,
	title,
	img,
	subtitle,
}: {
	children: React.ReactNode
	surtitle?: string
	title: string
	img: string
	subtitle?: string
}) {
	return (
		<main>
			<Hero surtitle={surtitle} title={title} img={img} />
			<Content title={subtitle}>{children}</Content>
		</main>
	)
}
