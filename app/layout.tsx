import type { Metadata } from "next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Agdasima } from "next/font/google"
import "./globals.css"

const font = Agdasima({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
	title: "Agriturismo Il Barchetto | Madonna del Sasso (VB)",
	description:
		"Il Barchetto si trova a settecento metri di altezza sui monti che fanno da cornice al lago d'Orta. Immerso nel verde dei boschi, vi aspetterà un posto in cui si fondono i suoni della natura e degli animali che vi abitano, ideale per trascorrere giornate nel relax più totale.",
	keywords: [
		"agriturismo il barchetto",
		"agriturismo lago d'orta",
		"agriturismo lago maggiore",
		"agriturismo verbano cusio ossola",
		"agriturismo vco",
		"agriturismo omegna",
		"agriturismo piemonte",
		"agriturismo",
		"madonna del sasso",
		"omegna",
		"orta",
		"gozzano",
		"ristorante madonna del sasso",
		"ristorante orta",
		"ristorante omegna",
		"ristorante vco",
		"ristorante verbano cusio ossola",
		"bed & breakfast madonna del sasso",
		"bed & breakfast omegna",
		"bed & breakfast orta",
		"bed & breakfast lago d'orta",
		"agriturismo relax",
	],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={font.className}>
				{children}
				<SpeedInsights />
			</body>
		</html>
	)
}
