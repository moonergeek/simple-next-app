import React, { useState, useEffect } from "react";
import Head from "next/head";
import Card from "../../components/Card";
import styles from "../../styles/Cat.module.css";

const Home = () => {
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    const response = await fetch("/api/cats");
    const data = await response.json();

    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div>
      <Head>
        <title>Cats</title>
        <meta name="description" content="Cats" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.cat}>
        {cats.map((cat) => (
          <Card
            key={cat.id}
            name={cat.name}
            id={cat.id}
            phone={cat.phone}
            email={cat.email}
            image={{ url: cat.image.url, alt: cat.image.alt }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
