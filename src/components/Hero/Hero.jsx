import styles from "./index.module.scss";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <img src="https://picsum.photos/id/29/1800/1800" alt="hero image" />
      <div className={styles.heroOverflow}>
        <h1>Welcome stranger!</h1>
      </div>
    </div>
  );
};

export default Hero;
