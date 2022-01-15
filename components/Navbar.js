import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <p className={styles.home}>Home</p>
      </nav>
    </>
  );
};

export default Navbar;
