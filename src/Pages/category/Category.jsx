import styles from "./index.module.scss";
import { GET } from "../../utils/http";
import Card from "../../components/card/Card";
import CardList from "../../components/cardList/CardList";

import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Category = () => {
  const [searchParams] = useSearchParams();

  const [category, setCategory] = useState([]);

  const back = () => history.back();

  useEffect(() => {
    GET(`category/${searchParams.get("cat")}`).then((data) =>
      setCategory(() => data)
    );
  }, []);

  return (
    <div className={styles.Category}>
      <div onClick={() => back()} className={styles.backBtn}>
        {"<"}
      </div>
      <h1>category: {searchParams.get("cat")}</h1>
      <CardList locationData={category} />
    </div>
  );
};

export default Category;
