import styles from "./Home.module.scss";
import CardList from "./components/cardList/CardList";
import { GET } from "./utils/http";
import { useEffect, useState } from "react";

function Home() {
  return (
    <div className={styles.Home}>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
