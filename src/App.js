import React, { useState } from "react";
import styles from "./style.module.css";
import companiesList from "./data/company_list.json";
import categoriesPerCompany from "./data/category_per_company.json";
import CompanyRow from "./compnonents/CompanyRow";
import Toolbar from "./compnonents/Toolbar";

function App() {
  const [showCateg, setShowCateg] = useState("");

  return (
    <div className={styles.App}>
      <Toolbar />
      {Object.keys(companiesList).map((key) => (
        <CompanyRow
          key={key}
          id={key}
          companyName={companiesList[key].title}
          categories={Object.keys(categoriesPerCompany[key])}
          show={showCateg === key}
          setShowCateg={setShowCateg}
        />
      ))}
    </div>
  );
}

export default App;
