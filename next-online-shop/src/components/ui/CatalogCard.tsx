'use client'

import React from "react";
import styles from "../../styles/components/ui/CatalogCard.module.scss";
import createPathToImg from "../../utilits/createPathToImg";
import { EmbroideryItem } from "../../types/types";
import Image from "next/image";

interface ItemCardProps {
  key: number;
  item: EmbroideryItem;
  lang: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ key, item, lang }) => {
  const { id, image, title, price } = item;
  const currents = lang === "en" ? "$" : "₽";

  const handleBuyClick = (id: number) => {
    // Логика для кнопки "Купить"
    console.log(`Купить вышивку с ID ${id}`);
  };

  const handleViewClick = (id: number) => {
    // Логика для кнопки "Посмотреть"
    console.log(`Посмотреть вышивку с ID ${id}`);
  };

  return (
    <div className={styles.card} key={key} onClick={() => handleViewClick(id)}>
      <Image
        className={styles.cardImage}
        src={createPathToImg(image)}
        alt={title}
        loading="lazy"
        width={150}
        height={75}
      />
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardText}>
              {currents}
              {price}
          </p>

          <button
            className={styles.primaryButton}
            onClick={(e) => {
              e.stopPropagation();
              handleBuyClick(id);
            }}
          >
            +
          </button>

      </div>
    </div>
  );
};

export default ItemCard;
