import styles from "./index.module.scss";
import { GET } from "../../utils/http";
import Card from "../../components/card/Card";
import CardList from "../../components/cardList/CardList";

import { useParams } from "react-router";
import { useEffect, useState } from "react";

const Category = () => {
  const { id } = useParams();

  const [category, setCategory] = useState([]);

  useEffect(() => {
    GET(`category/${id}`).then((data) => setCategory(() => data));
  }, []);

  return (
    <div className={styles.Category}>
      <CardList locationData={category} />
    </div>
  );
};

export default Category;
