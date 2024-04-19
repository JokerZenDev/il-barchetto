import ContactsFooter from "./ContactsFooter";
import Cookie from "../(components)/Cookie"
import Footer from "./Footer";
import Header from "./Header/Header";
import Locales from "./Header/Locales";

export default function Scaffold({
  lang,
  dictHeader,
  dictFooter,
  dictCookie,
  theme,
  children,
}: {
  lang: string;
  dictHeader: any;
  dictFooter: any;
  dictCookie: any;
  theme: "light" | "dark";
  children: React.ReactNode;
}) {
  return (
    <>
      <Header lang={lang} dictHeader={dictHeader} theme={theme}>
        <Locales lang={lang} />
      </Header>
      {children}
      <Footer lang={lang} dictHeader={dictHeader} dictFooter={dictFooter} />
      <ContactsFooter lang={lang} />
      <Cookie dictCookie={dictCookie} />
    </>
  );
}
