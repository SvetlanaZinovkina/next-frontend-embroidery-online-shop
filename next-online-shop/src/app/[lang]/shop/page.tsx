import { useTranslations } from "next-intl";

export default function HomePage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return <h1>куку</h1>;
}
