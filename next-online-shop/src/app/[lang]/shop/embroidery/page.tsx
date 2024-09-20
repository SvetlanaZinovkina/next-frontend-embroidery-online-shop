import Categories from "../../../../components/ui/Categories";
import Catalog from "../../../../components/Catalog";
import { Dict } from "../../../../types/dictionary-types";
import { getDictionary } from "../../dictionaries";
import axiosClassic from "../../../../api/axios";
import routes from "../../../../routes/routes";
import styles from "../../../../styles/components/Shop.module.scss"
import getEmbroideryData from "../../../../services/getEmbroideryData";
import { EmbroideryItem } from "../../../../types/types";



export default async function CatalogPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict: Dict = await getDictionary(lang);


  try {
    const { data: embroideries } = await axiosClassic.get(routes.getEmbroideriesList(), {
      params: {
        page: 1,
        limit: 20,
        language: lang,
      },
    });

    const { data: categories } = await axiosClassic.get(routes.getCategories(), {
      params: {
        language: lang,
      },
    });
    return (
      <section className={styles.container}>
        <Categories categories={categories} dict={dict} lang={lang} />
        <Catalog embroideries={embroideries} dict={dict} lang={lang}/>
      </section>
    );
  } catch (err) {
    return;
  }
}
