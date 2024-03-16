import Form from "@/app/(components)/Form/Form";
import Main from "@/app/(components)/Main";
import Scaffold from "@/app/(components)/Scaffold";
import SubmitButton from "@/app/(components)/Form/SubmitButton";
import { getDictionary } from "@/app/(helpers)/dictionaries";
import { contactUsHandler } from "@/app/(action)/contactUs";

export default async function Page({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <Scaffold lang={lang} dictHeader={dict.header} dictFooter={dict.footer}>
      <Main
        title={dict.contactUs.title}
        img="/images/madonna-del-sasso-retro.jpg"
        size="sm"
      >
        <Form
          className="flex w-full flex-col items-center gap-4"
          serverAction={contactUsHandler}
        >
          <div className="flex w-full flex-col gap-4 lg:flex-row">
            <input
              name="name"
              placeholder={dict.contactUs.form.name}
              className="w-full border p-2"
              required
            />
            <input
              name="lastname"
              placeholder={dict.contactUs.form.lastname}
              className="w-full border p-2"
              required
            />
          </div>
          <div className="flex w-full flex-col gap-4 lg:flex-row">
            <input
              name="email"
              placeholder={dict.contactUs.form.email}
              className="w-full border p-2"
              required
            />
            <input
              name="telephone"
              placeholder={dict.contactUs.form.telephone}
              className="w-full border p-2"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder={dict.contactUs.form.message}
            className="w-full resize-none border p-2"
            rows={10}
            required
          />
          <label className="flex w-full gap-2">
            <input type="checkbox" className="accent-black" />
            <p className="text-xs">
              {dict.contactUs.form.privacy} |{" "}
              <a href={`/${lang}/privacy`} className="underline">
                PRIVACY POLICY
              </a>
            </p>
          </label>
          <SubmitButton label={dict.contactUs.form.send} />
        </Form>
      </Main>
    </Scaffold>
  );
}
