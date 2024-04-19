"use client"

import CookieConsent from "react-cookie-consent"

export default function Cookie({ dictCookie }: { dictCookie: any }) {
	return (
		<CookieConsent
			buttonStyle={{ color: "black", background: "white" }}
			style={{ background: "black", color: "white" }}
			buttonText={dictCookie.buttonText}
		>
			{dictCookie.message}
		</CookieConsent>
	)
}
