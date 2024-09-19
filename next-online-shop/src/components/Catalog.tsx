import React from "react";
import { CategoriesProps } from "../../types/types";
import styles from "../../styles/components/ui/Categories.module.scss";
import Categories from "./ui/Categories";

const Catalog: React.FC = () => {
  return (
    <div className={styles.container}>
      <Categories />
    </div>
  );
};

export default Categories;
