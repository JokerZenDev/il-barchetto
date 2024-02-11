import Content from "./(components)/Content"
import Footer from "./(components)/Footer"
import Hero from "./(components)/Hero"

export default function Home() {
	return (
		<main className=''>
			<Hero surtitle='Agriturismo' title='Il Barchetto' />
			<Content title='Benvenuti'>
				<div className='flex flex-col gap-4 text-justify'>
					<p>
						<strong>Il Barchetto</strong> si trova a settecento
						metri di altezza sui monti che fanno da cornice al lago
						d’Orta, un’area ricca di storia e natura dalle bellezze
						paesaggistiche incontaminate.
					</p>
					<p>
						Nato dalle ceneri di una stalla ottocentesca, è stato
						recentemente restaurato secondo le antiche tecniche
						architettoniche locali ed ha riacquistato l’antico
						splendore di un tempo.
					</p>
					<p>
						Immerso nel verde dei boschi, vi aspetterà un posto in
						cui si fondono i suoni della natura e degli animali che
						vi abitano, ideale per trascorrere giornate nel relax
						più totale e trovare la pace e la tranquillità giusta
						per riprendere la vita frenetica di tutti i giorni.
					</p>
					<p>
						Un'oasi ideale per allontanarsi dallo stress,
						un’esperienza capace farvi godere di quei suoni, di
						quegli odori e sapori che la città vi ha fatto
						dimenticare, o non vi ha fatto mai conoscere!
					</p>
					<p>
						Se il vostro desiderio è quello di trovarvi in un
						ambiente completamente rustico e accogliente non
						resterete delusi. Tra le mura in granito locale, antiche
						travi in legno recuperate e restaurate maniacalmente da
						ciò che rimaneva della stalla, pavimento in piode e un
						calorosissimo caminetto in pietra potrete scoprire il
						piacere della nostra cucina, improntata sulla genuinità
						dei nostri prodotti agricoli.
					</p>
					<p>
						A tavola riscoprirete gli antichi sapori della cucina di
						un tempo con prodotti tipici del luogo derivati dalla
						nostra produzione, verdure appena raccolte dall'orto e
						carni deliziose allevate con cura ed amore, per
						garantirvi piatti sempre freschi e di prima qualità.
					</p>
				</div>
			</Content>
			<Footer />
		</main>
	)
}
