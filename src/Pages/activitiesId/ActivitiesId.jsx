import styles from "./index.module.scss";
import { GET } from "../../utils/http";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ActivitiesId() {
  const { id } = useParams();

  const [activity, setActivity] = useState({});

  const back = () => history.back();

  useEffect(() => {
    GET(id || 0).then((data) => setActivity(data));
  }, []);

  return (
    <div className={styles.ActivitiesId}>
      <div onClick={() => back()} className={styles.backBtn}>
        {"<"}
      </div>
      <div className={styles.leftPage}>
        <img src={activity.image} alt="product's image" />
      </div>
      <div className={styles.rightPage}>
        <div className={styles.info}>
          <h3>{activity.title}</h3>
          <p>{activity.description}</p>
        </div>
      </div>
    </div>
  );
}
