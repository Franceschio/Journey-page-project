import styles from "./index.module.scss";

import { useNavigate } from "react-router";

const Card = ({ locationData }) => {
  const Navigate = useNavigate();

  const onProductClick = () => {
    Navigate(`/activities/${locationData.id}`, window.scrollTo(0, 0));
  };
  return (
    <div className={styles.Card}>
      <img src={locationData.image} alt="image" />
      <div onClick={onProductClick} className={styles.overflow}>
        <h3 onClick={onProductClick}>{locationData.title}</h3>
      </div>
    </div>
  );
};

export default Card;
