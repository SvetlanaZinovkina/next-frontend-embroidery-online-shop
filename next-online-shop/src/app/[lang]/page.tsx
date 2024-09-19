import HeroSection from "../../components/HeroSection";
import PopularEmbroidery from "../../components/PopularEmbroidery";
import { EmbroideryItem } from "../../types/types";
import axiosClassic from "../../api/axios";
import routes from "../../routes/routes";
import { getDictionary } from "./dictionaries";
import { Dict } from "../../types/dictionary-types";

export default async function HomePage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict: Dict = await getDictionary(lang);
  try {
    const { data } = await axiosClassic.get(routes.getPopularEmbroidery(), {
      params: {
        language: lang,
      },
    });
    const embroideryItems: EmbroideryItem[] = data;

    return (
      <>
        <HeroSection dict={dict} />
        <PopularEmbroidery
          embroideryItems={embroideryItems}
          dict={dict}
          lang={lang}
        />
      </>
    );
  } catch (err) {
    return;
  }
}
