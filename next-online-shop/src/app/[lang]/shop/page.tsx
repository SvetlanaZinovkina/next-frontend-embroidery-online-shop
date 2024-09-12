import { useTranslations } from "next-intl";
import {unstable_setRequestLocale} from "next-intl/server";

export default function HomePage({
                                   params: { locale },
                                 }: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("mainPage");
  return <h1>{t("rules5")}</h1>;
}
