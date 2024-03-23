import Content from "./Content"
import Hero from "./Hero"

export default function Main({
	children,
	surtitle,
	title,
	img,
	subtitle,
	contentTitle,
	contentSubtitle,
	size = "sm",
}: {
	children: React.ReactNode
	surtitle?: string
	title: string
	img?: string
	subtitle?: string
	contentTitle?: string
	contentSubtitle?: string
	size?: "sm" | "lg"
}) {
	return (
		<main>
			<Hero surtitle={surtitle} title={title} subtitle={subtitle} img={img} size={size} />
			<Content title={contentTitle} subtitle={contentSubtitle}>{children}</Content>
		</main>
	)
}
