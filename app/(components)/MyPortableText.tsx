import { PortableText } from "@portabletext/react";
import { TypedObject } from "sanity";

export default function MyPortableText({ value }: { value: TypedObject[] }) {
	return <PortableText value={value} />
}