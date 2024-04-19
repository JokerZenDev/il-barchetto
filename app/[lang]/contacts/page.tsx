import Form from "@/app/(components)/Form/Form"
import Main from "@/app/(components)/Main"
import Scaffold from "@/app/(components)/Scaffold"
import SubmitButton from "@/app/(components)/Form/SubmitButton"
import { getDictionary } from "@/app/(helpers)/dictionaries"
import { contactUsHandler } from "@/app/(action)/contactUs"
import Socials from "@/app/(components)/Socials"

export default async function Page({
	params: { lang },
}: {
	params: { lang: string }
}) {
	const dict = await getDictionary(lang)

	return (
		<Scaffold
			lang={lang}
			dictHeader={dict.header}
			dictFooter={dict.footer}
			dictCookie={dict.cookie}
			theme='light'
		>
			<Main
				title={dict.header.contacts}
				img='/images/madonna-del-sasso-retro.jpg'
				size='sm'
			>
				<div className='flex flex-col gap-12 w-full text-xl'>
					<div className='w-full flex flex-col lg:flex-row gap-12 lg:gap-4'>
						<div className='flex flex-col gap-2 w-full'>
							<span className='text-3xl'>
								{dict.header.contacts}
							</span>
							<span>
								Via per Boleto, 28894 Madonna del Sasso (VB)
							</span>
							<a href='tel:+393479475771'>T. +39 347 9475771</a>
							<a href='mailto:alpebarchetto@gmail.com'>
								alpebarchetto@gmail.com
							</a>
							<Socials
								dictFooter={dict.footer}
								showText={false}
								moreSpace={true}
							/>
						</div>
						<div className="flex flex-col gap-2 w-full">
							<span className='text-3xl'>
								{dict.contactUs.hours.title}
							</span>
							<ul className="flex flex-col gap-2 w-full">
								<li>{dict.contactUs.hours.closed}</li>
								<li>{dict.contactUs.hours.openDays}</li>
								<li>{dict.contactUs.hours.openHours}</li>
							</ul>
						</div>
					</div>
					<Form
						className='flex w-full flex-col items-center gap-4'
						serverAction={contactUsHandler}
						dict={dict.contactUs.message}
					>
						<span className='text-3xl w-full'>
							{dict.contactUs.title}
						</span>
						<div className='flex w-full flex-col gap-4 lg:flex-row'>
							<input
								name='name'
								placeholder={dict.contactUs.form.name}
								className='w-full border p-2'
								required
							/>
							<input
								name='lastname'
								placeholder={dict.contactUs.form.lastname}
								className='w-full border p-2'
								required
							/>
						</div>
						<div className='flex w-full flex-col gap-4 lg:flex-row'>
							<input
								name='email'
								placeholder={dict.contactUs.form.email}
								className='w-full border p-2'
								required
							/>
							<input
								name='telephone'
								placeholder={dict.contactUs.form.telephone}
								className='w-full border p-2'
								required
							/>
						</div>
						<textarea
							name='message'
							placeholder={dict.contactUs.form.message}
							className='w-full resize-none border p-2'
							rows={10}
							required
						/>
						<label className='flex w-full gap-2'>
							<input
								type='checkbox'
								className='accent-black'
								required
							/>
							<p className='text-base'>
								{dict.contactUs.form.privacy} |{" "}
								<a
									href={`/${lang}/cookie-policy`}
									className='underline'
								>
									PRIVACY POLICY
								</a>
							</p>
						</label>
						<SubmitButton label={dict.contactUs.form.send} labelOnPending={dict.contactUs.form.sending} />
					</Form>
				</div>
			</Main>
		</Scaffold>
	)
}
