import Rules from "../../../components/Rules";
import { getDictionary } from "../dictionaries";
import { Dict } from "../../../types/dictionary-types";

export default async function PolicyPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict: Dict = await getDictionary(lang);

  return <Rules dict={dict} />;
}
