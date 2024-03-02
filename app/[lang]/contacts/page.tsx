import Main from "@/app/(components)/Main";
import Scaffold from "@/app/(components)/Scaffold";
import { getDictionary } from "@/app/(helpers)/dictionaries";

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
        <form className="flex w-full flex-col items-center gap-4">
          <div className="flex w-full flex-col gap-4 lg:flex-row">
            <input
              name="name"
              placeholder={dict.contactUs.form.name}
              className="w-full border p-2"
            />
            <input
              name="lastname"
              placeholder={dict.contactUs.form.lastname}
              className="w-full border p-2"
            />
          </div>
          <div className="flex w-full flex-col gap-4 lg:flex-row">
            <input
              name="email"
              placeholder={dict.contactUs.form.email}
              className="w-full border p-2"
            />
            <input
              name="telephone"
              placeholder={dict.contactUs.form.telephone}
              className="w-full border p-2"
            />
          </div>
          <textarea
            name="message"
            placeholder={dict.contactUs.form.message}
            className="w-full resize-none border p-2"
            rows={10}
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
          <button
            type="submit"
            className="w-full max-w-[300px] border bg-black p-2 text-white"
          >
            {dict.contactUs.form.send}
          </button>
        </form>
      </Main>
    </Scaffold>
  );
}
