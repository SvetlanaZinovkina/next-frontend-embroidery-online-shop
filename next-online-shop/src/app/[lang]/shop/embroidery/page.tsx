import Categories from "../../../../components/ui/Categories";
import { Dict } from "../../../../types/dictionary-types";
import { getDictionary } from "../../dictionaries";
import axiosClassic from "../../../../api/axios";
import routes from "../../../../routes/routes";

export default async function CatalogPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict: Dict = await getDictionary(lang);
  try {
    const { data } = await axiosClassic.get(routes.getCategories(), {
      params: {
        language: lang,
      },
    });

    return (
      <>
        <Categories categories={data} dict={dict} lang={lang} />
      </>
    );
  } catch (err) {
    return;
  }
}
