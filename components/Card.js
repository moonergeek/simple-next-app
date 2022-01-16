import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/Card.module.css";

const Card = ({ name, phone, email, image, id }) => {
  const { url, alt } = image;
  const router = useRouter();

  return (
    <div className={styles.card}>
      <div className={styles["card-header"]}>
        <img src={url} alt={alt} className={styles["card-img"]} />
      </div>

      <div>
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
        <button
          onClick={() => {
            router.push(`/cats/${id}`);
          }}
          className={styles.btn}
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default Card;
