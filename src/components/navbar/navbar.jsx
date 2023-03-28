import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul>
        <Link className={styles.link} to="/">
          <li>Home</li>
        </Link>
        <Link className={styles.link} to="/about">
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
