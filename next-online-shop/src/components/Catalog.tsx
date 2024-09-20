import React from "react";
import styles from "../styles/components/Catalog.module.scss";
import { EmbroideriesProps } from "../types/types";
import ItemCard from "./ui/ItemCard";

const Catalog: React.FC<EmbroideriesProps> = ({ embroideries, dict, lang }) => {
  const { data } = embroideries;

  return (
      <div className={styles.container}>
        {data.map((item) => {
          const image = item.images.length > 0 ? item.images[0].image_path : "";

          return (
                <ItemCard item={{ ...item, image }} lang={lang} />
          );
        })}
      </div>
  );
};

export default Catalog;
