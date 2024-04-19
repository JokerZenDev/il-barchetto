"use client"

import CookieConsent from "react-cookie-consent"

export default function Cookie({ dictCookie }: { dictCookie: any }) {
	return (
		<CookieConsent
			buttonStyle={{ color: "black", background: "white" }}
			style={{ background: "black", color: "white" }}
			buttonText={dictCookie.buttonText}
			acceptOnScroll={true}
			acceptOnScrollPercentage={50}
		>
			{dictCookie.message}
		</CookieConsent>
	)
}
