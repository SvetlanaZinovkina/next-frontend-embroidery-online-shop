import React from "react";
import { CategoriesProps, Category } from "../../types/types";
import styles from "../../styles/components/ui/Categories.module.scss";

const Categories: React.FC<CategoriesProps> = ({ categories, dict, lang }) => {
  const handleChooseCategory = (category: Category) => {
      return "hello";
    }
    return (
    <aside className={styles.categories}>
      <div className={styles.container}>
        {categories.map((category) => (
          <span key={category.id} onClick={handleChooseCategory(category)}>{category.name}</span>
        ))}
      </div>
    </aside>
  );
};

export default Categories;
