import styles from "./index.module.scss";
import { GET } from "../../utils/http";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ActivitiesId() {
  const { id } = useParams();

  const [activity, setActivity] = useState({});

  useEffect(() => {
    GET(id || 0).then((data) => setActivity(data));
  }, []);

  return (
    <div className={styles.ActivitiesId}>
      <img src={activity.image} alt="" />
    </div>
  );
}
