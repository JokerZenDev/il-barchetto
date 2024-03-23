import ContactsFooter from "./ContactsFooter";
import Footer from "./Footer";
import Header from "./Header/Header";
import Locales from "./Header/Locales";

export default function Scaffold({
  lang,
  dictHeader,
  dictFooter,
  theme,
  children,
}: {
  lang: string;
  dictHeader: any;
  dictFooter: any;
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
    </>
  );
}
