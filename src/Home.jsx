import styles from "./Home.module.scss";
import CardList from "./components/cardList/CardList";
import { GET } from "./utils/http";
import { useEffect, useState } from "react";

function Home() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    GET().then((data) => setLocations(() => data.data));
  }, []);

  return (
    <div className={styles.Home}>
      <h1>Home</h1>
      <CardList locationData={locations} />
    </div>
  );
}

export default Home;
