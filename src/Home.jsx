import styles from "./Home.module.scss";
import Hero from "./components/Hero/Hero";
import { useEffect, useState } from "react";

function Home() {
  return (
    <div className={styles.Home}>
      <Hero />
    </div>
  );
}

export default Home;
