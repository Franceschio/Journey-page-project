import styles from "./index.module.scss";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer";
import { Outlet } from "react-router";

export function About() {
  return (
    <div className={styles.About}>
      <Navbar />
      <h1>About</h1>
      <Outlet />
      <Footer />
    </div>
  );
}
