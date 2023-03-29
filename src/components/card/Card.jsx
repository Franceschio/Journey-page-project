import styles from "./index.module.scss";

import { useNavigate } from "react-router";

const Card = ({ locationData }) => {
  const Navigate = useNavigate();

  const onProductClick = () => Navigate(`/activities/${locationData.id}`);
  return (
    <div className={styles.Card}>
      <img src={locationData.image} alt="image" />
      <div className={styles.overflow}>
        <h2 onClick={onProductClick}>{locationData.title}</h2>
      </div>
    </div>
  );
};

export default Card;
