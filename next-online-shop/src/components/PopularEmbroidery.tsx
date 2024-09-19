import React from "react";
import styles from "../styles/components/popularItem.module.scss";
import ItemCard from "./ui/ItemCard";
import { PopularEmbroideryProps } from "../types/types";

const PopularItem: React.FC<PopularEmbroideryProps> = ({
  embroideryItems,
  dict,
  lang,
}) => {
  if (embroideryItems.length === 0) {
    return (
      <div className={styles.loading}>No popular embroidery items found.</div>
    );
  }

  return (
    <section className={styles.popularItems}>
      <div className={styles.container}>
        <h2 className={styles.title}>{dict.mainPage.popularEmbroidery}</h2>
        <div className={styles.row}>
          {embroideryItems.map((item) => (
            <ItemCard item={item} key={item.id} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularItem;
