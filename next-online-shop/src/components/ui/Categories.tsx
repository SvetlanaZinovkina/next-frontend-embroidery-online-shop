"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoriesProps, Category } from "../../types/types";
import { setActiveCategory } from "../../store/slices/categorySlice";
import styles from "../../styles/components/ui/Categories.module.scss";
import { AppState } from "../../types/store-types";
import cn from 'classnames';

const Categories: React.FC<CategoriesProps> = ({ categories, dict, lang }) => {
  const dispatch = useDispatch();
  const activeCategory = useSelector((state: AppState) => state.categories.activeCategory);
  const [isOpen, setIsOpen] = useState(false);
  const handleChooseCategory = (categoryId: number | null) => {
    dispatch(setActiveCategory(categoryId));
  };

  return (
      <aside className={styles.categories}>
        <button className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
          {dict.catalog.category}
          <span className={cn(styles.arrow, { [styles.open]: isOpen })}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#ffffff"
              className={styles.icon}
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </span>
        </button>
        <div className={cn(styles.container, { [styles.hidden]: !isOpen })}>
          <ul className={styles["category-list"]}>
            {categories.map((category) => (
                <li
                    className={cn(styles["category-item"], {
                      [styles.active]: activeCategory === category.category_id,
                    })}
                    key={category.category_id}
                    onClick={() => handleChooseCategory(category.category_id)}
                >
                  {category.name}
                </li>
            ))}
          </ul>
          <button className={styles.btn} onClick={() => handleChooseCategory(null)}>{dict.catalog.clearCategory}</button>
        </div>
      </aside>
  );
};

export default Categories;
