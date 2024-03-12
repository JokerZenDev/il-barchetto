import { MdMail, MdMailOutline, MdMap, MdPhone } from "react-icons/md";

export default function ContactsFooter() {
	return (
		<div className="w-full h-16">
		<div className='lg:hidden flex fixed w-full h-16 bottom-0 left-0 right-0 z-10 bg-slate-700 items-center'>
			<a
				href='tel:+393470123456'
				className='w-full h-full flex justify-center items-center'
				target="_blank"
				rel="noreferrer"
			>
				<MdPhone className='w-8 h-8 text-white' />
			</a>
			<a
				href='mailto:VJG3q@example.com'
				className='w-full h-full flex justify-center items-center bg-slate-500'
				target="_blank"
				rel="noreferrer"
			>
				<MdMailOutline className='w-8 h-8 text-white' />
			</a>
			<a
				href='https://www.google.com/maps/dir//Agriturismo+Il+Barchetto,+Via+per+Boleto,+28894+Madonna+del+Sasso+VB/@45.7916827,8.3554081,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47860c2a5d3c32a3:0x6f080a4dc526c6d9!2m2!1d8.357983!2d45.791679!3e0?entry=ttu'
				className='w-full h-full flex justify-center items-center'
				target="_blank"
				rel="noreferrer"
			>
				<MdMap className='w-8 h-8 text-white' />
			</a>
		</div>
		</div>
	)
}
