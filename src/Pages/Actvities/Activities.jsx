import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { GET } from "../../utils/http";
import CardList from "../../components/cardList/CardList";

export default function Activities() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    GET("").then((data) => setLocations(() => data));
  }, []);
  return (
    <div className={styles.Actvities}>
      <CardList locationData={locations} />
    </div>
  );
}
