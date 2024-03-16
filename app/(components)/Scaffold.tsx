import ContactsFooter from "./ContactsFooter";
import Footer from "./Footer";
import Header from "./Header/Header";
import Locales from "./Header/Locales";

export default function Scaffold({
  lang,
  dictHeader,
  dictFooter,
  children,
}: {
  lang: string;
  dictHeader: any;
  dictFooter: any;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header lang={lang} dictHeader={dictHeader}>
        <Locales />
      </Header>
      {children}
      <Footer lang={lang} dictHeader={dictHeader} dictFooter={dictFooter} />
      <ContactsFooter lang={lang} />
    </>
  );
}
