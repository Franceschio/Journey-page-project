import styles from "./index.module.scss";

const Card = ({ locationData }) => {
  return (
    <div className={styles.Card}>
      <img src={locationData.cover_image_url} alt="image" />
      <div className={styles.overflow}>
        <h1>
          {locationData.city.name}, {locationData.city.country.name}
        </h1>
      </div>
    </div>
  );
};

export default Card;
