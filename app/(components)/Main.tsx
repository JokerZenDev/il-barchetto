import Content from "./Content"
import Hero from "./Hero"

export default function Main({
	children,
	surtitle,
	title,
	img,
	subtitle,
	size = "lg",
}: {
	children: React.ReactNode
	surtitle?: string
	title: string
	img?: string
	subtitle?: string
	size?: "sm" | "lg"
}) {
	return (
		<main>
			<Hero surtitle={surtitle} title={title} img={img} size={size} />
			<Content title={subtitle}>{children}</Content>
		</main>
	)
}
