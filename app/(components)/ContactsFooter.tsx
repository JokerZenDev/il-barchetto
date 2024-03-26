import { MdMail, MdMailOutline, MdMap, MdPhone } from "react-icons/md"

export default function ContactsFooter({ lang }: { lang: string }) {
	return (
		<div className='w-full h-14 bg-black text-xl'>
			<div className='lg:hidden flex fixed w-full h-14 bottom-0 left-0 right-0 z-10 bg-slate-700 items-center'>
				<a
					href='tel:+393470123456'
					className='w-full h-full flex justify-center items-center text-white uppercase'
					target='_blank'
					rel='noreferrer'
				>
					<MdPhone className='w-10 h-10' />
				</a>
				<a
					href={`/${lang}/menu`}
					className='w-full h-full flex justify-center items-center text-white uppercase bg-slate-500'
				>
					Menu
				</a>
				<a
					href='https://www.google.com/maps/dir//Agriturismo+Il+Barchetto,+Via+per+Boleto,+28894+Madonna+del+Sasso+VB/@45.7916827,8.3554081,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47860c2a5d3c32a3:0x6f080a4dc526c6d9!2m2!1d8.357983!2d45.791679!3e0'
					className='w-full h-full flex justify-center items-center text-white uppercase'
					target='_blank'
					rel='noreferrer'
				>
					<MdMap className='w-8 h-8 text-white' />
				</a>
			</div>
		</div>
	)
}
