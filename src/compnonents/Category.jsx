import React from "react";
import styles from "../style.module.css";

const Category = ({ categoryTitle }) => {
  return <p className={styles.categoryTitle}>{categoryTitle}</p>;
};

export default Category;
