import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ReactNode } from "react";
import {getDictionary} from "./dictionaries";

interface RootLayoutProps {
  children: ReactNode;
  params: {
    lang: string;
  };
}
export default async function LocaleLayout({
  children, params: { lang },
}: RootLayoutProps) {
  const dict = await getDictionary(lang);
  return (
    <>
      <Header dict={dict}/>
      <main>{children}</main>
      <Footer  dict={dict}/>
    </>
  );
}
