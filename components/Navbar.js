import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <p className={styles.home}>
          <Link href="/">Home</Link>
        </p>
      </nav>
    </>
  );
};

export default Navbar;
