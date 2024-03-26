"use client"

import { useFormState } from "react-dom"

const initialState = {
	status: 0,
	message: "",
}

export default function Form({
	children,
	className,
	serverAction,
  dict
}: {
	children: React.ReactNode
	className: string
	serverAction: any
  dict: any
}) {
	const [state, formAction] = useFormState(serverAction, initialState)

	return (
		<form className={className} action={formAction}>
			{children}
			{state && state.status !== 0 && (
				<p
					aria-live='polite'
					className={`${
						state.status === 200
							? "bg-green-500/40 border-green-500"
							: "bg-red-500/40 border-red-500"
					} border p-4 text-center`}
				>
					{dict[state.message]}
				</p>
			)}
		</form>
	)
}
