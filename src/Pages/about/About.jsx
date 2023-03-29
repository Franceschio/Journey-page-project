import styles from "./index.module.scss";
import { Outlet } from "react-router";

export function About() {
  return (
    <div className={styles.About}>
      <h1>About</h1>
      <Outlet />
    </div>
  );
}
