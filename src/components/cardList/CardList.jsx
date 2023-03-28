import styles from "./index.module.scss";
import Card from "../../card/Card";

const CardList = ({ locationData }) => {
  return (
    <div className={styles.CardList}>
      {locationData.map((location) => (
        <Card locationData={location} key={location.city.id} />
      ))}
    </div>
  );
};

export default CardList;
