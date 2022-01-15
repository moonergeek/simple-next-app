import React from "react";
import Link from "next/link";
import styles from "../styles/Wellcome.module.css";

const Wellcome = () => {
  return (
    <main className={styles.wellcome}>
      <h1 className={styles.header}>Cat World</h1>

      <p className={styles.text}>Find your next best friend</p>

      <button className={styles.btn}>
        <Link href="/cats" role="button">
          Start Looking
        </Link>
      </button>
    </main>
  );
};

export default Wellcome;
