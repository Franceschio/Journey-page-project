import styles from "./index.module.scss";
import Navbar from "../navbar/navbar";
import Footer from "../footer";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className={styles.Layout}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
