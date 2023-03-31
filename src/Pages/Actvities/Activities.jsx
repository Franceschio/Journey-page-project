import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { GET } from "../../utils/http";
import CardList from "../../components/cardList/CardList";
import { categories } from "../../utils/categories";
import { useNavigate } from "react-router";

export default function Activities() {
  const Navigate = useNavigate();

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    GET("").then((data) => setLocations(() => data));
  }, []);

  const onHandleClick = (value) => {
    Navigate(`category?cat=${value}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.Actvities}>
      <div className={styles.filters}>
        <h3>Categories</h3>
        <ul>
          {categories.map((category) => (
            <li onClick={() => onHandleClick(category)} key={category}>
              {category}
            </li>
          ))}
        </ul>
      </div>
      <CardList locationData={locations} />
    </div>
  );
}
