import React from "react";
import styles from "../../styles/components/itemCard.module.scss";
import createPathToImg from "../../utilits/createPathToImg";
import { EmbroideryItem } from "../../types/types";
import Image from "next/image";

interface ItemCardProps {
  item: EmbroideryItem; // Используем тип для пропсов
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const { id, image, title, price } = item;
  const currents = "$";

  const handleBuyClick = (id: number) => {
    // Логика для кнопки "Купить"
    alert(`Купить вышивку с ID ${id}`);
  };

  const handleViewClick = (id: number) => {
    // Логика для кнопки "Посмотреть"
    alert(`Посмотреть вышивку с ID ${id}`);
  };

  return (
    <div className={styles.card}>
      <Image
        className={styles.cardImage}
        src={createPathToImg(image)}
        alt={title}
        loading="lazy"
        width={300}
        height={150}
      />
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardText}>
          {currents}
          {price}
        </p>
        <div className={styles.buttonGroup}>
          <button
            className={styles.primaryButton}
            // onClick={() => handleBuyClick(id)}
          >
            Купить
          </button>
          <button
            className={styles.secondaryButton}
            // onClick={() => handleViewClick(id)}
          >
            Посмотреть
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
