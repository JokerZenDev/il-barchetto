import { TypedObject } from "sanity"

type Page = {
	_id: string
	language?: string
	title: string
	hero: {
		surtitle?: string
		heading: string
		subtitle?: string
		image: {
			alt: string
			imageUrl: string
		}
		size?: "sm" | "lg"
	}
	contentTitle?: string
	contentSubtitle?: string
	blockContent?: TypedObject[]
	content?: {
		contentTitle?: string
		blockContent: TypedObject[]
	}[]
	gallery?: {
		alt: string
		imageUrl: string
	}[]
}

type Menu = {
	_id: string
	title: string
	blockContent: TypedObject[]
}