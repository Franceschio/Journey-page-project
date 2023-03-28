import styles from "./Home.module.scss";
import CardList from "./components/cardList/CardList";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer";
import { GET } from "./utils/http";
import { useEffect, useState } from "react";

function Home() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    GET().then((data) => setLocations(() => data.data));
  }, []);

  return (
    <div className={styles.Home}>
      <Navbar />
      <CardList locationData={locations} />
      <Footer />
    </div>
  );
}

export default Home;
