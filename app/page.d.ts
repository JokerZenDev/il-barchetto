import { TypedObject } from "sanity"

type Page = {
	_id: string
	language?: string
	title?: string
	hero?: {
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
	blocksContent?: {
		title: string
		blockContent: TypedObject[],
		image?: {
			alt: string
			imageUrl: string
		},
		buttonText?: string,
		buttonLink?: string
	}[]
	menuContent?: Menu
	content?: {
		contentTitle?: string
		blockContent?: TypedObject[]
		body?: string[]
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