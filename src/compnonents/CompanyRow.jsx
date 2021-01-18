import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import styles from "../style.module.css";
import categoriesList from "../data/category_list.json";
import Category from "./Category";

const CompanyRow = ({ companyName, categories, show, setShowCateg, id }) => {
  return (
    <div className={styles.CompanyRow}>
      <div className={styles.CompanyRowFlex}>
        <h3 className={styles.companyName}>{companyName} </h3>
        <IconButton
          onClick={() => (show ? setShowCateg("") : setShowCateg(id))}
        >
          <ExpandMoreIcon
            className={`${styles.arrow} ${show && styles.expanded}`}
          />
        </IconButton>
      </div>
      <div
        className={`${styles.categoriesContainer} ${
          show ? styles.show : styles.hidden
        }`}
      >
        {categories.length > 0 ? (
          categories.map((categ) => (
            <Category key={categ} categoryTitle={categoriesList[categ].title} />
          ))
        ) : (
          <p className={styles.categoryTitle}> No listed categories</p>
        )}
      </div>
    </div>
  );
};

export default CompanyRow;
